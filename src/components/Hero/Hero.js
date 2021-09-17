import React from 'react'
import homeImage from '../../assets/images/woodland-valley-home.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={homeImage} alt='Hero Image' className='img' />
    </div>
  )
}

export default Hero
