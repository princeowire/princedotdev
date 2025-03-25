import React from 'react'

const Nav = () => {
  return (
    <nav className='py-2 bg-[#29282897] flex items-center justify-center z-10 w-full fixed top-0'>

      <div className='max-w-[1000px] w-full flex items-center justify-between'>

        <a href="./">LOGO</a>

        <div className='flex gap-5'>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>

        <div className='relative'>
          <span className='w-[25px] h-[25px] bg-[#ffbb00e5] absolute left-[-10px] z-[-1] rounded-full'></span>
          <a href="">Let talk {"▷"}</a>
        </div>

      </div>

    </nav>
  )
}

export default Nav
