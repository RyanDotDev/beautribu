import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='pl-1'>
      <Image 
        src='/logo/beau_tribu_logo.webp'
        alt='Beau Tribu Logo'
        width={80}
        height={80}
      />
    </div>
  )
}

export default Logo