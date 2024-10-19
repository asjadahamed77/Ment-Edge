import React from 'react'
import img1 from '../assets/serv edu.png'
import img2 from '../assets/serv medi.png'
import img3 from '../assets/serv psycho.png'
const OurServices = () => {
  return (
    <div className='w-[90%] mx-auto my-12'>
      <div className='bg-greyBgColor px-12 py-8 rounded-3xl'>
        <h1 className='text-center text-3xl font-bold'>Our Services</h1>
        <div className='flex items-center justify-center gap-20 mt-6'>
            <div className='relative cursor-pointer'>
                <img className='w-full h-full object-cover rounded-2xl' src={img1} alt="" />
                <p className='absolute inset-0 text-white  text-3xl rounded-2xl flex items-center justify-center bg-black bg-opacity-50'>Education Mentor</p>
            </div>
            <div className='relative cursor-pointer'>
                <img className='w-full h-full rounded-2xl' src={img2} alt="" />
                <p className='absolute inset-0 text-white text-3xl rounded-2xl  flex items-center justify-center bg-black bg-opacity-50'>Medical Mentor</p>
            </div>
            <div className='relative cursor-pointer'>
                <img className='w-full h-full rounded-2xl' src={img3} alt="" />
                <p className='absolute inset-0 text-white text-3xl rounded-2xl flex items-center justify-center bg-black bg-opacity-50'>Psychology Mentor</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices

