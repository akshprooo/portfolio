import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className='w-full border border-[#ffffff30] hover:border-[#ffffff80] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer p-3 sm:p-4 rounded-lg gap-3 sm:gap-2'>
        <div className='flex-1'>
          <h3 className='text-lg sm:text-xl font-bold'>{project.name}</h3>
          <p className='text-xs sm:text-sm text-gray-300 mt-1'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {project.techStack.map((tech, index) => (
              <span key={index} className='text-xs sm:text-sm bg-gray-800 px-2 py-1 rounded-full'>{tech}</span>
            ))}
            </div>
        </div>

        <div className='flex gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-end'>
          {project.github?<a href={project.github} className='font-inria text-base sm:text-xl hover:underline px-2 py-1 sm:px-0 sm:py-0 flex-1 sm:flex-initial text-center sm:text-left'>GitHub</a>:null}
          {project.live?<a href={project.live} className='font-inria text-base sm:text-xl hover:underline px-2 py-1 sm:px-0 sm:py-0 flex-1 sm:flex-initial text-center sm:text-left'>Live Demo</a>:null}
        </div>
    </div>
  )
}

export default ProjectCard