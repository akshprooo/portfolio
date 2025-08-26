import React from 'react'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='flex flex-col gap-7'>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home