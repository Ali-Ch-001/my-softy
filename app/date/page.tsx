"use client"

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { DatePickerWithPresets } from '@/components/DatePickerWithPresets'

export default function DatePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-r from-pink-300 to-pink-500 relative">
      <Head>
        <title>Choose a Date</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Page Title */}
      <h1 className="text-center my-5 text-3xl text-white font-bold shadow-lg p-4 rounded-full bg-pink-600">
        When you free ... It&apos;s not a date obv 😁
      </h1>

      {/* Date Picker */}
      <div className="mt-8 w-full max-w-md flex flex-col items-center justify-center">
        <DatePickerWithPresets onDateChange={setSelectedDate} />
      </div>

      {/* Display Selected Date */}
      {selectedDate && (
        <p className="mt-4 text-xl text-white">
          You selected: <span className="font-semibold">{selectedDate.toDateString()}</span>
        </p>
      )}

      {/* Navigation Button */}
      <Link href="/food">
        <button
          type="button"
          className={`mt-8 bg-pink-500 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-pink-600 ${
            !selectedDate ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!selectedDate}
          aria-label="Proceed to Food Preferences"
        >
          Submit
        </button>
      </Link>

      {/* Decorative Heart Animations */}
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