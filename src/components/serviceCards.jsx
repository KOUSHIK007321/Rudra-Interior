"use client";

import React from 'react';
import { 
  Bed, 
  UtensilsCrossed, 
  DoorOpen, 
  Tv, 
  Grid3X3, 
  Armchair, 
  Building2,
  PlusSquare // Icon for "Others"
} from 'lucide-react';

const OurServices = () => {
  const services = [
    { title: "Bedroom Interior", icon: <Bed size={40} /> },
    { title: "Modular Kitchen", icon: <UtensilsCrossed size={40} /> },
    { title: "Wardrobe & Storage", icon: <DoorOpen size={40} /> },
    { title: "TV Unit", icon: <Tv size={40} /> },
    { title: "False Ceiling", icon: <Grid3X3 size={40} /> },
    { title: "Custom Furniture", icon: <Armchair size={40} /> },
    { title: "Commercial Interior", icon: <Building2 size={40} /> },
    { title: "Others", icon: <PlusSquare size={40} /> }, // New item added here
  ];

  return (
    <section className=" bg-black border-b border-[#800000] py-24 px-6 animate-diagonal-gold">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider">
          Our <span className="text-[#c5a04d]">Services</span>
        </h2>

        {/* The services-grid class from globals.css ensures a stable render */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;