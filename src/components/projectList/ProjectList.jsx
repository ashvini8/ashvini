import React from 'react'
import "./projectList.css"
import Projects from '../projects/Projects'
import {projects} from "../../data"

const ProjectList = () => {
  return (
    <div className='pl' id='projectList'>
      <div className='buffer'></div>
        <div className="pl_texts">
            <h1 className='pl_title'>My Projects</h1>
            <p className='pl_descrip'>What I have, and am working on.</p>
        </div>

        <div className="pl_list">
            {projects.map((item) => (
            <Projects key={item.id} img={item.img} link={item.link} />
            ))}
      </div>

    </div>
  )
}

export default ProjectList