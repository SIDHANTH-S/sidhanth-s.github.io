'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function VerticalNavDots() {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [showNav, setShowNav] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 400);

      // Find the current section
      const sectionElements = sections.map((sec) => ({
        id: sec.id,
        el: document.getElementById(sec.id),
      }));

      const viewportMiddle = window.innerHeight / 2;
      
      let closestSection = sectionElements[0]?.id;
      let minDistance = Infinity;

      for (const { id, el } of sectionElements) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          closestSection = id;
          break; 
        }
        
        const distance = Math.abs(viewportMiddle - elementMiddle);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: showNav ? 1 : 0,
        x: showNav ? 0 : 20,
        pointerEvents: showNav ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-[100] hidden md:block"
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)}
    >
      <motion.div
        layout
        className="overflow-hidden bg-[#111]/80 backdrop-blur-md border border-white/10 relative"
        style={{
          borderRadius: expanded ? 24 : 22,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {!expanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-11 h-11 flex items-center justify-center cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex flex-col gap-3.5 w-[160px] p-4"
            >
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollTo(section.id);
                      setExpanded(false);
                    }}
                    className="flex items-center gap-3 group w-full text-left"
                  >
                    <div
                      className={cn(
                        "rounded-full transition-all duration-300 shrink-0",
                        isActive 
                          ? "w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                          : "w-2 h-2 bg-white/30 group-hover:bg-white/60"
                      )}
                    />
                    <span 
                      className={cn(
                        "text-[10px] tracking-[0.15em] font-mono uppercase transition-colors whitespace-nowrap",
                        isActive ? "text-white font-bold" : "text-white/50 group-hover:text-white/90"
                      )}
                    >
                      {section.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
