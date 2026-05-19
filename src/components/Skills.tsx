import { motion } from "motion/react";
import { cn } from "../lib/utils";

const ShadcnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-3.5 h-3.5 text-white/70 transition-transform duration-300 group-hover/skill:scale-110"
  >
    
    <rect width="256" height="256" fill="none" />
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);
const SqlIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-3.5 h-3.5 text-white/70 transition-transform duration-300 group-hover/skill:scale-110"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
    <path d="M17 8v8h4" />
    <path d="M13 15l1 1" />
    <path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
  </svg>
);
const SKILL_GROUPS = [
  {
    id: "01",
    name: "Programming Languages",
    subgroups: [
      {
        name: "Languages",
        skills: [
          { name: "Java", slug: "java" },
          { name: "Python", slug: "python" },
          { name: "JavaScript", slug: "javascript" },
          { name: "C++", slug: "c-plusplus" },
          { name: "SQL", customIcon: "sql" },
        ],
      },
    ],
  },
  {
    id: "02",
    name: "Frontend Development",
    subgroups: [
      {
        name: "Core",
        skills: [
          { name: "HTML", slug: "html-5" },
          { name: "CSS", slug: "css-3" },
          { name: "TypeScript", slug: "typescript-icon" },
          { name: "React.js", slug: "react" },
          { name: "Tailwind CSS", slug: "tailwindcss-icon" },
          { name: "shadcn/ui", customIcon: "shadcn" },
          { name: "Framer Motion", slug: "framer" },
          { name: "Three.js", slug: "threejs" },
        ],
      },
    ],
  },
  {
    id: "03",
    name: "Backend Development & APIs",
    subgroups: [
      {
        name: "Backend",
        skills: [
          { name: "Node.js", slug: "nodejs-icon" },
          { name: "Express.js", slug: "express" },
          { name: "FastAPI", slug: "fastapi-icon" },
          { name: "Flask", slug: "flask" },
          { name: "REST APIs", slug: "fastapi-icon" },
          { name: "Auth", slug: "auth0-icon" },
        ],
      },
      {
        name: "Databases",
        skills: [
          { name: "PostgreSQL", slug: "postgresql" },
          { name: "MongoDB", slug: "mongodb-icon" },
          { name: "SQLite", slug: "sqlite" },
          { name: "Supabase", slug: "supabase-icon" },
        ],
      },
    ],
  },
  {
    id: "04",
    name: "AI, ML & Data Science",
    subgroups: [
      {
        name: "ML Frameworks",
        skills: [
          { name: "PyTorch", slug: "pytorch-icon" },
          { name: "TensorFlow", slug: "tensorflow" },
          { name: "Hugging Face", slug: "hugging-face-icon" },
          { name: "Perplexity Sonar API", slug: "perplexity-icon" },
        ],
      },
      {
        name: "Retrieval Systems",
        skills: [
          { name: "RAG", slug: "pinecone-icon" },
          { name: "Vector Search", slug: "pinecone-icon" },
          { name: "GraphRAG", slug: "neo4j" },
          { name: "Knowledge Graphs", slug: "neo4j" },
        ],
      },
    ],
  },
  {
    id: "05",
    name: "Data Analysis",
    subgroups: [
      {
        name: "Data",
        skills: [
          { name: "Pandas", slug: "pandas-icon" },
          { name: "NumPy", slug: "numpy" },
          { name: "Matplotlib", slug: "matplotlib" },
          { name: "Prophet", slug: "python" },
          { name: "Time-Series Forecasting", slug: "python" },
          { name: "Forecast Visualization", slug: "chartjs" },
        ],
      },
    ],
  },
  {
    id: "06",
    name: "Cloud, DevOps & Tools",
    subgroups: [
      {
        name: "Cloud & Deployment",
        skills: [
          { name: "Google Cloud", slug: "google-cloud" },
          { name: "Azure", slug: "azure-icon" },
          { name: "Vercel", slug: "vercel-icon" },
          { name: "Netlify", slug: "netlify" },
          { name: "Docker", slug: "docker-icon" },
        ],
      },
      {
        name: "Tools",
        skills: [
          { name: "Git", slug: "git-icon" },
          { name: "GitHub", slug: "github-icon" },
          { name: "Postman", slug: "postman-icon" },
          { name: "VS Code", slug: "visual-studio-code" },
        ],
      },
    ],
  },
];
const SkillIcon = ({ skill }: { skill: any }) => {
  if (skill.customIcon === "shadcn") {
    return <ShadcnIcon />;
  }

  if (skill.customIcon === "sql") {
    return <SqlIcon />;
  }

  return (
    <img
      src={`https://api.iconify.design/logos:${skill.slug}.svg`}
      alt={skill.name}
      className="w-3.5 h-3.5 object-contain transition-transform duration-300 group-hover/skill:scale-110"
    />
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-32 bg-paper relative border-t border-gray-200/50"
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink mb-6 uppercase">
            Toolkit
          </h2>
          <p className="text-white/70 font-sans text-lg max-w-2xl">
            A focused stack across full-stack engineering, AI systems, cloud deployment, and data-driven products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.name}
              className="relative min-h-[250px] p-6 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-surface/80 hover:shadow-2xl transition-all duration-500 group bg-surface/30 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-white/30 mb-1 block tracking-widest leading-none">
                    {group.id}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink uppercase tracking-tight">
                    {group.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                {group.subgroups.map((sub) => (
                  <div key={sub.name} className="space-y-3">
                    <h4 className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.2em] border-b border-white/5 pb-1">
                      {sub.name}
                    </h4>

                    <div className="flex flex-wrap gap-x-3 gap-y-2.5">
                      {sub.skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 group/skill"
                        >
                          <SkillIcon skill={skill} />

                          <span className="text-xs font-medium text-white/60 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>

                          {index < sub.skills.length - 1 && (
                            <span className="text-white/10 ml-0.5 text-[10px]">
                              ·
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};