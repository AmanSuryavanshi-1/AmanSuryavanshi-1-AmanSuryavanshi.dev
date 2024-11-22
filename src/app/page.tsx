import React from 'react'
import Hero from "../components/hero/Hero"
import ExperienceCards from '@/components/ExperienceCards'
import WorkBanner from '@/components/WorkBanner'
import Services from '@/components/services/services'
import AboutMe from '../components/about/AboutMe'
import ContactPage from '../app/contact/page'
import myData from '../components/about/AboutData'
import skillsData  from '@/components/skills/SkillsData'
import Projects from '@/components/projects/projects'
import MySkills from '@/components/skills/MySkills'

const page = () => {
  return (
    // <div className='bg-gradient-to-br from-primaryVariant to-bgVariant'>
    <div>
      {/* Header */}
      <Hero/>
      {/* About */}
        <div className='min-h-screen'>
          <AboutMe
            personalInfo={myData.personalInfo}
            qualificationsData={myData.qualificationsData}
            // skillsData={myData.skillsData}
          />
          <WorkBanner/>
        </div>

          <ExperienceCards/>
          <MySkills data={skillsData} />
          <Services/>
          <Projects/>
          <ContactPage/>
    </div>
  )
}

export default page
