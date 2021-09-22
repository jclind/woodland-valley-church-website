import React from 'react'
import './EmailList.css'

const EmailList = () => {
  return (
    <div className='section-container email-list-component'>
      <div className='section email-list'>
        <div className='title'>
          <h1 className='section-title'>Be Inspired</h1>
          <h1 className='section-subtitle'>
            Enter your name and email to subscribe to our newsletter
          </h1>
        </div>
        <form action='' className='form'>
          <label htmlFor=''>
            Name:
            <input type='text' className='name' />
          </label>
          <label htmlFor=''>
            Email:
            <input type='text' className='name' />
          </label>
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default EmailList
