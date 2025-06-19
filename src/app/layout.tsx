import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Libre_Baskerville } from 'next/font/google';
import "./globals.css";

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville'
})

export const metadata: Metadata = {
  title: "Beau Tribu | Nail Salon & Beauty Bar",
  description: "Bromley Late Night Beauty Bar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header><Navbar /></header>
        {children}
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
