import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeroImg2 from '../../components/heroImg2/HeroImg2'
import Navbar from '../../components/Navbar/Navbar'
import Priceing from '../../components/Priceing/Priceing'
import Work from '../../components/Work/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." 
      text="Some of my most recent works."/>
      <Work/>
      <Priceing/>
      <Footer/>
    </div>
  )
}

export default Project
