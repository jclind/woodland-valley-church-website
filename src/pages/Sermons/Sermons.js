import React, { useState } from 'react'
import $ from 'jquery'

const Sermons = () => {
  // const [ids, setIds] = useState([])
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
  const channelID = 'UCc6IeASF19Yk7nM3BbOyQng'
  const reqURL = 'https://www.youtube.com/feeds/videos.xml?channel_id='
  $.getJSON(
    'https://api.rss2json.com/v1/api.json?rss_url=' +
      encodeURIComponent(reqURL) +
      channelID,
    function (data) {
      var link = data.items[0].link
      console.log(data.items)
      var id = link.substr(link.indexOf('=') + 1)
      console.log(id)
      $('#youtube_video1').attr(
        'src',
        'https://youtube.com/embed/' + id + '?controls=0&showinfo=0&rel=0'
      )
    }
  )
  $.getJSON(
    'https://api.rss2json.com/v1/api.json?rss_url=' +
      encodeURIComponent(reqURL) +
      channelID,
    function (data) {
      var link = data.items[1].link
      var id = link.substr(link.indexOf('=') + 1)
      console.log(id)
      $('#youtube_video2').attr(
        'src',
        'https://youtube.com/embed/' + id + '?controls=0&showinfo=0&rel=0'
      )
    }
  )
  return (
    <div>
      <iframe
        id='youtube_video1'
        width='600'
        height='340'
        frameborder='0'
      ></iframe>
      <iframe
        id='youtube_video2'
        width='600'
        height='340'
        frameborder='0'
      ></iframe>
    </div>
  )
}

export default Sermons
