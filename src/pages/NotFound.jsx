import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen w-full p-7'>
        <div className="min-h-full rounded-3xl flex flex-col justify-center items-center bg-gradient-to-br from-amber-100 via-amber-300 to-amber-500 px-4">
            <div className="bg-white/80 rounded-3xl shadow-xl flex flex-col items-center p-8 md:p-16 gap-8 w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
                <div className="text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-28 md:w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-amber-900 font-caudex">
                Oops! Page Not Found
                </h1>
                <p className="text-lg md:text-xl text-amber-700 font-inria">
                The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                to="/"
                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-lg transition-all duration-200 shadow-md font-caudex text-lg"
                >
                Go Back Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound