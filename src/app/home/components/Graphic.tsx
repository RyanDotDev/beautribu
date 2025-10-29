import React from 'react';
import Image from 'next/image';
import { libreBaskerville } from '@/lib/utils/fonts';

const Graphic = () => {
  return (
    <div className=''>
      <Image 
        src='/images/beau_tribu_outside_image.webp'
        alt='Beau Tribu Outside Image'
        width={1040}
        height={800}
        className='lg:object-cover object-bottom brightness-90 object-cover w-full h-[700px]'
      />
      <div className='lg:text-left text-center'> 
        <h1 className={` ${libreBaskerville.className} 
          lg:ml-[2vw] lg:w-[900px] relative top-[-30rem] ml-[0vw] w-full z-10 text-[3rem] 
          tracking-widest text-white md:text-[4rem]`}
        >
          AWARD WINNING BEAUTY
        </h1>
      </div>
    </div>
  )
}

export default Graphic;