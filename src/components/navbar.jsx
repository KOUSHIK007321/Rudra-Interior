"use client";

import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Use a local variable to prevent multiple state writes
      const shouldBeScrolled = window.innerWidth < 768 && window.scrollY > 10;
      
      // Functional update with a check prevents cascading renders
      setIsScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
      
      if (isOpen && window.scrollY > 50) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once immediately to capture state if page is already scrolled on load
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const renderItemName = (name) => {
    if (name === "About Us") {
      return (
        <span className="transition-colors duration-300">
          About <span className="text-yellow-500 group-hover:text-white transition-colors duration-300">Us</span>
        </span>
      );
    }
    return name;
  };

  return (
    <nav 
      className={`fixed md:absolute top-0 left-0 w-full z-50 px-6 md:px-10 transition-all duration-[1000ms] ease-in-out py-6 ${
        isScrolled 
          ? "bg-white/[0.02] backdrop-blur-md shadow-sm border-b border-white/5 md:!bg-transparent md:!border-transparent md:!backdrop-blur-none md:!shadow-none" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center space-x-2">
           <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-xs font-bold text-black shadow-lg">LOGO</div>
           <span className="text-white text-2xl font-bold tracking-tight">Rudra <span className="text-yellow-500">Interior</span></span>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-white text-xl font-bold py-2 px-1 transition-all duration-300 ease-out hover:text-yellow-500 hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              {renderItemName(item.name)}
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="menu-toggle md:hidden text-yellow-500 text-3xl z-[70] focus:outline-none transition-all duration-200 active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Mobile View Slider */}
        <div 
          ref={menuRef}
          className={`fixed top-20 right-4 w-60 bg-[#1a1608]/95 backdrop-blur-xl border border-yellow-500/30 rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-[60] ${
            isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center py-4">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className="group w-full text-center text-white text-lg font-bold py-5 transition-all duration-500 hover:bg-yellow-500/10 active:bg-yellow-500/20 hover:text-yellow-500"
                  style={{ 
                    transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(40px)',
                    opacity: isOpen ? 1 : 0
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {renderItemName(item.name)}
                </a>
                
                {index !== menuItems.length - 1 && (
                  <div 
                    className={`w-4/5 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent transition-all duration-700 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} 
                    style={{ transitionDelay: isOpen ? `${index * 80 + 40}ms` : '0ms' }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;