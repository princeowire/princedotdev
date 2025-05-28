import React, { useState } from 'react'
import Image from 'next/image';
import avtrOne from '../../../public/asset/avtr1.jpg';
import avtrTwo from '../../../public/asset/avtr2.jpg';
import avtrThree from '../../../public/asset/avtr3.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This is the best service I've ever used! lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: avtrOne,
      position: "CEO of XYZ Corp",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Absolutely fantastic experience!  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: avtrTwo,
      position: "CEO of XYZ Corp",
    },
    {
      id: 3,
      name: "Sam Wilson",
      feedback: "I would highly recommend this to anyone.  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: avtrThree,
      position: "CEO of XYZ Corp",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="max-w-[1000px] w-full">
      <div className="w-full relative flex flex-col bg-gray-800 p-6 px-20 rounded-lg shadow-md">
        
        <div className='text-center mb-8'>
          <h2 className="text-center text-3xl text-amber-400 font-semibold">Testimonials</h2>
          <p className="text-gray-400 mt-2">see what people are saying</p>
        </div>

        {/* Testimonial content */}

        <div className='flex gap-8 flex-wrap'>

          <div className="relative w-[200px] h-[200px] mx-auto mb-4">
            {/* Background Circle */}
            <div className="absolute inset-0 w-[200px] h-[200px] bg-amber-400 rounded-full -top-5 -left-5 z-0"></div>

            {/* Foreground Image */}
            <div className="relative z-10 w-full h-full">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>



          <div className='flex flex-col'>
            <p className="text-gray-400 mt-2 max-w-[400px]">"{testimonials[currentIndex].feedback}"</p>

            <div>
             <h3 className="text-lg font-semibold text-white mt-4"> {testimonials[currentIndex].name} </h3>
             <p className='text-[12px] text-gray-400'>{testimonials[currentIndex].position}</p>
            </div>

          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="text-white text-2xl px-2 focus:outline-none bg-amber-400 rounded-full w-[40px] h-[40px] ml-2"
          >
            ❮
          </button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="text-white text-2xl px-2 focus:outline-none bg-amber-400 rounded-full w-[40px] h-[40px] mr-2"
          >
            ❯
          </button>
        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonial
