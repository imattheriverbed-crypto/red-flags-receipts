import React from 'react';
import { Link } from 'react-router-dom';

const COLS = [
  { title: 'Shop', links: [
    { label: 'All Products', to: '/shop' },
    { label: 'New Arrivals', to: '/shop' },
    { label: 'Accessories', to: '/shop' },
  ]},
  { title: 'Company', links: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact', to: '/contact' },
  ]},
  { title: 'Help', links: [
    { label: 'Shipping', to: '#' },
    { label: 'Returns', to: '#' },
    { label: 'FAQ', to: '#' },
  ]},
];

export default function ProductFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-[70px] py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h4 className="font-body font-bold text-white text-base mb-5">RED FLAGS &amp; RECEIPTS</h4>
          <p className="text-white/55 leading-[1.8] text-sm">
            Real talk.<br />Real healing.<br />Real style.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="font-body font-semibold text-white text-base mb-5">{c.title}</h4>
            {c.links.map((l) =>
              l.to === '#' ? (
                <p key={l.label} className="text-white/55 text-sm mb-2.5">{l.label}</p>
              ) : (
                <Link key={l.label} to={l.to} className="block text-white/55 hover:text-primary text-sm mb-2.5 transition-colors">
                  {l.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}