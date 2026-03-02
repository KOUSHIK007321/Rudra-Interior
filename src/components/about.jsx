"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutPage() {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.18 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden animate-diagonal-gold  bg-black border-b border-[#800000]">

            {/* GOLD sweep layers (pure CSS) */}
            <div className="gold-sweep-wrap" aria-hidden="true"></div>
            <div className="gold-sweep-vignette" aria-hidden="true"></div>

            {/* dark overlay for readability */}
            <div className="absolute inset-0 -z-10 bg-black/55"></div>

            <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">

                {/* TITLE */}
                <h1 className="text-center text-4xl md:text-6xl font-bold text-white mb-16">
                    About <span className="text-yellow-400">Us</span>
                </h1>

                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT content (reveals from left) */}
                    <div className={`transition-all duration-900 ease-[cubic-bezier(.22,1,.36,1)] ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-6">
                            Artistic Excellence in Every Detail
                        </h2>

                        <p className="text-gray-200 leading-relaxed mb-8 max-w-3xl">
                            Rudra Interior is a one-man creative studio delivering premium interior solutions with artistic excellence. Led by <strong className="text-white">Sagar Das</strong>, a skilled Interior Designer and Fine Artist, we specialize in bringing custom, difficult designs to life.
                        </p>

                        <ul className="space-y-4 text-gray-200">
                            <li><span className="text-yellow-400 mr-2">👤</span><strong>Owner:</strong> Sagar Das</li>
                            <li><span className="text-yellow-400 mr-2">✏️</span><strong>Experience:</strong> Interior Designer & Fine Artist</li>
                            <li><span className="text-yellow-400 mr-2">🛠️</span><strong>Specialty:</strong> Difficult & Custom Designs</li>
                            <li><span className="text-yellow-400 mr-2">📍</span><strong>Location:</strong> Laketown, Kolkata</li>
                        </ul>
                    </div>

                    {/* RIGHT image placeholder with subtle Ken Burns */}
                    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"} transition-all duration-900 ease-[cubic-bezier(.22,1,.36,1)]`}>
                        <div className="relative h-90 md:h-130 w-full">
                            {/* Replace /about-placeholder.jpg with your real photo */}
                            <Image
                                src="/about/img1.jpg"
                                alt="About image"
                                fill
                                className="object-cover animate-image-zoom"
                                priority
                            />
                        </div>

                        {/* decorative rounded frame shadow */}
                        <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-black/30"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}