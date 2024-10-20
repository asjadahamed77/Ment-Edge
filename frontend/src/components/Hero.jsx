import React, { useState, useEffect } from 'react';
import img1 from '../assets/home 1.svg';
import img2 from '../assets/home 3.svg';
import img3 from '../assets/home 4.svg';
import img4 from '../assets/home 5.svg';
import img5 from '../assets/home 6-1.svg';
import img6 from '../assets/home 6.svg';

const images = [img1, img2, img3, img4, img5, img6];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className='flex items-start'>
      <img className='w-full' src={images[currentImageIndex]} alt="Hero" />
    </div>
  );
}

export default Hero;
