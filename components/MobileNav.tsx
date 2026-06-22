'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Floating Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-5 z-[100] w-12 h-12 rounded-full bg-[#111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors shadow-2xl"
        aria-label="Open navigation menu"
      >
        <Menu size={20} />
      </button>

      {/* Slide-over Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[120] w-[280px] bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                  Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                {sections.map((section, idx) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => scrollTo(section.id)}
                    className="w-full text-left px-4 py-4 rounded-lg hover:bg-white/5 transition-colors group flex items-center gap-4"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    <span className="font-mono text-sm tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
                      {section.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
