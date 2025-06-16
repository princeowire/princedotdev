'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export default function Ham() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className='font-clash fixed right-0 top-0 h-screen bg-[rgba(41_41_41)] text-white z-[80] w-[80%] lg:w-1/2 flex flex-col justify-between'>
      <div className='px-[15%] justify-center max-lg:gap-[10%] gap-2 flex flex-col h-full'>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className='flex flex-col text-2xl min-[360px]:text-3xl sm:text-[56px] lg:text-5xl gap-3 sm:gap-14 lg:gap-7'>
          {
            navItems.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
            })
          }
        </div>

        <div className='relative group w-fit mt-10'>
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[30px] w-[30px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 hover:w-full"
          ></span>
          <a href="contact" className='z-10 px-3 py-1 relative text-2xl'>Let talk {"▷"}</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}