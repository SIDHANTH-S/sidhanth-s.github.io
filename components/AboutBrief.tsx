'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

/*
  RESPONSIVE STRATEGY
  ─────────────────────────────────────────────────
  Desktop (≥ 768px):
    Cinematic sticky scroll panel — unchanged.
    RAF loop maps scroll position to a float activeIndex.
    Each block fades/scales based on distance from active.

  Mobile (< 768px):
    Static stacked layout. No sticky, no RAF.
    Simple whileInView reveals — scannable, clear,
    readable immediately. Same copy, same gradient.
    Mobile users scan; desktop users experience.
  ─────────────────────────────────────────────────
*/

const SCROLL_PER_ITEM = 520;

const BLOCKS: {
  problem: string;
  statementParts: [string, string, string];
  detail: string;
}[] = [
  {
    problem: 'We need a full product built, not just a frontend.',
    statementParts: ['Full-stack systems built to survive ', 'production', '.'],
    detail:
      'Production-grade web architecture and backend systems designed for real users, operational scale, and the problems that only appear after launch.',
  },
  {
    problem: "We want AI in our product but don't know where to start.",
    statementParts: ['AI ', 'embedded', ' in workflows, not bolted on.'],
    detail:
      'AI systems integrated directly into operational workflows — retrieval pipelines, intelligent automation, and context-aware tooling that changes how the work actually gets done.',
  },
  {
    problem: 'Our operations are manual, slow, and breaking as we scale.',
    statementParts: ['Manual operations converted into ', 'digital', ' systems.'],
    detail:
      'The operational overhead that compounds silently until it breaks — restructured into systems with clear ownership, access control, and zero manual coordination.',
  },
  {
    problem:
      'Our engineers spend half their time on things that should be automated.',
    statementParts: [
      'Internal ',
      'tooling',
      ' that eliminates the work nobody wants to do.',
    ],
    detail:
      "The internal infrastructure nobody prioritizes until it's urgent — built with the same rigor as customer-facing systems, because engineering leverage compounds too.",
  },
];

const GRADIENT: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(90deg, rgba(144, 0, 255, 0.92), rgba(255, 85, 136, 0.82))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'saturate(0.92) brightness(1.02)',
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Mobile: clean stacked blocks ────────────────────── */
function MobileBlocks() {
  return (
    <div>
      {BLOCKS.map((block, i) => {
        const [before, highlight, after] = block.statementParts;
        const base = i * 0.06;
        return (
          <div key={i} className="border-b border-white/5 py-10">
            {/* Problem */}
            <motion.p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.6)',
                fontStyle: 'italic',
                marginBottom: 16,
                lineHeight: 1.6,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: base, ease: EASE }}
            >
              &ldquo;{block.problem}&rdquo;
            </motion.p>

            {/* Statement */}
            <motion.p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 26,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 16,
              }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: base + 0.08, ease: EASE }}
            >
              {before}
              <span style={GRADIENT}>{highlight}</span>
              {after}
            </motion.p>

            {/* Detail */}
            <motion.p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: base + 0.14, ease: EASE }}
            >
              {block.detail}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

