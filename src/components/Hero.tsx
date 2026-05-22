import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { InfenixMockup, CodeToolMockup, EnergyForecastMockup } from "./ui/Mockups";
import { RotatingText } from "./ui/TextEffects";

interface HeroProps {
  ready?: boolean;
}

export const Hero = ({ ready = true }: HeroProps) => {
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [0, 500], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const mockup1Y = useTransform(scrollY, [0, 500], [0, -250]);
  const mockup2Y = useTransform(scrollY, [0, 500], [0, -150]);
  const mockup3Y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section
      id="intro"
      className="relative w-full min-h-[100vh] flex flex-col justify-center overflow-hidden bg-cover bg-center pt-20 lg:pt-0"
    >
      <div className="absolute inset-0 bg-paper pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col items-start gap-6 max-w-2xl"
        >
          <div className="flex flex-col gap-2">
  <h1 className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
  Sidhanth S — Software Engineer and AI Systems Builder
</h1>

  <span className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
    SIDHANTH S. — ENGINEERING STUDENT
  </span>

  <div className="font-display text-[80px] md:text-[100px] lg:text-[112px] font-black tracking-tighter leading-[0.82] text-ink uppercase">
    From messy
    <br />
    workflows
  </div>

  <p className="font-serif font-normal italic text-[52px] md:text-[64px] lg:text-[72px] text-white/35 leading-[1] tracking-tight mt-1">
    to working software.
  </p>
</div>

          <p className="text-base md:text-lg text-white/60 leading-relaxed font-sans max-w-md mt-2 flex items-center gap-1.5 overflow-hidden h-8">
            <span className="shrink-0 text-white/60">Wide stack —</span>
            <RotatingText
              texts={["One builder.", "Real systems.", "Built to ship.", "End to end.", "Deep work."]}
              className="text-white/90 font-medium"
              interval={2000}
            />
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all"
            >
              View Projects
            </a>

            <div className="flex items-center gap-3 ml-2 lg:ml-4">
              <a
                href="https://github.com/SIDHANTH-S"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/sidhanth-s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Floating Mockup Stack */}
        <div className="relative h-[600px] hidden lg:block w-full perspective-[1200px]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Back Mockup */}
            <motion.div
              className="absolute w-[450px] pointer-events-none"
              style={{ y: mockup3Y, zIndex: 1 }}
              initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -15, rotateZ: -5, x: 250, z: -200 }}
              animate={
                ready
                  ? { opacity: 0.4, scale: 1, rotateX: 10, rotateY: -15, rotateZ: -5, x: 250, z: -200 }
                  : { opacity: 0, scale: 0.9, rotateX: 10, rotateY: -15, rotateZ: -5, x: 250, z: -200 }
              }
              transition={{ duration: 1, delay: 0.4 }}
            >
              <EnergyForecastMockup />
            </motion.div>

            {/* Middle Mockup */}
            <motion.div
              className="absolute w-[480px] pointer-events-none shadow-2xl"
              style={{ y: mockup2Y, zIndex: 2 }}
              initial={{ opacity: 0, scale: 0.8, rotateX: 5, rotateY: -5, rotateZ: 2, x: 190, z: -100 }}
              animate={
                ready
                  ? { opacity: 0.7, scale: 1, rotateX: 5, rotateY: -5, rotateZ: 2, x: 190, z: -100 }
                  : { opacity: 0, scale: 0.8, rotateX: 5, rotateY: -5, rotateZ: 2, x: 190, z: -100 }
              }
              transition={{ duration: 1, delay: 0.2 }}
            >
              <CodeToolMockup />
            </motion.div>

            {/* Front Mockup */}
            <motion.div
              className="absolute w-[520px] shadow-2xl"
              style={{ y: mockup1Y, zIndex: 3 }}
              initial={{ opacity: 0, scale: 0.7, rotateX: -5, rotateY: 10, rotateZ: -2, x: 110, z: 0 }}
              animate={
                ready
                  ? { opacity: 1, scale: 1, rotateX: -5, rotateY: 10, rotateZ: -2, x: 110, z: 0 }
                  : { opacity: 0, scale: 0.7, rotateX: -5, rotateY: 10, rotateZ: -2, x: 110, z: 0 }
              }
              transition={{ duration: 1 }}
            >
              <InfenixMockup />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        style={{ opacity: headerOpacity }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-muted/50 to-transparent" />
      </motion.div>
    </section>
  );
};