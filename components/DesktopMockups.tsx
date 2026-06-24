'use client';

import { motion, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import React from "react";

const EnergyForecastMockup = dynamic(() => import("./ui/Mockups").then(mod => mod.EnergyForecastMockup), {
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse" />,
  ssr: false
});

const InfenixMockup = dynamic(() => import("./ui/Mockups").then(mod => mod.InfenixMockup), {
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse" />,
  ssr: false
});

const CodeToolMockup = dynamic(() => import("./ui/Mockups").then(mod => mod.CodeToolMockup), {
  loading: () => <div className="w-full h-full bg-white/5 animate-pulse" />,
  ssr: false
});

export const DesktopMockups = () => {
  const { scrollY } = useScroll();

  const mockup1Y = useTransform(scrollY, [0, 500], [0, -250]);
  const mockup2Y = useTransform(scrollY, [0, 500], [0, -150]);
  const mockup3Y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
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
  );
};

export default DesktopMockups;
