import React from 'react'
import "./home.css"  
import {Typewriter, Cursor} from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='h_main' id='home'>
      <div className="h_left">
        <div className="h_left_wrapper">
          <h2 className='h_intro'>Hello, my name is</h2>
            <span className='h_name'>
              <Typewriter
                cursor
                typeSpeed = {70}
                words={['Ashvini Hunagund']}
              />
            </span>
          <div>
            <p className='h_descrip'>
              I'm a third year Computer Science Student at the University of Toronto specializing in Software Engineering.
              I'm open to new experiences within the Software industry and strive to keep learning.
            </p>
          </div>
        </div>
        
      </div>
      <div className="h_right"></div>
    </div>
  )
}

export default Home
