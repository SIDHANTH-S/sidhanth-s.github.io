import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const ProjectScene = dynamic(() => import("@/components/ui/ProjectScene").then(mod => mod.ProjectScene), { ssr: false });

const InfenixMockup = dynamic(() => import("@/components/ui/Mockups").then(m => m.InfenixMockup), { ssr: false });
const VartalapMockup = dynamic(() => import("@/components/ui/Mockups").then(m => m.VartalapMockup), { ssr: false });
const CampusVidhyaMockup = dynamic(() => import("@/components/ui/Mockups").then(m => m.CampusVidhyaMockup), { ssr: false });
const CodeToolMockup = dynamic(() => import("@/components/ui/Mockups").then(m => m.CodeToolMockup), { ssr: false });
const EnergyForecastMockup = dynamic(() => import("@/components/ui/Mockups").then(m => m.EnergyForecastMockup), { ssr: false });

export default function ProjectsSection() {
  return (
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
      <div className="w-full text-center pb-24 pt-8 bg-paper relative z-20">
          <Link href="/projects" className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors" aria-label="View All Projects">
            View All Projects →
          </Link>
      </div>
    </div>
  );
}
