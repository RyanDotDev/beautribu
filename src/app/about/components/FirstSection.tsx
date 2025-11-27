import React from 'react';
import Image from 'next/image';

const FirstSection = () => {
  return (
    <section className='flex flex-col mx-auto mt-12 gap-5 justify-center lg:flex-row lg:justify-around'>
      <div className='justify-center text-center mx-auto'>
        <h2
          className='text-2xl mx-auto mb-8 block lg:hidden tracking-wider text-shadow-lg'
        >
           WE ARE <span className="text-(--btn-pink) font-semibold">BEAU TRIBU</span>
        </h2>
        <Image 
          src='/images/beau_tribu_about_us_image.webp'
          alt='Beau Tribu Portrait'
          width={300}
          height={300}
          placeholder='blur'
          blurDataURL='/images/beau_tribu_about_us_image.webp'
          
        />
      </div>
      <div className='text-center mx-auto w-auto mt-8 lg:text-left lg:w-[600px]'>
        <h2
          className='text-2xl mb-4 hidden lg:block tracking-wider text-shadow-lg'
        >
          WE ARE <span className="text-(--btn-pink) font-semibold">BEAU TRIBU</span>
        </h2>
        <p className='font-light text-sm'>
          This is our lovely little tribe of souls. Our business is built on passion, care and love for our
          community. We are proud to bring something truly unique to Bromley Council - a beauty space where
          heart, experience and genuine connection come together.
        </p>
        <br></br>
        <p className='font-light text-sm'>
          With over 10 years of experience, mostly spent working in the heart of Central London, we have taken
          everything we have learned to create a salon that listens, understands, and responds to what our clients
          truly want. At Beau Tribu, beauty isn&#39;t just about the surface - it&#39;s about nurturing your
          natural health, especially when it comes to the care and preservation of your nail beds and overall
          wellbeing. Our goal is to help you feel confident in your natural beauty - gently enhanced and never
          rushed!
        </p>
        <br></br>
        <h2 className='text-lg mb-4 font-semibold tracking-wider text-shadow-lg'>
          WHY WE ARE HERE
        </h2>
        <p className='font-light text-sm'>
          We are here to <strong>make you feel radiant</strong> - not just on special occasions, but on every
          single day. Our goal is to support your beauty journey long-term, so you feel stronger, healthier 
          and more confident.
        </p>
        <br></br>
        <p className='font-light text-sm'>
          We put our heart and soul into everything we do, because we believe that if you let us hold your hands
          the very first time we meet, something meaningful has already begun.
        </p>
        <br></br>
        <p className='font-light text-sm'>
          Our salon is more than just a place for beauty - it&#39;s a place to unwind, reset and enjoy a new kind
          of social lifestyle. A stress-free zone where you can relax, feel at home and be beautifully pampered.
        </p>
      </div>
    </section>
  )
}

export default FirstSection