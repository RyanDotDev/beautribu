"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const duration = 1.2;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut', duration: duration}
    })

    tl.fromTo(
      overlayRef.current,
      { opacity: 1, display: 'block' },
      { 
        opacity: 0,
        duration: duration,
        ease: 'power3.inOut',
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = 'none'
          }
        }
      }
    );
  }, [overlayRef]);

  return (
    <div
      ref={overlayRef}
      className='fixed z-[99] h-full w-screen bg-white'
    >
    </div>
  )
}

export default Overlay;