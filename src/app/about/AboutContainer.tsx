import React from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';

export default function AboutContainer() {
  return (
    <main>
      {/* FIRST SECTION */}
      <section>
        <FirstSection />
      </section>

      {/* SECOND SECTION */}
      <section>
        <SecondSection />
      </section>
    </main>
  );
};
