import React from 'react'
import './about.css'
import me from "../../img/me.jpg"

const About = () => {
  return (
    <div className='a' id='about'>
      <div className="a_left">
        <div className="a_card bg"></div>
        <div className="a_card">
          <img src={me} alt="picture of me, ashvini hunagund" className="a_img" />
        </div>
      </div>

      <div className="a_right">
        <h1 className='a_title'>About Me</h1>
        <p className='a_descrip'>
          I’m experienced with multiple programming languages such as Python, Javascript, C and Java and other languages such as HTML5 and CSS3 through my knowledge in web development.
          I’ve also worked with tools like Git, Firebase, Jira and the React framework.
          I’m still enthusiastically learning many more programming languages and frameworks through self-learning and school.
        </p>

        <h3>What I've been working with:</h3>
        <ul>
          <li><span>HTML</span></li>
          <li><span>CSS</span></li>
          <li><span>JavaScript</span></li>
          <li><span>Java</span></li>
          <li><span>C</span></li>
          <li><span>ReactJS</span></li>
          <li><span>Python</span></li>
        </ul>
      </div>
      
    </div>
  )
}

export default About