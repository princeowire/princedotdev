import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='py-2 bg-[#29282897] text-white flex items-center justify-center z-50 w-full fixed top-0'>

      <div className='max-w-[1000px] w-full flex items-center justify-between'>

        <a href="./">LOGO</a>

        <div className='flex gap-5'>
          <Link href="/" >Home</Link>
          <Link href="projects" >Projects</Link>
          <Link href="about" >About</Link>
          <Link href="" >blog</Link>
        </div>

        <div className='relative group'>
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
