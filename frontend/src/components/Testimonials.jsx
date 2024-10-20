import React from 'react'
import { testimonials } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='w-[90%] mx-auto my-12'>
      <div className='bg-greyBgColor px-12 py-8 rounded-3xl'>
        <h1 className='text-center text-3xl font-bold'>Testimonials</h1>
        <div className='flex items-center justify-center gap-12 mt-6'>
            {
              testimonials.map((item,index)=>(
                <div key={index} className='flex flex-col items-center bg-[#475569] bg-opacity-50 p-8 rounded-2xl text-white'>
                  <img className='w-24 rounded-full' src={item.profileImage} alt="" />
                  <p className='text-white text-3xl mt-1'>{item.userName}</p>
                  <p className='text-gray-200 mt-2 text-center'>"{item.review}"</p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonials
