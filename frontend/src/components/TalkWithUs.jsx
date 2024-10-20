import React from 'react'
import Map from '../assets/Map.svg'
import Message from '../assets/Message.svg'
import Location from '../assets/Location.svg'
import Phone from '../assets/Phone.svg'

const TalkWithUs = () => {
  return (
    <div className='w-[90%] mx-auto my-12'>
      <div className='bg-greyBgColor px-12 py-8 rounded-3xl'>
      <div className="contact">
          <div className="contact right">
            <h1>Let’s Talk With Us</h1>
            <div className="contact-detail">
              <img src={Message} alt="" />
              <p>mentedge.gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={Phone} alt="" />
              <p>0212222332</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="" />
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className="contact left">
            <img src={Map} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkWithUs
