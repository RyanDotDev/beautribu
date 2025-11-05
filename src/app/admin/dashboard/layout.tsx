"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { supabase } from '@/lib/supabase/client';
import { LayoutDashboard, FileText, MessageSquare, LogOut, X } from "lucide-react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navigation = [
  { title: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
  { title: "Treatments", href: "/admin/dashboard/treatment-plans", icon: <FileText size={18} /> },
  { title: "Testimonials", href: "/admin/dashboard/testimonials", icon: <MessageSquare size={18} /> }
]

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //* Animates the sidebar upon refresh or enter
  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
  }, []);

  //* Logs out user back to admin login page
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message)
    } else {
      router.push("/admin");
      router.refresh();
    }
  }; 

  //* Handles mobile sidebar open/close
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* SIDEBAR */}
      <aside
        ref={sidebarRef}
        className={`w-70 bg-white shadow-sm flex flex-col border-r border-gray-100 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:transition-none transition-transform duration-300 ease-in-out
        `}
      >
        <div className="border-b p-6 border-gray-100">
          {/* CLOSE BUTTON (mobile only) */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
          <Image 
            src="/logo/beau_tribu_logo_original.webp"
            alt="Beau Tribu Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        <nav className="flex-1 p-4 mt-4">
          <ul className="space-y-2">
            {navigation.map(({ title, href, icon }) => {
              const isActive = pathname === href;

              return (
                <li key={title}>
                  <Link 
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive 
                        ? "bg-[#c8969e33] text-[#c8969e]"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {icon}
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav> 
      </aside>
      
      {/* MAIN AREA */}
      <div className="flex flex-col flex-1">
        {/* NAVBAR */}
        <header className="h-20 w-full bg-white shadow-sm flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-blue-950">
            {pathname?.split("/").pop()?.replace("-", " ") || "Dashboard"}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Admin</span>
            <AccountCircleIcon />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        {/* MAIN BODY */}
        <div className="flex flex-1">
          {/* DASHBOARD CONTENT */}
          <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};