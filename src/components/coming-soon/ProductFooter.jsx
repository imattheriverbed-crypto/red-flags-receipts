import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '@/components/coming-soon/Logo';
import { Image } from '@/components/ui/image';

const FOX = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/209d95490_generated_image.png';

const COLS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Tees', to: '/shop' },
      { label: 'Outerwear', to: '/collections' },
      { label: 'Accessories', to: '/shop' },
      { label: 'New Arrivals', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Size Guide', to: '#' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '#' },
      { label: 'Returns', to: '#' },
      { label: 'FAQs', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
  },
];

export default function ProductFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo height="h-12" className="mb-5" />
            <p className="font-body text-xs text-white/45 leading-relaxed mb-6 max-w-xs">
              Look at this scarf made of all the red flags you gave me. Wearable warnings, printed on demand, shipped to your door.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/70 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to === '#' ? (
                      <span className="font-body text-sm text-white/50 cursor-default">{l.label}</span>
                    ) : (
                      <Link to={l.to} className="font-body text-sm text-white/60 hover:text-primary transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fox + utility bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
            <p className="font-mono-flag text-[9px] uppercase tracking-[0.25em] text-white/35 text-center sm:text-left">
              © 2025 Red Flags &amp; Receipts. All Rights Reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-white/35 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-white/35 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="w-24 h-24 shrink-0">
            <Image src={FOX} alt="Red Flags & Receipts mascot" fittingType="fit" className="w-full h-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}