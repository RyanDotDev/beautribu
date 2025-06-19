import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, we couldn&#39;t find the page you&#39;re looking for.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  )
}