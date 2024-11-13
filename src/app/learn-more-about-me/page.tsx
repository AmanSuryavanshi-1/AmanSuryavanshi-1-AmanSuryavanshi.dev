

// src/app/about/page.tsx
import { Metadata } from 'next';
// import PersonJsonLd from 'next-seo/lib/jsonld/breadcrumb';
import AboutMe from '@/components/about/AboutMe';

const SITE_URL = "https://AmanSuryavanshi.dev";
const ABOUT_TITLE = "About Aman Suryavanshi - Web Developer & UI/UX Designer";
const ABOUT_DESCRIPTION = "Learn about Aman Suryavanshi, a passionate web developer and UI/UX designer specializing in creating beautiful, functional digital experiences using React, Next.js, and modern web technologies.";

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: `${SITE_URL}/about`,
    images: [
      {
        url: '/Images/about-preview.png',
        width: 1200,
        height: 630,
        alt: 'Aman Suryavanshi - Web Developer and UI/UX Designer',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    images: ['/Images/about-preview.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* <PersonJsonLd
        type="Person"
        name="Aman Suryavanshi"
        url={`${SITE_URL}/about`}
        sameAs={[
          'https://github.com/AmanSuryavanshi-1',
          'https://www.linkedin.com/in/amansuryavanshi/',
        ]}
        jobTitle="Web Developer & UI/UX Designer"
        description={ABOUT_DESCRIPTION}
        knowsAbout={[
          'Web Development',
          'UI/UX Design',
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Frontend Development',
          'Responsive Design',
        ]}
      /> */}

      {/* <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            position: 2,
            name: 'About',
            item: `${SITE_URL}/about`,
          },
        ]}
      /> */}

      <article className="prose prose-lg max-w-none">
          <h1 className="sr-only">{ABOUT_TITLE}</h1>
        <AboutMe />
      </article>
    </>
  );
}