import React, { useState } from 'react'
import './Navbar.css'
import { MenuItems } from "../MenuItems"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className='main-nav'>
        <div className='logo'>
          <h2><span>S</span>SAAR
            <span>H</span>HealthCare</h2>
        </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>{item.title}</Link>
                </li>
              );
            })}

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
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
