import React from 'react'
import "./heroimg.css"
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return (
    <div className='hero'>
         <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="IntroImg"/>
        </div> 
        <div className='content'>
            <p>Hi, I'M Sai Surya Prasad Reddy. B</p>
            <h1>Full STACK DEVELOPER</h1>
            <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn-light">contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Heroimg
