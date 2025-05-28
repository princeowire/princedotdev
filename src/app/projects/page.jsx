'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import blueice from '../../../public/asset/blueice.png'
import euphoria from '../../../public/asset/euphoria.png'
import linkArrow from "../../../public/asset/link-arrow.svg";

const projects = [
  { id: 1, title: "Euphoria", description: "E-commerce with Next.js.", link: "#", stack: "javaScript", src: euphoria },
  { id: 2, title: "Blue Ice", description: "Cool theme.", link: "#", src: blueice },
  { id: 3, title: "CommerceX", description: "Real-time analytics.", link: "#", src: euphoria },
  { id: 4, title: "Frost UI", description: "Component library.", link: "#", src: blueice },
  { id: 5, title: "WaveTrack", description: "Music player.", link: "#", src: euphoria },
  { id: 6, title: "PixelPush", description: "Graphic tool.", link: "#", src: blueice },
]

const Page = () => {
  return (
    <div className="min-h-screen w-full py-20 overflow-y-auto text-white bg-[#101113]">
      <div className="flex flex-col items-center space-y-20 px-4 max-w-[1000px] mx-auto">

        <div className='flex justify-between items-center w-full'>

          <div>
           <h2 className="text-center text-3xl text-amber-400 font-semibold">All Projects</h2>
          </div>

          <div>
            <select name="" id="" className='bg-[#101113] text-white p-2 rounded-md'>
              <option value="">All</option>
              <option value="">Web</option>
              <option value="">Mobile</option>
              <option value="">Extensoins</option>
            </select>
          </div>
        </div>

        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0.2, scale: 0.95, filter: 'blur(4px)', zIndex: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              zIndex: 10, // Bring the card in focus to the front
            }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[250px] bg-amber-600 rounded-lg shadow-md p-6 flex gap-4 items-center justify-between text-center relative"
          >
            {/* This is for the image with a slight shadow to differentiate */}
            <div className="relative w-[40%] h-48 mb-4 rounded overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
            {/* This is the text content */}
            <div className='flex items-baseline  w-[56%] flex-col'>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>

              <a className="absolute top-0 right-0 m-2 rounded-full bg-[#ffbb00e5]" href={project.link} target="_blank">
                <Image className="w-[50px]" src={linkArrow} alt={project.title} />
              </a>

              <button>{project.stack}</button>

            </div>
            {/* Non-focused cards will have a blur effect, so they appear behind */}
            {i !== 0 && (
              <motion.div
                // className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg z-0"
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}

        <div className='relative group'>
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
          ></span>
          <p className='z-10 px-3 py-1 relative'>Hire Me {"▷"}</p>
        </div>

      </div>

    </div>
  )
}

export default Page
