import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Treatments = () => {
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
    <section ref={elementRef} className='p-[2rem] mt-[-9rem]'>
      <div className='flex flex-col text-left justify-around gap-[2rem] lg:flex-row-reverse'>

        {/* LEFT SIDE OF ABOUT CONTAINER */}
        <div className='w-auto lg:w-[600px]'>
          <h1 className="tracking-widest font-[500] text-[var(--btn-pink)] text-[2rem] mb-[1rem]"
          >
            VARIETY AT YOUR DISPOSAL
          </h1>
          <p className='text-left text-sm'>
            Since making you feel more beautiful is our priority, we offer a variety of treatments
            that we guarantee suits customers needs from all over.
          </p>
          <Link href='/'>
            <button 
              className="btn btn-hover border-2 p-[1.5rem] border-[var(--main-gold)] text-[var(--main-gold)] mt-[2rem] 
              cursor-pointer tracking-wider hover:bg-[var(--main-gold)] hover:text-white duration-300"
            >
              <span>VIEW TREATMENTS</span>
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

export default Treatments;