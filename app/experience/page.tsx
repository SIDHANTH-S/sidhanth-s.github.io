import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";

export const metadata = constructMetadata({
  title: "Experience | Sidhanth S",
  description: "Work history, technical skills, and GitHub contributions of Sidhanth S.",
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
      
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-32">
        <h1 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink uppercase">
          Experience
        </h1>
      </div>

      <Experience />
      <Skills />
      <GitHubActivity />
    </div>
  );
}
