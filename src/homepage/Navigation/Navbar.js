import React, { useState } from 'react'
import './Navbar.css'
import { MenuItems } from "../MenuItems"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
  
 <nav className="navbar navbar-expand-lg bg-light fixed-top">
<div className="container-fluid">
        <div className='logo'>
          <h2><span></span>SAAR
            <span>H</span>HealthCare</h2>
        </div>
       
  
    
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul className=" nav nav-underline ">
            {MenuItems.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
        
                  <a className="nav-link "><Link className={item.cName} to={item.url}>{item.title}</Link>
                  </a>
                  
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
       
           
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation"onClick={() => setShowMediaIcons(!showMediaIcons)}>
      <span className="navbar-toggler-icon"></span>
    </button>
  
  
           
        
          </div> 
        
</div>         
</nav>


      
)
 }

export default Navbar;
