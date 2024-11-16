'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import SectionTitle from '@/components/about/SectionTitle';
import ProfileImage from '@/components/about/ProfileImage';
import ActionButtons from '@/components/about/ActionButtons';


// import PersonalInfo from '@/components/about/';

import Qualifications from '@/components/about/Qualifications';
import Skills from '@/components/about/Skills';
import PersonalInfo from '@/components/about/PersonalInfo';
import AboutContent from './AboutContent';

interface AboutMeProps {
  personalInfo?: {
    name: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    education: string;
    address: string;
    languages: string[];
    image: string;
  };
  qualificationsData?: {
    qualifications?: {
      EducationData: {
        degree: string;
        institution: string;
        year: string;
        icon: string;
      }[];
      CertificationData: {
        degree: string;
        institution: string;
        year: string;
        icon: string;
      }[];
    };
  };
  skillsData?: {
    skills: Record<string, string[]>;
  };
}

// Main AboutMe Component
const AboutMe = ({ personalInfo, qualificationsData, skillsData }: AboutMeProps = {}) => {
  return (
    <main id="about" className="w-full py-8">
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full" aria-labelledby="about-heading">
        <SectionTitle />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-4 py-16">
            <ProfileImage />
          </div>

          <div className="lg:col-span-8">
            <Tabs defaultValue="about" className="w-full min-h-[58vh]">
              <TabsList className="mb-6 py-5 rounded-3xl bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100">
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 " 
                  value="about">
                  About
                </TabsTrigger>
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 " 
                  value="personal-info">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger 
                   className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 " 
                  value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 " 
                  value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <AboutContent />
              </TabsContent>
              
              <TabsContent value="personal-info">
                <PersonalInfo data={personalInfo} />
              </TabsContent>

              <TabsContent value="qualifications">
                <Qualifications data={qualificationsData} />
              </TabsContent>

              <TabsContent value="skills">
                <Skills data={skillsData} />
              </TabsContent>
            </Tabs>
            
            <div className="mt-8">
              <ActionButtons />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;