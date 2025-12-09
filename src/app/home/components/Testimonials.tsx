"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialsMap, TestimonialsProps } from '@/lib/helpers/testimonials/testimonials';
import { libreBaskerville } from '@/lib/utils/fonts';
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Testimonials.css"

interface SliderProps {
  slides?: TestimonialsProps[];
  interval?: number;
}

const Testimonials: React.FC<SliderProps> = ({ 
  slides = testimonialsMap, 
  interval = 5000
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className="bg-(--main-pink) pt-12 pb-16 h-auto w-full p-4">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <h1 className="text-black tracking-widest text-3xl font-medium text-shadow-lg">
          TESTIMONIALS
        </h1>

        <p className="mt-3">
          <i><span className="font-semibold">4.8 stars</span> on Google Reviews</i>
        </p>

        <Swiper
          onSwiper={(swiper: SwiperType) => setSwiperRef(swiper)}
          onSlideChange={(swiper: SwiperType) => setActiveSlide(swiper.realIndex)}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: interval, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          speed={800}
          className="w-full h-[300px] max-w-4xl custom-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="relative flex flex-col h-full gap-6 justify-center 
                  items-center text-center w-full px-9"
              >
                {/* TESTIMONIALS NAME */}
                <h3 
                  className={`
                    text-(--btn-pink) text-2xl font-semibold tracking-wider text-shadow-lg
                    ${libreBaskerville.className}
                  `}
                 >
                  {slide.name}
                </h3>

                {/* STAR RATINGS */}
                <div className="text-[#fff4ad] text-2xl text-shadow-lg">
                  {slide.stars}
                </div>

                {/* TESTIMONIAL */}
                <p className="text-gray-700 text-lg">
                  <i>&quot;{slide.review}&quot;</i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* PAGINATION */}
        <div className="absolute mt-110 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef?.slideToLoop(index)}
              className={`w-3 h-3 rounded-full border cursor-pointer border-(--btn-pink) transition-all duration-300 ${
                index === activeSlide ? "bg-(--btn-pink) scale-125" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials;