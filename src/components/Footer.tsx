"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Instagram, Facebook, Pinterest, X } from '@mui/icons-material';

export const currentYear = (): number => {
  return new Date().getFullYear();
}

const Footer = () => {
  const pathname = usePathname();

  //* Disables navbar on specified pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <div className='w-full bg-[#242424] h-auto p-4 py-8 text-center'>
      {/* FLEXBOX */}
      <div className="flex justify-around items-center text-center w-full">
        <div className="flex flex-col items-center gap-4 relative w-[400px]">

          {/* IMAGE WRAPPER */}
          <div>
            <Image
              src='/logo/beau_tribu_logo_white.webp' 
              alt='Beau Tribu Logo White'
              width={100}
              height={100}
            />
          </div>

          {/* ADDRESS */}
          <div className="text-white flex flex-col gap-3">
            <h3 className="tracking-widest">
              BEAU TRIBU NAIL & BEAUTY BAR
            </h3>
            <div className="text-gray-200 font-light text-sm flex flex-col gap-3">
              <p>0203 874 7870</p>
              <p>44 East Street, Bromley, BR1 1QW</p>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="text-white flex gap-4">
            <Instagram />
            <Facebook />
            <X/>
            <Pinterest />
          </div>
        </div>

        {/* OPENING HOURS */}
        <div className="text-white flex flex-col gap-3 relative w-[400px]">
          <h3 className="tracking-widest">
            OPENING HOURS
          </h3>
          <div className="text-gray-200 font-light text-sm flex flex-col gap-3">
            <p>Monday: 10am - 7pm</p>
            <p>Tuesday: 10am - 7pm</p>
            <p>Wednesday: 10am - 8pm</p>
            <p>Thursday: 10am - 7pm</p>
            <p>Friday: 10am - 7pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: CLOSED</p>
          </div>
        </div>

        {/* PAGE LINKS */}
        <div className="text-white flex flex-col gap-4 w-[400px]">
          <div className="flex flex-col">
            <div>
              <Link href="/about" className="tracking-wider hover:text-(--main-gold) transition duration-300">
              ABOUT
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <Link href="/about" className="tracking-wider hover:text-(--main-gold) transition duration-300">
                GALLERY
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <Link href="/about" className="tracking-wider hover:text-(--main-gold) transition duration-300">
                TREATMENTS
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <Link href="/journel" className="tracking-wider hover:text-(--main-gold) transition duration-300">
                JOURNAL
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <Link href="/about" className="tracking-wider hover:text-(--main-gold) transition duration-300">
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT */}
      <p className="text-white text-xs font-light mt-9">
        © Beau Tribu {currentYear()}. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer