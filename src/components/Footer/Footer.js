import React from 'react'
import './Footer.css'
import logo from '../../assets/images/woodland-valley-logo.png'
const Footer = () => {
  return (
    <footer className='section-container'>
      <div className='section'>
        <img src={logo} className='logo' alt='WVC logo' />
        <h1 className='section-title'>This is the footer</h1>
      </div>
    </footer>
  )
}

export default Footer
