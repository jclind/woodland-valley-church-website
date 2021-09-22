import React, { useEffect } from 'react'
import './Resources.css'
import { resources } from '../../assets/data/resources'

const Resources = () => {
  return (
    <div className='resources-component section-container'>
      <div className='resources section'>
        <h1 className='section-title title'>Resources</h1>
        <div className='items'>
          {resources.map((item, index) => {
            const { name, img, description, link } = item
            return (
              <div className='resource' key={index}>
                <div className='img-box'>
                  <img src={img} alt={name} />
                </div>
                <p className='section-text'>{description}</p>
                <button
                  className='section-button'
                  onClick={() => {
                    window.open(link)
                  }}
                >
                  Visit
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Resources
