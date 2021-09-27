import React from 'react'
import './Give.css'
import { BiMailSend, BiBox } from 'react-icons/bi'

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
      <section className='other-options-container section-container'>
        <div className='section other-options'>
          <h1 className='section-title'>Other Ways To Give</h1>
          <div className='articles'>
            <article className='in-person'>
              <h3 className='section-secondary-title title'>
                <BiBox className='icon' />
                In Person
              </h3>
              <p className='section-text'>
                Join us for Sunday Service and drop your donation in the
                offering or feel free to place in our lock box outside the main
                entrance.
              </p>
            </article>
            <article className='mail'>
              <h3 className='section-secondary-title title'>
                <BiMailSend className='icon' />
                By Mail
              </h3>
              <p className='section-text'>
                Simply mail your donation to:
                <br />{' '}
              </p>
              <p className='strong section-text'>
                Woodland Valley Church
                <br /> P.O. Box 815
                <br /> Mars, PA 16046
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Give
