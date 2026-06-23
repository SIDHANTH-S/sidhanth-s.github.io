'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ style }: { style?: React.CSSProperties }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          style={style}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -1400,
          }}
          transition={{
            duration: 1,
            ease: [0.96, -0.02, 0.38, 1.01],
          }}
        >
          <motion.div
            className="relative flex h-full w-full items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: [0.96, -0.02, 0.38, 1.01],
            }}
          >
            <motion.div
              className="relative flex select-none flex-col items-center justify-center"
              initial={{
                opacity: 0.001,
                y: 600,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 1.8,
                ease: [0.8, 0.2, 0.2, 0.8],
              }}
            >
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(3rem, 15vw, 12rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  opacity: 0.85,
                  fontWeight: 900,
                  lineHeight: 1,
                  display: "inline-block",
                  userSelect: "none",
                  color: "#D9D9D9",
                  textShadow:
                    "0 0 1px rgba(0,0,0,0.3), 0 0 1px rgba(0,0,0,0.3)",
                }}
              >
                PORTFOLIO
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-kaushan), cursive',
                  fontSize: "clamp(3.5rem, 12vw, 10rem)",
                  color: "#2563eb",
                  position: "absolute",
                  top: "52%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(-4deg)",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  userSelect: "none",
                }}
              >
                Sidhanth
              </span>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
