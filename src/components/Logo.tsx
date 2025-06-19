import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='relative pl-0 left-12 lg:pl-1 lg:left-0'>
      <Image 
        src='/logo/beau_tribu_logo.webp'
        alt='Beau Tribu Logo'
        width={60}
        height={60}
        className='lg:'
      />
    </div>
  )
}

export default Logo