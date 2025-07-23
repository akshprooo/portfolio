import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import info from '../data/MyInfo.js'

const Intro = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full min-h-[56vh] lg:h-[56vh] bg-gradient-to-br from-[#cc9329] via-[#cc9329b7] to-[#b8851f] p-3 sm:p-5 lg:p-3 rounded-2xl overflow-hidden relative shadow-2xl'>
      {/* Subtle background pattern overlay */}
      <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]'></div>
      
      <div className='w-full lg:w-1/2 h-auto lg:h-full py-3 px-2 sm:px-5 flex flex-col justify-center lg:justify-between items-center lg:items-start text-center lg:text-left relative z-10'>
        <div className='flex flex-col gap-3 lg:gap-4'>
          <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold leading-tight whitespace-nowrap overflow-hidden text-white drop-shadow-lg'>
            Aksh Tiwari
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-xl xl:text-1xl 2xl:text-3xl max-w-prose opacity-95 text-white/95 leading-relaxed drop-shadow-sm'>
            {info.about || "I'm a passionate frontend developer who loves creating beautiful, responsive web experiences. With a keen eye for design and attention to detail, I transform ideas into engaging digital solutions that users love to interact with."}
          </p>
        </div>
      </div>

      <div className='pt-5 px-2 w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center lg:items-center justify-center lg:justify-between mt-6 lg:mt-0 gap-6 lg:gap-0 relative z-10'>
        <div className='socials flex justify-center lg:justify-end items-center lg:items-start gap-4 sm:gap-6 w-full order-2 lg:order-1'>
          <a href={info.discord} target='_blank' className='group'>
            <div className='p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300'>
              <FaDiscord size={30} className='cursor-pointer sm:w-[35px] sm:h-[35px] text-white group-hover:text-white drop-shadow-sm'/>
            </div>
          </a>
          <a href={info.github} target='_blank' className='group'>
            <div className='p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300'>
              <FaGithub size={30} className='cursor-pointer sm:w-[35px] sm:h-[35px] text-white group-hover:text-white drop-shadow-sm'/>
            </div>
          </a>
          <a href={info.instagram} target='_blank' className='group'>
            <div className='p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300'>
              <FaInstagram size={30} className='cursor-pointer sm:w-[35px] sm:h-[35px] text-white group-hover:text-white drop-shadow-sm'/>
            </div>
          </a>
        </div>

        <div className='CTA flex flex-col justify-center items-center lg:items-end w-full gap-3 lg:gap-2 order-1 lg:order-2'>
          <a href="mailto:akshprooo@gmail.com">
            <button className='bg-black/80 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-white px-6 sm:px-8 lg:px-9 cursor-pointer py-3 sm:py-4 rounded-xl text-lg sm:text-xl lg:text-2xl font-inria tracking-wide flex items-center gap-1.5 w-full sm:w-auto justify-center lg:justify-start group'>
              Work With Me 
              <MdArrowOutward size={24} className='sm:w-[30px] sm:h-[30px] group-hover:rotate-45 transition-transform duration-300' />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro