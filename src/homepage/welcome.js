import React from 'react';
import '../App.css';
import './welcome.css';
import logo from './logosaar.png';

function welcome() {
  return (
     <div className='welcome-container'>
        <img src={logo} className="welcome-container" alt="logo" />

      
    </div>
  )
}

export default welcome
