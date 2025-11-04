import React from 'react';
import Image from 'next/image';
import { gallery } from '@/lib/helpers/gallery/gallery';
import type { Gallery } from '@/lib/helpers/gallery/gallery';

const Gallery = () => {
  return (
    <section className='bg-white h-auto w-full p-[1rem]'>
      <div className='text-center w-full p-[1rem] text-black'>
        <h1 className='tracking-widest font-[500] text-[var(--btn-pink)] text-[2rem] mb-[1rem]'>
          GALLERY
        </h1>
          <div className='grid grid-row-2 grid-cols-4 gap-[10px]'>
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