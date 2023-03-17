import React, { useState } from 'react'
import './Navbar.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
import{GiHamburgerMenu} from "react-icons/gi"
import logo1 from './logosaar.png';
import  './welcome.css'



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons]= useState(false);
  return (
    <div>
  <nav className='main-nav'>
    <div className='logo'>
        <h2><span>S</span>AAR
        <span>H</span>ealthCare</h2>
    </div>
    <div className= {showMediaIcons ?  "menu-link mobile-menu-link" : "menu-link"}>
        <ul>
            <li>
                <a href='#'>Login</a>
   </li>
   <li>
                <a href='#'>Request appointment</a>

            </li>
            <li>
                <a href='#'>Treatments</a>

            </li>
        </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        {/* hamburguer menu start */}
        <div className='hamburger-menu'>
            <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu/>
            </a>
        </div>
    </div>

  </nav>
  <div className='welcome-container'>
   <section className='hero-section'>
  
       <img src={logo1} className="welcome-container" alt="logo1" />
    
      
    </section> </div>
    </div>
  )
}

export default Navbar
