import React from 'react';
import Image from 'next/image';
import { gallery } from '@/lib/helpers/gallery/gallery';
import type { Gallery } from '@/lib/helpers/gallery/gallery';

const Gallery = () => {
  return (
    <section className='bg-white h-auto w-full p-4'>
      <div className='text-center w-full p-4 text-black'>
        <h1 className='tracking-widest font-medium text-(--btn-pink) text-[2rem] mb-4'>
          GALLERY
        </h1>
          <div className='grid grid-row-2 grid-cols-4 gap-2.5'>
            {
              gallery.map((src: Gallery) => (
                <div
                  key={src.id}
                >
                  <Image 
                    src={src.image}
                    alt={src.image}
                    width={300}
                    height={300}
                    placeholder='blur'
                    blurDataURL={src.image}
                  />
                </div>
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default Gallery