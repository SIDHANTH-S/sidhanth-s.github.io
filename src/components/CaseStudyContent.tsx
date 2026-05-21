import { motion } from "motion/react";

type CaseStudy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string[];
  future: string;
  deepDiveTitle: string;
  deepDive: string[];
  designNote?: string;
  iterationTitle?: string;
  iteration?: string[];
  techStack: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  campusvidhya: {
    eyebrow: "Case Study",
    title: "CampusVidhya",
    subtitle:
      "A role-based academic operations platform for students, faculty, staff, and administrators.",
    intro:
      "CampusVidhya is a campus-wide workflow system designed to bring everyday academic and administrative operations into one structured digital space. Instead of depending on WhatsApp messages, paper forms, verbal follow-ups, and scattered spreadsheets, the platform gives every role inside a college a clear dashboard, defined actions, and visible request status. The goal is to make campus operations easier to track, faster to process, and more transparent for everyone involved.",
    problem:
      "Most colleges still manage important workflows through informal channels. Students raise requests through messages, faculty approvals happen through manual follow-ups, staff updates are scattered, and administrators often lack a real-time view of pending work. This creates delays, missed communication, repeated follow-ups, and confusion about who is responsible for the next step.",
    solution:
      "I designed CampusVidhya as a role-aware workflow platform where students, faculty, staff, and administrators interact through structured digital flows. Students can raise academic or administrative requests, faculty can review and approve them, staff can process operational tasks, and administrators can monitor progress from a centralized dashboard. Each role sees only the information and actions relevant to them, reducing noise and improving accountability.",
    features: [
      "Role-based dashboards for students, faculty, staff, and administrators",
      "Digital request creation, review, approval, and tracking workflows",
      "Centralized announcement and communication system",
      "Status visibility for pending, approved, rejected, and delayed requests",
      "Department-level workflow monitoring for administrators",
      "Structured replacement for paper forms, WhatsApp follow-ups, and spreadsheets",
    ],
    impact: [
      "Reduces dependency on informal communication channels",
      "Improves visibility across academic and administrative workflows",
      "Helps students and staff track request progress without repeated follow-ups",
      "Creates a scalable foundation for digitizing campus operations",
    ],
    future:
      "The next phase would include notification intelligence, timetable and attendance integrations, department-level analytics, automated escalation rules, and AI-generated summaries for administrators to quickly understand bottlenecks.",
    deepDiveTitle: "Designing for a real campus environment",
    deepDive: [
      "The main challenge was understanding that a college is not a single-user system. Students, faculty, staff, and administrators all interact with the same workflow, but each role needs a different level of access, context, and responsibility.",
      "Instead of designing one generic dashboard, the system was structured around role-specific actions. A student needs clarity on what to submit and where the request stands. A faculty member needs review queues. An administrator needs operational visibility and bottleneck detection.",
      "The product direction focuses on converting informal campus processes into structured digital workflows without making the interface feel too corporate or complex. The system should feel familiar enough for daily use but organized enough to support real operations.",
    ],
    designNote:
      "The UI should feel like an academic operations console rather than a simple student app. The design language should be clean, role-aware, dashboard-driven, and trustworthy, with strong emphasis on clarity and status visibility.",
    iterationTitle: "What I would improve next",
    iteration: [
      "Add real-time notifications for approvals, rejections, and delayed requests.",
      "Introduce department-wise analytics for administrators.",
      "Add escalation rules for requests that remain pending beyond a defined time.",
      "Create downloadable reports for pending, completed, and delayed workflows.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },

  energy: {
    eyebrow: "Case Study",
    title: "Energy Forecast Console",
    subtitle:
      "A time-series forecasting dashboard for electricity demand and price prediction.",
    intro:
      "Energy Forecast Console is a forecasting and visualization dashboard built to analyze electricity demand, price movement, seasonal behavior, and peak-load patterns. The project was developed during my AI/ML internship using historical electricity market data, with the goal of turning raw time-series data into clear operational insights for planning and decision-making.",
    problem:
      "Electricity demand is highly dynamic. It changes based on time of day, seasonality, temperature, holidays, consumption behavior, and market conditions. Without reliable forecasting, energy providers may struggle with demand planning, price estimation, resource allocation, and identifying peak-load risk in advance.",
    solution:
      "I built a complete forecasting workflow that combines data preprocessing, exploratory analysis, time-series modeling, backend prediction serving, and frontend visualization. The dashboard presents demand forecasts, price trends, seasonal patterns, model accuracy, and peak-load insights in a format that is easy to interpret.",
    features: [
      "Electricity demand forecasting using historical market data",
      "Price trend visualization and comparison",
      "Daily, weekly, and seasonal demand pattern analysis",
      "Peak-load warning and demand spike indicators",
      "Forecast summary cards for quick decision support",
      "Model output served through a backend API and visualized in a React dashboard",
    ],
    impact: [
      "Achieved 98%+ forecasting accuracy during internship evaluation",
      "Converted raw electricity market data into readable business insights",
      "Helped identify demand peaks, price volatility windows, and seasonal patterns",
      "Demonstrated an end-to-end AI workflow from data analysis to deployed visualization",
    ],
    future:
      "Future improvements include live weather API integration, temperature-based feature engineering, anomaly detection, automated retraining pipelines, and downloadable forecast reports for business users.",
    deepDiveTitle: "Turning raw time-series data into decision support",
    deepDive: [
      "The main challenge was not only training a forecasting model, but making the forecast useful for real users. A prediction becomes valuable only when it clearly shows what is likely to happen and what action it supports.",
      "The dashboard was designed around the most important planning signals: expected demand, price movement, forecast confidence, and peak-load risk. This helps users quickly understand both the prediction and its operational meaning.",
      "The project helped me work across the full AI pipeline: cleaning data, performing EDA, identifying patterns, training forecasting models, serving predictions through a backend, and building a frontend interface for interpretation.",
    ],
    designNote:
      "The interface was designed like an energy control console, where high-priority numbers are visible first and deeper analytical insights are placed below for exploration.",
    iterationTitle: "What I would improve next",
    iteration: [
      "Add live weather and temperature correlation to improve forecast quality.",
      "Introduce anomaly detection for unusual demand or price spikes.",
      "Deploy automated model retraining for updated market data.",
      "Generate PDF or CSV forecast reports for operational teams.",
    ],
    techStack: ["Python", "Prophet", "Flask", "React", "Chart.js", "Pandas"],
  },

  vartalap: {
    eyebrow: "Case Study",
    title: "vartalapAI",
    subtitle:
      "An AI-assisted business intelligence workspace for Indian MSMEs.",
    intro:
      "vartalapAI is a business operations workspace designed for Indian MSMEs that struggle with manual invoicing, GST compliance, procurement decisions, and inventory planning. The platform brings invoice digitization, compliance checks, procurement insights, and forecasting into one AI-assisted dashboard built for small businesses that cannot afford complex enterprise software.",
    problem:
      "Many Indian MSMEs operate with fragmented processes. Invoices are stored on paper or WhatsApp, GST checks are done manually, procurement decisions are based on instinct, and inventory visibility is limited. This leads to wasted time, compliance errors, overstocking, understocking, and poor decision-making.",
    solution:
      "I designed vartalapAI as a unified workspace where business owners can upload invoices, extract data using OCR, validate GST-related information, view procurement insights, and forecast inventory demand. The AI layer helps summarize trends, flag mismatches, and recommend actions so that business owners can make faster decisions without needing a dedicated data team.",
    features: [
      "Invoice digitization using OCR",
      "GST compliance validation workflow",
      "Procurement insight and supplier comparison concept",
      "Inventory demand forecasting for stock planning",
      "AI recommendation panel for business decisions",
      "Analytics dashboard for sales, purchases, and inventory visibility",
    ],
    impact: [
      "Reduces manual effort in invoice handling and GST tracking",
      "Brings forecasting and analytics to businesses without data teams",
      "Helps MSMEs move from scattered records to structured decision-making",
      "Creates a foundation for affordable AI-powered business operations",
    ],
    future:
      "Next steps include multi-user roles for accountants and managers, GST portal integration, supplier comparison, procurement history tracking, mobile-first workflows, and automated business health summaries.",
    deepDiveTitle: "Building for businesses that cannot afford enterprise software",
    deepDive: [
      "The core insight behind vartalapAI is that small businesses do not lack data. Their data already exists in invoices, bills, stock records, and purchase history. The problem is that this data is scattered, manual, and difficult to act on.",
      "The product was designed around real MSME workflows: upload an invoice, extract information, check compliance, understand stock movement, and plan procurement. Each feature maps directly to a daily business task.",
      "The AI layer is not added just for appearance. It is used to reduce cognitive load by summarizing trends, flagging errors, and suggesting what the business owner should look at next.",
    ],
    designNote:
      "The UI should feel like a business command center: clean, data-dense, practical, and trustworthy. MSME users need clarity and confidence more than flashy visuals.",
    iterationTitle: "What I would improve next",
    iteration: [
      "Add separate roles for owners, accountants, and managers.",
      "Integrate GST filing and validation workflows more deeply.",
      "Build supplier comparison based on price, reliability, and purchase history.",
      "Add mobile-first invoice capture for shop-floor usage.",
    ],
    techStack: ["OCR", "NLP", "Prophet", "Flask", "React", "Tailwind CSS"],
  },

  codelens: {
    eyebrow: "Case Study",
    title: "CodeLens AI",
    subtitle:
      "An AI-powered repository intelligence tool for understanding unfamiliar codebases.",
    intro:
      "CodeLens AI helps developers understand large or unfamiliar repositories before making changes. Instead of forcing developers to manually inspect every folder and file, the tool analyzes structure, modules, functions, dependencies, and risk areas to present the codebase as an interactive system map.",
    problem:
      "Developers often lose time when entering a new codebase. Folder structures show where files are located, but they do not explain architecture, business logic, dependencies, or the impact of changing a function. This makes onboarding slow and increases the risk of breaking existing behavior.",
    solution:
      "CodeLens scans a repository, parses source files, extracts structural information using AST-based analysis, and organizes the codebase into layered views such as architecture, domains, files, functions, and dependency paths. AI-generated summaries help developers understand what each module does and where to begin.",
    features: [
      "Repository scanning and indexing",
      "Architecture, module, and domain mapping",
      "File, function, and dependency extraction",
      "Graph-based visual exploration of code relationships",
      "AI-generated summaries for modules and functions",
      "Risk-node and duplicate-logic detection concept",
    ],
    impact: [
      "Reduces onboarding time for unfamiliar repositories",
      "Helps developers understand structure before editing code",
      "Turns static source files into an explorable system map",
      "Improves confidence when navigating complex codebases",
    ],
    future:
      "Future improvements include GitHub import, multi-language parsing, pull-request impact analysis, dependency risk scoring, duplicate logic detection, and AI-generated onboarding reports for new developers.",
    deepDiveTitle: "Why reading code top-to-bottom does not scale",
    deepDive: [
      "Large codebases are not meant to be understood linearly. Developers need entry points, relationships, and context. A folder tree shows structure, but it does not explain how the system behaves.",
      "The core idea behind CodeLens is to convert source code into a knowledge graph. Files, functions, modules, and dependencies become connected nodes, making the codebase easier to inspect and reason about.",
      "The project combines static analysis with AI summarization. Static analysis provides structure and relationships, while AI helps explain intent, responsibilities, and possible risk areas in natural language.",
    ],
    designNote:
      "The UI should feel like a technical analysis console. It should make complex code relationships inspectable without overwhelming the developer.",
    iterationTitle: "What I would improve next",
    iteration: [
      "Add direct GitHub repository import.",
      "Support Java, Python, TypeScript, and C++ parsing.",
      "Add pull-request impact analysis before code changes are merged.",
      "Generate onboarding reports for new developers joining a project.",
    ],
    techStack: ["React", "TypeScript", "AST Parsing", "Graph View", "AI Analysis"],
  },

  infenix: {
    eyebrow: "Case Study",
    title: "Infenix",
    subtitle:
      "An AI learning assistant for structured computer science learning.",
    intro:
      "Infenix is an AI-powered learning workspace designed to help students learn technical topics with more structure and continuity. Instead of giving one-off answers, it guides learners through topic breakdowns, step-by-step roadmaps, recommended resources, and organized learning sessions.",
    problem:
      "Students often ask broad questions like 'help me learn Java' or 'explain DSA' and receive scattered responses. The bigger problem is not lack of information, but lack of structure. Learners need progression, context, practice, revision, and a place to continue from where they stopped.",
    solution:
      "I designed Infenix as a focused AI tutor interface that turns broad learning goals into structured paths. It combines chat-based explanations, saved learning folders, topic breakdowns, resource tables, and guided next steps so students can move from confusion to a clear learning plan.",
    features: [
      "AI tutor-style chat interface",
      "Structured learning paths for technical topics",
      "Topic breakdowns with beginner-friendly explanations",
      "Resource recommendation tables",
      "Folder and library-based learning organization",
      "Session continuity for ongoing learning",
    ],
    impact: [
      "Makes beginner learning less scattered and more structured",
      "Turns broad questions into actionable learning plans",
      "Creates a cleaner learning environment for computer science topics",
      "Helps students continue learning instead of losing context after one answer",
    ],
    future:
      "Future improvements include progress tracking, quiz generation, saved roadmaps, revision reminders, personalized learning history, and practice questions after every explanation.",
    deepDiveTitle: "Designing an AI tutor that feels structured",
    deepDive: [
      "The challenge with AI learning tools is that they can easily become generic chatbots. Infenix is designed to feel more like a guided learning workspace where every answer connects to a larger learning path.",
      "The interface combines chat, folders, recent sessions, and resource suggestions so that learning does not disappear after one conversation. Students can organize topics and return to them later.",
      "The goal is to help students move from random doubts to structured progress. A good AI tutor should not only answer questions, but also help the learner understand what to study next.",
    ],
    designNote:
      "The UI direction is inspired by productivity tools and developer dashboards rather than playful chatbot interfaces. The experience should feel focused, calm, and useful for serious learning.",
    iterationTitle: "What I would improve next",
    iteration: [
      "Add saved roadmaps for each subject or skill.",
      "Generate practice questions after every explanation.",
      "Track progress across folders and learning sessions.",
      "Add personalized revision schedules based on completed topics.",
    ],
    techStack: ["React", "TypeScript", "AI API", "Tailwind CSS", "UX Design"],
  },
};

interface CaseStudyContentProps {
  projectId: string;
}

export function CaseStudyContent({ projectId }: CaseStudyContentProps) {
  const idMap: Record<string, string> = {
    "project-one": "campusvidhya",
    "project-two": "infenix",
    "project-three": "vartalap",
    "project-four": "codelens",
    "project-five": "energy",
  };

  const resolvedId = idMap[projectId] ?? projectId;
  const data = caseStudies[resolvedId] ?? caseStudies.campusvidhya;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen text-neutral-300 w-full max-w-6xl mx-auto px-6 py-24 md:py-32 lg:px-16 xl:px-24 relative selection:bg-white/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl pt-8"
      >
        <motion.div
          variants={itemVariants}
          className="text-xs font-mono text-neutral-500 tracking-[0.2em] mb-6 uppercase"
        >
          {data.eyebrow}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6"
        >
          {data.title}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-300 font-medium mb-12 lg:mb-16"
        >
          {data.subtitle}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mb-24 md:mb-32"
        >
          {data.intro}
        </motion.p>

        <div className="flex flex-col gap-20 lg:gap-28">
          <motion.div variants={itemVariants}>
            <div className="text-xs font-mono text-neutral-400 tracking-[0.2em] mb-6 border-b border-white/10 pb-4">
              01 THE PROBLEM
            </div>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              {data.problem}
            </p>
          </motion.div>

          <div className="w-full h-px bg-white/5" />

          <motion.div variants={itemVariants}>
            <div className="text-xs font-mono text-neutral-400 tracking-[0.2em] mb-6 border-b border-white/10 pb-4">
              02 THE SOLUTION
            </div>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              {data.solution}
            </p>
          </motion.div>

          <div className="w-full h-px bg-white/5" />

          <motion.div variants={itemVariants}>
            <div className="text-xs font-mono text-neutral-400 tracking-[0.2em] mb-6 border-b border-white/10 pb-4">
              03 KEY FEATURES
            </div>
            <ul className="text-neutral-400 leading-relaxed space-y-3 text-base md:text-lg">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0 inline-block" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="w-full h-px bg-white/5" />

          <motion.div variants={itemVariants}>
            <div className="text-xs font-mono text-neutral-400 tracking-[0.2em] mb-6 border-b border-white/10 pb-4">
              04 IMPACT
            </div>
            <ul className="text-neutral-400 leading-relaxed space-y-4 text-base md:text-lg mt-2">
              {data.impact.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.35)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="w-full h-px bg-white/5" />

          <motion.div variants={itemVariants}>
            <div className="text-xs font-mono text-neutral-400 tracking-[0.2em] mb-6 border-b border-white/10 pb-4">
              05 FUTURE SCOPE
            </div>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              {data.future}
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-24 max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            {data.deepDiveTitle}
          </h3>

          {data.deepDive.map((para) => (
            <p
              key={para}
              className="text-neutral-400 leading-relaxed text-lg mb-8"
            >
              {para}
            </p>
          ))}

          {data.designNote && (
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl my-12">
              <h4 className="text-white font-medium mb-4">Design Note</h4>
              <p className="text-neutral-400 leading-relaxed">
                {data.designNote}
              </p>
            </div>
          )}

          {data.iterationTitle && data.iteration && (
            <>
              <h3 className="text-2xl font-bold text-white mb-6">
                {data.iterationTitle}
              </h3>

              {data.iteration.map((para) => (
                <p
                  key={para}
                  className="text-neutral-400 leading-relaxed text-lg mb-8"
                >
                  {para}
                </p>
              ))}
            </>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-32 md:mt-48 pt-16 pb-24 relative"
        >
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-neutral-500/50 to-transparent" />

          <div className="text-xs font-mono text-neutral-500 tracking-wider mb-10">
            TECH STACK
          </div>

          <div className="flex flex-wrap gap-3">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-xs font-mono uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pb-32 text-center text-sm font-mono text-neutral-600"
        >
          -- End of Case Study --
        </motion.div>
      </motion.div>
    </div>
  );
}
