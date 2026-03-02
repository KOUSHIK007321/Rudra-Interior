"use client";

import React from 'react';
import { Phone, ArrowRight, Calendar } from 'lucide-react';

const HeroSlider = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black border-b border-[#800000]">

      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/videos/Recents.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Static Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <h2 className="text-white text-xl md:text-2xl font-light tracking-[0.3em] mb-4 uppercase drop-shadow-lg">
          Creative Interior Solutions
        </h2>
        <h1 className="text-white text-4xl md:text-7xl font-bold mb-10 tracking-tight drop-shadow-2xl">
          for Modern Living
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto">
          <button className="group cursor-pointer relative flex items-center gap-2 px-8 py-3 bg-[#c5a04d] text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(197,160,77,0.8)] border-2 border-transparent hover:border-white/60">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            VIEW PROJECTS
          </button>

          <button className="group cursor-pointer relative flex items-center gap-2 px-8 py-3 bg-[#800000] text-white font-bold rounded-lg transition-all hover:scale-110 shadow-[0_0_15px_rgba(128,0,0,0.9)] hover:shadow-[0_0_35px_rgba(255,0,0,0.6)] border-2 border-white/30 hover:border-white">
            <Calendar size={18} /> BOOK NOW
            <span className="absolute inset-0 rounded-lg bg-white/5 animate-pulse group-hover:hidden" />
          </button>

          <button className="group cursor-pointer relative flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg transition-all hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            <Phone size={18} className="group-hover:rotate-12 transition-transform" />
            CALL NOW
          </button>
        </div>

        <p className="mt-12 text-[#c5a04d] text-lg md:text-xl font-semibold tracking-widest uppercase drop-shadow-md">
          Designed & Executed by Rudra Interior, Kolkata
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default HeroSlider;