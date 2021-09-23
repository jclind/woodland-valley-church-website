import React from 'react'
import { AiOutlineInstagram, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='section-container'>
      <div className='section'>
        <h1 className='title'>Woodland Valley Church</h1>
        <h3 className='subtitle'>Together we make a difference.</h3>
        <div className='social-links'>
          <div className='icon'>
            <AiOutlineInstagram />
          </div>
          <div className='icon'>
            <GrFacebookOption />
          </div>
          <div className='icon'>
            <FaYoutube />
          </div>
        </div>
        <div className='contact-info'>
          <div className='email'>
            <AiFillMail className='icon' />
            wvcaa@zoominternet.net
          </div>
          <div className='phone'>
            <AiFillPhone className='icon' />
            724-625-4500
          </div>
          <div className='address'>
            <span Crowe Avenuespan className='avoid-wrap'>
              225 Crowe Avenue
            </span>
            {', '}
            <span Crowe Avenuespan className='avoid-wrap'>
              P.O. Box 815
            </span>{' '}
            <span Crowe Avenuespan className='avoid-wrap'>
              Mars, PA 16046
            </span>
          </div>
        </div>
        <div className='copyright'>
          &copy;{new Date().getFullYear} Woodland Valley Church
        </div>
      </div>
    </footer>
  )
}

export default Footer
