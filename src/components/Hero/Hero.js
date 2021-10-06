import React from 'react'
import { useHistory } from 'react-router'
import homeImage from '../../assets/images/woodland-valley-home.jpg'
import { useWindowSize } from '../../util/useWindowSize'
import './Hero.css'
const Hero = ({ scrollToComponent }) => {
  const { height } = useWindowSize()
  const history = useHistory()
  return (
    <div
      className='hero-container'
      style={{ height: `calc(${height}px - var(--mobile-nav-height))` }}
    >
      <img src={homeImage} alt='Hero' className='img' />
      <div className='content-container'>
        <div className='content'>
          <h1 className='title'>
            Together
            <span className='break' /> We Make A Difference.
          </h1>
          <h2>
            <span>Worship With Us</span>
            <div className='line'></div>
            <span>10AM Every Sunday</span>
          </h2>
          <div className='btns'>
            <button className='btn' onClick={() => {}}>
              Online
            </button>
            <button
              className='btn'
              onClick={() => {
                history.push('/visit')
              }}
            >
              In-Person
            </button>
          </div>
          <div className='arrow' onClick={scrollToComponent}></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
