import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "../../lib/utils";

interface ProjectSceneProps {
  id: string;
  title: string | React.ReactNode;
  summary: string;
  techStack: string[];
  impact: string;
  layout: "left" | "right";
  mockup: React.ReactNode;
  alignIndex: string;
}

export const ProjectScene = ({
  id,
  title,
  summary,
  techStack,
  impact,
  layout,
  mockup,
  alignIndex,
}: ProjectSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Only render and animate when section is near viewport
  const isInView = useInView(containerRef, { margin: "20% 0px 20% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for scroll-based animations
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.8, 1],
    [0, 1, 1, 0],
  );

  const mockupScale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const mockupY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const mockupOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full h-[150vh]" // Added extra height for scroll space
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden will-change-transform">
        {/* Large faint background number */}
        <div className="absolute bottom-12 right-12 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
          <span className="font-display text-[12vw] font-black tracking-tighter leading-none uppercase">
            PORTFOLIO
          </span>
        </div>

        {isInView && (
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Text Content */}
            <motion.div
              style={{ y: textY, opacity: textOpacity }}
              className={cn(
                "flex flex-col gap-6 col-span-1 lg:col-span-4",
                layout === "right" ? "lg:order-1" : "lg:order-2",
              )}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {alignIndex}
                </span>
                <div className="h-px w-12 bg-white/20" />
              </div>

              <h2 className="font-display text-5xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-ink uppercase">
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

              <div className="bg-[#1A1A1A] border border-white/10 p-4 rounded-lg shadow-sm mt-2 border-l-2 border-l-white">
                <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
                  Key Impact
                </span>
                <span className="font-bold text-xl tracking-tight text-white/90">
                  {impact}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/90 transition-colors flex items-center gap-2">
                  Case Study <ArrowRight size={14} />
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

            {/* Mockup Showcase */}
            <motion.div
              style={{ y: mockupY, scale: mockupScale, opacity: mockupOpacity }}
              className={cn(
                "col-span-1 lg:col-span-8 perspective-[1000px]",
                layout === "right" ? "lg:order-2" : "lg:order-1",
              )}
            >
              <div
                className={cn(
                  "will-change-transform",
                  layout === "right" ? "lg:origin-left" : "lg:origin-right",
                )}
                style={{
                  transform:
                    layout === "right" ? "rotateY(-5deg)" : "rotateY(5deg)",
                }}
              >
                {mockup}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
