import React from 'react'
import './EmailList.css'

const EmailList = () => {
  return (
    <div className='section-container email-list-component'>
      <div className='section email-list'>
        <div className='title'>
          <h1 className='section-title'>Be Inspired</h1>
          <p className='section-text'>
            Enter your name and email to subscribe to our newsletter
          </p>
        </div>
        <form action='' className='form'>
          <input type='text' className='name' placeholder='Your Name' />
          <input type='text' className='email' placeholder='Your Email' />
          <button className='section-button'>Subscribe Now</button>
        </form>
      </div>
    </div>
  )
}

export default EmailList
