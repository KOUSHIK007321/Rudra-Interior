"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // 1. Updated menu items to use IDs that match your section IDs
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // 2. Smooth Scroll Function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      // Calculates offset for fixed navbar height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.innerWidth < 768 && window.scrollY > 10;
      setIsScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));

      // FIX: Removed the auto-close logic that broke mobile scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <span>
          About <span className="text-yellow-500 group-hover:text-white transition-colors duration-300">Us</span>
        </span>
      );
    }
    return name;
  };

  return (
    <nav
      suppressHydrationWarning={true}
      className={`fixed md:absolute top-0 left-0 w-full z-50 px-6 md:px-10 transition-all duration-1000 ease-in-out py-6 ${isScrolled
        ? "bg-white/5 backdrop-blur-md shadow-sm border-b border-white/5 md:bg-transparent md:border-transparent"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={30}
          />

          <span className="text-white text-2xl font-bold tracking-tight">Rudra <span className="text-yellow-500">Interior</span></span>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="group relative text-white text-xl font-bold py-2 px-1 transition-all duration-300 ease-out hover:text-yellow-500 hover:-translate-y-1 hover:scale-105"
            >
              {renderItemName(item.name)}
              <span className="absolute left-0 bottom-0 w-full h-0.75 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle md:hidden text-yellow-500 text-3xl z-70 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Mobile View Slider */}
        <div
          ref={menuRef}
          className={`fixed top-20 right-4 w-60 bg-[#1a1608]/95 backdrop-blur-xl border border-yellow-500/30 rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out md:hidden shadow-2xl z-60 ${isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95 pointer-events-none'
            }`}
        >
          <div className="flex flex-col items-center py-4">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <a
                  href={`#${item.id}`}
                  className="group w-full text-center text-white text-lg font-bold py-5 transition-all duration-500 hover:bg-yellow-500/10 hover:text-yellow-500"
                  style={{
                    transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(40px)',
                    opacity: isOpen ? 1 : 0
                  }}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {renderItemName(item.name)}
                </a>
                {index !== menuItems.length - 1 && (
                  <div className="w-4/5 h-px bg-linear-to-r from-transparent via-yellow-500/40 to-transparent" />
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