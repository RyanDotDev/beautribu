import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
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
    <section ref={elementRef} className='p-[2rem]'>
      <div className='flex flex-col text-center justify-around gap-[2rem] lg:flex-row-reverse'>

        {/* LEFT SIDE OF ABOUT CONTAINER */}
        <div className='w-auto lg:w-[600px]'>
          <h1 className="tracking-widest font-[500] text-[var(--btn-pink)] text-[2rem] mb-[1rem]"
          >
            SIMPLE BOOKING SYSTEM
          </h1>
          <p className='text-left text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias voluptatibus necessitatibus 
            a aliquam accusamus sint, tenetur obcaecati! Saepe modi distinctio eveniet nam asperiores aspernatur 
            tempore alias natus earum dolorum.
          </p>
          <Link href='/'>
            <button 
              className="btn btn-hover border-2 p-[1.5rem] border-[var(--main-gold)] text-[var(--main-gold)] mt-[2rem] 
              cursor-pointer tracking-wider hover:bg-[var(--main-gold)] hover:text-white duration-300"
            >
              <span>BOOK NOW</span>
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE OF ABOUT CONTAINER */}
        <div className='flex-shrink-0 pt-[1.5rem] justify-center'>
          <Image 
            src='/images/beau_tribu_booking_image.webp'
            alt='Beau Tribu Interior Image'
            width={500}
            height={500}
            className='mx-auto shadow-xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Booking;