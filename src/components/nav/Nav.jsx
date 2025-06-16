'use client'
import React from 'react'
import Link from 'next/link'
import Ham from '../hambuger/Nav'
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";

const Nav = () => {

  
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname();

    useEffect( () => {
        if(isActive) setIsActive(false)
    }, [pathname])

  return (
    <nav className='font-clash py-2 bg-[#29282897] text-white flex items-center justify-center z-50 w-full fixed top-0'>

      <div className='max-w-[1000px] w-full flex items-center justify-between max-lg:px-4'>

        <a href="./">LOGO</a>

        <div className='flex gap-5 links max-md:hidden'>
          <Link href="/" >Home</Link>
          <Link href="projects" >Projects</Link>
          <Link href="about" >About</Link>
          <Link href="" >Blog</Link>
        </div>

        <div className='hidden max-md:flex relative group'>
          <div 
        className="w-8 h-8 sm:w-16 sm:h-8 rounded-[50%] bg-primary-color cursor-pointer flex items-center justify-center z-[100]"
        onClick={()=> {setIsActive(!isActive)}}
        >
            <div className={isActive ? "w-full after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:rotate-45 after:transition-transform after:duration-300 after:-top-[1px] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-transform before:-rotate-45 before:duration-300 before:top-0" : "w-full after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-transform after:duration-300 after:-top-[5px] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-transform before:duration-300 before:top-[5px]"}></div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Ham />}
        </AnimatePresence>
        </div>

        <div className='relative group max-md:hidden'>
             <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
            ></span>
          <a href="contact" className='z-10 px-3 py-1 relative'>Let talk {"▷"}</a>
        </div>

      </div>

    </nav>
  )
}

export default Nav
