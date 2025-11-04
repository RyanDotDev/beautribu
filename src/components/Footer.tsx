"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  const pathname = usePathname();

  //* Disables navbar on specified pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <div className='w-full bg-black h-[300px]'>
      <Image
        src='/logo/beau_tribu_logo_white.webp' 
        alt='Beau Tribu Logo White'
        width={100}
        height={100}
      />
    </div>
  )
}

export default Footer