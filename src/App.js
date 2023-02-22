import React from 'react'

import {About,Projects, Contact, Navbar} from './components';
import ProjectList from './components/projectList/ProjectList';
import {Home, Footer} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='top'>
          <Navbar/>
          <Home/>
        </div>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App