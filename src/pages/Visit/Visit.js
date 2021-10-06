import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillMail, AiFillPhone } from 'react-icons/ai'
import './Visit.css'

const Visit = () => {
  return (
    <div className='page visit-page'>
      <div className='page-hero'>
        <h1 className='page-hero-title'>Visit Us</h1>
        <a
          href='https://www.google.com/maps/place/Woodland+Valley+Church/@40.6976863,-80.013869,17z/data=!3m1!4b1!4m5!3m4!1s0x883486096e776c9d:0x39a54aa72e0525c3!8m2!3d40.6976785!4d-80.0117298'
          target='_blank'
          rel='noopener noreferrer'
          className='section-button'
        >
          Directions
        </a>
      </div>
      <div className='section-container info-container'>
        <div className='seciton info'>
          <div className='time'>
            <h1 className='section-title'>Weekly Service</h1>
            <h3 className='section-subtitle'>Sunday | 10:00 AM</h3>
          </div>
          <div className='info-grid'>
            <div className='to-expect'>
              <h1 className='section-subtitle'>What To Expect</h1>
              <p className='section-text'>
                Our services include a family friendly atmosphere, dynamic
                worship, and applicable preaching from God's Word that can
                impact your life right now.
              </p>
              <p className='section-text childrens-ministry-text'>
                *Children's ministry available every Sunday. <br />
                <Link to='/childrens-ministries' className='link'>
                  More Details
                </Link>
              </p>
            </div>
            <div className='contact'>
              <h1 className='section-subtitle'>Contact Us</h1>
              <div className='contact-info'>
                <div className='email'>
                  <AiFillMail className='icon' />
                  wvcaa@zoominternet.net
                </div>
                <div className='phone'>
                  <AiFillPhone className='icon' />
                  724-625-4500
                </div>
              </div>
            </div>
            <div className='address'>
              <h1 className='section-subtitle'>Address</h1>
              <p className='section-text'>
                225 Crowe Ave,
                <br /> Mars, PA 16046
              </p>
              <a
                href='https://www.google.com/maps/place/Woodland+Valley+Church/@40.6976863,-80.013869,17z/data=!3m1!4b1!4m5!3m4!1s0x883486096e776c9d:0x39a54aa72e0525c3!8m2!3d40.6976785!4d-80.0117298'
                target='_blank'
                rel='noopener noreferrer'
                className='section-button'
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visit
