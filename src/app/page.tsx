import React from 'react'
import Header from "../components/header/Header"
import About from "../components/about/AboutMe"
const page = () => {
  return (
    // <div className='bg-gradient-to-br from-primaryVariant to-bgVariant'>
    <div className='bg-gradient-to-br from-sage-100 to-lime-500'>
      <Header/>
      <About/>
      <Header/>
    </div>
  )
}

export default page
