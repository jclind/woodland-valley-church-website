import React, { Suspense, useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './ImageSlider.css'
// import photo from '../../assets/images/get-connected-carousel/wv-help.jpg'

// function MyImageComponent({ obj }) {
//   const { src } = useImage({
//     srcList: `${obj.img}`,
//   })
//   return <img src={src} alt={obj.name} />
// }

const ImageSlider = ({ data }) => {
  const [current, setCurrent] = useState(0)
  const images = data.map(item => {
    return { name: item.name, img: item.img }
  })
  const length = images.length

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1)
  //   }, 6000)
  //   return () => clearInterval(interval)
  // })

  if (!Array.isArray(data) || length <= 0) {
    return null
  }

  console.log(images)
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      className='carousel-component'
    >
      {images.map((item, idx) => {
        return (
          <div className='img-container'>
            <img src={item.img} alt={item.name} />
          </div>
        )
      })}
      {/* <div>
        <img src='https://i.ibb.co/G5BsRbF/wv-jesus-jungle.jpg' alt='' />
      </div>
      <div>
        <img src='https://i.ibb.co/GcRY0LY/wv-mens-bible-study.jpg' alt='' />
      </div> */}
    </Carousel>
  )
}

export default ImageSlider
