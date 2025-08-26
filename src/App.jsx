import React, { useEffect } from 'react'
import greet from './consoleThings'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {

  useEffect(()=>{
    greet()
  }, [])

  return (
    <div className='min-h-screen flex flex-col items-center gap-7'>
      
      <Routes>
        <Route path='/' element={<div className='p-5'><Home /></div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App