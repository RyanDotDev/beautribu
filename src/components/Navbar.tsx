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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface NavItems {
  id: number,
  title: string,
  href: string,
};

//* NavItems for static navbar ONLY
const staticNavigation: NavItems[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Treatments', href: '/treatments' },
  { id: 3, title: 'Gallery', href: '/gallery' },
  { id: 4, title: 'About', href: '/about' },
  { id: 5, title: 'Journal', href: '/journal' },
  { id: 6, title: 'Contact', href: '/contact' },
];

//* NavItems for sticky navbar ONLY
const stickyNavigation: NavItems[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Treatments', href: '/treatments' },
  { id: 3, title: 'Gallery', href: '/gallery' },
  { id: 4, title: 'Shop', href: '/shop' },
  { id: 5, title: 'About', href: '/about' },
  { id: 6, title: 'Journal', href: '/journal' },
  { id: 7, title: 'Contact', href: '/contact' },
];

//* ---------- MAIN COMPONENT ----------
const Navbar = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

 useEffect(() => {
   const stickyNav = stickyRef.current;
   if (!stickyNav) return;

    gsap.set(stickyNav, {
      y: "-100%",
      opacity: 0,
      zIndex: -1,
      pointerEvents: "none",
      visibility: "hidden",
    });

    let lastScrollY = window.scrollY;
    let isVisible = false;
    let ticking = false;

    const showSticky = () => {
      if (isVisible) return;

      isVisible = true;
      gsap.killTweensOf(stickyNav); //* cancels any previous hide
      gsap.set(stickyNav, {
        zIndex: 99,
        pointerEvents: "auto",
       visibility: "visible",
      });
      gsap.to(stickyNav, {
        y: "0%",
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
      });
    };

    const hideSticky = (force = false) => {
      if (!isVisible && !force) return;
      
      isVisible = false;
      gsap.killTweensOf(stickyNav);
      gsap.to(stickyNav, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          // only fully hide if near top
          if (window.scrollY <= 200 || force) {
            gsap.set(stickyNav, {
              zIndex: -1,
              pointerEvents: "none",
              visibility: "hidden",
            });
          }
        },
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const direction =
            currentScrollY > lastScrollY ? "down" : "up";

          if (currentScrollY <= 200) {
            hideSticky(true);
          } else {
            if (direction === "up") showSticky();
            else if (direction === "down") hideSticky();
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //* Content for static/relative navbar
  const StaticNavbar = () => (
    <div className='relative flex flex-col gap-5 justify-center w-full z-50 bg-white py-4 h-auto'>
      <div className="flex justify-between">
        <div>
          <MobileNav />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <StaticLogo />
        </div>
        <div className="-mt-4 text-center">
          <BookingButton />
          <ShoppingButton />
          <AccountCircleIcon 
            className="mx-auto text-gray-400"
            style={{ fontSize: "2.5rem" }}
          />
        </div>
      </div>
      <div className='flex flex-col mt-12 items-center justify-between relative'>
        <ul className='lg:flex hidden z-50 gap-12'>
          {staticNavigation.map((item) => (
            <Link
              href={item?.href}
              key={item.id} 
              className='relative text-black hover:text-(--main-pink) tracking-wider duration-300 
                overflow-hidden group'
            >
              <li className={`${item?.href === pathname && "text-(--btn-pink)"}`}>
                {item.title.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );

  //* Content for sticky/fixed navbar
  const StickyNavbar = () => (
    <div className='flex items-center justify-between p-2 relative'>
      <MobileNav />
      <StickyLogo />
      <ul className='absolute left-1/2 transform -translate-x-1/2 hidden z-99 gap-12 lg:flex'>
        {stickyNavigation.map((item) => (
          <Link
            href={item?.href}
            key={item.id} 
            className='relative text-black hover:text-(--main-pink) tracking-wider duration-300 overflow-hidden group'
          >
            <li className={`${item.href === pathname && "text-(--btn-pink)"}`}>
              {item.title.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
      <BookingButton />
    </div>
  );

  //* Disables navbar on specified pages
  if (pathname?.startsWith("/admin")) return null;
  
  return (
    <>
      {/* THIS NAVBAR IS ALWAYS VISIBLE. SET TO RELATIVE */}
      <div>
        <StaticNavbar />
      </div>

      {/* SCROLL TRIGGERED 'fixed' NAVBAR */}
      <div
        ref={stickyRef}
        className='fixed top-0 left-0 w-full bg-white shadow-md z-99 -translate-y-full'
      >
        <StickyNavbar />
      </div>
     
    </> 
  )
}

export default Navbar;