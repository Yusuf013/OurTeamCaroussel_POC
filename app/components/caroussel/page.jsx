'use client'

import React, { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  "/images/Group 39898.svg",
  "/images/Group 39899.svg",
  "/images/Group 39900.svg",
  "/images/Group 39899.svg",
  "/images/Group 39898.svg",
  "/images/Group 39900.svg",
  "/images/Group 39900.svg",
  "/images/Group 39898.svg",
  "/images/Group 39899.svg",
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalSlides = Math.ceil(images.length / 3)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3))
  }

  const visibleImages = images.slice(currentIndex, currentIndex + 3)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        {/* Previous Button */}
        <button
          className={`h-10 w-10 rounded-l-full flex items-center justify-center bg-[#A8FF1A] transition-opacity duration-500 ease-in-out fade-in-animation ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          disabled={currentIndex === 0}
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-7 w-7" style={{ color: "#003A47" }} />
          <span className="sr-only">Previous slide</span>
        </button>

        {/* Images */}
        <div className="w-full flex overflow-hidden">
          {visibleImages.map((src, index) => (
            <div key={currentIndex + index} className="px-6 w-1/3 flex-shrink-0 transition-opacity duration-500 ease-in-out fade-in-animation">
              <div className="bg-transparent rounded-lg shadow-md overflow-hidden">
                <div className="flex aspect-[3/2] items-center justify-center p-0">
                  <Image
                    src={src}
                    alt={`Carousel Image ${currentIndex + index + 1}`}
                    width={800}
                    height={533}
                    className="object-contain w-full h-full transition-opacity duration-500 ease-in-out fade-in-animation"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`h-10 w-10 rounded-r-full flex items-center justify-center bg-[#A8FF1A] transition-opacity duration-500 ease-in-out fade-in-animation ${
            currentIndex >= images.length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          disabled={currentIndex >= images.length - 3}
          onClick={handleNext}
        >
          <ChevronRight className="h-7 w-7" style={{ color: "#003A47" }} />
          <span className="sr-only">Next slide</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-opacity duration-500 ease-in-out fade-in-animation`}
            style={{
              backgroundColor: Math.floor(currentIndex / 3) === index ? "#F4C5FF" : "#636363",
            }}
            onClick={() => setCurrentIndex(index * 3)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
