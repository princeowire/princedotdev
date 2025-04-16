'use client';

import Image from "next/image";
import { useEffect, useRef, useState} from "react";


import Nav from "@/components/nav/Nav";
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

import ContactForm from "@/components/contact-from/contact-form";

export default function Home() {
  const projectData = [
    {id: 1, title: "Euphoria", description: "Project description: Euphoria is a sleek, responsive e-commerce platform built with Next.js and Tailwind CSS. It delivers a seamless shopping experience with a clean UI, fast performance, and dynamic content rendering. Designed for fashion, lifestyle, or retail brands, Euphoria focuses on both functionality and aesthetics.", link: "google.com", style: "basis-[25%] min-w-[250px]", details: "hello vbibvluib", src: euphoria, },
    {id: 2, title: "Project 2", description: "Project description", link: "google.com", style: "basis-[60%] min-w-[250px]", details: "hello vbibvluib", src: blueice, },
    {id: 3, title: "Euphoria", description: "Project description: Euphoria is a sleek, responsive e-commerce platform built with Next.js and Tailwind CSS. It delivers a seamless shopping experience with a clean UI, fast performance, and dynamic content rendering. Designed for fashion, lifestyle, or retail brands, Euphoria focuses on both functionality and aesthetics.", link: "google.com", style: "basis-[60%] min-w-[250px]", details: "hello vbibvluib", src: euphoria, },
    {id: 4, title: "Project 2", description: "Project description", link: "google.com", style: "basis-[25%] min-w-[250px]", details: "hello vbibvluib", src: blueice, },

  ]
  const colors = ["bg-fuchsia-800", "bg-blue-800", "bg-cyan-800", "bg-emerald-800", "bg-pink-800", "bg-violet-800"];
  const cardRef = useRef([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    let angle = (cardRef.current.length - 1) * 10;

    cardRef.current.forEach((card) => {
      if (card) {
        card.style.transform = `rotate(${angle}deg)`;
        angle -= 10;
      }
    });
  }, []);

  return (
    <div className="bg-[#101113] text-white">

      <main className="flex items-center justify-center flex-col">

        <section className="max-w-[1000px] w-full py-4 pt-20">

          <Image className="z-0 top-[-200px] right-0  w-[800px] h-[500px] absolute" src={blob} alt='blob' />

          <p>Hi there</p>

          <h1 className="text-3xl">I&apos;m Prince Owire</h1>

          <p className="font-bold text-white text-[45.6px] leading-[82.7px]">
            A FRONTEND DEVELOPER
          </p>

          <div className="relative flex w-fit group overflow-hidden">

            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
            ></span>

            <a href="" className="z-10 px-3 py-1 relative">About me {"▷"}</a>
            
          </div>


        </section>

        <section className="bg-amber-400 w-full flex items-center justify-center">

          <div className="max-w-[1000px] w-full h-screen flex justify-center items-center">
            <div className="basis-1/2 h-full flex items-center justify-center flex-col">
              <h3 className="text-4xl">Wanna see magic?</h3>
              <p className="text-3xl">Boom</p>
            </div>

            <div className="basis-1/2 h-full relative">
              {colors.map((bgColor, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el && !cardRef.current.includes(el)) {
                      cardRef.current.push(el);
                    }
                  }}
                  className={`card flex justify-center items-center text-2xl text-center w-[350px] h-[350px] p-4 absolute rounded-3xl ${bgColor}`}
                >
                  <p>Emm, what does this card do again?</p>

                </div>
              ))}
            </div>

          </div>

        </section>

        <section className="max-w-[1000px] w-full">

          <div className=" flex items-center justify-between py-14">
            <div className="basis-1/3">

              <div className="flex absolute gap-1">
                <p className="caligraphy bent">My certificates </p>
                <Image src={nameArrow} alt="name arrow" />
              </div>

              <div className="flex items-center justify-between mt-14">
                <div className="w-[40px] h-[40px] flex justify-center items-center border-2 border-amber-800 rounded-full m-1"><p>◁</p></div>
                <Image src={certificate} alt="certificate" className="w-[calc(100%-108px)]" />
                <div className="w-[40px] h-[40px] flex justify-center items-center border-2 border-amber-800 rounded-full m-1"><p>▷</p></div>
              </div>

              <div className="sticker flex items-center justify-center">
                <Image src={sticker} alt="sticker" className="rounded-[10px] mt-8 bent w-[120px]" />
              </div>

            </div>

            <div className="basis-1/3 h-full flex items-center justify-center relative">

              <Image src={prince} alt=" this is Prince Owire" className="rounded-[200px] w-[calc(100%-50px)] h-full blur-xs hover:blur-none transition" />

              <div className="absolute left-0 bottom-[-30px] flex gap-2">
                <p className="caligraphy bent pt-6">Me</p>
                <Image src={sndArrow} alt="snd arrow" />
              </div>

            </div>

            <div className="basis-1/3 relative">

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
                <p className="caligraphy text-center font-light">Playing Table tennis</p>

              </div>

            </div>
          </div>

          <div className='relative group flex w-fit my-4 mx-auto'>
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"
            ></span>
            <a href="" className='z-10 px-3 py-1 relative'>See More About Me {"▷"}</a>
          </div>

        </section>

        <div className="overflow-hidden whitespace-nowrap py-2 w-full bg-black">
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

          <p className="text-center text-[40px] absolute right-0 rotate-90 font-bold text-[#232020]">SERVICES</p>

          <div className="max-w-[1000px] w-full gap-4 flex items-center justify-between py-8 relative">


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
                <p className="text-xs text-gray-300">Improving website speed, search engine optimization, and accessibility
                  Optimizing images, lazy loading, and efficient state management
                  Enhancing performance using Next.js (SSG, ISR, etc.)</p>
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

        <section className="project w-full flex flex-col items-center justify-center relative mb-8">

          <h2 className="text-center py-8 text-3xl text-amber-400 font-semibold">Projects</h2>

          <div className="max-w-[1000px] w-full flex flex-wrap gap-4 justify-between">

            {projectData.map((project) => (
                <div className={`flex flex-col grow shrink-0 w-full bg-[#1E1E1E] p-2 rounded-3xl ${project.style}`}  key={project.id}>

                  <div className="relative group">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex flex-col justify-end p-4 text-white rounded-2xl">

                      <a className="absolute top-0 right-0 m-2 rounded-full bg-[#ffbb00e5]" href={project.link} target="_blank">
                        <Image className="w-[50px]" src={linkArrow}/>
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
          
        </section>

        <section className="conatct max-w-[1000px]">
          <h2 className="text-center py-8 text-3xl text-amber-400 font-semibold">Contact Me</h2>

          <div class="relative w-full p-4">

            <div class="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-400"></div>

            <ContactForm />

            <div class="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-400"></div>

          </div>

        </section>

      </main>

    </div>
  );
}
