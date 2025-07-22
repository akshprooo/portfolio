import React from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='min-h-screen p-5 flex flex-col items-center gap-7'>
      <Intro />
      <Projects />
    </div>
  )
}

export default App