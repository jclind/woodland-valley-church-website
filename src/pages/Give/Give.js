import React from 'react'
import './Give.css'

const Give = () => {
  return (
    <div className='page give-page'>
      <div className='page-hero'>
        <h1 className='page-hero-title'>Give</h1>
        <button className='give-btn'>Give Online</button>
      </div>
      <section className='give-online-container section-container'>
        <div className='section give-online'>
          <h1 className='section-title'>Give Online</h1>
          <p className='section-text'>
            Help support Woodland Valley Church. <br />
            Send a one time payment or setup a monthly recurring gift through
            PayPal's secure transfer.*
          </p>
          <button className='give-btn section-button'>Give Online</button>
          <p className='footnote'>
            * If you are looking to support a specific ministry or missionary
            effort, please notate as such with your donation. We incur an
            administrative fee of 2.2% plus a 30 cent transaction fee.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Give
