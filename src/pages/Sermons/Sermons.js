import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { sermons, sermonSeries } from '../../assets/data/sermons'
import { youtubeParser } from '../../util/youtubeParser'
import { formatDate } from '../../util/dateUtils'
// import $ from 'jquery'
import './Sermons.css'

const createEmbededLink = url => {
  const currID = youtubeParser(url)
  const src = `https://www.youtube.com/embed/${currID}?modestbranding=1`
  return src
}

const Sermons = () => {
  const sortedSermons = [...sermons].sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  const recentSermon = sortedSermons[0]
  const pastSermons = sortedSermons.slice(1)

  return (
    <div className='page sermons-page'>
      <div className='page-hero'>
        <div className='page-hero-title'>Past Services</div>
        <Link to='/visit' className='section-button'>
          Watch Live
        </Link>
      </div>
      <div className='section-container recent-sermon-container'>
        <div className='section recent-sermon'>
          <h1 className='section-title'>Recent Sermon</h1>
          <div className='video-container'>
            <div className='video'>
              {recentSermon ? (
                <iframe
                  src={createEmbededLink(recentSermon.link)}
                  width='100%'
                  height='100%'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className='section-container past-sermons-container'>
        <div className='section past-sermons'>
          <h1 className='section-title'>Past Sermons</h1>
          <div className='grid'>
            {pastSermons.map((sermon, idx) => {
              return (
                <div className='video-container' key={idx}>
                  <div className='video'>
                    <iframe
                      src={createEmbededLink(sermon.link)}
                      width='100%'
                      height='100%'
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='section-container past-sermon-series-container'>
        <div className='section past-sermon-series'>
          <h1 className='section-title'>Past Sermon Series</h1>
          <div className='grid'>
            {sermonSeries.map((series, idx) => {
              return (
                <div className='video-container' key={idx}>
                  <div className='video'>
                    <a
                      href={series.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={series.img} alt={series.name} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
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
