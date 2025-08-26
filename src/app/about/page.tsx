import type { Metadata } from 'next';
import React from 'react';
import AboutContainer from './AboutContainer';
import Overlay from '@/components/Overlay';
import Header from './components/Header';
import '@/styles/about.css'

export const metadata: Metadata = {
  title: "About Us | Beau Tribu - Nail Salon & Beauty Bar",
  description: "Bromley Late Night Beauty Bar",
};

export default function page() {
  return (
    <div>
      <Overlay />
      <Header />
      <AboutContainer />
    </div>
  );
};


