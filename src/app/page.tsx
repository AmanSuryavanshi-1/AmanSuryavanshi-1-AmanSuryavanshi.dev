import React from 'react'
import Hero from "../components/hero/Hero"
import About from "../components/about/AboutMe"
import ExperienceCards from '@/components/about/ExperienceCards'
import WorkBanner from '@/components/about/WorkBanner'
import Services from '@/components/services/services'
const page = () => {
  return (
    // <div className='bg-gradient-to-br from-primaryVariant to-bgVariant'>
    <div className='bg-gradient-to-br from-sage-100 to-lime-500'>
      {/* Header */}
      <Hero/>
      {/* About */}
        <div className='min-h-screen'>
          <About/>
          <WorkBanner/>
        </div>

          <ExperienceCards/>
          <Services/>
      
    </div>
  )
}

export default page
