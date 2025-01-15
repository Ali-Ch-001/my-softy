"use client"

import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-r from-pink-300 to-pink-400 overflow-y-hidden relative">

      {/* Thank You Message */}
      <div className="text-center my-5 text-3xl text-white font-bold shadow-lg p-4 rounded-full bg-pink-600">
        Shukria Madam Ji 🙏🏻
      </div>

      {/* Heart Animation */}
      <div className="relative w-32 h-32">
        <div className="absolute top-0 left-0 w-32 h-32">
          <svg
            viewBox="0 0 32 29.6"
            className="text-pink-700"
          >
            <path
              className="heart-fill animate-pulse"
              fill="currentColor"
              d="M23.6,0c-3.4,0-6.3,1.5-8.4,4C12.7,1.5,9.8,0,6.4,0C2.9,0,0,2.9,0,6.4
              c0,5.8,5.7,10.3,14.3,19.2L16,29.6l1.7-4C26.3,16.7,32,12.2,32,6.4C32,2.9,29.1,0,25.6,0z"
            />
          </svg>
        </div>
      </div>

      {/* Gratitude Message */}
      <p className="mt-6 text-center text-xl text-white max-w-md">
        Idiot, Pta bhi tha YES is only Answer still clicked NO so many times 😒
      </p>

      {/* Navigation Button */}
      <Link href="/date">
        <button className="mt-8 bg-pink-500 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-pink-600">
          Click Me 😑
        </button>
      </Link>

      {/* Decorative Hearts */}
      <div className="absolute top-5 left-5">
        <svg className="w-8 h-8 text-pink-700 animate-bounce" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
               5.42 4.42 3 7.5 3c1.74 0 3.41 
               0.81 4.5 2.09C13.09 3.81 14.76 3 
               16.5 3 19.58 3 22 5.42 22 
               8.5c0 3.78-3.4 6.86-8.55 
               11.54L12 21.35z"
          />
        </svg>
      </div>
      <div className="absolute bottom-5 right-5">
        <svg className="w-8 h-8 text-pink-700 animate-bounce" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
               5.42 4.42 3 7.5 3c1.74 0 3.41 
               0.81 4.5 2.09C13.09 3.81 14.76 3 
               16.5 3 19.58 3 22 5.42 22 
               8.5c0 3.78-3.4 6.86-8.55 
               11.54L12 21.35z"
          />
        </svg>
      </div>
    </div>
  )
}