import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StaticLogo = () => {
  return (
    <div className=''>
      <Link href='/'>
        <Image 
          src='/logo/beau_tribu_logo_original.webp'
          alt='Beau Tribu Logo'
          width={120}
          height={120}
          priority
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
      </Link>
    </div>
  )
}

export default StaticLogo;