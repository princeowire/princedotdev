'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import blueice from '../../../public/asset/blueice.png'
import euphoria from '../../../public/asset/euphoria.png'
import linkArrow from "../../../public/asset/link-arrow.svg";
import githubIcon from "../../../public/asset/github-icon.png";
import onet from '../../../public/asset/onet.png'
import bigDog from '../../../public/asset/bigdog.png' 
import futureRide from '../../../public/asset/future-ride.png'
import wyslac from '../../../public/asset/wyslac.png'
import jongi from '../../../public/asset/jongi.png'
import weatherX from '../../../public/asset/weather-x.png'

const projects = [
  { id: 1, tag: "WEB", title: "Future Ride", description: "This project features a clean, modern design focused on delivering a smooth and intuitive user experience. The interface is thoughtfully crafted to be visually appealing and easy to navigate, ensuring visitors engage effortlessly with the content. Attention to detail in layout and styling creates a professional and inviting atmosphere that enhances usability and encourages interaction.", link: "https://future-ride-nine.vercel.app/", src: futureRide, stack: "TypeScript ReactJS SCSS", github: "https://github.com/princeowire/future-ride" },
  { id: 2, tag: "WEB", title: "Blue Ice", description: "Built with semantic HTML5, custom CSS, and vanilla JavaScript. The site is fully responsive, features scroll-based navigation, and uses Flexbox for layout. Focused on performance, clean structure, and a mobile-first approach—without relying on frameworks or external libraries.", link: "https://blueice-bay.vercel.app/", src: blueice, stack: "JavaScript HTML CSS", github: "https://github.com/princeowire/blueice"},
  { id: 3, tag: "WEB", title: "Onet", description: "Onet is a modern, responsive educational platform built with Next.js and Tailwind CSS. Designed for aspiring developers and designers, it offers clear pathways to learn frontend, backend, and UI/UX skills. With an intuitive layout, engaging visuals, and smooth user experience, Onet serves as a starting point for anyone entering the tech space. ", link: "https://onet-sage.vercel.app/", src: onet, stack: "JavaScript ReactJS Tailwind", github: "https://github.com/princeowire/onet" },
  { id: 4, tag: "WEB", title: "Wyslac", description: "Wyslac’s landing page is built with Next.js and Tailwind CSS, delivering a fast, responsive, and modern user experience. The frontend showcases key features of the cross-border payment platform — like global reach, and fast transactions — through clean layouts, smooth interactions, and optimized performance. It reflects both strong technical execution and user-focused design.", link: "https://wyslac.vercel.app/", src: wyslac, stack: "TypeScript ReactJS Tailwind", github: "https://github.com/princeowire/wyslact" },
  { id: 5, tag: "WEB", title: "Euphoria", description: "Euphoria is a sleek, responsive e-commerce platform built with Next.js and Tailwind CSS. It delivers a seamless shopping experience with a clean UI, fast performance, and dynamic content rendering. Designed for fashion, lifestyle, or retail brands, Euphoria focuses on both functionality and aesthetics.", link: "https://euphoria-next-eight.vercel.app/", stack: "JavaScript NextJS Tailwind", src: euphoria, github: "https://github.com/princeowire/euphoria-next" },
  { id: 6, tag: "WEB", title: "Doug the Poug (Replica)", description: "I Led the entire frontend development, from design to deployment. I focused on crafting a bold user interface, implementing smooth animation logic using JavaScript, and ensuring mobile-first responsiveness. The styling and component system were all built from scratch using Tailwind CSS, with attention to detail and consistency.", link: "https://bigdog-flame.vercel.app/", src: bigDog, stack: "JavaScript ReactJS Tailwind", github: "https://github.com/princeowire/bigdog" },
  { id: 7, tag: "WEB", title: "Jongi Media(Concept) ", description: "Jongi Media is a modern, responsive single-page website I built to showcase a creative agency’s branding and video work. Designed with clean UI and strong visual storytelling, it targets clients in media and fashion. Built using semantic HTML and CSS, with social media integration to reflect a real-world brand presence.", link: "https://princeowire.github.io/Jongi-media/", src: jongi, stack: "JavaScript Html CSS", github: "https://github.com/princeowire/Jongi-media" },
  { id: 8, tag: "WEB", title: "Weather X", description: "Weather-X is a sleek, responsive weather application that provides real-time weather updates for any location worldwide. Built with a focus on clean UI and user experience, the app features live temperature, humidity, wind speed, etc. It also includes smart search functionality and adapts gracefully across screen sizes, making it usable on both desktop and mobile.", link: "https://weather-x-six.vercel.app/", src: weatherX, stack: "JavaScript ReactJS CSS", github: "https://github.com/princeowire/weather-x" },
]

const Page = () => {
  return (
    <div className="min-h-screen w-full py-20 overflow-y-auto text-white bg-[#101113] font-clash">
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
            className="w-full h-[250px] max-sm:h-full bg-amber-600 rounded-lg shadow-md p-6 flex max-sm:flex-col gap-4 items-center justify-between text-center relative flexwrap"
          >
            {/* This is for the image with a slight shadow to differentiate */}
            <div className="relative w-[40%] max-sm:w-full h-48 mb-4 rounded overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
            {/* This is the text content */}
            <div className='flex items-baseline  w-[56%] max-sm:w-full flex-col'>
              <h2 className="text-xl font-semibold">{project.title} <em className='text-sm rotate-45 decoration-0 bg-amber-700'>{project.tag}</em></h2>
              <p className="text-gray-300 text-sm mt-2 text-left">{project.description}</p>

              <a className="absolute top-0 right-0 m-2 rounded bg-[#ffffffb5]" href={project.link} target="_blank">
                <Image className="w-[50px]" src={linkArrow} alt={project.title} />
              </a>

              <a className="absolute text-black top-0 right-16 m-2 rounded bg-[#ffffffb5]" href={project.github} target="_blank">
                 <Image className="w-[50px]" src={githubIcon} alt={project.title} />
              </a>

              <div className="mt-2">
                {project.stack?.split(' ').map((word, index) => (
                  <button key={index} className="inline-block mr-2 border-amber-400 border-2 px-2 py-1 rounded">{word}</button>
                ))}

              </div>

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