/* ── Desktop: sticky scroll panel ───────────────────── */
function ScrollPanel() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [vh, setVh] = useState(800);
  const [activeIdx, setActiveIdx] = useState(0);
  const [itemPositions, setItemPositions] = useState<
    { top: number; height: number }[]
  >([]);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = innerRef.current;
      if (!el) return;
      const positions = Array.from(el.children).map((c) => ({
        top: (c as HTMLElement).offsetTop,
        height: (c as HTMLElement).offsetHeight,
      }));
      setItemPositions(positions);
    };
    measure();
    const obs = new ResizeObserver(measure);
    if (innerRef.current) obs.observe(innerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const tick = () => {
      const outer = outerRef.current;
      if (outer) {
        const scrolled = -outer.getBoundingClientRect().top;
        const fraction = Math.max(
          0,
          Math.min(BLOCKS.length - 1, scrolled / SCROLL_PER_ITEM)
        );
        setActiveIdx(fraction);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  let centerOffset = vh / 2;
  if (itemPositions.length === BLOCKS.length && BLOCKS.length > 0) {
    const floor = Math.min(Math.floor(activeIdx), BLOCKS.length - 1);
    const ceil = Math.min(floor + 1, BLOCKS.length - 1);
    const frac = activeIdx - floor;
    const floorPos = itemPositions[floor];
    const ceilPos = itemPositions[ceil];
    const activeTop = floorPos.top + (ceilPos.top - floorPos.top) * frac;
    const activeH =
      floorPos.height + (ceilPos.height - floorPos.height) * frac;
    centerOffset = vh / 2 - activeTop - activeH / 2;
  }

  const outerHeight = vh + (BLOCKS.length - 1) * SCROLL_PER_ITEM;

  return (
    <div ref={outerRef} style={{ height: outerHeight, position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: vh,
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div
          ref={innerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            width: '100%',
            transform: `translateY(${centerOffset}px)`,
            willChange: 'transform',
            transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {BLOCKS.map((block, i) => {
            const dist = Math.abs(i - activeIdx);
            const opacity = Math.max(0.18, 1 - dist * 0.45);
            const scale = Math.max(0.985, 1 - dist * 0.01);
            const accent = Math.max(0, 1 - dist * 1.8);
            const [before, highlight, after] = block.statementParts;

            return (
              <div
                key={i}
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  willChange: 'transform, opacity',
                  transition: 'opacity 0.28s ease, transform 0.28s ease',
                  padding: '72px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {/* Problem */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: `rgba(255,255,255,${0.6 * accent + 0.6 * (1 - accent)})`,
                    fontStyle: 'italic',
                    marginBottom: 20,
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;{block.problem}&rdquo;
                </p>

                {/* Statement */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(26px, 4vw, 46px)',
                    color: '#fff',
                    lineHeight: 'clamp(1.1, 2.5vw + 0.6, 1.04)',
                    letterSpacing: '-0.025em',
                    marginBottom: 24,
                  }}
                >
                  {before}
                  <span style={GRADIENT}>{highlight}</span>
                  {after}
                </p>

                {/* Detail */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    color: `rgba(255,255,255,${0.85 * accent + 0.25 * (1 - accent)})`,
                    lineHeight: 1.75,
                    maxWidth: '64ch',
                  }}
                >
                  {block.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────── */
export const AboutBrief = () => {
  /*
    isMobile starts false (SSR-safe — default to desktop).
    Since this section is below the fold, hydration
    completes long before the user scrolls here.
    The correct layout is shown before it's ever visible.
  */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="about"
      aria-label="Sidhanth S — engineering capabilities and systems thinking"
      className="w-full bg-paper"
    >
      {isMobile ? (
        /* ── MOBILE LAYOUT ───────────────────────────── */
        <div className="w-full max-w-6xl mx-auto px-6 pt-20 pb-20">
          {/* Label */}
          <motion.p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 40,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Capabilities
          </motion.p>

          {/* Intro */}
          <motion.p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              marginBottom: 40,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          >
            The work spans full-stack architecture, AI integration, workflow
            infrastructure, and developer tooling — not as separate services,
            but as a single way of thinking about how software should work
            inside an organization. Based in Chennai. Building seriously.
          </motion.p>

          {/* Static stacked blocks */}
          <MobileBlocks />

          {/* Closing */}
          <motion.p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.6)',
              fontStyle: 'italic',
              marginTop: 48,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            Software built for real operational pressure.
          </motion.p>
        </div>
      ) : (
        /* ── DESKTOP LAYOUT ──────────────────────────── */
        <>
          <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-32">
            {/* Label */}
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EASE }}
            >
              Capabilities
            </motion.p>

            {/* Intro */}
            <motion.p
              className="text-white/70 font-sans text-base leading-relaxed max-w-2xl mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            >
              The work spans full-stack architecture, AI integration, workflow
              infrastructure, and developer tooling — not as separate services,
              but as a single way of thinking about how software should work
              inside an organization. Based in Chennai. Building seriously.
            </motion.p>
          </div>

          {/* Sticky scroll panel */}
          <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
            <ScrollPanel />
          </div>

          {/* Closing */}
          <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pb-32">
            <motion.p
              className="font-sans text-white/60 text-sm font-normal italic mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              Software built for real operational pressure.
            </motion.p>
          </div>
        </>
      )}
    </section>
  );
};
