import React from 'react'
import Hero from "../components/hero/Hero"
import ExperienceCards from '@/components/ExperienceCards'
import WorkBanner from '@/components/WorkBanner'
import Services from '@/components/services/services'
import AboutMe from '../components/about/AboutMe'
import ContactPage from '../app/contact/page'
const page = () => {
  return (
    // <div className='bg-gradient-to-br from-primaryVariant to-bgVariant'>
    <div>
      {/* Header */}
      <Hero/>
      {/* About */}
        <div className='min-h-screen'>
          <AboutMe/>
          <WorkBanner/>
        </div>

          <ExperienceCards/>
          <Services/>
          <ContactPage/>
      
    </div>
  )
}

export default page
