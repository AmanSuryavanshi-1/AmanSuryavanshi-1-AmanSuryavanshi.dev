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

interface Skill {
  name: string;
  icon: string;
}

interface PersonalInfoData {
  name: string;
  email: string;
  phone: string;
  location?: string;
  // Add other personal info fields as needed
}

interface QualificationItem {
  title: string;
  institution: string;
  year: string;
  icon: string;
}

interface AboutMeProps {
  personalInfo?: PersonalInfoData;
  qualificationsData?: {
    qualifications: {
      EducationData: QualificationItem[];
      CertificationData: QualificationItem[];
    };
  };
  skillsData?: {
    skills: Record<string, Skill[]>;
  };
}

const defaultProps: AboutMeProps = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: ''
  },
  qualificationsData: {
    qualifications: {
      EducationData: [],
      CertificationData: []
    }
  },
  skillsData: {
    skills: {}
  }
};

// Main AboutMe Component
const AboutMe = ({ personalInfo = defaultProps.personalInfo, 
                  qualificationsData = defaultProps.qualificationsData, 
                  skillsData = defaultProps.skillsData }: AboutMeProps) => {
  return (
    <main id="about" className="w-full py-8">
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full " aria-labelledby="about-heading">
        <SectionTitle />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-4 py-16">
            <ProfileImage />
          </div>

          <div className="lg:col-span-8">
            <Tabs defaultValue="about" className="w-full min-h-[61vh]">
              <TabsList className="mb-6 py-5 rounded-3xl bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100 max-md:border-0 ">
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 max-md:text-xs" 
                  value="about">
                  About
                </TabsTrigger>
                <TabsTrigger 
                 className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 max-md:text-xs" 
                  value="personal-info">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger 
                 className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 max-md:text-xs" 
                  value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger 
                 className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500 max-md:border-0 max-md:text-xs" 
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