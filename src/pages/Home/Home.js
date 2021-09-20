import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutThumbnail from '../../components/AboutThumbnail/AboutThumbnail'
import ServiceInfo from '../../components/ServiceInfo/ServiceInfo'
import './Home.css'

const Home = () => {
  return (
    <div className='page'>
      <Hero />
      <AboutThumbnail />
      <ServiceInfo />
      {/* <div className='about-transition'></div> */}
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
