"use client"

import { useState } from "react"
import Link from "next/link"

const shortcodesMenu = [
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export default function NavbarShortcodes() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white font-medium hover:text-yellow-400 cursor-pointer"
      >
        SHORTCODES ▾
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute left-1/2 -translate-x-1/2 top-full pt-4
          w-56
          transition-all duration-300 ease-out
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
          z-50
        `}
      >
        <div className="bg-black text-white rounded-md shadow-lg relative">

          {/* Gold decorative pill */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-2 bg-yellow-400 rounded-full"></span>

          <ul className="py-3">
            {shortcodesMenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-sm uppercase hover:text-yellow-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}