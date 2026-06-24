import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { LazyGitHubSection } from "@/components/LazyGitHubSection";

export const metadata = constructMetadata({
  title: "Experience | Sidhanth S",
  description: "Software Engineer Sidhanth S - Work history, technical skills, and GitHub contributions in full-stack development and system building.",
  url: "https://sidhanth-s.github.io/experience",
});

export default function ExperiencePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://sidhanth-s.github.io" },
    { name: "Experience", item: "https://sidhanth-s.github.io/experience" },
  ]);

  return (
    <div className="bg-paper min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CampusVidhya",
            "founder": {
              "@id": "https://sidhanth-s.github.io/#person"
            }
          })
        }}
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-8">
        <h1 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink uppercase mb-6">
          Experience
        </h1>
        <h2 className="text-white/80 font-sans text-xl font-medium mb-4 max-w-2xl">
          Technical Expertise & Professional Journey
        </h2>
        <p className="text-white/60 font-sans text-base leading-relaxed max-w-3xl">
          A comprehensive overview of my professional engineering experience, including my role as the founder and lead developer of CampusVidhya. This section details my technical skills across full-stack web development, AI integration, and systems architecture. Building production-grade workflows and reliable digital infrastructure requires not just knowing the stack, but understanding how it operates under pressure. Below you will find my complete work history, the specific technologies I specialize in, and a live log of my GitHub contributions.
        </p>
      </div>

      <Experience />
      <Skills />
      <LazyGitHubSection />
    </div>
  );
}
