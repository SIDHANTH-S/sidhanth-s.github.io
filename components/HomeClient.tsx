'use client';
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";
import { setLenisInstance } from "@/lib/scroll-lock";
import { AboutBrief } from "@/components/AboutBrief";
import WhoIs from "@/components/WhoIs";
import { useInView } from "motion/react";
import { useRef } from "react";

const GitHubActivity = dynamic(() => import("@/components/GitHubActivity"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: true });
import Link from "next/link";
import { VerticalNavDots } from "@/components/VerticalNavDots";
import { MobileNav } from "@/components/MobileNav";

export default function HomeClient() {
  const githubRef = useRef(null);
  const showGithub = useInView(githubRef, { once: true, margin: "200px" });

  useEffect(() => {
    // Delay Lenis initialization to not block the main thread during hydration/first paint
    const initLenis = () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      setLenisInstance(lenis);

      let animationFrameId = 0;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
        setLenisInstance(null);
      };
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(initLenis);
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(initLenis, 1);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <div className="relative w-full bg-paper font-sans text-ink mx-auto overflow-clip">

      <ScrollProgress />
      <VerticalNavDots />
      <MobileNav />

      <main>
        <Hero />

        <AboutBrief />
        <div className="w-full text-center pb-24 bg-paper relative z-20">
           <Link href="/about" className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors" aria-label="View About Page">
              View About Page →
           </Link>
        </div>

        <WhoIs />

        <ProjectsSection />
        
        <div ref={githubRef}>
          {showGithub && <GitHubActivity />}
        </div>
        <Experience />
        <div className="w-full text-center pb-24 bg-paper relative z-20">
             <Link href="/experience" className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors" aria-label="View Experience Details">
                View Experience Details →
             </Link>
        </div>
        <Skills />
        <Credentials />
        <div className="w-full text-center pb-24 bg-paper relative z-20">
             <Link href="/certifications" className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors" aria-label="View Certifications">
                View Certifications →
             </Link>
        </div>
        <Contact />
      </main>
    </div>
  );
}
