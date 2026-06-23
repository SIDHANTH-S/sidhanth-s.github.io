export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.item,
    })),
  };
}

export function generateArticleSchema({
  headline,
  description,
  image = "https://sidhanth-s.github.io/og-image.png",
  url,
  datePublished = "2025-01-01T00:00:00Z",
  dateModified = new Date().toISOString(),
  author = {
    "@type": "Person",
    "@id": "https://sidhanth-s.github.io/#person",
    "name": "Sidhanth S"
  }
}: {
  headline: string;
  description: string;
  image?: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: any;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "headline": headline,
    "description": description,
    "image": image,
    "author": author,
    "isPartOf": {
      "@id": "https://sidhanth-s.github.io/#website"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sidhanth S",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sidhanth-s.github.io/favicon-96x96.png",
      },
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
  };
}

export function generateCollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url,
  };
}
