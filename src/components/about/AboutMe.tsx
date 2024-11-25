'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { User2, Info, GraduationCap } from 'lucide-react';

import SectionTitle from '@/components/about/SectionTitle';
// import ProfileImage from '@/components/learn-more-about-me/ProfileImage';
import ActionButtons from '@/components/about/ActionButtons';


// import PersonalInfo from '@/components/about/';

import Qualifications from '@/components/about/Qualifications';
import PersonalInfo from '@/components/about/PersonalInfo';
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';

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
  }
};

// Main AboutMe Component
const AboutMe = ({ personalInfo = defaultProps.personalInfo, 
                  qualificationsData = defaultProps.qualificationsData }: AboutMeProps) => {
  return (
    <main id="about" className="w-full py-12">
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full " aria-labelledby="about-heading">
        <SectionTitle />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-4 py-2">
            <AboutImage />
          </div>

          <div className="lg:col-span-8">
            <Tabs defaultValue="about" className="w-full max-md:mx-auto max-md:h-auto max-[375px]:mt-8">
              <TabsList className="py-5 rounded-3xl bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100 
                 max-md:w-full max-md:min-h-[200px] max-md:flex max-md:flex-col max-md:justify-between max-md:gap-4 max-md:p-6
                max-[375px]:gap-2 max-[375px]:p-4">
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
                  max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0 max-[375px]:h-12 max-[375px]:text-sm" 
                  value="about">
                  <User2 className="w-4 h-4 mr-2" />
                  About
                </TabsTrigger>
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
                  max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
                  value="personal-info">
                  <Info className="w-4 h-4 mr-2" />
                  Personal Info
                </TabsTrigger>
                <TabsTrigger 
                  className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
                  max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
                  value="qualifications">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Qualifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6 h-[18rem] max-xl:min-h-fit">
                <AboutContent />
              </TabsContent>
              
              <TabsContent value="personal-info" className="mt-6 h-[18rem] max-xl:min-h-fit">
                <PersonalInfo data={personalInfo} />
              </TabsContent>

              <TabsContent value="qualifications" className="mt-6 h-[18rem] max-xl:min-h-fit">
                <Qualifications data={qualificationsData} />
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