import React from 'react';
import Image from 'next/image';
import aboutPrince from '../../../public/asset/about prince.jpg';
import { FaCloudDownloadAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className='bg-[#101113] font-clash'>

      <div className="max-w-[1000px] mx-auto pt-16 flex flex-wrap-reverse max-sm:p-4">

      <div className='w-1/2 max-md:w-full'>
        <Image src={aboutPrince} alt='me' />
      </div>

      <div className='w-1/2 max-md:w-full'>
        <h1 className='text-amber-400 text-center text-3xl font-semibold'>About Me</h1>

        <p className='text-center text-white p-4'>
          I am a passionate frontend developer with a keen interest in creating dynamic and responsive frontend applications.
          My journey in frontend development began with a fascination for technology and design, and it has since evolved into a full-fledged career. 
          I enjoy tackling complex problems and finding innovative solutions that enhance user experience.
        </p>

        <p className='text-center text-white p-4'>
          I began my tech journey in 2022, fueled by a passion for learning and creating with code. Since then,
          I’ve had the opportunity to work with multiple companies, including <em className='text-amber-400'>Payr Solution</em> and <em className='text-amber-400'>Onet Solution</em>,
          where I contributed to building real-world applications and improving user experiences.
          These roles taught me the value of clean code, collaboration, and user-focused design. 
          Alongside that, I’ve worked on freelance projects that challenged me to solve problems creatively and deliver functional, 
          client-ready solutions. While I’ve come a long way since I started, I’m still hungry for knowledge — always exploring new technologies, 
          sharpening my skills, and staying open to growth in every project I take on.
        </p>

        <div className='text-center mt-4 text-white flex items-center justify-center'> 
          <div className="relative flex w-fit group overflow-hidden">

          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
          ></span>

          <a href="" className="z-10 px-3 py-1 relative flex items-center justify-center gap-1.5">Resume <FaCloudDownloadAlt /></a>

         </div>
        </div>

      </div>

      </div>

    </div>
  )
}

export default page
