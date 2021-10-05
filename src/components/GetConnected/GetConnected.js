import React from 'react'
import { useHistory } from 'react-router'
import './GetConnected.css'

const GetConnected = () => {
  const history = useHistory()
  const handleOnClick = () => {
    history.push('/events')
  }

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
          <button onClick={handleOnClick} className='section-button'>
            Get Connected
          </button>
        </div>
        {/* <div className='image'>
          <img src={getConnectedImage} alt='' />
        </div> */}
      </div>
    </div>
  )
}

export default GetConnected
