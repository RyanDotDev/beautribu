"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { libreBaskerville } from '@/lib/utils/fonts';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const backgroundRef = useRef(null);
  const contentRef =  useRef(null);

  useEffect(() => {
    // This creates a parallax effect for the background
    gsap.to(backgroundRef.current, {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
      contentRef.current, 
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1,
      },
    );
  }, []);

  return (
    <div className='relative h-screen overflow-hidden w-screen'>
      <div 
        ref={contentRef}
        className='relative z-50 text-center mt-[25vh] opacity-0 translate-y-[50px]'
      >
        <h1 className={`${libreBaskerville.className}
        text-white text-[6rem] font-(family-name:--sub-head-font) tracking-wider font-[500]`}
        >
          Beau Tribu
        </h1>
        <h2 className={`${libreBaskerville.className} text-(length:--sub-head-size)
          text-[var(--main-pink)]`}
        >
          Bromley&#39;s Late Night Beauty Bar
        </h2>
        <div className='flex justify-center gap-3 mt-[1rem]'>
          <button className='bg-(--btn-pink) text-white p-2 cursor-pointer rounded-xl tracking-wider 
            hover:filter-[brightness(0.9)] duration-300'
          >
            BOOK NOW
          </button>
          <button className='bg-white text-(--btn-pink) p-2 cursor-pointer rounded-xl tracking-wider
            hover:filter-[brightness(0.9)] duration-300'
          >
            VIEW TREATMENTS
          </button>
        </div>
      </div>
      <Image 
        src='/images/beau_tribu_banner_image.webp'
        alt='Beau Tribu Banner Image'
        fill
        className='object-cover brightness-90'
        ref={backgroundRef}
        priority
      />
    </div>
  )
}

export default Banner;
