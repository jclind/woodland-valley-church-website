import React from 'react'
import './ImageSlider.css'
// import photo from '../../assets/images/get-connected-carousel/wv-help.jpg'
const ImageSlider = ({ data }) => {
  const images = data.map(item => {
    return `../../assets/images/${item.img}`
  })
  console.log(images)
  return (
    <div>
      hi
      <img src='src/assets/images/get-connected-carousel/wv-help.jpg' alt='' />
    </div>
  )
}

export default ImageSlider
