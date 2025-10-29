"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { libreBaskerville } from '@/lib/utils/fonts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const backgroundRef = useRef(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef =  useRef(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

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

    gsap.set(backgroundRef.current, { filter: 'brightness(1.5)' });

    gsap.fromTo(
      backgroundRef.current,
      { filter: 'brightness(1.5)' },
      { filter: 'brightness(1)', duration: 2, ease: 'power2.out' }
    )

    const text = headingRef.current;
    if (text) {
      const letters = text.innerText.split('');
      text.innerHTML = '';

      letters.forEach((letter: string, i: number) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        text.appendChild(span)

        gsap.to(span, {
          opacity: 1,
          y: 0,
          delay: 0.5 + i * 0.05,
          duration: 0.7,
          ease: 'power3.out'
        });
      });
    };

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

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = 'none'
        }
      }
    });
  }, []);

  return (
    <>
      {/* TEMPORARY FILTER FOR ANIMATION */}
      <div 
        className='absolute z-[100] h-screen overflow-hidden w-screen bg-white'
        ref={overlayRef}
      />

      {/* BANNER CONTENT */}
      <div className='relative h-screen overflow-hidden w-screen'>
        <div 
          ref={contentRef}
          className='relative z-50 flex flex-col m-[-10vh] justify-center text-center items-center h-screen opacity-0 translate-y-[50px]'
        >
          <h1 
            ref={headingRef}
            className={`${libreBaskerville.className}
          text-white text-[4rem] font-(family-name:--sub-head-font) tracking-wider font-[500] md:text-[6rem] `}
          >
            Beau Tribu
          </h1>
          <div>
            <h2 className="text-2xl tracking-wider w-[300px] text-white md:text-2xl"
            >
              BROMLEY&#39;S LATE NIGHT NAIL SALON
            </h2>
            <div className='flex justify-center gap-3 mt-[2rem]'>
              <button className='btn btn-hover bg-white text-[var(--btn-pink)] p-2 pl-4 pr-4 cursor-pointer
                hover:bg-[var(--main-pink)] duration-300 hidden'
              >
                BOOK NOW
              </button>
              <button className='btn btn-hover bg-white tracking-wider text-[var(--btn-pink)] p-2 pl-4 pr-4 cursor-pointer
                hover:bg-[var(--main-pink)] duration-300 hidden'
              >
                VIEW TREATMENTS
              </button>
              <button className='btn btn-hover group bg-[var(--whatsapp-green)] p-[0.8rem] rounded-full
                text-white items-center overflow-hidden cursor-pointer hidden'
              >
                <WhatsAppIcon style={{ fontSize: '2rem' }}/>
                <span className='max-w-0 opacity-0 overflow-hidden group-hover:max-w-[150px] group-hover:opacity-100
                  group-hover:translate-x-1 group-hover:mr-[0.5rem] transition-all duration-300 whitespace-nowrap'
                >
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
        <Image 
          src='/images/banner_image_ideas.webp'
          alt='Beau Tribu Banner Image'
          fill
          className='object-cover'
          ref={backgroundRef}
          priority
        />
      </div>
    </>
  )
}

export default Banner;
