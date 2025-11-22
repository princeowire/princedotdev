import React from 'react'
import TestimonialSwiper from './testimonail'
import MobileTestimonial from './mobiletest'

const Test = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='max-lg:hidden'>
        <TestimonialSwiper />
      </div>
      <div className='max-lg:block hidden'>
        <MobileTestimonial />
      </div>
      
    </div>
  )
}

export default Test