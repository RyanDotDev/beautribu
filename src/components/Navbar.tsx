"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StaticLogo from './StaticLogo';
import StickyLogo from './StickyLogo';
import BookingButton from './BookingButton';
import MobileNav from './MobileNav';
import gsap from 'gsap';
import ShoppingButton from './ShoppingButton';

interface NavItems {
  id: number,
  title: string,
  href: string,
};

const navigation: NavItems[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Treatments', href: '/treatments' },
  { id: 3, title: 'Gallery', href: '/gallery' },
  { id: 4, title: 'About', href: '/about' },
  { id: 5, title: 'Journal', href: '/journal' },
  { id: 6, title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const stickyNav = stickyRef.current;

    if (!stickyNav) return;

    gsap.set(stickyNav, { y: "-100%", opacity: 0 });

    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const direction = currentScrollY > lastScrollY.current ? "down" : "up";

          // Show sticky only after scrolling past 200px
          if (currentScrollY > 200) {
            if (direction === "down") {
              // Reveal sticky navbar
              gsap.to(stickyNav, {
                y: "0%", // slides in
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
              });
            } else if (direction === "up") {
              gsap.to(stickyNav, {
                y: "-100%", // hides upwards
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          } else {
            // Before 200px, sticky navbar does not show up at all
            gsap.to(stickyNav, {
              y: "-100%",
              opacity: 0,
              duration: 0.3,
            });
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Content for static/relative navbar
  const StaticNavbar = () => (
    <div className='relative top-0 left-0 w-full bg-white z-[50]'>
      <div className='flex flex-1 justify-between'>
        <MobileNav />
        <div></div>
        <StaticLogo />
        <div className='relative hidden lg:block'>
          <BookingButton />
          <ShoppingButton />
        </div>
      </div>
      <div className='flex flex-col items-center justify-between p-2 relative'>
        <ul className='mt-[1rem] mb-[1rem] hidden z-[99] gap-12 lg:flex'>
          {navigation.map((item) => (
            <Link
              href={item?.href}
              key={item.id} 
              className='relative text-black hover:text-[var(--main-pink)] tracking-wider duration-300 
                overflow-hidden group'
            >
              <li className={`${item?.href === pathname && "text-[var(--btn-pink)]"}`}>
                {item.title.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );

  // Content for sticky/fixed navbar
  const StickyNavbar = () => (
    <div className='flex items-center justify-between p-2 relative'>
      <MobileNav />
      <StickyLogo />
      <ul className='absolute left-1/2 transform -translate-x-1/2 hidden z-[99] gap-12 lg:flex'>
        {navigation.map((item) => (
          <Link
            href={item?.href}
            key={item.id} 
            className='relative text-black hover:text-[var(--main-pink)] tracking-wider duration-300 overflow-hidden group'
          >
            <li className={`${item.href === pathname && "text-[var(--btn-pink)]"}`}>
              {item.title.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
      <BookingButton />
    </div>
  );
  
  return (
    <>
      {/* THIS NAVBAR IS ALWAYS VISIBLE. SET TO RELATIVE */}
      <div>
        <StaticNavbar />
      </div>

      {/* SCROLL TRIGGERED 'fixed' NAVBAR */}
      <div
        ref={stickyRef}
        className='fixed top-0 left-0 w-full bg-white shadow-md z-[99] -translate-y-full'
      >
        <StickyNavbar />
      </div>
     
    </> 
  )
}

export default Navbar;