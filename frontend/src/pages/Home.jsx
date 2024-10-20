import React from 'react'
import About from '../components/About'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import TalkWithUs from '../components/TalkWithUs'
import OurMission from '../components/OurMission'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurServices />
      <OurMission />
      <Testimonials />
      <TalkWithUs />
    </div>
  )
}

export default Home
