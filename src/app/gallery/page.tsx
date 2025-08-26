import type { Metadata } from 'next'
import React from 'react'
import GalleryContainer from './GalleryContainer'
import Overlay from '@/components/Overlay'

export const metadata: Metadata = {
  title: 'Gallery | Beau Tribu - Nail Salon and Beauty Bar',
  description: 'Check out our gallery of beauty'
}

export default function page() {
  return (
    <div>
      <Overlay />
      <GalleryContainer />
    </div>
  )
}

