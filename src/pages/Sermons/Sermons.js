import React, { useState } from 'react'
import { sermons, sermonSeries } from '../../assets/data/sermons'
import { youtubeParser } from '../../util/youtubeParser'
// import $ from 'jquery'

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
    <div>
      {sortedSermons.map((sermon, idx) => {
        const currID = youtubeParser(sermon.link)
        const src = `https://www.youtube.com/embed/${currID}`
        return (
          <iframe
            width='1280'
            height='720'
            src={src}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        )
      })}
    </div>
  )
}

export default Sermons
