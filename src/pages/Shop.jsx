import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';

const PRODUCTS = [
  { tag: 'Apparel', title: 'Red Flag Pattern Pencil Skirt', price: '$48.00' },
  { tag: 'Stationery', title: 'The Receipts Spiral Journal — Red Flag Minimalist Notebook', price: '$22.00' },
  { tag: 'Apparel', title: 'Signature Red Flags Pencil Skirt', price: '$52.00' },
  { tag: 'Tops', title: 'Baby Tee — "Red Flags Match My Outfit" Graphic Crop Top', price: '$34.00' },
  { tag: 'Outerwear', title: "Women's Varsity Jacket — Minimal Tiny Flag Pattern AOP Jacket", price: '$88.00' },
  { tag: 'Accessories', title: 'Lightweight Red and Black Checker Scarf', price: '$28.00' },
  { tag: 'Accessories', title: 'Signature Lightweight Red Flag Fashion Scarf', price: '$28.00' },
];

function ProductCard({ product }) {
  return (
    <div className="bg-card border border-primary/15 group flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-primary">
      <div className="relative aspect-[4/5] w-full bg-ink flex items-center justify-center overflow-hidden">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/30">Product Image</span>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{product.tag}</span>
        <h3 className="font-display text-lg text-parchment leading-tight mb-4">{product.title}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-mono-flag text-lg text-parchment">{product.price}</span>
          <button className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary border border-primary px-4 py-2 hover:bg-primary hover:text-parchment transition-colors">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      {/* Hero */}
      <header className="relative pt-40 pb-24 px-6 sm:px-12 text-center overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ First Drop · Aug 01 ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment leading-[0.95] mb-6 uppercase">
            Pre-Drop Signature<br />Line
          </h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-10">
            Pre-Drop from Red Flags &amp; Receipts
          </p>
          <a
            href="#collection"
            className="inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4" /> Shop The Drop
          </a>
        </div>
      </header>

      <TickerTape variant="red" />

      {/* Collection */}
      <main id="collection" className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-24">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment uppercase text-center mb-12">
          The Pre-Drop Signature Line
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </main>

      {/* Brand message */}
      <section className="border-t border-b border-primary/15 bg-card/40 py-16 px-6 text-center">
        <p className="font-display italic text-xl sm:text-2xl text-parchment/80 max-w-2xl mx-auto leading-snug">
          Bold statements, bold style. Built for those who wear their standard on their sleeve.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}