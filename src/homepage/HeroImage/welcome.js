import React from 'react';
import './welcome.css';
import logo from './logo.jpg';

function HeroImage() {
  return (
    <div className='welcome-container'>
      <section className='hero-section'>
        <img src={logo} className="welcome-container" alt="logo1" />
      </section>
    </div>
  );
}

export default HeroImage;
