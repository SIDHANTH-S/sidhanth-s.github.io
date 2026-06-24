import { constructMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { AboutBrief } from "@/components/AboutBrief";
import WhoIs from "@/components/WhoIs";

export const metadata = constructMetadata({
  title: "About Sidhanth S | Software Engineer",
  description: "Learn more about Sidhanth S, a Software Engineer and Full-Stack Developer based in Chennai, India.",
  url: "https://sidhanth-s.github.io/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://sidhanth-s.github.io" },
    { name: "About", item: "https://sidhanth-s.github.io/about" },
  ]);

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2025-09-01T00:00:00Z",
    "dateModified": new Date().toISOString(),
    "description": "About Sidhanth S — Software Engineer and Full-Stack Developer based in Chennai, India.",
    "isPartOf": {
      "@id": "https://sidhanth-s.github.io/#website"
    },
    "mainEntity": {
      "@id": "https://sidhanth-s.github.io/#person"
    }
  };

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-8">
        <h1 className="font-display text-[60px] md:text-[84px] font-black tracking-tighter leading-[0.85] text-ink uppercase mb-6">
          About
        </h1>
        <h2 className="text-white/80 font-sans text-xl font-medium mb-4 max-w-2xl">
          Software Engineer & Full-Stack Developer
        </h2>
      </div>

      <WhoIs />
      <AboutBrief />
    </div>
  );
}
