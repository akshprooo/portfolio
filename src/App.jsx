import React, { useEffect } from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import greet from './consoleThings'
import Contact from './components/Contact'

const App = () => {

  useEffect(()=>{
    greet()
  }, [])

  return (
    <div className='min-h-screen p-5 flex flex-col items-center gap-7'>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App