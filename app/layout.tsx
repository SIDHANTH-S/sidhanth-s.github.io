import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Kaushan_Script } from 'next/font/google';
import './globals.css';
import { BackButton } from '@/components/BackButton';
import ClarityProvider from "@/components/Clarity";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const kaushanScript = Kaushan_Script({ subsets: ['latin'], weight: '400', variable: '--font-kaushan', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL('https://sidhanth-s.github.io'),
  title: 'Sidhanth S — Software Engineer',
  description:
    'Software Engineer building AI systems, workflow platforms, developer tools, and modern web applications.',
  authors: [{ name: 'Sidhanth S' }],
  creator: 'Sidhanth S',
  publisher: 'Sidhanth S',
  alternates: {
    canonical: 'https://sidhanth-s.github.io',
  },
  openGraph: {
    title: 'Sidhanth S — Software Engineer',
    description:
      'Software Engineer and Full-Stack Developer based in Chennai, India building software products, workflow platforms, developer tools, and modern web applications.',
    url: 'https://sidhanth-s.github.io',
    siteName: 'Sidhanth S',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sidhanth S — Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidhanth S — Software Engineer',
    description:
      'Software Engineer and Full-Stack Developer based in Chennai, India building software products, workflow platforms, developer tools, and modern web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  manifest: '/site.webmanifest',
  applicationName: 'Sidhanth S Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    "Sidhanth S",
    "Software Engineer",
    "Full Stack Developer",
    "ServiceNow Developer",
    "Certified Application Developer",
    "ServiceNow CSA",
    "AI Developer",
    "Workflow Automation",
    "React Developer",
    "Next.js Developer",
    "Cloud Computing",
    "Chennai",
    "India"
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />

        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://sidhanth-s.github.io/#person",
                "name": "Sidhanth S",
                "alternateName": ["Sidhanth"],
                "url": "https://sidhanth-s.github.io",
                "image": "https://sidhanth-s.github.io/Portrait.webp",
                "jobTitle": "Software Engineer",
                "description": "Software Engineer and Full-Stack Developer based in Chennai, India building software products, workflow platforms, developer tools, and modern web applications.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                "knowsAbout": [
                  "Software Engineering",
                  "Full-Stack Development",
                  "Artificial Intelligence",
                  "Workflow Automation",
                  "ServiceNow",
                  "Cloud Computing",
                  "React",
                  "Next.js",
                  "Java",
                  "Python",
                  "System Design",
                  "Developer Platforms"
                ],
                "sameAs": [
                  "https://github.com/SIDHANTH-S",
                  "https://www.linkedin.com/in/sidhanth-s",
                  "https://devpost.com/SIDHANTH-S",
                  "https://www.credly.com/users/sidhanth-s"
                ],
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Oracle Cloud Infrastructure 2025 Certified Foundations Associate"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Harvard CS50x"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "ServiceNow Certified System Administrator"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "ServiceNow Certified Application Developer"
                  }
                ]
            })
          }}
        />

        {/* WebSite schema — helps Google associate sitelinks + brand entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://sidhanth-s.github.io/#website",
              "name": "Sidhanth S",
              "url": "https://sidhanth-s.github.io",
              "description": "Software Engineer and Full-Stack Developer based in Chennai, India.",
              "author": {
                "@id": "https://sidhanth-s.github.io/#person"
              }
            })
          }}
        />

        {/* FAQ JSON-LD for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Sidhanth S?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sidhanth S is a Software Engineer and Full-Stack Developer based in Chennai, India, building software products, workflow platforms, developer tools, and modern web applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Sidhanth S build?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sidhanth builds software products, workflow platforms, developer tools, and modern web applications using React, Next.js, Java, and Python."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Sidhanth S based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sidhanth S is based in Chennai, Tamil Nadu, India."
                  }
                }
              ]
            })
          }}
        />

        {/* ProfilePage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "dateCreated": "2025-09-01T00:00:00Z",
              "dateModified": "2026-05-29T00:00:00Z",
              "description":
                "Portfolio of Sidhanth S — Software Engineer and Full-Stack Developer based in Chennai, India.",
              "isPartOf": {
                "@id": "https://sidhanth-s.github.io/#website"
              },
              "mainEntity": {
                "@id": "https://sidhanth-s.github.io/#person"
              }
            })
          }}
        />

        <link
          rel="llms"
          href="https://sidhanth-s.github.io/llms.txt"
          type="text/plain"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${kaushanScript.variable}`}>
        <ScrollToTop />
        <ClarityProvider />
        <BackButton />
        {children}
      </body>
    </html>
  );
}