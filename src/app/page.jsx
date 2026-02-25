import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import HeroSlider from "@/components/heroSlider"
import NavbarShortcodes from "@/components/shortcodesMenu"
import BestServiceSection from "@/components/BestServiceSection"

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <HeroSlider />
      </div>

      {/* Curved Shape */}
      <svg
        className="absolute top-0 left-0 w-[92%] h-[45vh] md:h-[60vh] z-10"
        viewBox="0 55 1440 600"
        preserveAspectRatio="none"
      >
        <path
          fill="black"
          d="
            M0,600
            C400,80 1050,520 1440,60
            L1440,0
            L0,0
            Z
          "
        />
      </svg>

      <div className="relative z-20">

        {/* Top Bar */}
        <div className="flex justify-center lg:pt-4">
          <div
            className="
      bg-yellow-400 text-black
      w-full md:w-[85%]
      rounded-none md:rounded-2xl
      px-4 md:px-8
      py-2 md:py-3
    "
          >
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">

              {/* Left Text (Desktop Only) */}
              <div className="hidden md:block text-sm font-medium">
                We make luxury for you
              </div>

              {/* Email (Desktop Only & Perfect Center) */}
              <div className="hidden md:flex justify-center items-center gap-2 text-sm font-medium">
                <Mail size={16} />
                <span>info@yourmail.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-end gap-4 text-sm">
                <FaFacebookF className="cursor-pointer hover:text-white transition duration-300" />
                <FaTwitter className="cursor-pointer hover:text-white transition duration-300" />
                <FaInstagram className="cursor-pointer hover:text-white transition duration-300" />
                <FaLinkedinIn className="cursor-pointer hover:text-white transition duration-300" />
                <FaYoutube className="cursor-pointer hover:text-white transition duration-300" />

              </div>

            </div>
          </div>
        </div>
        {/* 🔹 Navbar */}
        <div className="w-full md:w-[85%] mx-auto mt-6 md:mt-10 px-6 md:px-20 flex items-center justify-between text-white">

          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="h-10 w-auto"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-medium">
            <a href="#" className="text-yellow-400">HOME</a>
            <a href="#">ABOUT</a>
            <NavbarShortcodes/>
            <a href="#">BLOG</a>

            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
              BUY NOW
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden grid grid-cols-3 gap-1 cursor-pointer">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-white rounded-full"></span>
            ))}
          </div>

        </div>

        {/* 🔹 Hero Content */}
        <div className="flex flex-col items-center justify-center text-center 
                        h-[70vh] md:h-[80vh] 
                        px-6 text-white">

          <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            LET YOUR HOME BE UNIQUE & STYLISH
          </h1>

          <button className="mt-6 md:mt-8 
                             bg-yellow-400 text-black 
                             px-6 md:px-10 
                             py-3 
                             rounded-full 
                             font-semibold 
                             hover:bg-yellow-300 
                             transition">
            OUR SERVICES
          </button>

          {/* Slider Indicators */}
          <div className="flex items-center gap-3 mt-8">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-12 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          </div>

        </div>

      </div>
      <div>
        <BestServiceSection/>
      </div>
    </main>
  )
}