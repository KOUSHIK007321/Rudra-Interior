"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"
import { FiMapPin, FiPhone, FiCalendar } from "react-icons/fi"

const quickLinks = [
  "Home",
  "Blog",
  "Projects",
  "FAQ",
  "Contact",
  "About Us",
]

const services = [
  "Flooring & Tilings",
  "Lightings",
  "Furnitures",
  "Luxury Interior",
  "Interior Design",
]

const articles = [
  "Triangle Concrete House On Lake",
  "A Place Of Silence",
  "Minimal House: New Trends in Interior Design",
  "Top 10 Most Popular Bedroom Designs",
  "Incredible Urban Architecture & Landscapes",
]

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-28 pb-10">

      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-28"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C350,60 1100,60 1440,200 L1440,0 L0,0 Z"
            fill="black"
          />
          <path
            d="M0,200 C350,60 1100,60 1440,200"
            stroke="#facc15"
            strokeWidth="6"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 TOP ROW (Logo + Address + Phone) */}
        <div className="grid md:grid-cols-3 gap-16 items-start mb-16">

          {/* Left Box */}
          <div className="bg-[#0c0c0c] p-10">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={50}
              className="mb-6"
            />

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are the leading architect and interior design firm in the world.
              We are innovators and problem solvers to turn the challenge into
              greater opportunities.
            </p>

            <h4 className="text-yellow-400 mb-4">Follow Us</h4>

            <div className="flex gap-4">
              <FaFacebookF className="bg-blue-600 p-2 rounded-full w-9 h-9" />
              <FaPinterestP className="bg-red-600 p-2 rounded-full w-9 h-9" />
              <FaInstagram className="bg-pink-600 p-2 rounded-full w-9 h-9" />
              <FaLinkedinIn className="bg-blue-700 p-2 rounded-full w-9 h-9" />
              <FaTwitter className="bg-sky-500 p-2 rounded-full w-9 h-9" />
            </div>
          </div>
          


        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 text-sm">
          Copyright © 2026 Luxury Interior Pro . All Rights Reserved
        </div>

      </div>
    </footer>
  )
}