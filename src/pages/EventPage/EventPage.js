import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { events } from '../../assets/data/events'
import { formatDate } from '../../util/dateUtils'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { BsArrowLeft } from 'react-icons/bs'
import './EventPage.css'

const EventPage = () => {
  const { id } = useParams()
  const currEvent = events.find(event => {
    return event.id === parseInt(id)
  })
  const { name, img, date, time, description, address } = currEvent
  const d = new Date(date)

  return (
    <div className='page event-page'>
      <div className='section-container'>
        <div className='section'>
          <Link to='/events' className='back-btn'>
            <BsArrowLeft className='back-arrow' />
            Back To Events
          </Link>
          <div className='image-container'>
            <img src={img} alt={name} />
          </div>
          <div className='title'>
            <h1 className='section-title'>{name}</h1>

            <p className='section-text description'>{description}</p>
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
      <p className='section-text help'>
        Questions? We'd love to help:{'   '}
        <span className='email'>wvcaa@zoominternet.net</span>
      </p>
    </div>
  )
}

export default EventPage
