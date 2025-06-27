'use client';

import Image from "next/image";

import { useEffect, useRef, useState} from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import linkArrow from "../../public/asset/link-arrow.svg";
import sticker from "../../public/asset/tenor-two.gif";
import certificate from "../../public/asset/sabi-ticket.png";
import blob from '../../public/asset/blob.png';
import nameArrow from '../../public/asset/name_arrow curved_.svg';
import sndArrow from '../../public/asset/pic-arrow.png';
import hobbyArrow from '../../public/asset/hobby arrow.png';
import ui from '../../public/asset/ui.png';
import teamIcon from '../../public/asset/team.png';
import optiIcon from '../../public/asset/optimization.png';
import prince from '../../public/asset/prince.jpg';
import blueice from '../../public/asset/blueice.png';
import euphoria from '../../public/asset/euphoria.png';
import loader from '../../public/asset/loader.svg';
import bigDog from '../../public/asset/bigdog.png'
import futureRide from '../../public/asset/future-ride.png'


import ContactForm from "@/components/contact-from/contact-form";
// import AvatarSection from "@/components/welcome/welcome";
import Testimonail from "@/components/testimonail/testimonail";
import Test from "@/components/testimonail/test";

export default function Home() {
  const projectData = [
    {id: 1, title: "Euphoria", description: "Project description: Euphoria is a sleek, responsive e-commerce platform built with Next.js and Tailwind CSS. It delivers a seamless shopping experience with a clean UI, fast performance, and dynamic content rendering. Designed for fashion, lifestyle, or retail brands, Euphoria focuses on both functionality and aesthetics.", link: "https://euphoria-next-eight.vercel.app/", style: "basis-[25%] min-w-[250px]", details: "hello vbibvluib", src: euphoria, },
    {id: 3, title: "Blueice", description: "Project description: Built with semantic HTML5, CSS, and vanilla JavaScript. The site is fully responsive, features scroll-based navigation, and uses Flexbox for layout. Focused on performance, clean structure, and a mobile-first approach—without relying on frameworks or external libraries.", link: "https://blueice-bay.vercel.app/", style: "basis-[60%] min-w-[250px]", details: "hello vbibvluib", src: blueice, },
    {id: 2, title: "Future Ride", description: "Project description: This project features a clean, modern design focused on delivering a smooth and intuitive user experience. The interface is thoughtfully crafted to be visually appealing and easy to navigate, ensuring visitors engage effortlessly with the content. Attention to detail in layout and styling creates a professional and inviting atmosphere that enhances usability and encourages interaction.", link: "https://future-ride-nine.vercel.app/", style: "basis-[60%] min-w-[250px]", details: "hello vbibvluib", src: futureRide, },
    {id: 4, title: "Doug the poug (Replica)", description: "Project description: I Led the entire frontend development, from design to deployment. I focused on crafting a bold user interface, implementing smooth animation logic using JavaScript, and ensuring mobile-first responsiveness. The styling and component system were all built from scratch using Tailwind CSS, with attention to detail and consistency.", link: "https://bigdog-flame.vercel.app/", style: "basis-[25%] min-w-[250px]", details: "hello vbibvluib", src: bigDog, },
  ]
  const colors = ["bg-fuchsia-800", "bg-blue-800", "bg-cyan-800", "bg-emerald-800", "bg-pink-800", "bg-violet-800"];
  const [showMore, setShowMore] = useState(false);

  const titles = ['DEVELOPER', 'ENGINEER'];
  const typingSpeed = 150;
  const pauseTime = 1500;

  const [typedText, setTypedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout;
    const currentText = titles[currentTitleIndex];
    if (!isDeleting) {
      if (typedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTitleIndex]);

  useEffect(() => {
    // Simulate a loading delay (you can also use actual data loading here)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="absolute w-full h-screen flex items-center justify-center bg-black text-white text-xl z-50">
       <Image src={loader} alt="Loading..." className="w-28 h-20" />
      </div>
    );
  }

  return (
    <div className="bg-[#101113] text-white font-clash">

      <main className="flex items-center justify-center flex-col">

        <section className="max-w-[1000px] max-lg:px-4 w-full py-4 pt-20 my-8">

          <Image className="top-[-200px] right-0  w-[800px] h-[500px] absolute z-30" src={blob} alt='blob' />

          <p className="mb-2">Hi there</p>

          <h1 className="text-3xl">I&apos;m Prince Owire</h1>

         <p className="font-bold text-white text-[45.6px] mt-2 mb-5 max-sm:max-w-[300px]">
            A FRONTEND <div className="hidden max-sm:block"></div>  {typedText}
            <span className="animate-blink">|</span>
          </p>


          <p className="max-w-[500px] mb-4 text-sm"> Improving website speed, search engine optimization, and accessibility Optimizing images, lazy loading, and efficient state management Enhancing performance using Next.js (SSG, ISR, etc.)</p>

          <div className=" flex flex-wrap items-center gap-2">
            <div className="relative flex w-fit group overflow-hidden">

              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
              ></span>

              <a href="" className="z-10 px-3 py-1 relative flex items-center justify-center gap-1.5">Resume <FaCloudDownloadAlt /></a>

            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/prince-owire-841187250/" target="_blank"><CiLinkedin className="w-6 h-6" /></a>
              <a href="https://github.com/princeowire" target="_blank"><FaGithub className="w-6 h-6" /></a>
              <a href="https://x.com/OwirePrince" target="_blank"><CiTwitter className="w-6 h-6" /></a>
              <a href="mailto:princeowire131@gmail.com"><CiMail className="w-6 h-6" /></a>
            </div>
          </div>


        </section>

        {/* <section className="bg-amber-400 w-full flex items-center justify-center my-8">

          <div className="max-w-[1000px] max-md:px-4 w-full flex-wrap flex justify-center items-center">

            <AvatarSection />

          </div>

        </section> */}

        <section className="max-w-[1000px] max-lg:px-4 w-full my-8">

          <div className="flex items-center justify-between flex-wrap max-md:gap-28 py-8">
            <div className="basis-1/3 max-md:basis-full">

              <div className="flex absolute gap-1">
                <p className="caligraphy bent">My certificates </p>
                <Image src={nameArrow} alt="name arrow" />
              </div>

              <div className="flex items-center justify-between mt-14">
                <button className="w-[40px] h-[40px] flex justify-center items-center border-2 border-amber-800 rounded-full m-1"><p>◁</p></button>
                <Image src={certificate} alt="certificate" className="w-[calc(100%-108px)]" />
                <button className="w-[40px] h-[40px] flex justify-center items-center border-2 border-amber-800 rounded-full m-1"><p>▷</p></button>
              </div>

              <div className="sticker flex items-center justify-center">
                <Image src={sticker} alt="sticker" className="rounded-[10px] mt-8 bent w-[120px]" />
              </div>

            </div>

            <div className="basis-1/3 max-md:basis-full h-full flex items-center justify-center relative">

              <Image src={prince} alt=" this is Prince Owire" className="rounded-[200px] w-[calc(100%-50px)] h-full blur-xs hover:blur-none transition" />

              <div className="absolute left-0 bottom-[-30px] flex gap-2">
                <p className="caligraphy bent pt-6">Me</p>
                <Image src={sndArrow} alt="snd arrow" />
              </div>

            </div>

            <div className="basis-1/3 max-md:basis-full max-md:mt-8 relative">

              <div className="flex absolute top-[-50px] gap-1">
                <p className="caligraphy">My Qualification </p>
                <Image src={nameArrow} alt="name arrow" />
              </div>

              <div className="qualificatios text-center">

                <div>
                  <h3 className="underline text-[20px] font-semibold">SECONDARY SCHOOL CERTIFICATION</h3>
                  <p className="text-[16px]">THE SHULAMITE COLLEGE</p>
                  <p className="text-[12px]">2022</p>
                </div>

                <div className="m-4">
                  <h3 className="underline text-[20px] font-semibold">BOOT CAMPS</h3>
                  <p className="text-[16px]">FREECODECAMP</p>
                  <p className="text-[12px]">2022</p>
                </div>

              </div>

              <div className="hobby relative flex flex-col">
                <div className="flex absolute right-7 gap-1">
                  <Image src={hobbyArrow} alt="name arrow" />
                  <p className="caligraphy rotate">My hobby </p>
                </div>

                <p className="caligraphy text-center mt-14 font-light">Wacthing Anime</p>
                <p className="caligraphy text-center font-light my-2">Listening to music</p>
                <p className="caligraphy text-center font-light my-2">Playing Table tennis</p>
                <p className="caligraphy text-center font-light">Photography</p>

              </div>

            </div>
          </div>

          <div className='relative group flex w-fit mx-auto mt-8'>
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
            ></span>
            <a href="about" className='z-10 px-3 py-1 relative'>See More About Me {"▷"}</a>
          </div>

        </section>

        <div className="overflow-hidden whitespace-nowrap py-2 w-full my-8 bg-black">
          <div className="marquee text-xl font-bold flex gap-10">
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
            <p>holy moly</p>
          </div>
        </div>

        <section className="services w-full flex flex-col items-center justify-center relative">

          <p className="text-center text-[40px] absolute right-0 max-md:right-[-55px] rotate-90 font-bold text-[#232020]">SERVICES</p>

          <div className="max-w-[1000px] max-lg:px-4 max-md:justify-center w-full gap-4 max-md:flex-wrap flex items-center justify-between py-8 relative">


            <div className="max-w-[280px] bg-[#1E1E1E] p-4 rounded-3xl">

              <Image src={ui} alt="ui icon" />

              <div className="pt-7">
                <h2 className="text-xl pb-2">UI/UX Design Implementation</h2>
                <p className="text-xs text-gray-300">Converting Figma/XD designs into responsive web pages, Improving website layout, animations, and interactivity, Optimizing user experience (UX) with smooth navigation and design</p>
              </div>

            </div>

            <div className="max-w-[280px] bg-[#1E1E1E] p-4 rounded-3xl">

              <Image src={teamIcon} alt="ui icon" />

              <div className="pt-7">
                <h2 className="text-xl pb-2">Top Noutch Social & Team Managing Skills </h2>
                <p className="text-xs text-gray-300">I enjoy working in teams because I believe good collaboration brings out the best in everyone. I contribute by listening actively, being accountable, and making sure I communicate clearly so the team stays aligned</p>
              </div>

            </div>

            <div className="max-w-[280px] bg-[#1E1E1E] p-4 rounded-3xl">

              <Image src={optiIcon} alt="ui icon" />

              <div className="pt-7">
                <h2 className="text-xl pb-2">Frontend Optimization, SEO & Performance</h2>
                <p className="text-xs text-gray-300">Improving website speed, search engine optimization, and accessibility
                  Optimizing images, lazy loading, and efficient state management
                  Enhancing performance using Next.js (SSG, ISR, etc.)</p>
              </div>

            </div>

          </div>

        </section>

        <section className="project w-full flex flex-col items-center justify-center relative my-8">

          <p className="text-center text-[40px] absolute right-0 max-md:right-[-55px] rotate-90 font-bold text-[#232020]">PROJECTS</p>

          <h2 className="text-center pb-8 text-3xl text-amber-400 font-semibold">Projects</h2>

          <div className="max-w-[1000px] max-lg:px-4 w-full flex flex-wrap gap-4 justify-between">

            {projectData.map((project) => (
                <div className={`flex flex-col grow shrink-0 w-full bg-[#1E1E1E] p-2 rounded-3xl ${project.style}`}  key={project.id}>

                  <div className="relative group">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-opacity duration-200 z-10 flex flex-col justify-end p-4 text-white rounded-2xl">

                    <a className="absolute top-0 right-0 m-2 rounded-full bg-[#ffbb00e5]" href={project.link} target="_blank">
                      <Image className="w-[50px]" src={linkArrow} alt={project.title} />
                    </a>

                    <div className="text-left mt-auto">
                      <h3 className="text-2xl mb-2">{project.title}</h3>

                      <p className="text-sm text-gray-300">
                        {showMore
                          ? project.description
                          : `${project.description.slice(0, 60)}...`}
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // stop hover issues
                          setShowMore(!showMore);
                        }}
                        className="mt-2 text-sm  underline"
                      >
                        {showMore ? "See less" : "See more"}
                      </button>
                    </div>

                    </div>

                    <div className="relative w-full h-96"> {/* or use h-[300px] or any height */}
                      <Image
                        src={project.src}
                        alt="prince"
                        layout="fill"
                        className="object-cover rounded-2xl"
                      />
                    </div>
    
                  </div>

                </div>
            ))}

          </div>
          
          <div className='relative group mt-8'>
             <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
            ></span>
          <a href="projects" className='z-10 px-3 py-1 relative'>See All Projects {"▷"}</a>
         </div>

        </section>

        <section className="testimonial">
         <div className="">
           {/* <Testimonail /> */}
           <Test />
          </div>


        </section>

        <section className="conatct max-w-[1000px] px-4 my-8">
          <h2 className="text-center pb-8 text-3xl text-amber-400 font-semibold">Contact Me</h2>

          <div className="relative w-full p-4 max-sm:p-2">

            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-400"></div>

            <ContactForm />

            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-400"></div>

          </div>

        </section>

      </main>
    </div>
  );
}
