import React from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';

export default function AboutContainer() {
  return (
    <div className='p-[2rem]'>
      <FirstSection />
      <SecondSection />
    </div>
  );
};
