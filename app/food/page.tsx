"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { foodItems, FoodItem } from '@/constants/foodItems';

export default function Food() {
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const handleSelect = (food: FoodItem) => {
    setSelectedFood(food);
  };

  return (
    <>
      <Head>
        <title>Food Selection</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-r from-pink-300 to-pink-500 relative">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-center text-3xl font-bold text-white shadow-lg p-4 rounded-full bg-pink-600">
            What food would you like to eat?
          </h1>
        </div>

        {/* Food Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodItems.map((food) => (
            <div
              key={food.id}
              onClick={() => handleSelect(food)}
              className={`cursor-pointer border-2 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
                selectedFood?.id === food.id
                  ? 'border-pink-700'
                  : 'border-transparent'
              }`}
            >
              <div className="relative w-full h-44">
                <Image
                  src={food.image}
                  alt={food.name}
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="p-4 bg-pink-100">
                <h2 className="text-xl font-semibold text-pink-700">{food.name}</h2>
                <p className="mt-2 text-gray-600">{food.description}</p>
                {selectedFood?.id === food.id && (
                  <span className="mt-2 inline-block text-pink-700 font-bold">Selected</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Button */}
        <Link href={selectedFood ? "/dessert" : "#"}>
          <button
            className={`mt-8 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
              selectedFood
                ? 'bg-pink-600 hover:bg-pink-700'
                : 'bg-pink-300 cursor-not-allowed'
            }`}
            disabled={!selectedFood}
            aria-label="Continue to Dessert Selection"
          >
            Continue
          </button>
        </Link>

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
          <svg className="w-8 h-8 text-pink-600 animate-bounce" viewBox="0 0 24 24">
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