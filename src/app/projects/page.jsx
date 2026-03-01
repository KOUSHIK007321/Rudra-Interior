"use client";

import React, { useState } from 'react';
import { Play, Camera, MapPin, Box, Wallet } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All Projects");

  // Category options based on image
  const categories = [
    "Bedroom", "Before-after", "Kitchen", "Office", "Project videos", "All Projects"
  ];

  // Placeholder data - add your actual photos and videos here
  const allProjects = [
    { 
      id: 1, 
      type: "photo", 
      category: "Bedroom", 
      title: "Luxury Master Bedroom", 
      location: "Laketown", 
      material: "Veneer", 
      budget: "₹2.5L",
      img: "/hero1.jpg" 
    },
    { 
      id: 2, 
      type: "video", 
      category: "Project videos", 
      title: "Full Home Tour", 
      location: "New Town", 
      material: "Modern Mix", 
      budget: "₹10L+",
      img: "/hero2.jpg" 
    },
    { 
      id: 3, 
      type: "photo", 
      category: "Kitchen", 
      title: "Modular High-Gloss Kitchen", 
      location: "Salt Lake", 
      material: "Acrylic", 
      budget: "₹1.8L",
      img: "/hero3.jpg" 
    },
    // Add more items to fill the grid...
  ];

  const filteredProjects = filter === "All Projects" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <main className="bg-[#121212] min-h-screen py-24 px-6 pt-32">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">
            Our Luxury <span className="text-[#c5a04d]">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg uppercase tracking-widest">
            Premium Interior Design Portfolio — Rudra Interior Kolkata
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer uppercase tracking-wider border border-transparent
                ${filter === cat 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                  : "bg-[#c5a04d] text-black hover:bg-[#d4b46a] hover:shadow-[0_0_15px_rgba(197,160,77,0.3)]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative h-[350px] w-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
            >
              {/* Image / Video Placeholder */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />

              {/* Media Type Icon */}
              <div className="absolute top-6 right-6 bg-black/50 p-3 rounded-full text-[#c5a04d] backdrop-blur-sm">
                {project.type === "video" ? <Play size={20} fill="currentColor" /> : <Camera size={20} />}
              </div>

              {/* Detail Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-[#c5a04d] text-2xl font-bold mb-4">{project.title}</h3>
                
                <div className="space-y-2 text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="flex items-center gap-2"><MapPin size={16} className="text-[#c5a04d]" /> {project.location}</p>
                  <p className="flex items-center gap-2"><Box size={16} className="text-[#c5a04d]" /> {project.material}</p>
                  <p className="flex items-center gap-2"><Wallet size={16} className="text-[#c5a04d]" /> {project.budget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if no projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl font-medium">Coming Soon: Premium {filter} Projects</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;