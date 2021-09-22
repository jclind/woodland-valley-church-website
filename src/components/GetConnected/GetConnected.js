import React from 'react'
// import getConnectedImage from '../../assets/images/wv-get-connected.jpg'
import './GetConnected.css'

const GetConnected = () => {
  return (
    <div className='get-connected-component section-container'>
      <div className='get-connected section'>
        <div className='content'>
          <h1 className='title section-title'>Join Our Community</h1>
          <p className='section-text'>
            Woodland Valley provides many events and ministries for all ages to
            get connected in a community of fellowship. We'd love to live out
            our faith with you.
          </p>
          <button className='section-button'>Get Connected</button>
        </div>
        {/* <div className='image'>
          <img src={getConnectedImage} alt='' />
        </div> */}
      </div>
    </div>
  )
}

export default GetConnected
