import React, { useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import AboutThumbnail from '../../components/AboutThumbnail/AboutThumbnail'
import ServiceInfo from '../../components/ServiceInfo/ServiceInfo'
import ChildrensMinistry from '../../components/ChildrensMinistry/ChildrensMinistry'
import GetConnected from '../../components/GetConnected/GetConnected'
import Resources from '../../components/Resources/Resources'
import * as smoothscroll from 'smoothscroll-polyfill'
import './Home.css'
smoothscroll.polyfill()

const Home = () => {
  const aboutComponent = useRef()

  const scrollToComponent = () => {
    const isMobile = navigator.userAgent.match(
      /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
    )
    if (isMobile) {
      aboutComponent.current.scrollIntoView(true)
    } else {
      aboutComponent.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='page'>
      <Hero scrollToComponent={scrollToComponent} />
      <AboutThumbnail passRef={aboutComponent} />
      <ServiceInfo />
      <ChildrensMinistry />
      <GetConnected />
      <Resources />
    </div>
  )
}

export default Home
