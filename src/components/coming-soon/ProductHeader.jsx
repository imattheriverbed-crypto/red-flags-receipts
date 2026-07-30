import React from 'react';
import { Link } from 'react-router-dom';

const NAV = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function ProductHeader() {
  return (
    <>
      <div className="bg-[#8f0d0d] py-2.5 text-center">
        <span className="font-body text-[0.75rem] uppercase tracking-[0.25em] text-white">
          Limited Drop &nbsp;•&nbsp; Two Designs &nbsp;•&nbsp; One Message
        </span>
      </div>
      <header className="bg-black border-b border-white/10">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-5 sm:px-[70px] py-5">
          <Link to="/home" className="font-cormorant text-2xl sm:text-[2rem] font-bold text-white leading-none">
            RED FLAGS &amp; RECEIPTS
          </Link>
          <nav className="hidden md:flex gap-7 sm:gap-10 uppercase tracking-[0.15em] text-[0.85rem]">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-white/80 hover:text-primary transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}