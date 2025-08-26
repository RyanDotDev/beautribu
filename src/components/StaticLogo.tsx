import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StaticLogo = () => {
  return (
    <div className='relative left-18 mt-[1rem]'>
      <Link href='/'>
        <Image 
          src='/logo/beau_tribu_logo_original.svg'
          alt='Beau Tribu Logo'
          width={120}
          height={120}
        />
      </Link>
    </div>
  )
}

export default StaticLogo;