'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Nav */}
      <nav className="py-2 bg-[#29282897] text-white flex items-center justify-center z-50 w-full fixed top-0">
        <div className="max-w-[1000px] w-full flex items-center justify-between max-lg:px-4">

          <a href="./" className="font-bold text-lg">LOGO</a>

          {/* Desktop Nav Links */}
          <div className="flex gap-5 links max-md:hidden">
            {links.slice(0, 4).map(link => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>

          {/* Let Talk Button */}
          <div className="relative group max-md:hidden">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[25px] w-[25px] bg-[#ffbb00e5] z-0 rounded-full transition-all duration-300 group-hover:w-full"></span>
            <a href="/contact" className="z-10 px-3 py-1 relative">Let talk {"▷"}</a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden z-50 relative flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <motion.div
              className="w-6 h-[2px] bg-white origin-center"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-[2px] bg-white origin-center"
              animate={menuOpen ? {
                scaleX: 0.6,
                borderRadius: "999px 999px 0 0"
              } : {
                scaleX: 1,
                borderRadius: "0"
              }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: 'center', height: '4px' }}
            />
            <motion.div
              className="w-6 h-[2px] bg-white origin-center"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="sidebar"
            initial={{
              scaleY: 0,
              transformOrigin: 'top center',
              borderTopLeftRadius: '50% 50%',
              borderTopRightRadius: '50% 50%',
              opacity: 0.4,
            }}
            animate={{
              scaleY: 1,
              borderTopLeftRadius: '0%',
              borderTopRightRadius: '0%',
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 80,
                damping: 16,
                duration: 0.6,
              },
            }}
            exit={{
              scaleY: 0,
              borderTopLeftRadius: '50% 50%',
              borderTopRightRadius: '50% 50%',
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            className="fixed top-0 right-0 w-full h-screen bg-[#1e1e1e] text-white z-40 flex flex-col items-center justify-center gap-8 origin-top"
          >
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
