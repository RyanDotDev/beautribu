import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  title: "Beau Tribu - Nail Salon & Beauty Bar",
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
        <WhatsApp />
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
