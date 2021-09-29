import React from 'react'
import { Link } from 'react-router-dom'
import './Events.css'
import { events } from '../../assets/data/events'
import { getMonthName } from '../../util/dateUtils'
import { formatDate } from '../../util/dateUtils'

const EventArticle = ({ event: { id, name, date, time, img } }) => {
  const d = new Date(date)
  return (
    <article className='event-article'>
      <div className='image-container'>
        <img src={img} alt='' />
        <div className='date'>
          <h1 className='month'>{getMonthName(d)}</h1>
          <h1 className='day'>{d.getDate()}</h1>
        </div>
      </div>
      <div className='content'>
        <h1 className='title'>{name}</h1>
        <p className='time'>{`${formatDate(d)}, ${time}`} </p>
        <Link to={`/events/${id}`} className='more-info-btn section-button'>
          More Info
        </Link>
      </div>
    </article>
  )
}

const Events = () => {
  let modEvents = [...events]
  modEvents.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date)
  })

  return (
    <div className='page events-page'>
      <div className='page-hero'>
        <h1 className='page-hero-title'>What's Happening?</h1>
      </div>
      <div className='section-container events-container'>
        <div className='events section'>
          <h1 className='section-title'>Don't Miss Our Upcoming Events:</h1>
          <div className='grid'>
            {modEvents.map((event, idx) => {
              return <EventArticle event={event} key={idx} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
