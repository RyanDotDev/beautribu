import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// [@media(min-height:125px)] (note: example syntax for applying media queries for height in Tailwind CSS)

const Graphic = () => {
  return (
    <div className='h-auto w-full bg-(--main-pink) relative'>
      <Image 
        src='/images/beau_tribu_outside_image.webp'
        alt='Beau Tribu Outside Image'
        width={800}
        height={800}
        className='lg:object-cover object-bottom brightness-90 object-cover w-full h-[700px]'
        placeholder='blur'
        blurDataURL='/images/beau_tribu_outside_image.webp'
      />
      <div 
        className="bg-(--main-pink) h-auto w-[450px] text-center absolute top-35 
          ml-[10vw] text-2xl p-4 px-16 py-8"
      >
        <h2 className="text-black text-shadow-lg tracking-wider font-semibold">
          AWARD WINNING BEAUTY
        </h2>
        <div className="h-1 w-full bg-(--btn-pink) mt-3 mb-3" />
        <i>
        <p className="text-black text-sm mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic rerum similique error numquam animi 
          recusandae voluptatem placeat velit ab mollitia eos magni, officiis, molestiae quod dignissimos at obcaecati 
          eveniet.
        </p>
        </i>

        
        <Link href="/about" className="text-[1.1rem] tracking-wider font-semibold">
          FIND OUT MORE
        </Link>
      </div>
    </div>
  )
}

export default Graphic;