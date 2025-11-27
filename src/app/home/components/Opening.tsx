"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Opening = () => {
  const elementRef = useRef(null);

  //* useEffect for appear on scroll effect
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
    <div ref={elementRef} className='p-8 bg-white pb-16'>
      <div className='flex gap-8 pt-4 justify-around flex-col text-center lg:flex-row lg:text-left 
        lg:gap-12 lg:pt-4'
      >

        {/* LEFT SIDE OF OPENING CONTAINER */}
        <div className='w-auto lg:w-[600px]'>
          <h1 
            className="tracking-widest font-medium text-(--btn-pink) text-[2rem] mb-4"
          >
            BEAUTY AT YOUR FINGERTIPS
          </h1>
          <p className='font-light text-sm'>
            Here at <strong><i>Beau Tribu</i></strong>, we treat our customers as a part of us.
            We always strive to provide the best experience and beauty treatment in the South East London
            area which sets our message of beauty standards and hospitality.
          </p>
          <p className='font-light text-sm mt-4'>
            Bring confidence to your beauty and style.
          </p>
          <Link href='/treatments'>
            <button 
              className="btn btn-hover border-2 p-6 border-(--main-gold) text-(--main-gold) mt-8
              cursor-pointer tracking-wider hover:bg-(--main-gold) hover:text-white duration-300"
            >
              <span>BOOK NOW</span>
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE OF OPENING CONTAINER */}
        <div className="shrink-0 pt-6 justify-center">
          <Image 
            src='/images/beau_tribu_opening_image.webp'
            alt='Beau Tribu Intro Image'
            width={500}
            height={500}
            className="mx-auto shadow-xl"
            placeholder='blur'
            blurDataURL='/images/beau_tribu_opening_image.webp'
          />
        </div>

      </div>
    </div>
  )
}

export default Opening;