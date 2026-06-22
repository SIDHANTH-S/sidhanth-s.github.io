import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateCollectionPageSchema } from "@/lib/schema";
import { ProjectScene } from "@/components/ui/ProjectScene";
import {
  CampusVidhyaMockup,
  InfenixMockup,
  VartalapMockup,
  CodeToolMockup,
  EnergyForecastMockup,
} from "@/components/ui/Mockups";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Projects | Sidhanth S",
  description: "A collection of scalable software systems, AI-powered applications, and workflow automation tools.",
  url: "https://sidhanth-s.github.io/projects",
});

export default function ProjectsIndex() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://sidhanth-s.github.io" },
    { name: "Projects", item: "https://sidhanth-s.github.io/projects" },
  ]);

  const collectionSchema = generateCollectionPageSchema({
    name: "Projects by Sidhanth S",
    description: "A collection of scalable software systems, AI-powered applications, and workflow automation tools.",
    url: "https://sidhanth-s.github.io/projects",
  });

  return (
    <div className="bg-paper min-h-screen text-ink pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-32 mb-16">
        <h1 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] uppercase mb-6">
          Projects
        </h1>
        <p className="text-white/70 font-sans text-lg max-w-2xl">
          Systems and applications built for scale, automation, and real operational pressure.
        </p>
      </div>

      <div className="relative z-20 bg-paper">
        <Link href="/projects/campusvidhya" className="block group">
          <ProjectScene
            id="campusvidhya"
            alignIndex="01"
            title={<>Campus<br />Vidhya</>}
            summary="Most campuses still depend on WhatsApp groups, paper forms, and scattered communication. CampusVidhya replaces that with one connected system for approvals, announcements, academic workflows, and every role from student to admin."
            techStack={["React", "Tailwind CSS", "Role-Based Access", "Workflow Automation", "Campus SaaS"]}
            impact="Leading a digital workflow platform for R.M.D. Engineering College, connecting students, faculty, staff, and administration through one operational system."
            layout="right"
            mockup={<CampusVidhyaMockup />}
            transparentMockup
          />
          <div className="w-full text-center pb-20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full">
              View Full Project →
            </span>
          </div>
        </Link>

        <Link href="/projects/infenix" className="block group">
          <ProjectScene
            id="infenix"
            alignIndex="02"
            title="Infenix"
            summary="Generic AI chatbots do everything poorly. Infenix does fewer things — learning, writing, summarization, domain guidance — and does them with purpose-built assistant flows."
            techStack={["React", "AI APIs", "Prompt Workflows", "Tailwind CSS", "Assistant UX"]}
            impact="A real product interface, not a wrapper. Each mode is designed around how people actually use AI for focused work."
            layout="left"
            mockup={<InfenixMockup />}
          />
          <div className="w-full text-center pb-20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full">
              View Full Project →
            </span>
          </div>
        </Link>

        <Link href="/projects/vartalapai" className="block group">
          <ProjectScene
            id="vartalap"
            alignIndex="03"
            title="VartalapAI"
            summary="Indian MSMEs lose hours daily to manual invoicing, GST paperwork, and gut-feel procurement. VartalaapAI digitizes all of it — invoice scanning, compliance workflows, inventory forecasting — in one workspace."
            techStack={["OCR", "NLP", "Forecasting", "AI Insights", "Business Workflows"]}
            impact="Built for businesses that can't afford enterprise software but shouldn't have to work like it's 2005."
            layout="right"
            mockup={<VartalapMockup />}
          />
          <div className="w-full text-center pb-20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full">
              View Full Project →
            </span>
          </div>
        </Link>

        <Link href="/projects/codelens-ai" className="block group">
          <ProjectScene
            id="codelens"
            alignIndex="04"
            title="CodeLens AI"
            summary="Dropped into an unfamiliar codebase? CodeLens maps the entire repository — architecture, domains, files, functions, dependencies — so you understand structure before you touch a single line."
            techStack={["React", "TypeScript", "AST Parsing", "Graph View", "AI Analysis"]}
            impact="Ongoing — building a structure-first code intelligence tool to reduce onboarding time on large and unfamiliar codebases."
            layout="left"
            mockup={<CodeToolMockup />}
          />
          <div className="w-full text-center pb-20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full">
              View Full Project →
            </span>
          </div>
        </Link>

        <Link href="/projects/energy-forecast" className="block group">
          <ProjectScene
            id="energy"
            alignIndex="05"
            title={<>Energy<br />Forecast</>}
            summary="A time-series ML dashboard for electricity demand — tracks price movement, seasonal load patterns, and anomalies, then forecasts future behavior with production-level accuracy."
            techStack={["Python", "Prophet", "Flask", "React", "Time Series"]}
            impact="98%+ forecasting accuracy. Built during Infosys Springboard AI/ML internship — not a tutorial project."
            layout="right"
            mockup={<EnergyForecastMockup />}
          />
          <div className="w-full text-center pb-20 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 rounded-full">
              View Full Project →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
