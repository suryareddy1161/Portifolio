import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import HeroImg2 from '../../components/Heroimg2/HeroImg2'
import Navbar from '../../components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2
      heading="CONTACT." 
      text="Lets have a chat"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
