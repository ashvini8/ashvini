import React, { useState } from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link' 
const Navbar = () => {
  const[click, setClick] = useState(false);

  const[n, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click); 
    document.body.classList.toggle('noscroll');
  }
  
  const handleLinkClick = () => {
    setClick(false);
    document.body.classList.remove('noscroll');
  }

  const changeBG = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBG)

  return (
    <BrowserRouter>
      <div className={n ? 'n active' : 'n'}>
        <ul className={click ? 'n_menuActive' : 'n_menu'}>
          <li className='n_item'><Link to ='#home' smooth className='n_link' onClick={handleLinkClick}>Home</Link></li>
          <li className='n_item'><Link to ='#about' smooth className='n_link' onClick={handleLinkClick}>About</Link></li>
          <li className='n_item'><Link to ='#projectList' smooth className='n_link' onClick={handleLinkClick}>Projects</Link></li>
          <li className='n_item'><Link to ='#contact' smooth className='n_link' onClick={handleLinkClick}>Contact</Link></li>
        </ul>
        <div className="n_hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{color: '#white', marginTop: '10px'}}/>) : (<FaBars size={30} style={{color: 'white', marginTop: '10px'}}/>)}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Navbar