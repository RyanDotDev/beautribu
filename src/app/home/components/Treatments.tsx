"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: false,
          },
        });

        ScrollTrigger.refresh();
      }, elementRef);
    }

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={elementRef} className="p-4 py-16">
      <div className="flex flex-col text-left justify-around gap-8 lg:flex-row-reverse">
        {/* LEFT SIDE OF ABOUT CONTAINER */}
        <div className="w-auto lg:w-[600px] flex flex-col justify-center">
          <h1 className="tracking-widest font-medium text-(--btn-pink) text-[2rem] mb-4">
            VARIETY AT YOUR DISPOSAL
          </h1>
          <p className="text-left text-sm">
            Since making you feel more beautiful is our priority, we offer a
            variety of treatments that we guarantee suits customers needs from
            all over.
          </p>
          <Link href="/">
            <button
              className="btn btn-hover border-2 p-6 border-(--main-gold) text-(--main-gold) mt-8
              cursor-pointer tracking-wider hover:bg-(--main-gold) hover:text-white duration-300"
            >
              <span>VIEW TREATMENTS</span>
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE OF ABOUT CONTAINER */}
        <div className="shrink-0 pt-6 justify-center">
          <Image
            src="/images/home/beau_tribu_gold_nails.webp"
            alt="Beau Tribu Gold Nails"
            width={500}
            height={500}
            className="mx-auto h-[400px] shadow-xl object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Treatments;
