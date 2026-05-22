'use client';
import { motion, useScroll } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50 rounded-r-lg"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
