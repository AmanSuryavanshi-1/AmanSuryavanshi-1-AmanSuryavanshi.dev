import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import UnderConstructionBanner from "../components/UnderConstructionBanner"
import Header from "../components/header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aman Suryavanshi | Web Developer Portfolio",
  description:
    "Discover the portfolio and blog of Aman Suryavanshi, showcasing web development projects, technical blogs on JavaScript, React, Next.js, and available freelance services.",
  keywords: [
    "Aman Suryavanshi",
    "web developer",
    "freelance web developer",
    "JavaScript developer",
    "React developer",
    "Next.js portfolio",
    "frontend developer",
    "web development blog",
  ],
  openGraph: {
    title: "Aman Suryavanshi | Web Developer Portfolio",
    description:
      "Explore Aman Suryavanshi's portfolio and blog featuring web development projects, tutorials, and freelance services. Open to freelance and job opportunities.",
    url: "https://AmanSuryavanshi.dev",
    images: [
      {
        url: "/public/Images/AS main.png", 
        width: 1200,
        height: 630,
        alt: "Aman Suryavanshi Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Suryavanshi | Web Developer Portfolio",
    description:
      "Discover Aman Suryavanshi's web development projects and blog insights. Available for freelance opportunities and job offers.",
    images: ["/public/Images/profile-pic.png"], // Replace with your preview image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD for schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aman Suryavanshi",
              "url": "https://AmanSuryavanshi.dev",
              "jobTitle": "Web Developer",
              "description":
                "Portfolio and blog of Aman Suryavanshi, showcasing web development projects, blog articles, and available freelance services.",
              "sameAs": [
                "https://github.com/AmanSuryavanshi-1",
                "https://www.linkedin.com/in/amansuryavanshi/"
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        <UnderConstructionBanner/>
        {children}
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { DefaultSeo } from 'next-seo';
// import localFont from "next/font/local";
// import "./globals.css";
// import UnderConstructionBanner from "../components/UnderConstructionBanner";
// import Header from "@/components/header";
// // Font configurations
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
//   display: 'swap', // Optimize font loading
//   preload: true,
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
//   display: 'swap',
//   preload: true,
// });

// // Site Constants
// const SITE_NAME = "Aman Suryavanshi";
// const SITE_TITLE = "Aman Suryavanshi | Web Developer Portfolio";
// const SITE_DESCRIPTION = "Discover the portfolio and blog of Aman Suryavanshi, showcasing web development projects, technical blogs on JavaScript, React, Next.js, and available freelance services.";
// const SITE_URL = "https://amansuryavanshi-dev.vercel.app/";


// export const metadata: Metadata = {
//   metadataBase: new URL(SITE_URL),
//   title: {
//     default: SITE_TITLE,
//     template: `%s | ${SITE_NAME}`,
//   },
//   description: SITE_DESCRIPTION,
//   keywords: [
//     "Aman Suryavanshi",
//     "web developer",
//     "freelance web developer",
//     "JavaScript developer",
//     "React developer",
//     "Next.js portfolio",
//     "frontend developer",
//     "web development blog",
//     "UI/UX designer",
//     "TypeScript developer",
//     "full-stack developer",
//     "web development portfolio",
//     "web developer near me",
//     "web developer india",
//     "freelance web developer india",
//     "best web developer in delhi"
//   ],
//   authors: [{ name: SITE_NAME, url: SITE_URL }],
//   creator: SITE_NAME,
//   publisher: SITE_NAME,
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   alternates: {
//     canonical: SITE_URL,
//   },
//   openGraph: {
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     url: SITE_URL,
//     siteName: SITE_NAME,
//     images: [
//       {
//         url: "/Profile/me main.png",
//         width: 1200,
//         height: 630,
//         alt: "Aman Suryavanshi Portfolio Preview",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     creator: "@_AmanSurya",                 // twitter handle
//     images: ["/Images/profile-pic.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   verification: {
//     google: process.env.GOOGLE_VERIFICATION_CODE,            // google verification code in env.local
//     // yandex: process.env.YANDEX_VERIFICATION_CODE,
//     // Add other verification codes as needed
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link
//           rel="apple-touch-icon"
//           href="/apple-touch-icon.png"
//           type="image/png"
//           sizes="180x180"
//         />
//         <meta name="theme-color" content="#ffffff" />
//         <link rel="manifest" href="/manifest.json" />
        
//         {/* Schema.org Person */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Person",
//               "@id": SITE_URL,
//               "name": SITE_NAME,
//               "url": SITE_URL,
//               "image": "/Images/profile-pic.png",
//               "jobTitle": "Web Developer",
//               "description": SITE_DESCRIPTION,
//               "sameAs": [
//                 "https://github.com/AmanSuryavanshi-1",
//                 "https://www.linkedin.com/in/amansuryavanshi/",
//                 // Add other social profiles
//               ],
//               "knowsAbout": [
//                 "Web Development",
//                 "JavaScript",
//                 "React",
//                 "Next.js",
//                 "TypeScript",
//                 "UI/UX Design",
//               ],
//               "workExample": {
//                 "@type": "CreativeWork",
//                 "name": "Portfolio Projects",
//                 "url": `${SITE_URL}/projects`
//               }
//             }),
//           }}
//         />

//         {/* Website Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               "name": SITE_TITLE,
//               "url": SITE_URL,
//               "potentialAction": {
//                 "@type": "SearchAction",
//                 "target": `${SITE_URL}/search?q={search_term_string}`,
//                 "query-input": "required name=search_term_string"
//               }
//             }),
//           }}
//         />
//       </head>
//       <body 
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
//       >
//         <DefaultSeo
//           canonical={SITE_URL}
//           openGraph={{
//             type: 'website',
//             locale: 'en_US',
//             url: SITE_URL,
//             siteName: SITE_NAME,
//           }}
//           twitter={{
//             handle: '@AmanSuryavanshi',
//             cardType: 'summary_large_image',
//           }}
//         />
//         <Header />
//         <UnderConstructionBanner />
//         <main className="flex-grow">
//           {children}
//         </main>
//         <footer className="mt-auto">
//           {/* Add your footer component here */}
//         </footer>
//       </body>
//     </html>
//   );
// }