import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import info from '../data/MyInfo.js'

const Intro = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full min-h-[56vh] lg:h-[56vh] bg-gradient-to-br from-[#cc9329] via-[#cc9329b7] to-[#b8851f] p-4 sm:p-6 lg:p-4 rounded-2xl overflow-hidden relative shadow-2xl'>
      <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,3)_1px,transparent_1px)] bg-[length:20px_20px]'></div>

      <div className='w-full lg:w-1/2 h-auto lg:h-full py-4 px-2 sm:px-4 lg:px-3 flex flex-col justify-center lg:justify-between items-center lg:items-start text-center lg:text-left relative z-10'>
        <div className='flex flex-col gap-4 lg:gap-5 w-full'>
          <div className='flex items-center gap-3 w-full justify-center lg:justify-start'>
            <div className='h-4 w-4 sm:h-5 sm:w-5 bg-green-500 rounded-full animate-pulse' style={{boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2), 0 0 0 6px rgba(34, 197, 94, 0.1)'}}></div>
            <h2 className='text-green-400 border border-white/30 bg-black/70 px-3 py-2 rounded-lg text-sm sm:text-base font-medium backdrop-blur-sm'>
              Available For Work!
            </h2>
          </div>
          
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-white drop-shadow-lg break-words'>
            Aksh Tiwari
          </h1>
          
          <div className='w-full max-w-full lg:max-w-none'>
            <p className=' text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-white/95 drop-shadow-sm break-words hyphens-auto'>
              {info.about || "I'm a passionate frontend developer who loves creating beautiful, responsive web experiences. With a keen eye for design and attention to detail, I transform ideas into engaging digital solutions that users love to interact with."}
            </p>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-1/2 h-auto lg:h-full pt-6 lg:pt-5 px-2 sm:px-4 lg:px-3 flex flex-col items-center lg:items-center justify-center lg:justify-between gap-8 lg:gap-0 relative z-10'>
        
        <div className='socials flex justify-center lg:justify-end items-center gap-4 sm:gap-6 w-full order-2 lg:order-1'>
          <a href={info.discord} target='_blank' className='group' rel='noopener noreferrer'>
            <div className='p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1'>
              <FaDiscord size={28} className='sm:w-[32px] sm:h-[32px] text-white drop-shadow-sm'/>
            </div>
          </a>
          <a href={info.github} target='_blank' className='group' rel='noopener noreferrer'>
            <div className='p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1'>
              <FaGithub size={28} className='sm:w-[32px] sm:h-[32px] text-white drop-shadow-sm'/>
            </div>
          </a>
          <a href={info.instagram} target='_blank' className='group' rel='noopener noreferrer'>
            <div className='p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1'>
              <FaInstagram size={28} className='sm:w-[32px] sm:h-[32px] text-white drop-shadow-sm'/>
            </div>
          </a>
        </div>

        <div className='CTA flex flex-col gap-1 justify-center items-center lg:items-end w-full order-1 lg:order-2'>
          <a href="mailto:akshprooo@gmail.com" className='w-full sm:w-auto'>
            <button className='cursor-pointer bg-black/80 backdrop-blur-sm border border-white/20 hover:bg-black/60 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-white px-6 sm:px-8 lg:px-9 py-3 sm:py-4 rounded-xl text-base sm:text-lg lg:text-xl xl:text-2xl font-inria tracking-wide flex items-center justify-center lg:justify-start gap-2 w-full sm:w-auto group'>
              Work With Me
              <MdArrowOutward size={20} className='sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] group-hover:rotate-45 transition-transform duration-300' />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
