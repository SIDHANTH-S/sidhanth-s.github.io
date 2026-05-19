import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { cn } from "../../lib/utils";

const SECTIONS = [
  { id: "intro", label: "01 Intro" },
  { id: "project-one", label: "02 Project One" },
  { id: "project-two", label: "03 Project Two" },
  { id: "project-three", label: "04 Project Three" },
  { id: "project-four", label: "05 Project Four" },
  { id: "project-five", label: "06 Project Five" },
  { id: "experience", label: "07 Experience" },
  { id: "skills", label: "08 Skills" },
  { id: "credentials", label: "09 Credentials" },
  { id: "contact", label: "10 Contact" },
];

export const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -70% 0px" }, // Adjust to trigger when section is in main view
      );

      observer.observe(element);
      return { id, observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 lg:hidden bg-white/10">
        <motion.div
          className="h-full bg-white origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* Desktop Side Ticker */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-1 pointer-events-none text-white w-32">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <div
              key={section.id}
              className={cn(
                "flex items-center gap-3 justify-end transition-all duration-300",
                isActive ? "text-white" : "text-white/20"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[9px] uppercase font-bold tracking-widest transition-all duration-300",
                  isActive ? "opacity-100" : "opacity-0 translate-x-2 hidden"
                )}
              >
                {section.label.substring(3)}
              </span>
              <div
                className={cn(
                  "h-px bg-current transition-all duration-300",
                  isActive ? "w-8" : "w-2"
                )}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
