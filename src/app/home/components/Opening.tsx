import React from 'react';
import Image from 'next/image';
import { libreBaskerville } from '@/lib/utils/fonts';

const Opening = () => {
  return (
    <div className='p-[2rem]'>
      <div className='flex gap-2 pt-[4rem] flex-col lg:flex-row'>
        <div>
          <h1 
            className={`${libreBaskerville.className} italic text-[var(--btn-pink)] 
            text-(length:--sub-head-size)`}
          >
            Beauty At Your Fingertips
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia illum recusandae, 
            velit nulla veritatis corporis facilis temporibus laboriosam adipisci optio quas 
            cupiditate repudiandae praesentium voluptas, deserunt et dolor similique odio.
          </p>
        </div>
        <div className="flex-shrink-0 pt-[1.5rem]">
          <Image 
            src='/images/beau_tribu_opening_image.webp'
            alt='Beau Tribu Intro Image'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Opening;