import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StickyLogo = () => {
  return (
    <div className='relative pl-0 left-12 lg:pl-1 lg:left-0'>
      <Link href='/'>
        <Image 
          src='/logo/beau_tribu_logo_original.svg'
          alt='Beau Tribu Logo'
          width={70}
          height={70}
          className='lg:'
        />
      </Link>
    </div>
  )
}

export default StickyLogo;