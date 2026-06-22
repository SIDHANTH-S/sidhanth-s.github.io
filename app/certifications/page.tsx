import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Credentials } from "@/components/Credentials";

export const metadata = constructMetadata({
  title: "Certifications | Sidhanth S",
  description: "Verified milestones, certifications, and academic achievements.",
  url: "https://sidhanth-s.github.io/certifications",
});

export default function CertificationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://sidhanth-s.github.io" },
    { name: "Certifications", item: "https://sidhanth-s.github.io/certifications" },
  ]);

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-32 mb-8">
        <h1 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink uppercase">
          Certifications
        </h1>
      </div>

      <Credentials />
    </div>
  );
}
