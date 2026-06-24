import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Resume | Sidhanth S",
  description: "View the resume of Sidhanth S, Software Engineer and AI Systems Builder.",
  url: "https://sidhanth-s.github.io/resume",
});

export default function ResumePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://sidhanth-s.github.io" },
    { name: "Resume", item: "https://sidhanth-s.github.io/resume" },
  ]);

  return (
    <div className="bg-[#111] min-h-screen text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 py-8">
        <h1 className="font-mono text-sm uppercase tracking-widest text-zinc-400">
          Sidhanth S / Resume
        </h1>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 pb-12">
        <div className="w-full h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe 
            src="/Resume.pdf" 
            className="w-full h-full border-none bg-white" 
            title="Resume PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}
