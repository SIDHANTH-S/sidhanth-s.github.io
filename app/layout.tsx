import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sidhanth-s.github.io'),
  title: 'Sidhanth S — Software Engineer, AI Systems Builder & Full-Stack Developer',
  description:
    'CS undergraduate based in Chennai specializing in AI & Cloud Computing. Building scalable software systems across full-stack development, AI integration, workflow automation, and developer tooling.',
  authors: [{ name: 'Sidhanth S' }],
  creator: 'Sidhanth S',
  publisher: 'Sidhanth S',
  alternates: {
    canonical: 'https://sidhanth-s.github.io',
  },
  openGraph: {
    title: 'Sidhanth S — Software Engineer, AI Systems Builder & Full-Stack Developer',
    description:
      'CS undergraduate based in Chennai specializing in AI & Cloud Computing. Building scalable software systems across full-stack development, AI integration, workflow automation, and developer tooling.',
    url: 'https://sidhanth-s.github.io',
    siteName: 'Sidhanth S',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sidhanth S — Software Engineer & AI Systems Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidhanth S — Software Engineer, AI Systems Builder & Full-Stack Developer',
    description:
      'CS undergraduate based in Chennai specializing in AI & Cloud Computing. Building scalable software systems across full-stack development, AI integration, workflow automation, and developer tooling.',
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
    'Sidhanth S',
    'Software Engineer',
    'AI Systems Builder',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'AI Integration',
    'Workflow Automation',
    'Cloud Computing',
    'Developer Tooling',
    'Chennai',
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

        {/* GEO tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sidhanth S",
              "alternateName": ["Sidhanth"],
              "url": "https://sidhanth-s.github.io",
              "image": "https://sidhanth-s.github.io/Potrait.jpg",
              "jobTitle": "Software Engineer & AI Systems Builder",
              "description": "CS undergraduate based in Chennai specializing in AI and Cloud Computing, building scalable software systems.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "AI Systems",
                "Full-Stack Engineering",
                "Workflow Automation",
                "Developer Tooling",
                "Cloud Computing",
                "React Development",
                "Next.js",
                "Java",
                "Python"
              ],
              "sameAs": [
                "https://github.com/SIDHANTH-S",
                "https://linkedin.com/in/sidhanth-s"
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
              "name": "Sidhanth S",
              "url": "https://sidhanth-s.github.io",
              "description": "Software Engineer, AI Systems Builder & Full-Stack Developer based in Chennai, India.",
              "author": {
                "@type": "Person",
                "name": "Sidhanth S"
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
                    "text": "Sidhanth S is a software engineer and AI systems builder based in Chennai, India, specializing in full-stack development, AI integration, and workflow automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Sidhanth S build?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sidhanth builds scalable software systems including AI-powered applications, developer tools, and workflow automation platforms using React, Next.js, Java, Python, and cloud technologies."
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}