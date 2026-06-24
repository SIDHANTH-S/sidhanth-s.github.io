'use client';
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { setLenisInstance } from "@/lib/scroll-lock";
import { AboutBrief } from "@/components/AboutBrief";
import WhoIs from "@/components/WhoIs";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";

const GitHubActivity = dynamic(() => import("@/components/GitHubActivity"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience").then(mod => mod.Experience), { loading: () => <div className="h-[800px] w-full animate-pulse bg-white/5 rounded-3xl my-8" /> });
const Skills = dynamic(() => import("@/components/Skills").then(mod => mod.Skills), { loading: () => <div className="h-[600px] w-full animate-pulse bg-white/5 rounded-3xl my-8" /> });
const Credentials = dynamic(() => import("@/components/Credentials").then(mod => mod.Credentials), { loading: () => <div className="h-[800px] w-full animate-pulse bg-white/5 rounded-3xl my-8" /> });
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact), { loading: () => <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-3xl my-8" /> });

import Link from "next/link";
import { VerticalNavDots } from "@/components/VerticalNavDots";
import { MobileNav } from "@/components/MobileNav";

export default function HomeClient() {
  const lowerContentRef = useRef(null);
  const showLowerContent = useInView(lowerContentRef, { once: true, margin: "800px" });

  useEffect(() => {
    // Delay Lenis initialization to not block the main thread during hydration/first paint
    const initLenis = async () => {
      if (window.innerWidth < 1024) return;
      
      const { default: Lenis } = await import("lenis");
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisInstance = lenis;
      setLenisInstance(lenis);

      let animationFrameId = 0;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      // We attach the cleanup directly to the instance so we can clean it up 
      // when the component unmounts even if it unmounts after init
      (lenis as any)._customCleanup = () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
        setLenisInstance(null);
      };
    };

    let timeoutId: NodeJS.Timeout;
    let idleId: number | undefined;
    let lenisInstance: any = null;

    if ('requestIdleCallback' in window) {
      idleId = requestIdleCallback(() => {
        timeoutId = setTimeout(initLenis, 500); // Wait a bit even after idle
      });
    } else {
      timeoutId = setTimeout(initLenis, 1500);
    }

    return () => {
      if (idleId !== undefined) cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
      if (lenisInstance && lenisInstance._customCleanup) {
        lenisInstance._customCleanup();
      }
    };
  }, []);

  return (
    <div className="relative w-full bg-paper font-sans text-ink mx-auto overflow-clip">

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

        <div ref={lowerContentRef}>
          {showLowerContent && (
            <>
              <GitHubActivity />
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
            </>
          )}
        </div>
      </main>
    </div>
  );
}
