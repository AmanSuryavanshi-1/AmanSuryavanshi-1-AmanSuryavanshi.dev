import Banner from '@/components/sanity/Banner'
import BlogList from '@/components/sanity/BlogList'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[9vh]'>
      <h1>Aman's Weekly Blog</h1>
      <Banner/>
      <BlogList />
      
    </div>
  )
}

export default page
