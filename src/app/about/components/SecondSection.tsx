import React from 'react';
import Image from 'next/image';
import { libreBaskerville } from '@/lib/utils/fonts';

const SecondSection = () => {
  return (
    <section className='mt-12 text-center p-4'>
      <div>
        <h3 className={`${libreBaskerville.className} text-(--btn-pink)`}>
          We can&#39;t wait to welcome you into our tribe.
        </h3>
        <Image 
          src='/images/beau_tribu_nail_polish_set_image.webp'
          alt='Beau Tribu Nail Polish Set'
          width={400}
          height={400}
          className='mx-auto mt-4'
          placeholder="blur"
          blurDataURL="/images/beau_tribu_nail_polish_set_image.webp"
        />
      </div>
    </section>
  )
}

export default SecondSection