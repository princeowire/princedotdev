import React from 'react'
import ContactForm from '@/components/contact-from/contact-form'

const page = () => {
  return (
    <div className='bg-[#101113] py-16 item-center justify-center text-white flex flex-col gap-8'> 

      <h2 className="text-center pb-8 text-3xl text-amber-400 font-semibold">Contact Me</h2>

      <div className='max-w-[1000px] mx-auto max-md:px-4'>
        <ContactForm />
      </div>

    </div>
  )
}

export default page
