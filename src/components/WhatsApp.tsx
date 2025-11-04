"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsApp = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <div className='fixed bottom-4 right-4 z-99'>
      <button 
        className='btn btn-hover duration-300 group bg-(--whatsapp-green) p-[0.8rem] rounded-full
        text-white items-center overflow-hidden cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.45)] active:scale-95'
      >
        <WhatsAppIcon style={{ fontSize: '2rem' }}/>
        <span 
          className='max-w-0 opacity-0 overflow-hidden group-hover:max-w-[150px] group-hover:opacity-100
          group-hover:translate-x-1 group-hover:mr-2 transition-all duration-300 whitespace-nowrap hidden'
        >
          Contact Us
        </span>
      </button>
    </div>
  )
}

export default WhatsApp