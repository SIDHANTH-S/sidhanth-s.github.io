import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { ArrowRight, Github, ExternalLink, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { CaseStudyContent } from "../CaseStudyContent";
import { lockScroll, unlockScroll } from "../../lib/scroll-lock";

interface ProjectSceneProps {
  id: string;
  title: string | React.ReactNode;
  summary: string;
  techStack: string[];
  impact: string;
  layout: "left" | "right";
  mockup: React.ReactNode;
  alignIndex: string;
  transparentMockup?: boolean;
}

interface CardRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

const BUTTER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION = 1.1;
const SPRING_TRANSITION = {
  type: "spring",
  mass: 0.8,
  stiffness: 100,
  damping: 15,
};

export const ProjectScene = ({
  id,
  title,
  summary,
  techStack,
  impact,
  layout,
  mockup,
  alignIndex,
  transparentMockup,
}: ProjectSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [originRect, setOriginRect] = useState<CardRect | null>(null);
  const [targetRect, setTargetRect] = useState<CardRect | null>(null);

  const isInView = useInView(containerRef, {
    margin: "100% 0px 100% 0px",
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

const smoothProgress = useSpring(scrollYProgress, {
  mass: 0.2,
  stiffness: 90,
  damping: 26,
  restDelta: 0.001,
});

  const textY = useTransform(smoothProgress, [0.05, 0.45], [100, 0]);
  const textOpacity = useTransform(
    smoothProgress,
    [0.05, 0.45, 0.75, 1],
    [0, 1, 1, 0],
  );
  const mockupScale = useTransform(smoothProgress, [0.05, 0.45], [0.8, 1]);
  const mockupY = useTransform(smoothProgress, [0.05, 0.45], [100, 0]);
  const mockupOpacity = useTransform(
    smoothProgress,
    [0.05, 0.45, 0.75, 1],
    [0, 1, 1, 0],
  );

  const handleOpen = useCallback(() => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const padding = 20;
    
    setOriginRect({
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height,
    });
    setTargetRect({
      top: padding,
      left: padding,
      width: window.innerWidth - padding * 2,
      height: window.innerHeight - padding * 2,
    });
    setIsOpen(true);
    lockScroll();
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <section id={id} ref={containerRef} className="relative w-full h-[150vh]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden will-change-transform">
        <div className="absolute bottom-12 right-12 opacity-[0.03] pointer-events-none select-none z-0">
          <span className="font-display text-[12vw] font-black tracking-tighter leading-none uppercase">
            PORTFOLIO
          </span>
        </div>

        {isInView && (
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            <motion.div
              style={{ y: textY, opacity: originRect ? 0 : textOpacity }}
              transition={{ duration: 0.4 }}
              className={cn(
                "flex flex-col gap-6 col-span-1 lg:col-span-4",
                layout === "right" ? "lg:order-1" : "lg:order-2",
              )}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {alignIndex}
                </span>
                <div className="h-px w-12 bg-white/20" />
              </div>

              <h2 className="font-display text-5xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-white uppercase">
                {title}
              </h2>

              <p className="text-white/70 font-sans leading-relaxed text-sm lg:text-base">
                {summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-transparent text-white/70 px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-[#1A1A1A] border border-white/10 p-4 rounded-lg mt-2 border-l-2 border-l-white">
                <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
                  Key Impact
                </span>
                <span className="font-bold text-xl tracking-tight text-white/90">
                  {impact}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={handleOpen}
                  className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/90 transition-colors flex items-center gap-2 group"
                >
                  Case Study{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{
                y: mockupY,
                scale: mockupScale,
                opacity: originRect ? 0 : mockupOpacity,
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                "col-span-1 lg:col-span-8 z-20 relative",
                layout === "right" ? "lg:order-2" : "lg:order-1",
              )}
            >
              <div
                ref={cardRef}
                className="w-full relative cursor-pointer"
                style={{
                  transform: `perspective(3000px) rotateY(${layout === "right" ? -5 : 5}deg) rotateX(2deg)`,
                }}
                onClick={handleOpen}
              >
                {mockup}
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <AnimatePresence
        onExitComplete={() => {
          setOriginRect(null);
          setTargetRect(null);
          unlockScroll();
        }}
      >
        {isOpen && originRect && targetRect && (
          <FlipOverlay
            key={id}
            projectId={id}
            originRect={originRect}
            targetRect={targetRect}
            mockup={mockup}
            transparentMockup={transparentMockup}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

interface FlipOverlayProps {
  key?: React.Key;
  projectId: string;
  originRect: CardRect;
  targetRect: CardRect;
  mockup: React.ReactNode;
  transparentMockup?: boolean;
  onClose: () => void;
}

const FlipOverlay = ({
  projectId,
  originRect,
  targetRect,
  mockup,
  transparentMockup,
  onClose,
}: FlipOverlayProps) => {
  React.useEffect(() => {
    // Hide the external right navigation when case study opens
    const nav = document.querySelector('.fixed.right-8.top-1\\/2') as HTMLElement | null;
    if (nav) {
      const originalDisplay = nav.style.display;
      nav.style.display = 'none';
      return () => {
        nav.style.display = originalDisplay;
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      {/* Scrim */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-auto cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.88 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={onClose}
      />

      {/* Outer shell — handles position + size animation */}
      <motion.div
        className="absolute pointer-events-auto"
        initial={{
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
        }}
        animate={{
          top: targetRect.top,
          left: targetRect.left,
          width: targetRect.width,
          height: targetRect.height,
        }}
        exit={{
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
        }}
        transition={SPRING_TRANSITION}
        style={{ perspective: 1800 }}
      >
        {/*
          Inner rotator — flips in sync with the zoom.
          Uses the same duration + easing so both motions land together.
        */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 180 }}
          exit={{ rotateY: 0 }}
          transition={SPRING_TRANSITION}
        >
          {/* Front face — mockup. Clamped strictly to the animating container bounds */}
          <motion.div
            className={cn(
              "absolute inset-0 overflow-hidden",
              !transparentMockup && "bg-[#161616] border border-white/20",
            )}
            initial={{ borderRadius: 16 }} // matches rounded-2xl (16px) of WindowFrame
            animate={{ borderRadius: 32 }}
            exit={{ borderRadius: 16 }}
            transition={SPRING_TRANSITION}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* 
              By nesting mockup inside an absolute inset-0 wrapper with w-full h-full, 
              we force WindowFrame to stretch to the parent's dynamic height during the flip, 
              erasing the gap at the bottom while keeping the header pinned to the top.
            */}
            <div
              className={cn(
                "w-full h-full",
                !transparentMockup &&
                  "[&>div]:!h-full [&>div]:!aspect-auto [&>div]:!rounded-none [&>div]:!border-none",
              )}
            >
              {mockup}
            </div>
          </motion.div>

          {/* Back face — case study */}
          <motion.div
            className="absolute inset-0 bg-[#050505] overflow-hidden border border-white/20"
            initial={{ borderRadius: 16 }}
            animate={{ borderRadius: 32 }}
            exit={{ borderRadius: 16 }}
            transition={SPRING_TRANSITION}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div 
              className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar" 
              style={{ pointerEvents: "auto", WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
              data-lenis-prevent="true"
            >
              <CaseStudyContent projectId={projectId} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
