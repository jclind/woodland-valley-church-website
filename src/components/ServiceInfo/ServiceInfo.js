import React, { useState, useLayoutEffect } from 'react'
import './ServiceInfo.css'
import { WiTime10 } from 'react-icons/wi'

function useWindowSize() {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return width
}

const ServiceInfo = () => {
  const width = useWindowSize()

  if (width >= 815) {
    return (
      <div className='service-info-component'>
        <div className='service-info-component-container'>
          <div className='content'>
            <h1 className='title'>Sunday Service</h1>
            <h5 className='time'>
              <WiTime10 />
              10:00 AM ~ Every Sunday
            </h5>
            <p className='service-info-text'>
              Our services include a family friendly atmosphere, dynamic
              worship, and applicable preaching from God's Word that can impact
              your life right now.
            </p>
            <div className='btn-container'>
              <h4 className='btn-title'>Join Us This Sunday!</h4>
              <button>Directions And Details</button>
            </div>
          </div>
          <div className='invitation-container'>
            <div className='invitation'>
              <p>
                Let me take a moment to extend a personal welcome to you and
                your family, and invite you to experience God at Woodland Valley
                in a real, relevant, and relational way. God is not playing some
                celestial game of hide and seek. He desires an intimate
                relationship with each and every one of us. Join us as we
                journey towards God in a way that will impact your life for
                years to come, and for all eternity. Thank you and enjoy.
              </p>
              <div className='tag'>- Pastor Norb Levesque</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='service-info-component'>
      <div className='service-info-component-container'>
        <h1 className='title'>Sunday Service</h1>
        <h5 className='time'>10:00 AM ~ Every Sunday</h5>
        <div className='invitation-container'>
          <div className='invitation'>
            <p>
              Let me take a moment to extend a personal welcome to you and your
              family, and invite you to experience God at Woodland Valley in a
              real, relevant, and relational way. God is not playing some
              celestial game of hide and seek. He desires an intimate
              relationship with each and every one of us. Join us as we journey
              towards God in a way that will impact your life for years to come,
              and for all eternity. Thank you and enjoy.
            </p>
            <p className='tag'>- Pastor Norb Levesque</p>
          </div>
        </div>
        <h4 className='btn-title'>Join Us This Sunday!</h4>
        <button>Directions And Details</button>
      </div>
    </div>
  )
}

export default ServiceInfo
