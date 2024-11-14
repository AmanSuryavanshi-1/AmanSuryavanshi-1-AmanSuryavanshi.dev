import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import UnderConstructionBanner from "../components/UnderConstructionBanner";
import Header from "../components/Header";

// Font configurations with performance optimizations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

// Site Constants
const SITE_NAME = "Aman Suryavanshi";
const SITE_TITLE = "Aman Suryavanshi | Web Developer Portfolio";
const SITE_DESCRIPTION = "Discover the portfolio and blog of Aman Suryavanshi, showcasing web development projects, technical blogs on JavaScript, React, Next.js, and available freelance services.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://amansuryavanshi-dev.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Aman Suryavanshi",
    "web developer",
    "freelance web developer",
    "JavaScript developer",
    "React developer",
    "Next.js portfolio",
    "frontend developer",
    "web development blog",
    "UI/UX designer",
    "TypeScript developer",
    "full-stack developer",
    "web developer india",
    "freelance web developer india",
    "best web developer in delhi"
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/Profile/me main.png",
        width: 1200,
        height: 630,
        alt: "Aman Suryavanshi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@_AmanSurya",
    images: ["/Images/profile-pic.png"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

// Structured data for enhanced SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: SITE_NAME,
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}#image`,
        url: "/Images/profile-pic.png",
        width: 1200,
        height: 630,
      },
      description: SITE_DESCRIPTION,
      jobTitle: "Web Developer",
      sameAs: [
        "https://github.com/AmanSuryavanshi-1",
        "https://www.linkedin.com/in/amansuryavanshi/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}#person`
      },
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <UnderConstructionBanner />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="mt-auto">
          {/* Add your footer component here */}
        </footer>
      </body>
    </html>
  );
}