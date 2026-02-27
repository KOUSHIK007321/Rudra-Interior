import React from 'react';

const services = [
  { title: "Bedroom Interior", icon: "🛏️" },
  { title: "Modular Kitchen", icon: "🍴" },
  { title: "Wardrobe & Storage", icon: "🚪" },
  { title: "TV Unit", icon: "📺" },
  { title: "False Ceiling", icon: "🔲" },
  { title: "Custom Furniture", icon: "🛋️" },
  { title: "Commercial Interior", icon: "🏢" },
  { title: "Others", icon: "🟰" },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#b3952d] py-16 px-4 animate-diagonal-gold">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative flex flex-col items-center justify-center 
                p-10 rounded-2xl bg-[#1a1608] text-white
                transition-all duration-300 ease-out
                cursor-pointer
                hover:-translate-y-3
                
                /* 2. Bottom Shadow (The 'depth' shadow) */
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]
                
                /* 3. The Glow (The 'light' effect from your image) */
                /* Combining a thin ring with a colored spread shadow */
                hover:ring-1 hover:ring-yellow-400 hover:drop-shadow-[0_35px_35px_rgba(255, 191, 0,0.25)]
              "
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <p className="text-center font-bold text-lg uppercase tracking-tight">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}