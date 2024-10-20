import React from 'react'
import img from '../assets/logo.png'
const Profile = () => {
  return (
    <div className='min-h-screen flex justify-around items-start'>
      <div className='bg-greyBgColor px-4 py-6 mt-12 rounded-xl w-full sm:w-[400px]'>
        <div className='flex gap-4 items-center '>
          <img className='w-20 rounded-full' src={img} alt="" />
          <p className='text-xl font-medium'>Jeya Prashanth</p>
        </div>
        <div className='mt-6'>
          <p className='font-medium text-lg'>Gmail</p>
          <p className='text-md'>jpyhsgb@gmail.com</p>
        </div>
        <div>
          <p className='font-medium text-lg'>Phone</p>
          <p className='text-md'>0745678965</p>
        </div>
        <div className='w-full mt-4'>
          <button className='w-full text-center py-2 bg-secondaryColor text-white rounded'>Edit Profile</button>
        </div>
      </div>
      <div className='bg-greyBgColor px-4 py-6 mt-12 rounded-xl w-full sm:w-[400px]'>
        <h1 className='text-center text-xl font-semibold'>Favourites</h1>
        
        <div className='grid grid-cols-2 gap-6 mt-6'>
          <button className='py-4 px-8 bg-mainColor rounded-3xl text-white cursor-pointer '>Education Mentor</button>
          <button className='py-4 px-8 bg-mainColor rounded-3xl text-white cursor-pointer '>Medical Mentor</button>
          <button className='py-4 px-8 bg-mainColor rounded-3xl text-white cursor-pointer '>Psychology Mentor</button>
        </div>
        
      </div>
    </div>
  )
}

export default Profile
