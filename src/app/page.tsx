import React from 'react'
import Hero from "../components/hero/Hero"
import ExperienceCards from '@/components/ExperienceCards'
import WorkBanner from '@/components/WorkBanner'
import Services from '@/components/services/services'
import AboutMe from '../components/about/AboutMe'
const page = () => {
  return (
    // <div className='bg-gradient-to-br from-primaryVariant to-bgVariant'>
    <div className='bg-gradient-to-br from-sage-100 to-lime-500'>
      {/* Header */}
      <Hero/>
      {/* About */}
        <div className='min-h-screen'>
          <AboutMe/>
          <WorkBanner/>
        </div>

          <ExperienceCards/>
          <Services/>
      
    </div>
  )
}

export default page
