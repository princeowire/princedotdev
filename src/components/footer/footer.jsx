import React from 'react'

import { CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import logo from '../../../public/asset/logodotprince.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#3E3E3E] text-white'>
      <div className='max-w-[1000px] flex flex-wrap flex-col gap-4 m-auto max-lg:px-4 py-8'>

        <div>
          <a href="./"><Image className='w-[40px] h-[40px] rounded-[50px]' src={logo} alt='logo' /></a>
        </div>

        <div className='flex items-center gap-4 justify-between max-sm:justify-center flex-wrap'>
          <p className=''>Made with love by  <a id='prince' className='underline' href="https://x.com/OwirePrince">Prince Owire</a></p>

          <div className="flex gap-6">
            <a id='prince' className='h-12 w-12' href="https://www.linkedin.com/in/prince-owire-841187250/" target="_blank"><CiLinkedin className="w-6 h-6" /></a>
            <a id='prince' className='h-12 w-12' href="https://github.com/princeowire" target="_blank"><FaGithub className="w-6 h-6" /></a>
            <a id='prince' className='h-12 w-12' href="https://x.com/OwirePrince" target="_blank"><CiTwitter className="w-6 h-6" /></a>
            <a id='prince' className='h-12 w-12' href="mailto:princeowire131@gmail.com"><CiMail className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
