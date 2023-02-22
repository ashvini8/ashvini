import React from 'react'
import "./projects.css"

const Projects = ({img,name,link}) => {
  return (
    <div className="p">
      <div className="p_browser">
        <div className="p_circle" id='red'></div>
        <div className="p_circle" id='yellow'></div>
        <div className="p_circle" id='green'></div>
      </div>
      <div className="p_content">
        <a href={link} target="_blank" rel="noreferrer">
          <h5 className='p_caption'>see source code</h5>
          <img src={img} alt="" className="p_img" />
        </a>
      </div>
    </div>
  )
}

export default Projects