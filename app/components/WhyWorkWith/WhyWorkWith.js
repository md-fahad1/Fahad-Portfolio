import React from 'react';
import a from "/public/3.png";
import b  from "/public/4.png";
import c from "/public/5.png";
import d from "/public/6.png";

import Image from 'next/image';

const data = [
  {
    id: 1,
    title: 'Innovative Solutions, Tailored for You',
    description: 'At farseIT, we thrive on innovation. Our team of experts stays at the forefront of technology to deliver web solutions that not only meet today standards but anticipate tomorrow needs. We tailor our solutions to your unique requirements, ensuring your digital presence is as distinctive as your business.',
    imageUrl: a,
  },
  {
    id: 2,
    title: 'Seamless E-Commerce Experiences',
    description: 'For e-commerce ventures, a strong online presence is paramount. farseIT crafts powerful, user-friendly e-commerce platforms that go beyond transactions—they create memorable customer journeys. From secure payment gateways to personalized shopping experiences, we optimize every detail to drive your online success.',
    imageUrl: b, // Update this to a valid image URL
  },
  
  {
    id: 3,
    title: ' Efficient Private Company Operations',
    description: 'Company OperationsIn the competitive landscape of private companies, efficiency is key. farseIT develops customized web applications that streamline internal processes, boost collaboration, and provide actionable insights. Experience seamless operations with our tailored solutions.',
    imageUrl: c, // Update this to a valid image URL
  },
  {
    id: 4,
    title: 'Streamlined School Management',
    description: 'Educational institutions face unique challenges, and farseIT is here to simplify them. Our school management systems are designed to streamline administrative tasks, enhance communication, and elevate overall efficiency. Transform your institution with our intuitive and comprehensive solutions.',
    imageUrl: d, // Update this to a valid image URL
  },
];

const WhyWorkWith = () => {
  return (
    
    <section className=' p-8 xl:p-10 2xl:p-4 h-auto w-full' 
    id='services'>
      <div className='max-w-5xl mx-auto bg-white rounded-lg p-0 xl:p-8 2xl:p-4'>
        <div className='md:text-5xl sm:text-3xl font-extrabold text-blue-400 text-center mt-2 mb-4'>Why Work with Farse IT?</div>
        
        <div className='grid  lg:grid-cols-2  md:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-8 gap-2 2xl:gap-8 sm:gap-3 md:gap-4 lg:gap-5 '>
          {data.map(item => (
            <div key={item.id} style={{ marginBottom: '10px' }} className='bg-white'>
              <Image src={item.imageUrl} alt={item.title} className="w-full h-32 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-80  p-1 " />
              <h1 className=" text-[17px] sm:text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold mt-2 text-center">{item.title}</h1>
              <p className=" text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px]  mt-2 text-justify p-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWith;
