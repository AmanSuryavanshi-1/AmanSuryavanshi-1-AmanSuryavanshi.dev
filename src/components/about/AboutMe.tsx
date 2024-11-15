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
    qualifications: {
      degree: string;
      institution: string;
      year: string;
      description: string;
    }[];
  };
  skillsData?: {
    skills: Record<string, string[]>;
  };
}

// Main AboutMe Component
const AboutMe = ({ personalInfo, qualificationsData, skillsData }: AboutMeProps = {}) => {
  return (
    <main id="about" className="w-full pt-12">
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
        <SectionTitle />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 py-8 mb-8 gap-8 lg:gap-16 items-start mx-auto">
          <div className="lg:col-span-5">
            <ProfileImage />
          </div>

          <div className="lg:col-span-7 my-4">
            <Tabs defaultValue="personal-info" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

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