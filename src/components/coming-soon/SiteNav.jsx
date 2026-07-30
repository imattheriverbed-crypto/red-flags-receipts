import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-primary/25' : 'bg-gradient-to-b from-ink/60 to-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-12 py-4">
        <Link to="/" aria-label="Red Flags Society — Home" className="flex items-center shrink-0">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono-flag text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors ${
                  active ? 'text-primary' : 'text-parchment/85 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/shop"
            className="font-mono-flag text-[11px] font-semibold uppercase tracking-[0.22em] bg-primary text-parchment border border-primary px-5 py-2.5 hover:bg-parchment hover:text-ink hover:border-parchment transition-colors whitespace-nowrap"
          >
            Shop Now
          </Link>
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
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-ink/95 backdrop-blur-md border-t border-primary/25 px-5 py-6 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono-flag text-sm font-semibold uppercase tracking-[0.25em] py-3 border-b border-parchment/10 transition-colors ${
                  active ? 'text-primary' : 'text-parchment/85 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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