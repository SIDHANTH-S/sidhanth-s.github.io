'use client';
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/Hero";
import { ProjectScene } from "@/components/ui/ProjectScene";
import GitHubActivity from "@/components/GitHubActivity";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";
import { setLenisInstance } from "@/lib/scroll-lock";
import Preloader from "@/components/ui/Preloader";
import { AboutBrief } from "@/components/AboutBrief";
import WhoIs from "@/components/WhoIs";
import {
  InfenixMockup,
  VartalapMockup,
  CampusVidhyaMockup,
  CodeToolMockup,
  EnergyForecastMockup,
} from "@/components/ui/Mockups";

export default function HomeClient() {
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderActive(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Trigger hero animations shortly after preloader hides
  useEffect(() => {
    if (!isPreloaderActive) {
      const timer = setTimeout(() => {
        setHeroReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isPreloaderActive]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="relative w-full bg-paper font-sans text-ink mx-auto overflow-clip">
      <div
        className={`fixed inset-0 z-[9999] pointer-events-none ${
          isPreloaderActive ? "" : "!hidden"
        }`}
      >
        <Preloader
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: isPreloaderActive ? "auto" : "none",
          }}
        />
      </div>

      <ScrollProgress />

      <main>
        <Hero ready={heroReady} />

        <AboutBrief />
        <WhoIs />

        <div id="projects" className="relative z-20 bg-paper">
          <ProjectScene
            id="campusvidhya"
            alignIndex="02"
            title={<>Campus<br />Vidhya</>}
            summary="Most campuses still depend on WhatsApp groups, paper forms, and scattered communication. CampusVidhya replaces that with one connected system for approvals, announcements, academic workflows, and every role from student to admin."
            techStack={["React", "Tailwind CSS", "Role-Based Access", "Workflow Automation", "Campus SaaS"]}
            impact="Leading a digital workflow platform for R.M.D. Engineering College, connecting students, faculty, staff, and administration through one operational system."
            layout="right"
            mockup={<CampusVidhyaMockup />}
            transparentMockup
          />

          <ProjectScene
            id="infenix"
            alignIndex="03"
            title="Infenix"
            summary="Generic AI chatbots do everything poorly. Infenix does fewer things — learning, writing, summarization, domain guidance — and does them with purpose-built assistant flows."
            techStack={["React", "AI APIs", "Prompt Workflows", "Tailwind CSS", "Assistant UX"]}
            impact="A real product interface, not a wrapper. Each mode is designed around how people actually use AI for focused work."
            layout="left"
            mockup={<InfenixMockup />}
          />

          <ProjectScene
            id="vartalap"
            alignIndex="04"
            title="VartalapAI"
            summary="Indian MSMEs lose hours daily to manual invoicing, GST paperwork, and gut-feel procurement. VartalaapAI digitizes all of it — invoice scanning, compliance workflows, inventory forecasting — in one workspace."
            techStack={["OCR", "NLP", "Forecasting", "AI Insights", "Business Workflows"]}
            impact="Built for businesses that can't afford enterprise software but shouldn't have to work like it's 2005."
            layout="right"
            mockup={<VartalapMockup />}
          />

          <ProjectScene
            id="codelens"
            alignIndex="05"
            title="CodeLens AI"
            summary="Dropped into an unfamiliar codebase? CodeLens maps the entire repository — architecture, domains, files, functions, dependencies — so you understand structure before you touch a single line."
            techStack={["React", "TypeScript", "AST Parsing", "Graph View", "AI Analysis"]}
            impact="Ongoing — building a structure-first code intelligence tool to reduce onboarding time on large and unfamiliar codebases."
            layout="left"
            mockup={<CodeToolMockup />}
          />

          <ProjectScene
            id="energy"
            alignIndex="06"
            title={<>Energy<br />Forecast</>}
            summary="A time-series ML dashboard for electricity demand — tracks price movement, seasonal load patterns, and anomalies, then forecasts future behavior with production-level accuracy."
            techStack={["Python", "Prophet", "Flask", "React", "Time Series"]}
            impact="98%+ forecasting accuracy. Built during Infosys Springboard AI/ML internship — not a tutorial project."
            layout="right"
            mockup={<EnergyForecastMockup />}
          />
        </div>
        <GitHubActivity />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}
