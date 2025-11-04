import React from 'react';
import Image from 'next/image';
import AdminAuth from './components/AdminAuth';

export default function AdminPage() {
  return (
    <div className="h-screen bg-(--main-pink) w-full p-4">
      <div className="">
        <Image 
          src="/logo/beau_tribu_logo_black.webp"
          alt="Beau Tribu Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>

      <br></br>

      {/* LOGIN WRAPPER */}
      <div className="bg-white max-w-xl mx-auto rounded-xl p-8 shadow-2xl shadow-gray-600">
        <h1 className="text-center text-2xl tracking-wider font-medium text-(--btn-pink)">
          ADMIN PORTAL
        </h1>

        <br></br>

        <h2 className="font-medium text-lg text-blue-950">
          Please sign into your admin
        </h2>
        
        <br></br>

        {/* ADMIN LOGIN/LOGOUT COMPONENT */}
        <AdminAuth />
      </div>
    </div>
  );
};
