import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-4 bg-transparent">
      <Link to="/" aria-label="Red Flags Society — Home" className="flex items-center">
        <Logo />
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="hidden md:block font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/60 hover:text-parchment transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="/#signup"
          className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment border border-parchment/40 px-4 py-2 hover:bg-primary hover:border-primary hover:text-parchment transition-colors whitespace-nowrap"
        >
          Get Notified
        </a>
      </div>
    </nav>
  );
}