"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Opening = () => {
  const elementRef = useRef(null);

  // useEffect for appear on scrlll effect
  useEffect(() => {
    let ctx: gsap.Context;

    if (elementRef.current) {
      ctx = gsap.context(() => {
        gsap.from(elementRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            once: false
          },
        });
        
        ScrollTrigger.refresh();
      }, elementRef);
    }

    return () => {
      ctx?.revert();
    }
  }, []);

  return (
    <div ref={elementRef} className='p-[2rem] bg-white pb-[4rem]'>
      <div className='flex gap-[2rem] pt-[1rem] justify-around flex-col text-center lg:flex-row lg:text-left 
        lg:gap-[3rem] lg:pt-[1rem]'
      >

        {/* LEFT SIDE OF OPENING CONTAINER */}
        <div className='w-auto lg:w-[600px]'>
          <h1 
            className="tracking-widest font-[500] text-[var(--btn-pink)] text-[2rem] mb-[1rem]"
          >
            BEAUTY AT YOUR FINGERTIPS
          </h1>
          <p className='font-light text-sm'>
            Here at <strong><i>Beau Tribu</i></strong>, we treat our customers as a part of us.
            We always strive to provide the best experience and beauty treatment in the South East London
            area which sets our message of beauty standards and hospitality.
          </p>
          <p className='font-light text-sm mt-[1rem]'>
            Bring confidence to your beauty and style.
          </p>
          <Link href='/treatments'>
            <button 
              className="btn btn-hover border-2 p-[1.5rem] border-[var(--main-gold)] text-[var(--main-gold)] mt-[2rem] 
              cursor-pointer tracking-wider hover:bg-[var(--main-gold)] hover:text-white duration-300"
            >
              <span>BOOK NOW</span>
            </button>
          </Link>
          
        </div>

        {/* RIGHT SIDE OF OPENING CONTAINER */}
        <div className="flex-shrink-0 pt-[1.5rem] justify-center">
          <Image 
            src='/images/beau_tribu_opening_image.webp'
            alt='Beau Tribu Intro Image'
            width={500}
            height={500}
            className="mx-auto shadow-xl"
          />
        </div>

      </div>
    </div>
  )
}

export default Opening;