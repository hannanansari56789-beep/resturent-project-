'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-4 right-4 z-50 flex justify-between items-center px-4 md:px-8 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full mt-4 mx-auto max-w-5xl shadow-xl shadow-slate-200/50 dark:shadow-none font-sans font-light tracking-tight">
      <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white shrink-0">
        Food Cafe
      </Link>
      
      <nav className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? 'text-primary font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-primary'
            } transition-colors duration-300 text-sm xl:text-base`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/booking">
          <button className="bg-primary-container text-white px-4 md:px-6 py-2 rounded-full scale-95 active:scale-90 transition-transform font-semibold hover:opacity-90 text-sm md:text-base whitespace-nowrap">
            Book <span className="hidden lg:inline">a Table</span>
          </button>
        </Link>
        <button 
          className="lg:hidden text-slate-900 dark:text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={20} />
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 flex flex-col gap-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`${
                pathname === link.href
                  ? 'text-primary font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              } text-lg`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
