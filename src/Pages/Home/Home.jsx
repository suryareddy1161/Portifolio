import React from 'react'
import Footer from '../../components/Footer/Footer'
import Heroimg from '../../components/Heroimg/Heroimg'
import Navbar from '../../components/Navbar/Navbar'
import Work from "../../components/Work/Work"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
