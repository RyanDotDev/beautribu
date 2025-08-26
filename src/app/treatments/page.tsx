import type { Metadata } from 'next';
import React from 'react';
import TreatmentsContainer from './TreatmentsContainer';
import Overlay from '@/components/Overlay';

export const metadata: Metadata = {
  title: 'Treatments | Beau Tribu',
  description: 'Discover our treatments'
} 

const page = () => {
  return (
    <div>
      <Overlay />
      <TreatmentsContainer />
    </div>
  )
}

export default page