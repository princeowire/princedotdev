import React from 'react';
import Image from 'next/image';
import aboutPrince from '../../../public/asset/about prince.jpg';

const page = () => {
  return (
    <div className='bg-[#101113]'>

      <div className="max-w-[1000px] mx-auto pt-16 flex">

      <div className='w-1/2'>
        <Image src={aboutPrince} alt='me' />
      </div>

      <div className='w-1/2'>
        <h1 className='text-amber-400 text-center text-3xl font-semibold'>About Me</h1>

        <p className='text-center text-white p-4'>
          I am a passionate frontend developer with a keen interest in creating dynamic and responsive frontend applications.
          My journey in frontend development began with a fascination for technology and design, and it has since evolved into a full-fledged career. 
          I enjoy tackling complex problems and finding innovative solutions that enhance user experience.
        </p>

        <p className='text-center text-white p-4'>
         I started my tech journey in 2022, driven by a passion for solving problems through code. Since then, I’ve built several personal projects, collaborated on open-source work, and gained hands-on experience during my internship at [Company Name], where I worked on building responsive web apps. My background in [mention past job if relevant] taught me the value of teamwork and clear communication, which I now bring into every tech project I take on.goals
        </p>

      </div>

      </div>

    </div>
  )
}

export default page
