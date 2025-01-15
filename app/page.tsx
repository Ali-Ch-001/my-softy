"use client"

import Head from 'next/head'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const yesButtonRef = useRef<HTMLButtonElement>(null)
  const [yesFontSize, setYesFontSize] = useState(16)

  const handleNoClick = () => {
    setYesFontSize(prevSize => prevSize + 4)
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4 pt-10 overflow-y-hidden bg-gradient-to-r from-pink-300 to-pink-400 relative">
      <Head>
        <title>Be My Valentine</title>
      </Head>

      {/* Page Title */}
      <div className="text-center my-5 text-2xl text-pink-700">
        <b>Will you be my valentine?</b>
      </div>

      {/* Buttons and Image Container */}
      <div className="flex flex-col items-center gap-8 my-5 w-full max-w-md">
        {/* Buttons Container */}
        <div className="flex justify-center gap-8 w-full">
          <Link href="/thankyou">
            <button
              className="bg-pink-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
              ref={yesButtonRef}
              style={{ fontSize: `${yesFontSize}px` }}
              aria-label="Yes Button"
            >
              Yes
            </button>
          </Link>
          <div>
            <button
              className="bg-pink-700 text-white py-2 px-4 rounded-lg flex-shrink-0 transition-colors duration-300 hover:bg-pink-400"
              onClick={handleNoClick}
              style={{ fontSize: '16px' }}
              aria-label="No Button"
            >
              NOOOOOO
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="mt-2 w-full flex justify-center">
          <Image 
            src="/cat.gif" 
            alt="cat asking question" 
            className="max-w-full h-auto" 
            width={500} 
            height={500} 
          />
        </div>
      </div>

      {/* Decorative Heart Animations (Optional) */}
      <div className="absolute top-5 left-5">
        <svg className="w-8 h-8 text-pink-700 animate-bounce" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 
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
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 
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