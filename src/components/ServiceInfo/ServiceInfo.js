import React, { useState, useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import './ServiceInfo.css'
import { WiTime10 } from 'react-icons/wi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { useWindowSize } from '../../util/useWindowSize'

const ServiceInfo = () => {
  const { width } = useWindowSize()
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/visit')
  }

  if (width >= 815) {
    return (
      <div className='service-info-component section-container'>
        <div className='service-info-component-container section'>
          <div className='content'>
            <h1 className='section-title'>Sunday Service</h1>
            <h5 className='time section-secondary-title'>
              <WiTime10 className='icon' />
              10:00 AM ~ Every Sunday
            </h5>
            <p className='section-text'>
              Our services include a family friendly atmosphere, dynamic
              worship, and applicable preaching from God's Word that can impact
              your life right now.
            </p>
            <div className='btn-container'>
              <h4 className='btn-title section-secondary-title'>
                <AiOutlineCalendar className='icon' />
                Join Us This Sunday!
              </h4>
              <p className='section-text'>
                Weather you've been following God your whole life, have just
                been saved, or have questions about who Jesus really is,
                Woodland Valley welcomes everyone to find and grow their
                relationship with Jesus.
              </p>
              <button onClick={handleOnClick} className='section-button'>
                Directions And Details
              </button>
            </div>
          </div>
          <div className='invitation-container'>
            <div className='invitation'>
              <blockquote>
                Let me take a moment to extend a personal welcome to you and
                your family, and invite you to experience God at Woodland Valley
                in a real, relevant, and relational way. <br />
                God is not playing some celestial game of hide and seek. He
                desires an intimate relationship with each and every one of us.
                <br />
                Join us as we journey towards God in a way that will impact your
                life for years to come, and for all eternity.
                <br />
                Thank you and enjoy.
                <span>Pastor Norb Levesque</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='service-info-component section-container'>
      <div className='service-info-component-container section'>
        <h1 className='section-title'>Sunday Service</h1>
        <h5 className='time section-secondary-title'>
          <WiTime10 className='icon' />
          10:00 AM ~ Every Sunday
        </h5>
        <div className='invitation-container'>
          <div className='invitation'>
            <blockquote>
              Let me take a moment to extend a personal welcome to you and your
              family, and invite you to experience God at Woodland Valley in a
              real, relevant, and relational way. <br />
              <br />
              God is not playing some celestial game of hide and seek. He
              desires an intimate relationship with each and every one of us.
              <br />
              <br />
              Join us as we journey towards God in a way that will impact your
              life for years to come, and for all eternity.
              <br />
              Thank you and enjoy.
              <span>Pastor Norb Levesque</span>
            </blockquote>
            {/* <p>
                Let me take a moment to extend a personal welcome to you and
                your family, and invite you to experience God at Woodland Valley
                in a real, relevant, and relational way. God is not playing some
                celestial game of hide and seek. He desires an intimate
                relationship with each and every one of us. Join us as we
                journey towards God in a way that will impact your life for
                years to come, and for all eternity. Thank you and enjoy.
              </p>
              <div className='tag'>- Pastor Norb Levesque</div> */}
          </div>
        </div>
        <h4 className='btn-title section-secondary-title'>
          <AiOutlineCalendar className='icon' />
          Join Us This Sunday!
        </h4>
        <button onClick={handleOnClick} className='section-button'>
          Directions And Details
        </button>
      </div>
    </div>
  )
}

export default ServiceInfo
