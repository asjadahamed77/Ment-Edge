import React from 'react'
import Map from '../assets/Map.svg'
import Message from '../assets/Message.svg'
import Location from '../assets/Location.svg'
import Phone from '../assets/Phone.svg'

const TalkWithUs = () => {
  return (
    <div className="w-[90%] mx-auto my-12">
      <div className="bg-greyBgColor px-12 py-8 rounded-3xl">
        {/* <div className="contact">
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
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-gray-100">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Let’s Talk With Us
            </h1>

            <div className="flex items-center space-x-4">
              <img src={Message} alt="Email Icon" className="w-6 h-6" />
              <p className="text-lg text-gray-600">mentedge.gmail.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <img src={Phone} alt="Phone Icon" className="w-6 h-6" />
              <p className="text-lg text-gray-600">0212222332</p>
            </div>

            <div className="flex items-center space-x-4">
              <img src={Location} alt="Location Icon" className="w-6 h-6" />
              <p className="text-lg text-gray-600">Colombo, Sri Lanka</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <img
              src={Map}
              alt="Map"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkWithUs
