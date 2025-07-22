import React from 'react'
import ProjectsData from '../data/Project'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className=' gap-4 w-full h-auto border-1 p-3.5 border-secondary rounded-lg flex flex-col items-center'>
        <h2 className='text-5xl'>~/Projects</h2>
        {
          ProjectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
    </div>
  )
}

export default Projects