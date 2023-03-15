import React, { useState } from 'react'
import './Navbar.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
import{GiHamburgerMenu} from "react-icons/gi"

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
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
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
  <section className='hero-section'>
    <p>Welcome to </p>
    <h1>SaarHealthcare </h1> </section>
    </div>
  )
}

export default Navbar
