"use client"
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import BookingButton from './BookingButton';

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
  { id: 5, title: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  return (
    <div className='w-full bg-white'>
      <div className='flex items-center justify-between p-2 relative'>
        <Logo />
        <ul className='absolute left-1/2 transform -translate-x-1/2 flex gap-12'>
          {navigation.map((item) => (
            <Link
              href={item?.href}
              key={item.id} 
              className='relative text-black hover:text-[var(--main-gold)] tracking-wider duration-300 overflow-hidden group'
            >
              <li>{item.title.toUpperCase()}</li>
            </Link>
          ))}
        </ul>
        <BookingButton />
      </div>
    </div>
  )
}

export default Navbar;