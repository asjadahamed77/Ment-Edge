import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='bg-secondaryColor text-white'>
      <div className='flex justify-between  px-12 py-8'>
        <div className='flex items-center gap-4 flex-1'>
            <img className='w-32' src={logo} alt="" />
            <div className=''>
                <p className='text-white'>Social Media</p>
                <p className='text-white'>Contact No</p>
                <p className='text-white'>Mail</p>
                <p className='text-white'>Privacy, Terms & Conditions</p>
            </div>
        </div>
        <div className='flex flex-col'>
        <hr className='bg-white border border-white   h-full' />
        </div>
        <div className='text-white flex flex-col justify-center items-center flex-1'>
        <p className='text-white items-start'>Home</p>
        <p className='text-white items-start'>About</p>
        <p className='text-white items-start'>Services</p>
        <p className='text-white items-start'>Contact us</p>
        </div>
      </div>
      <p className='text-center text-white my-2 mx-auto'>copyright 2024. all rights reserved</p>
      <div className='flex flex-col py-2'>
        <hr className='bg-white border border-white   w-[90%] mx-auto' />
        </div>
    </div>
  )
}

export default Footer
