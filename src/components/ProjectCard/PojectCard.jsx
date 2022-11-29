import React from 'react'
import "./ProjectCard.css"
import {NavLink} from "react-router-dom"


const PojectCard = (props) => {
  return (
    <div className='project-card'>
            <img src={props.imgsrc} alt='image'/>
            <h2 className='project-tittle'>{props.tittle}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btn'>
             {/*    <a href={props.view}
                     target="_blank"
                     className="btn">
                     VIEW </a> */}
                      <a href={props.source}
                      target="_blank"
                        className="btn">
                      SOURCE </a>
                </div>
            </div>
        </div>
  )
}

export default PojectCard
