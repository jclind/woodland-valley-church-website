import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { sermons, sermonSeries } from '../../assets/data/sermons'
import { youtubeParser } from '../../util/youtubeParser'
import { formatDate } from '../../util/dateUtils'
// import $ from 'jquery'
import './Sermons.css'

const Sermons = () => {
  const sortedSermons = [...sermons].sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <div className='page sermons-page'>
      <div className='page-hero'>
        <div className='page-hero-title'>Past Services</div>
        <Link to='/visit' className='section-button'>
          Watch Live
        </Link>
      </div>
    </div>

    // <div className='page sermons-page'>
    //   <div className='sermons-container'>
    //     <div className='sermons-grid'>
    //       {sortedSermons.map((sermon, idx) => {
    //         const currID = youtubeParser(sermon.link)
    //         const src = `https://www.youtube.com/embed/${currID}`
    //         return (
    //           <div
    //             className={
    //               idx === 0
    //                 ? 'recent-service sermon-container'
    //                 : 'sermon-container'
    //             }
    //           >
    //             <div className='video-container'>
    //               {idx === 0 ? (
    //                 <h1 className='section-title'>Recent Message</h1>
    //               ) : null}

    //               <div className='video'>
    //                 <iframe
    //                   key={idx}
    //                   src={src}
    //                   width='100%'
    //                   height='100%'
    //                   title='YouTube video player'
    //                   frameborder='0'
    //                   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    //                   allowfullscreen
    //                 ></iframe>
    //               </div>
    //             </div>
    //             <h1 className='video-title section-subtitle'>{sermon.title}</h1>
    //             <div className='video-date'>
    //               {formatDate(new Date(sermon.date))}
    //             </div>
    //             <p className='section-text video-description'>
    //               {sermon.description}
    //             </p>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   </div>
    // </div>
  )
}

export default Sermons
