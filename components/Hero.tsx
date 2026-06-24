'use client';
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const RotatingText = dynamic(
  () => import("./ui/TextEffects").then(m => m.RotatingText),
  { ssr: false }
);

// Lazy load mockups for better performance
const InfenixMockup = dynamic(() => import("./ui/Mockups").then(mod => mod.InfenixMockup), {
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse" />,
  ssr: false
});

const CodeToolMockup = dynamic(() => import("./ui/Mockups").then(mod => mod.CodeToolMockup), {
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse" />,
  ssr: false
});

const EnergyForecastMockup = dynamic(() => import("./ui/Mockups").then(mod => mod.EnergyForecastMockup), {
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse" />,
  ssr: false
});

export const Hero = () => {
  const { scrollY } = useScroll();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const mockup1Y = useTransform(scrollY, [0, 500], [0, -250]);
  const mockup2Y = useTransform(scrollY, [0, 500], [0, -150]);
  const mockup3Y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section
      id="intro"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-cover bg-center py-12 lg:py-16"
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
        <div
          className="flex flex-col items-start gap-6 max-w-2xl"
        >
          <div className="flex flex-col gap-2">
            {/* Real visible H1 — styled as mono label, readable by crawlers */}
            <h1 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
              Sidhanth S — Software Engineer
            </h1>

            <div className="font-display text-[52px] sm:text-[72px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-black tracking-tighter leading-[0.82] text-ink uppercase" aria-hidden="true">
              From messy
              <br />
              workflows
            </div>

            <p className="font-serif font-normal italic text-[32px] sm:text-[44px] md:text-[50px] lg:text-[60px] xl:text-[72px] text-white/35 leading-[1] tracking-tight mt-1" aria-hidden="true">
              to working software.
            </p>
          </div>

          <div className="text-base md:text-lg text-white/80 leading-relaxed font-sans max-w-lg mt-2">
            <p>
              <strong>Sidhanth S</strong> is a Software Engineer and Full-Stack Developer based in Chennai, India. He builds software products, workflow platforms, developer tools, and modern web applications.
            </p>
          </div>

          <div className="text-base md:text-lg text-white/60 leading-relaxed font-sans max-w-md mt-2 flex items-center gap-1.5 overflow-hidden h-8">
            <span className="shrink-0 text-white/60">Wide stack —</span>
            <RotatingText
              texts={["One builder.", "Real systems.", "Built to ship.", "End to end.", "Deep work."]}
              className="text-white/90 font-medium"
              interval={2000}
            />
          </div>

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
                aria-label="Visit GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/sidhanth-s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Floating Mockup Stack */}
        {isDesktop && (
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
                animate={{ opacity: 0.4, scale: 1, rotateX: 10, rotateY: -15, rotateZ: -5, x: 250, z: -200 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <EnergyForecastMockup />
              </motion.div>

              {/* Middle Mockup */}
              <motion.div
                className="absolute w-[480px] pointer-events-none shadow-2xl"
                style={{ y: mockup2Y, zIndex: 2 }}
                initial={{ opacity: 0, scale: 0.8, rotateX: 5, rotateY: -5, rotateZ: 2, x: 190, z: -100 }}
                animate={{ opacity: 0.7, scale: 1, rotateX: 5, rotateY: -5, rotateZ: 2, x: 190, z: -100 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <CodeToolMockup />
              </motion.div>

              {/* Front Mockup */}
              <motion.div
                className="absolute w-[520px] shadow-2xl"
                style={{ y: mockup1Y, zIndex: 3 }}
                initial={{ opacity: 0, scale: 0.7, rotateX: -5, rotateY: 10, rotateZ: -2, x: 110, z: 0 }}
                animate={{ opacity: 1, scale: 1, rotateX: -5, rotateY: 10, rotateZ: -2, x: 110, z: 0 }}
                transition={{ duration: 1 }}
              >
                <InfenixMockup />
              </motion.div>
            </div>
          </div>
        )}
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted"
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
