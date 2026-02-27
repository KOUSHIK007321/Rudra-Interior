"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFlip } from "swiper/modules"
import Image from "next/image"

export default function HeroSlider() {
  const slides = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
  ]

  return (
    <div className="absolute inset-0 z-0">
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 4000 }}
    pagination={{ clickable: true }}
    loop={true}
    className="h-full"
  >
    {slides.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[70vh] md:h-screen">
          <Image
            src={img}
            alt="Interior"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  )
}