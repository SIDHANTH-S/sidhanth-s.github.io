'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const EXPERIENCES = [
  {
    role: "Project Lead / Full-Stack Developer",
    org: "CampusVidhya",
    duration: "Present",
    desc: "Leading the development of a campus-wide digital workflow platform for academic communication and role-based operations.",
    points: [
      "Building unified flows for announcements, approvals, and academic workflows.",
      "Designing role-based dashboards for students, faculty, and administrators.",
      "Creating request pipeline systems with approval states and status tracking.",
      "Transforming fragmented campus processes into a structured digital system.",
    ],
  },
  {
    role: "Hackathon Project / AI Platform Build",
    org: "InfiniAI — Intelligent Chat AI",
    duration: "2025",
    desc: "Built a domain-specific AI chat platform for the Perplexity Hackathon with custom persona routing and intent-based response handling.",
    points: [
      "Architected the platform using React and FastAPI with 90%+ intent accuracy.",
      "Integrated Perplexity Sonar API for domain-aware responses.",
      "Tested with 20+ users and achieved 80%+ engagement rates.",
    ],
  },
  {
    role: "AI/ML Intern",
    org: "Infosys Springboard Internship 5.0",
    duration: "Feb 2025 - Apr 2025",
    desc: "Built an electricity demand and price forecasting system using historical market data and time-series models.",
    points: [
      "Trained Prophet models achieving 98%+ forecasting accuracy.",
      "Built a React + Chart.js dashboard for seasonal forecast visualization.",
      "Deployed ML predictions through a Flask REST API.",
    ],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["0%", "100%"],
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full py-24 md:py-32 bg-paper relative border-t border-white/10"
    >
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12 md:mb-20">
          <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink mb-6">
            EXPERIENCE
          </h2>
          <p className="text-white/70 font-sans text-lg max-w-2xl">
            Practical work across AI/ML, full-stack development, dashboards,
            APIs, and data-driven systems.
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white md:-translate-x-1/2 origin-top"
            style={{ height: lineProgress }}
          />

          <div className="space-y-24">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-31px] md:left-1/2 w-4 h-4 rounded-full bg-paper border-4 border-white/20 md:-translate-x-1/2 group-hover:border-white transition-colors z-10 mt-1 md:mt-0" />

                {/* Visual Connector Line (Mobile only usually, but handled by absolute dot positioning) */}

                <div
                  className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    {exp.duration}
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-widest text-white/70 mb-4 mt-1">
                    {exp.org}
                  </div>
                </div>

                <div
                  className={`w-full md:w-[45%] mt-4 md:mt-0 ${i % 2 === 0 ? "md:order-2 md:pl-12" : "md:text-left md:pr-12"}`}
                >
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <div className="w-1 h-1 rounded-full bg-white/20 shrink-0 mt-2" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
