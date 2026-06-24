import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Credentials } from "@/components/Credentials";

export const metadata = constructMetadata({
  title: "Certifications | Sidhanth S",
  description: "Software Engineer Sidhanth S - Verified certifications, technical credentials, and professional achievements.",
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
      
      <main className="pt-24 pb-12">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pb-8">
          <h1 className="text-4xl font-bold text-center text-white mb-6">Certifications</h1>
          <h2 className="text-white/80 font-sans text-xl font-medium mb-4 max-w-2xl text-center mx-auto">
            Professional Credentials & Qualifications
          </h2>
          <p className="text-white/60 font-sans text-base leading-relaxed max-w-3xl text-center mx-auto">
            Formal validations of my technical expertise and ongoing learning. This collection includes verified certifications from industry leaders such as ServiceNow and Harvard University. These credentials demonstrate my commitment to mastering enterprise systems, full-stack architecture, workflow administration, and foundational computer science principles. Explore the interactive cards below to view the official documentation.
          </p>
        </div>
        <Credentials />
      </main>
    </div>
  );
}
