"use client";

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Calendar } from 'lucide-react';

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Using your specific image paths
  const slides = [
    { url: "hero1.jpg" },
    { url: "hero2.jpg" },
    { url: "hero3.jpg" },
    { url: "hero4.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black border-b-[6px] border-[#800000]">

      {/* 1. Horizontal Sliding Track */}
      <div
        className="flex h-full w-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
      </div>

      {/* 2. Static Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <h2 className="text-white text-xl md:text-2xl font-light tracking-[0.3em] mb-4 uppercase drop-shadow-lg">
          Creative Interior Solutions
        </h2>
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-10 tracking-tight drop-shadow-2xl">
          for Modern Living
        </h1>

        {/* Animated Buttons with Cursor Pointer */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto">

          {/* View Projects - Golden Glow */}
          <button className="group cursor-pointer relative flex items-center gap-2 px-8 py-3 bg-[#c5a04d] text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(197,160,77,0.8)] border-2 border-transparent hover:border-white/60">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            VIEW PROJECTS
          </button>

          {/* Book Now - Maroon Glow (Ref Image Style) */}
          <button className="group cursor-pointer relative flex items-center gap-2 px-8 py-3 bg-[#800000] text-white font-bold rounded-lg transition-all hover:scale-110 shadow-[0_0_15px_rgba(128,0,0,0.9)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)] border-2 border-white/30 hover:border-white">
            <Calendar size={18} /> BOOK NOW
            {/* Inner Glow Pulse */}
            <span className="absolute inset-0 rounded-lg bg-white/5 animate-pulse group-hover:hidden" />
          </button>

          {/* Call Now - Transparent/White Glow */}
          <button className="group cursor-pointer relative flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg transition-all hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            <Phone size={18} className="group-hover:rotate-12 transition-transform" />
            CALL NOW
          </button>
        </div>

        <p className="mt-12 text-yellow-500 text-lg md:text-xl font-semibold tracking-widest uppercase drop-shadow-md">
          Designed & Executed by Rudra Interior, Kolkata
        </p>
      </div>

      {/* 3. Sliding Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer transition-all duration-500 h-1.5 rounded-full ${index === current ? "w-16 bg-yellow-500" : "w-4 bg-white/30"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;