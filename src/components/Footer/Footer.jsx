import React from 'react'
import "./Footer.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone,  FaWhatsapp } from "react-icons/fa"

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'><a href="http://maps.google.com/?q=Siddamanahalli,+Karnataka+583115" target="_blank">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/></a>
            </div>
            <div>
                <p>India Karnataka</p>
                <p>Ballari</p>
            </div>
            <div className='phone'>
            <h4><a href='tel: 7676023599'><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            91-7676023599</a></h4>
            </div>
            <div className='email'>
            <h4><a href='mailto: saisurya2@gmail.com' ><FaMailBulk  size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            saisuryareddy2@gmail.com</a></h4>
            </div>
        </div>
        <div className='right'>
            <h4>About the company</h4>
            <p>This is me sai surya prasad reddy. I enjoy discussing new projects and design challenges.</p><br></br>
            <p>Click On Icons To Reach There.</p>
            <div className='social'>
            <a href='https://github.com/suryareddy1161' target="_blank"><FaGithub  size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
            <a href='https://api.whatsapp.com/send/?phone=917676023599&text=hello.' target="_blank"><FaWhatsapp  size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
            <a href='https://www.linkedin.com/in/sai-surya-prasad-reddy-b-52789221b/' target="_blank"><FaLinkedin  size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
