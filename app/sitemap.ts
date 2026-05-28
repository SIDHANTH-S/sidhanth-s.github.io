import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sidhanth-s.github.io',
      lastModified: '2026-05-26',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://sidhanth-s.github.io/llms.txt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sidhanth-s.github.io/llms-full.txt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}