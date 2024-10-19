import React from 'react'

const About = () => {
  return (
    <div className='w-[90%] mx-auto my-12'>
      <div className='bg-greyBgColor px-12 py-8 rounded-3xl'>
        <h1 className='text-center text-3xl font-bold'>About</h1>
        <div className='mt-4 flex flex-col gap-2 text-sm sm:text-base'>
            <p>At Ment Edge, we believe that everyone deserves access to expert guidance and support when facing life's challenges. Whether you're dealing with a medical issue, seeking psychological advice, or navigating educational hurdles, finding the right mentor can make all the difference.</p>
            <p>Ment Edge is a platform designed to connect individuals with experienced mentors in the fields of medicine, psychology, and education. Our mission is to empower users by providing a space where they can seek personalized advice, expert consultations, and one-on-one mentoring tailored to their specific needs.</p>
        </div>
      </div>
    </div>
  )
}

export default About
