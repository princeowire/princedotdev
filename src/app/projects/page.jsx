'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import blueice from '../../../public/asset/blueice.png';
import euphoria from '../../../public/asset/euphoria.png';

const projects = [
  {
    id: 1,
    title: "Euphoria",
    description: "Euphoria is a sleek, responsive e-commerce platform built with Next.js and Tailwind CSS.",
    link: "https://google.com",
    details: "hello vbibvluib",
    src: euphoria,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another cool project.",
    link: "https://google.com",
    details: "hello vbibvluib",
    src: blueice,
  },
  {
    id: 3,
    title: "Euphoria Again",
    description: "Same sleek e-commerce platform.",
    link: "https://google.com",
    details: "hello vbibvluib",
    src: euphoria,
  },
  {
    id: 4,
    title: "Project 2 Again",
    description: "Another cool project repeated.",
    link: "https://google.com",
    details: "hello vbibvluib",
    src: blueice,
  },
];

const Page = () => {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-md h-[500px] overflow-hidden border border-gray-300 bg-white rounded-lg shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[index].id}
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full p-6 flex flex-col items-center justify-center text-center"
          >
            <img
              src={projects[index].src}
              alt={projects[index].title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{projects[index].title}</h2>
            <p className="text-gray-600 text-sm mt-2">{projects[index].description}</p>
            <a
              href={projects[index].link}
              className="text-blue-500 underline mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex gap-4">
        <button onClick={handlePrev} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Prev
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  )
}

export default Page
