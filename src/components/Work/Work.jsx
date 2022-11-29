import React from 'react'
import "../ProjectCard/ProjectCard.css"
import ProjectCard from '../ProjectCard/PojectCard'
import ProjectCardData from '../Data/ProjectData'
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
        {ProjectCardData.map((val,ind)=>{
            return(
                <ProjectCard 
                key={ind}
                imgsrc={val.imgsrc}
                tittle={val.tittle}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
        })}
        </div>
    </div>
  )
}

export default Work
