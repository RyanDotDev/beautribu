"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Header = () => {
  const headerTextRef = useRef(null);
  
    useEffect(() => {
      requestAnimationFrame(() => {
        gsap.fromTo(
          headerTextRef.current, {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power1.inOut',
          }
        );
      })
    }, []);

  return (
    <div 
      className='w-full h-[300px] flex items-center justify-between overflow-hidden lg:h-[400px]'
      style={{ background: 'var(--btn-pink' }}
    >
      <h1 
        className={`absolute text-white opacity-0 translate-x-[50px] text-(length:--sub-head-size) pl-[5vw] 
          tracking-widest font-[500] sm:relative z-50 transform`}
        ref={headerTextRef}
      >
        ABOUT US
      </h1>
      <Image 
        src='/images/beau_tribu_about_header_image.webp'
        alt='Beau Tribu Header Image'
        width={600}
        height={300}
        className='header-image h-[300px] lg:h-[400px]'
        style={{ objectFit: 'cover'}}
      />
    </div>
  );
};

export default Header;
