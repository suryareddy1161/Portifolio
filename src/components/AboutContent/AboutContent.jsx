import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContent.css"
import React2 from "../../assets/react2.webp"
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a Full Stack Developer. I create
                responsive secure websites.
            </p>
            <div className='barab'></div>
            <h1>Skills</h1>
            <div className='barab1'></div>
            <p>HTML, CSS, Javascript, React.Js, Redux, Bootstrap, Node Js, Express js, Mongodb</p>
            <div className='barab'></div>
            <h1>Education</h1>
            <div className='barab1'></div>
            <div className='dip'>Diploma(EEE) DTE in 2021 with 66%</div>
            <p>Sanjay Gandhi Polytechnic, Bellari</p>
            <div className='barab1'></div>
            <div className='dip'>Class X in2017 with 66%</div>
            <p>Shree Jananakshi vidyanikethan Residential School, Davangere Herahosahalli</p>
            <div className='barab'></div>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBU0oczpg7RdFd8H2jL8mXwzpm1-REr3DEg&usqp=CAU"/* {React1} */ className="img" alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className="img" alt='true'/>
                </div>

            </div>
        </div>
      
    </div>
  )
}
import "./AboutContent.css"
export default AboutContent
