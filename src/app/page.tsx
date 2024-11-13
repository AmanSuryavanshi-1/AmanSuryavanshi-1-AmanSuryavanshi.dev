import React from 'react'
import Header from "../components/hero/Hero"
import About from "../components/about/AboutMe"
import ExperienceCards from '@/components/about/ExperienceCards'
import WorkBanner from '@/components/about/WorkBanner'

const page = () => {
  return (
    // <div className='bg-gradient-to-br from-primaryVariant to-bgVariant'>
    <div className='bg-gradient-to-br from-sage-100 to-lime-500'>
      {/* Header */}
      <Header/>
      {/* About */}
        <div className='h-[94vh]'>
          <About/>
          <WorkBanner/>
        </div>

          <ExperienceCards/>
      
    </div>
  )
}

export default page
