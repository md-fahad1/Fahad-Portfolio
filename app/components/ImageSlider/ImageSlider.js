"use client"
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const spinningDivs = document.querySelectorAll('.spinning-div');

      spinningDivs.forEach(div => {
        const divTop = div.getBoundingClientRect().top;
        if (divTop <= 0) {
          setIsAtTop(true);
          return; // Exit the loop once one div is found at the top
        }
      });

      // If none of the spinning divs are at the top, set isAtTop to false
      setIsAtTop(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='h-screen bg-gray-500 flex justify-center items-center'>
      <div className={`relative animate-spin-extraslow ${isAtTop ? 'scale-200' : ''}`}>
        <div 
          className={`spinning-div w-32 h-32 rounded-md bg-red-600 transform absolute top-2 left-2 ${isHovered ? 'w-40 h-40' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div className='spinning-div w-32 h-32 rounded-md bg-yellow-600 transform absolute top-2 right-2'></div>
        <div className='spinning-div w-32 h-32 rounded-md bg-green-600 transform absolute bottom-2 left-2'></div>
        <div className='spinning-div w-32 h-32 rounded-md bg-blue-600 transform absolute bottom-2 right-2'></div>
      </div>
    </div>
  );
}

export default ImageSlider;
