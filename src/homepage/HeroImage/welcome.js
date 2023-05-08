import React from 'react';
import './welcome.css';
import logo from './logosaar.png';

function HeroImage() {
  return (
    <div className='welcome-container'>
      <section className='hero-section'>
        <img src={logo} className="img-fluid" alt="logo1" />
      </section>
    </div>
  );
}

export default HeroImage;
