"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 1.2;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut', duration: duration}
    })

    tl.fromTo(
      overlayRef.current,
      { opacity: 1, display: 'block', ease: "power1.in" },
      { 
        opacity: 0,
        duration: duration,
        ease: 'power1.inOut',
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
      className='sticky top-0 z-99 h-screen w-screen bg-white'
    >
    </div>
  )
}

export default Overlay;