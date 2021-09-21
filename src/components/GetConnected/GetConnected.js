import React from 'react'
import './GetConnected.css'
import ImageSlider from '../ImageSlider/ImageSlider'
import { ministriesData } from '../../assets/data/ministries'
const GetConnected = () => {
  return (
    <div className='get-connected-componenet section-container'>
      <div className='get-connected section'>
        <div className='content'>
          <h1 className='title section-title'>Get Connected</h1>
          <p className='section-text'>
            Woodland Valley provides many events and ministries for all ages to
            get connected in a community of fellowship. We'd love to live out
            our faith with you.
          </p>
        </div>
        <div className='slider'>
          <ImageSlider data={ministriesData} />
        </div>
      </div>
    </div>
  )
}

export default GetConnected
