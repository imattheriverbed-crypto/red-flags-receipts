import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-4 bg-ink/80 backdrop-blur-md border-b border-primary/20">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f69e0d30b_red-flags-receipts.png"
          alt="Red Flags & Receipts"
          className="h-10 w-auto object-contain"
        />
      </Link>
      <div className="hidden sm:flex items-center gap-6">
        <Link to="/" className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 hover:text-parchment transition-colors">
          Home
        </Link>
        <Link to="/about" className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 hover:text-parchment transition-colors">
          Founder
        </Link>
        <Link to="/contact" className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 hover:text-parchment transition-colors">
          Contact
        </Link>
        <a
          href="/#signup"
          className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment border border-parchment/40 px-4 py-2 hover:bg-primary hover:border-primary hover:text-parchment transition-colors"
        >
          Get Notified
        </a>
      </div>
    </nav>
  );
}