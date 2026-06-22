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
      url: 'https://sidhanth-s.github.io/about',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sidhanth-s.github.io/projects',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://sidhanth-s.github.io/projects/campusvidhya',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sidhanth-s.github.io/projects/infenix',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sidhanth-s.github.io/projects/vartalapai',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sidhanth-s.github.io/projects/codelens-ai',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sidhanth-s.github.io/projects/energy-forecast',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sidhanth-s.github.io/experience',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sidhanth-s.github.io/certifications',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sidhanth-s.github.io/resume',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sidhanth-s.github.io/llms.txt',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://sidhanth-s.github.io/llms-full.txt',
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}