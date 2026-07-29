import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-4 bg-transparent">
      <Link to="/" aria-label="Red Flags & Receipts — Home" className="flex items-center">
        <Logo />
      </Link>
      <div className="flex items-center gap-3 sm:gap-6">
        <Link to="/" className="hidden sm:block font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 hover:text-parchment transition-colors">
          Home
        </Link>
        <Link to="/about" className="hidden sm:block font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 hover:text-parchment transition-colors">
          Founder
        </Link>
        <Link to="/contact" className="hidden sm:block font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 hover:text-parchment transition-colors">
          Contact
        </Link>
        <Link
          to="/shop"
          className="font-mono-flag text-[9px] uppercase tracking-[0.16em] text-parchment border border-primary/50 px-3 py-1.5 hover:bg-primary hover:border-primary hover:text-parchment transition-colors backdrop-blur-sm"
        >
          Shop The Signature Collection Now
        </Link>
        <a
          href="/#signup"
          className="hidden sm:inline-block font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment border border-parchment/40 px-4 py-2 hover:bg-primary hover:border-primary hover:text-parchment transition-colors"
        >
          Get Notified
        </a>
      </div>
    </nav>
  );
}