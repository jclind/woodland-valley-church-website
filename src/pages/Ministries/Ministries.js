import React from 'react'
import { ministriesData } from '../../assets/data/ministries'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import './Ministries.css'

const Ministry = ({ ministry: { img, name, date, time, description } }) => {
  return (
    <section className='section-container ministries-section'>
      <div className='ministries'>
        <div className='head'>
          <div className='image-container'>
            <img src={img} alt={name} />
          </div>
          <div className='content-container'>
            <h1 className='section-title'>{name}</h1>

            <p className='section-text'>{description}</p>
          </div>
        </div>
        <div className='body'>
          <div className='date-time'>
            <div className='icons'>
              {time ? (
                <div className='time'>
                  <AiOutlineClockCircle className='icon' />
                  <p className='label'>Time</p>
                  <p className='text'>{time}</p>
                </div>
              ) : null}
              {date ? (
                <div className='date'>
                  <AiOutlineCalendar className='icon' />
                  <p className='label'>Date</p>
                  <p className='text'>{formatDate(d)}</p>
                </div>
              ) : null}
              {address ? (
                <div className='location'>
                  <IoLocationOutline className='icon' />
                  <p className='label'>Address</p>
                  <p className='text'>{address}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Ministries = () => {
  return (
    <div className='page ministries-page'>
      <div className='page-hero'>
        <h1 className='page-hero-title'>Ministries</h1>
        <h3 className='page-hero-verse'>
          "but we will give ourselves continually to prayer and to the ministry
          of the word"
          <br />
          <span className='ref'>[Acts 6:4]</span>
        </h3>
      </div>
      <Ministry ministry={ministriesData[0]} />
    </div>
  )
}

export default Ministries
