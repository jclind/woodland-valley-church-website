import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='page error-page'>
      <div className='section-container'>
        <div className='section'>
          <h1 className='section-title'>
            Uh Oh, The Page You Are Looking For Wasn't Found!
          </h1>
          <Link to='/' className='section-button'>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
