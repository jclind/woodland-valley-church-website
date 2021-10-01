import React, { useState } from 'react'
import { sermons, sermonSeries } from '../../assets/data/sermons'
import { youtubeParser } from '../../util/youtubeParser'
import { formatDate } from '../../util/dateUtils'
// import $ from 'jquery'
import './Sermons.css'

const Sermons = () => {
  const sortedSermons = [...sermons].sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  // const [sermons, setSermons] = useState([])
  // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCc6IeASF19Yk7nM3BbOyQng&key=AIzaSyALaz3TYItdDed52907J0A-KlgoipMxIFg`
  // fetch(url)
  //   .then(res => res.json())
  //   .then(function (data) {
  //     // console.log(
  //     console.log(data)
  //     const videos = data.items.filter(item => {
  //       return item.id.kind === 'youtube#video'
  //     })
  //     setIds(videos.map(item => item.id.videoId))
  //     // )
  //   })
  //   .catch(err => console.log(err))
  //

  return (
    <div className='page sermons-page'>
      <div className='sermons-container'>
        <h1 className='section-title'>Recent Message</h1>
        <div className='sermons-grid'>
          {sortedSermons.map((sermon, idx) => {
            const currID = youtubeParser(sermon.link)
            const src = `https://www.youtube.com/embed/${currID}`
            return (
              <div className='video-container'>
                <div className='video'>
                  <iframe
                    key={idx}
                    src={src}
                    width='100%'
                    height='100%'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    className={idx === 0 ? 'recent-service' : null}
                    allowfullscreen
                  ></iframe>
                </div>
                <h1 className='video-title section-subtitle'>{sermon.title}</h1>
                <div className='video-date'>
                  {formatDate(new Date(sermon.date))}
                </div>
                <p className='seciton-text video-description'>
                  {sermon.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sermons
