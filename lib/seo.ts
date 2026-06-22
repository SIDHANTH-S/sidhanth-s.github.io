import { Metadata } from 'next';

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Sidhanth S — Software Engineer, AI Systems Builder",
  description = "AI & Cloud Computing student building scalable full-stack software, AI systems, automation tools, and developer platforms.",
  image = "/og-image.png",
  url = "https://sidhanth-s.github.io",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Sidhanth S',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
