import React from 'react'
import homeImage from '../../assets/images/woodland-valley-home.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={homeImage} alt='Hero' className='img' />
      <div className='content-container'>
        <div className='content'>
          <h1 className='title'>
            Together
            <span className='break' /> We Make A Difference
          </h1>
          <h2>Worship With Us</h2>
          <div className='btns'>
            <button className='btn'>Online</button>
            <button className='btn'>In-Person</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
