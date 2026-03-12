"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  { image: "/prom1.jpg" },
  { image: "/prom2.jpg" },
  { image: "/prom3.jpg" },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const banner = banners[currentSlide]

  return (
    <section className="relative overflow-hidden" aria-label="Promociones destacadas">
      <div className="relative min-h-[280px] md:min-h-[340px] w-full">
        {"image" in banner && (
          <Image
            src={(banner as any).image}
            alt="Promoción"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md transition-colors hover:bg-card"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md transition-colors hover:bg-card"
        aria-label="Banner siguiente"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentSlide
                ? "w-4 bg-secondary"
                : "bg-ml-dark/30"
            }`}
            aria-label={`Ir al banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
