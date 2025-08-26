import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full bg-black h-[300px]'>
      <Image
        src='/logo/beau_tribu_logo_white.svg' 
        alt='Beau Tribu Logo White'
        width={100}
        height={100}
      />
    </div>
  )
}

export default Footer