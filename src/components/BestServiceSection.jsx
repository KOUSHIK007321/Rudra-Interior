"use client"

import { useEffect, useRef, useState } from "react"

export default function BestServiceSection() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔁 Toggle visibility both ways
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={ref}
      className="bg-gray-100 py-20 md:py-28 px-6 text-center overflow-hidden"
    >
      <div
        className={`
          transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"}
        `}
      >
        {/* Small Heading */}
        <p className="uppercase tracking-[0.3em] text-sm text-gray-700 mb-6">
          OUR BEST SERVICE
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          BEST SERVICES WE’RE PROVIDING
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          WE ARE WORKING PRIMARILY IN AND AROUND LONDON AND THE HOME COUNTIES,
          ON SCHEMES THAT RANGE FROM SMALL INTIMATE SPACES TO LARGE PROJECTS
        </p>
      </div>
    </section>
  )
}