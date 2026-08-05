"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { cartItems, setIsCartOpen } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.menu, href: "#menu" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.location, href: "#location" },
  ];


  return (
    <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-50 w-[90%] max-w-2xl rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3 bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]`}
    >
      {/* Logo */}
      <Link href="#home" className="flex items-center">
        <span className="font-display text-2xl tracking-widest text-white drop-shadow-md">
          OASIS
        </span>
      </Link>

      {/* Links - Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href}
            className="text-white/80 hover:text-white text-sm uppercase tracking-wider font-semibold transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Cart Button */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative text-white/80 hover:text-white p-2 transition-colors"
          aria-label="Open Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="text-white/80 hover:text-white p-2"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Dropdown Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-40 w-[90%] max-w-md bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl py-6 flex flex-col items-center gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium tracking-wide uppercase transition-colors hover:text-espo-400"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

