import React from 'react'
import { ministriesData } from '../../assets/data/ministries'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import './Ministries.css'

const Ministry = ({
  ministry: {
    img,
    name,
    date,
    time,
    description,
    address,
    missionsStatement,
    verse,
  },
  idx,
}) => {
  return (
    <section className='section-container ministries-section'>
      <div className='ministries'>
        <div className={idx % 2 !== 0 ? 'head reverse' : 'head'}>
          {img ? (
            <div className='image-container'>
              <img src={img} alt={name} />
            </div>
          ) : null}
          <div className='content-container'>
            <h1 className='section-title'>{name}</h1>
            {date || time || address ? (
              <div className='date-time'>
                <div className='icons'>
                  {time ? (
                    <div className='time'>
                      <AiOutlineClockCircle className='icon' />
                      <p className='label'>Time:</p>
                      <p className='text'>{time}</p>
                    </div>
                  ) : null}
                  {date ? (
                    <div className='date'>
                      <AiOutlineCalendar className='icon' />
                      <p className='label'>Date:</p>
                      <p className='text'>{date}</p>
                    </div>
                  ) : null}
                  {address ? (
                    <div className='location'>
                      <IoLocationOutline className='icon' />
                      <p className='label'>Address:</p>
                      <p className='text'>{address}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
            {description ? <p className='section-text'>{description}</p> : null}
          </div>
        </div>
        {missionsStatement || verse.text ? (
          <div className='body'>
            <div className='statements'>
              {missionsStatement ? (
                <div className='missions-statement'>
                  <div className='title section-subtitle'>
                    Missions Statement:
                  </div>
                  <p className='text section-text'>{missionsStatement}</p>
                </div>
              ) : null}
              {verse.text ? (
                <div className='ministry-verse'>
                  <div className='title section-subtitle'>Ministry Verse:</div>
                  <p className='text section-text verse'>
                    {verse.text} <span className='ref'>-{verse.ref}</span>
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
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
      <div className='ministries-container'>
        {ministriesData.map((ministry, idx) => {
          return <Ministry ministry={ministry} idx={idx} key={idx} />
        })}
      </div>
      <p className='section-text help'>
        Questions? We'd love to help:{'   '}
        <span className='email'>wvcaa@zoominternet.net</span>
      </p>
    </div>
  )
}

export default Ministries
