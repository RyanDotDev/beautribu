"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import BookingButton from './BookingButton';
import MobileNav from './MobileNav';
import gsap from 'gsap';

interface NavItems {
  id: number,
  title: string,
  href: string,
};

const navigation: NavItems[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Treatments', href: '/treatments' },
  { id: 4, title: 'Gallery', href: '/gallery' },
  { id: 5, title: 'Journal', href: '/journal' },
  { id: 6, title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const direction = currentScrollY > lastScrollY.current ? "down" : "up";

          if (direction === "down" && currentScrollY > 100) {
            gsap.to(navbar, {
              y: "-100%",
              duration: 0.5,
              ease: "power2.out",
            });
          } else if (direction === "up") {
            gsap.to(navbar, {
              y: "0%",
              duration: 0.5,
              ease: "power2.out",
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
  
  return (
    <div 
      ref={navbarRef}
      className='fixed top-0 left-0 z-[99] w-full bg-white shadow-md'>
      <div className='flex items-center justify-between p-2 relative'>
        <MobileNav />
        <Logo />
        <ul className='absolute left-1/2 transform -translate-x-1/2 hidden gap-12 lg:flex'>
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
    </div>
  )
}

export default Navbar;