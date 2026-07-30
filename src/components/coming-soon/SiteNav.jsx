import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

const LEFT_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Journal', to: '/journal' },
];

const RIGHT_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const linkClass = (item) => {
    const active = location.pathname === item.to;
    const base = 'font-mono-flag text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors';
    if (item.label === 'Shop') return `${base} text-primary`;
    return active ? `${base} text-primary` : `${base} text-parchment/85 hover:text-primary`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary/30">
      {/* Announcement strip */}
      <div className="w-full border-b border-primary/20 bg-black">
        <p className="text-center font-mono-flag text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-primary py-1.5">
          ♦ First Drop · Aug 04 · 9PM ♦
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-5 sm:px-12 py-3">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-7">
          {LEFT_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Centered logo */}
        <Link to="/" aria-label="Red Flags Society — Home" className="absolute left-1/2 -translate-x-1/2 flex items-center shrink-0">
          <Logo />
        </Link>

        {/* Right links + CTA + cart */}
        <div className="hidden md:flex items-center gap-7">
          {RIGHT_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item)}>
              {item.label}
            </Link>
          ))}
          <Link
            to="/shop"
            className="font-mono-flag text-[11px] font-semibold uppercase tracking-[0.22em] bg-primary text-parchment px-5 py-2.5 hover:bg-parchment hover:text-ink transition-colors whitespace-nowrap"
          >
            Shop Now
          </Link>
          <button aria-label="Cart" className="relative flex items-center justify-center w-9 h-9 text-parchment hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-parchment text-[9px] font-bold leading-none rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-10 h-10 border border-primary/40 text-parchment hover:bg-primary hover:text-parchment transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[28rem]' : 'max-h-0'}`}>
        <div className="bg-black border-t border-primary/25 px-5 py-6 flex flex-col gap-1">
          {[...LEFT_ITEMS, ...RIGHT_ITEMS].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-mono-flag text-sm font-semibold uppercase tracking-[0.25em] py-3 border-b border-parchment/10 transition-colors ${
                location.pathname === item.to ? 'text-primary' : 'text-parchment/85 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/shop"
            className="mt-4 font-mono-flag text-sm font-semibold uppercase tracking-[0.22em] bg-primary text-parchment px-5 py-3.5 text-center hover:bg-parchment hover:text-ink transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}