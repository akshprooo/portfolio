import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import info from '../data/MyInfo.js'

const Intro = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full min-h-[56vh] lg:h-[56vh] bg-[#cc9329b7] p-3 sm:p-5 lg:p-3 rounded-2xl overflow-hidden'>
        <div className='w-full lg:w-1/2 h-auto lg:h-full py-3 px-2 sm:px-5 flex flex-col justify-center lg:justify-between items-center lg:items-start text-center lg:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold leading-tight whitespace-nowrap overflow-hidden'>Aksh Tiwari</h1>
            <h2 className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl mt-2 lg:mt-0 leading-tight'>FrontEnd Developer/Designer</h2>
        </div>

        <div className=' pt-5 px-2 w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center lg:items-center justify-center lg:justify-between mt-6 lg:mt-0 gap-6 lg:gap-0'>
            <div className='socials flex justify-center lg:justify-end items-center lg:items-start gap-4 sm:gap-6 w-full order-2 lg:order-1'>
                <a href={info.discord} target='_blank'><FaDiscord size={30} className='cursor-pointer sm:w-[35px] sm:h-[35px]'/></a>
                <a href={info.github} target='_blank'><FaGithub size={30} className='cursor-pointer sm:w-[35px] sm:h-[35px]'/></a>
                <a href={info.instagram} target='_blank'><FaInstagram size={30} className='cursor-pointer sm:w-[35px] sm:h-[35px]'/></a>
            </div>

            <div className='CTA flex flex-col justify-center items-center lg:items-end w-full gap-3 lg:gap-2 order-1 lg:order-2'>
                <a href="mailto:akshprooo@gmail.com">
                    <button className='bg-[#000000] transition-all hover:-translate-y-1 hover:bg-[#00000099] text-white px-6 sm:px-8 lg:px-9 cursor-pointer py-3 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl font-inria tracking-wide flex items-center gap-1.5 w-full sm:w-auto justify-center lg:justify-start'>
                        Work With Me <MdArrowOutward size={24} className='sm:w-[30px] sm:h-[30px]' />
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Intro