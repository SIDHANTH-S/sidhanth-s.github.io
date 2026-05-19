import { motion } from "motion/react";

export const FlipText = ({ text, className = "" }: { text: string; className?: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: "inline-flex", perspective: 1000 }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block", transformOrigin: "bottom center" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const RollingText = ({ text, className = "" }: { text: string; className?: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: "120%",
      rotateZ: 10,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: "inline-flex", overflow: "hidden" }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block", transformOrigin: "bottom left" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export const RotatingText = ({ texts, className = "", interval = 2500, transitionDuration = 400 }: { texts: string[]; className?: string; interval?: number; transitionDuration?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`inline-grid relative ${className}`}>
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: "100%", filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(4px)" }}
          transition={{ duration: transitionDuration / 1000, ease: "easeInOut" }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
