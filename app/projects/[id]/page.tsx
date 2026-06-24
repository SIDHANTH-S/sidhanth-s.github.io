import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

const slugToIdMap: Record<string, string> = {
  "campusvidhya": "campusvidhya",
  "infenix": "infenix",
  "vartalap": "vartalap",
  "codelens": "codelens",
  "energy": "energy",
};

const projectMetadataMap: Record<string, { title: string; description: string }> = {
  "campusvidhya": {
    title: "CampusVidhya | Case Study by Sidhanth S",
    description: "A role-based academic operations platform replacing scattered campus communication with structured digital workflows.",
  },
  "infenix": {
    title: "Infenix | Case Study by Sidhanth S",
    description: "An AI learning assistant built with React and Prompt Workflows for structured technical learning.",
  },
  "vartalap": {
    title: "VartalapAI | Case Study by Sidhanth S",
    description: "An AI-assisted business intelligence workspace using OCR and forecasting for Indian MSMEs.",
  },
  "codelens": {
    title: "CodeLens AI | Case Study by Sidhanth S",
    description: "An AI-powered repository intelligence tool mapping code architecture and dependencies for faster developer onboarding.",
  },
  "energy": {
    title: "Energy Forecast Console | Case Study by Sidhanth S",
    description: "A time-series forecasting dashboard for electricity demand built with Python, Prophet, and React.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const data = projectMetadataMap[id];
  
  if (!data) {
    return constructMetadata({ title: "Project Not Found" });
  }

  return constructMetadata({
    title: data.title,
    description: data.description,
    url: `https://sidhanth-s.github.io/projects/${id}`,
  });
}

export async function generateStaticParams() {
  return [
    { id: "campusvidhya" },
    { id: "infenix" },
    { id: "vartalap" },
    { id: "codelens" },
    { id: "energy" },
  ];
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { id } = await params;
  const projectId = slugToIdMap[id];

  if (!projectId) {
    notFound();
  }

  const data = projectMetadataMap[id];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://sidhanth-s.github.io" },
    { name: "Projects", item: "https://sidhanth-s.github.io/projects" },
    { name: data.title.split(" |")[0], item: `https://sidhanth-s.github.io/projects/${id}` },
  ]);

  const articleSchema = generateArticleSchema({
    headline: data.title,
    description: data.description,
    url: `https://sidhanth-s.github.io/projects/${id}`,
  });

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <CaseStudyContent projectId={projectId} />
    </div>
  );
}
