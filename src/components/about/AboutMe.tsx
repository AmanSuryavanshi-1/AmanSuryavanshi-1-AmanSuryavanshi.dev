'use client';
import React from 'react';
import SectionTitle from '@/components/about/SectionTitle';
import ProfileImage from '@/components/about/ProfileImage';
import AboutContent from '@/components/about/AboutContent';
import ActionButtons from '@/components/about/ActionButtons';

const AboutMe = () => {
  return (
    <main id='about' className="w-full pt-12">
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
        <SectionTitle />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 py-8 mb-8 gap-8 lg:gap-16 items-start mx-auto">
          <div className="lg:col-span-5">
            <ProfileImage />
          </div>

          <div className="lg:col-span-7 my-4">
            <AboutContent />
            <ActionButtons />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;