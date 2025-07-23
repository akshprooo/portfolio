import React from 'react'
import info from '../data/MyInfo'

const Skills = () => {  

  return (
    <div className='gap-6 w-full h-auto border border-[#ffffff30] p-6 rounded-lg flex flex-col items-center'>
      <h2 className='text-5xl font-bold mb-2'>~/Skills</h2>
      
      <div className='h-auto w-full flex flex-col lg:flex-row gap-6'>
        <div className='w-full lg:w-1/2 flex flex-col'>
          <h3 className='text-2xl font-semibold mb-4 border-b border-[#cc9329b7] pb-2'>
            Technical Skills
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {info.Skills.map((skill, index) => (
              <div 
                key={index} 
                className='bg-[#ffffff08] cursor-pointer hover:bg-[#ffffff15] border border-[#ffffff20] hover:border-[#cc932950] text-white px-4 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 text-center font-medium'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col'>
          <h3 className='text-2xl font-semibold mb-4 border-b border-[#cc9329b7] pb-2'>
            Developer Tags
            <span className='text-sm text-gray-400 font-normal ml-2'>@ Atlas Software and Microsystems</span>
          </h3>
          <div className='flex flex-wrap gap-3 items-center justify-center'>
            <img className='w-100' src="./images/atlasdevtag.png" alt="Atlas Software and Microsystems Developer Tag" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills