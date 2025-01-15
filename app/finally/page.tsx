"use client";

import React from "react";
import Head from "next/head";

export default function LastPage() {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-pink-300 relative overflow-hidden">
        {/* Thank You Message */}
        <div
          id="thankyou"
          className="text-center text-4xl font-bold text-pink-700 mb-8"
          aria-label="Thank you message"
        >
          Thank you for being my girlfriend
        </div>

        <div
          id="thankyou-sub"
          className="text-center text-1xl font-semibold text-pink-700 mb-8"
          aria-label="Sub thank you message"
        >
          A Girl Who is my Friend Obviously 😏
        </div>

        {/* Decorative Heart Animations */}
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
    </>
  );
}