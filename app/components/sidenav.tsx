// components/SideNav.tsx
"use client"; // Add this at the very top
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
export default function SideNav() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const pathname = usePathname();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button for mobile */}
      <button
        className="p-4 md:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars className="text-2xl text-gray-800" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed z-10 min-h-screen inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:flex`}
      >
        <div className="p-4 font-bold text-xl">My Sidebar</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/",
              },
            )}>
            Home
          </Link>
          <Link href="/dashboard" className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/dashboard",
              },
            )}>
            About
          </Link>
          <Link href="/dashboard/invoices" className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/dashboard/invoices",
              },
            )}>
            Invoice
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
