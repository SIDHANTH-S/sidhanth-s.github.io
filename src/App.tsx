import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Hero } from "./components/Hero";
import { ProjectScene } from "./components/ui/ProjectScene";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import {
  InfenixMockup,
  VartalapMockup,
  CampusVidhyaMockup,
  CodeToolMockup,
  EnergyForecastMockup,
} from "./components/ui/Mockups";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Increased for smoother, more weighted feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 1.5,
      lerp: 0.12, // Slightly higher for more responsive but anchored feel
    });

    let animationFrameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-paper font-sans text-ink mx-auto overflow-clip">
      <ScrollProgress />

      <main>
        <Hero />

        <div id="projects" className="relative z-20 bg-paper">
  <ProjectScene
  id="project-one"
  alignIndex="02"
  title={<>Campus<br />Vidhya</>}
  summary="Most campuses still depend on WhatsApp groups, paper forms, and scattered communication. CampusVidhya replaces that with one connected system for approvals, announcements, academic workflows, and every role from student to admin."
  techStack={["React", "Tailwind CSS", "Role-Based Access", "Workflow Automation", "Campus SaaS"]}
  impact="Leading a digital workflow platform for R.M.D. Engineering College, connecting students, faculty, staff, and administration through one operational system."
  layout="right"
  mockup={<CampusVidhyaMockup />}
/>

  <ProjectScene
  id="project-two"
  alignIndex="03"
  title="Infenix"
  summary="Generic AI chatbots do everything poorly. Infenix does fewer things — learning, writing, summarization, domain guidance — and does them with purpose-built assistant flows."
  techStack={["React", "AI APIs", "Prompt Workflows", "Tailwind CSS", "Assistant UX"]}
  impact="A real product interface, not a wrapper. Each mode is designed around how people actually use AI for focused work."
  layout="left"
  mockup={<InfenixMockup />}
/>

<ProjectScene
  id="project-three"
  alignIndex="04"
  title="VartalapAI"
  summary="Indian MSMEs lose hours daily to manual invoicing, GST paperwork, and gut-feel procurement. VartalaapAI digitizes all of it — invoice scanning, compliance workflows, inventory forecasting — in one workspace."
  techStack={["OCR", "NLP", "Forecasting", "AI Insights", "Business Workflows"]}
  impact="Built for businesses that can't afford enterprise software but shouldn't have to work like it's 2005."
  layout="right"
  mockup={<VartalapMockup />}
/>

<ProjectScene
  id="project-four"
  alignIndex="05"
  title="CodeLens AI"
  summary="Dropped into an unfamiliar codebase? CodeLens maps the entire repository — architecture, domains, files, functions, dependencies — so you understand structure before you touch a single line."
  techStack={["React", "TypeScript", "AST Parsing", "Graph View", "AI Analysis"]}
  impact="Ongoing — building a structure-first code intelligence tool to reduce onboarding time on large and unfamiliar codebases."
  layout="left"
  mockup={<CodeToolMockup />}
/>

<ProjectScene
  id="project-five"
  alignIndex="06"
  title={<>Energy<br />Forecast</>}
  summary="A time-series ML dashboard for electricity demand — tracks price movement, seasonal load patterns, and anomalies, then forecasts future behavior with production-level accuracy."
  techStack={["Python", "Prophet", "Flask", "React", "Time Series"]}
  impact="98%+ forecasting accuracy. Built during Infosys Springboard AI/ML internship — not a tutorial project."
  layout="right"
  mockup={<EnergyForecastMockup />}
/>
</div>

        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
