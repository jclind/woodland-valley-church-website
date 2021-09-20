import React from 'react'
import './AboutThumbnail.css'
import churchImage from '../../assets/images/wv-church-image.jpg'
const AboutThumbnail = () => {
  return (
    <div className='about-component-container'>
      <div className='content'>
        <h1>About WVC</h1>
        <p>
          The purpose of Woodland Valley Church is to celebrate our love for
          God, care for the needs of His children, carry His Message to the
          world, come together as His family and commit to helping that family
          grow closer to Him. This purpose is drawn from God’s Holy Word.
        </p>
        <button className='btn'>More About Us</button>
      </div>
      <div className='image'>
        <img src={churchImage} alt='' className='img' />
      </div>
    </div>
  )
}

export default AboutThumbnail
