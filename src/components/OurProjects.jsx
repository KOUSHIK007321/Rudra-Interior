/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { MapPin, Box, Wallet } from 'lucide-react';

const OurProjects = () => {
    const projects = [
        {
            title: "Luxury Master Bedroom",
            location: "Laketown, Kolkata",
            material: "Teak Veneer & PU Polish",
            budget: "₹2.0L - ₹3.5L",
            img: "/hero1.jpg"
        },
        {
            title: "Modern Modular Kitchen",
            location: "New Town, Kolkata",
            material: "High Gloss Laminate",
            budget: "₹1.5L - ₹2.5L",
            img: "/hero2.jpg"
        },
        {
            title: "Compact Wardrobe",
            location: "Salt Lake, Kolkata",
            material: "Plywood & Mica",
            budget: "₹80k - ₹1.2L",
            img: "/hero3.jpg"
        }
    ];

    return (
        <section className="py-24 px-6  bg-black border-b border-[#800000] animate-diagonal-gold ">
            <div className="max-w-375 mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-widest">
                    Our <span className="text-[#c5a04d]">Projects</span>
                </h2>

                {/* Increased gap-12 for distinct separation between the 3 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12" suppressHydrationWarning>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            /* h-[300px] makes the cards rectangular/widescreen */
                            className="group relative h-75 w-full overflow-hidden rounded-2xl bg-[#0a0a0a] cursor-pointer isolate shadow-2xl transition-all duration-500"
                        >
                            {/* Image: GPU accelerated zoom to prevent corner flickering */}
                            <img
                                src={project.img}
                                alt={project.title}
                                className="h-full w-full object-cover transform-gpu transition-transform duration-1000 ease-in-out group-hover:scale-110"
                            />

                            {/* Dark Overlay: Fades in on hover for text contrast */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Details: Slide up from the bottom */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                <h3 className="text-[#c5a04d] text-xl font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.title}
                                </h3>

                                <div className="space-y-2 text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                    <p className="flex items-center gap-2">
                                        <MapPin size={16} className="text-[#c5a04d]" />
                                        <span>Location: {project.location}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Box size={16} className="text-[#c5a04d]" />
                                        <span>Material: {project.material}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Wallet size={16} className="text-[#c5a04d]" />
                                        <span>Budget: {project.budget}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <button className="cursor-pointer bg-[#c5a04d] text-black font-bold py-4 px-12 rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(197,160,77,0.5)] transition-all uppercase tracking-widest border border-white/10">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;