import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutThumbnail from '../../components/AboutThumbnail/AboutThumbnail'
import ServiceInfo from '../../components/ServiceInfo/ServiceInfo'
import ChildrensMinistry from '../../components/ChildrensMinistry/ChildrensMinistry'
import GetConnected from '../../components/GetConnected/GetConnected'
import './Home.css'

const Home = () => {
  return (
    <div className='page'>
      <Hero />
      <AboutThumbnail />
      <ServiceInfo />
      <ChildrensMinistry />
      <GetConnected />
      {/* <div className='about-transition'></div> */}
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
