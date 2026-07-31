import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const LEFT_ITEMS = [
  { label: 'Home', to: '/home' },
  {
    label: 'Shop',
    to: '/shop',
    children: [
      { label: 'All Products', to: '/shop' },
      { label: 'Tops', to: '/shop?cat=Tops' },
      { label: 'Bottoms', to: '/shop?cat=Bottoms' },
      { label: 'Accessories', to: '/shop?cat=Accessories' },
      { label: 'Stationery', to: '/shop?cat=Stationery' },
    ],
  },
  {
    label: 'Collections',
    to: '/collections',
    children: [
      { label: 'All Collections', to: '/collections' },
      { label: 'Signature Collection', to: '/collections/signature-collection' },
      { label: 'PETS.', to: '/collections/pets' },
      { label: 'TRAVEL.', to: '/collections/travel' },
      { label: 'FUCK YOU.', to: '/collections/fuck-you' },
      { label: 'RECEIPTS JOURNAL', to: '/collections/receipts-journal' },
      { label: 'OUTERWEAR.', to: '/collections/outerwear' },
      { label: 'FITNESS.', to: '/collections/fitness' },
    ],
  },
  { label: 'Journal', to: '/journal' },
];

const RIGHT_ITEMS = [
  { label: 'Confess', to: '/confess' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function linkClass(item, pathname) {
  const active = pathname === item.to || (item.children && pathname.startsWith(item.to));
  const base = 'font-mono-flag text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors';
  if (item.label === 'Shop') return `${base} text-primary`;
  return active ? `${base} text-primary` : `${base} text-parchment/85 hover:text-primary`;
}

function DesktopItem({ item, pathname }) {
  if (!item.children) {
    return (
      <Link to={item.to} className={linkClass(item, pathname)}>
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative group">
      <Link to={item.to} className={`${linkClass(item, pathname)} flex items-center gap-1`}>
        {item.label}
        <ChevronDown className="w-3 h-3 mt-px transition-transform group-hover:rotate-180" />
      </Link>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
        <div className="bg-black border border-primary/30 min-w-[210px] py-2 shadow-xl">
          {item.children.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="block px-5 py-2.5 font-mono-flag text-[11px] uppercase tracking-[0.22em] text-parchment/75 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname, location.search]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary/25">
      {/* Announcement strip */}
      <div className="w-full bg-primary">
        <p className="text-center font-mono-flag text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-parchment py-1.5">
          ♦ First Drop · Aug 04 · 9PM ♦
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-5 sm:px-12 py-3">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-7">
          {LEFT_ITEMS.map((item) => (
            <DesktopItem key={item.label} item={item} pathname={location.pathname} />
          ))}
        </div>

        {/* Centered logo */}
        <Link to="/home" aria-label="Red Flags Society — Home" className="absolute left-1/2 -translate-x-1/2 flex items-center shrink-0">
          <Logo stampOnLoad />
        </Link>

        {/* Right links + CTA + cart */}
        <div className="hidden md:flex items-center gap-7">
          {RIGHT_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item, location.pathname)}>
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
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[40rem]' : 'max-h-0'}`}>
        <div className="bg-black border-t border-primary/25 px-5 py-6 flex flex-col gap-1">
          {[...LEFT_ITEMS, ...RIGHT_ITEMS].map((item) => (
            <div key={item.label}>
              <Link
                to={item.to}
                className={`font-mono-flag text-sm font-semibold uppercase tracking-[0.25em] py-3 border-b border-parchment/10 block transition-colors ${
                  location.pathname === item.to ? 'text-primary' : 'text-parchment/85 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 pb-2 flex flex-col">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="font-mono-flag text-[11px] uppercase tracking-[0.2em] py-2 text-parchment/55 hover:text-primary transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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