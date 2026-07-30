import React, { useState } from 'react';
import { ShoppingBag, Lock } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import CountdownClock from '@/components/coming-soon/CountdownClock';
import { Image } from '@/components/ui/image';

const PRODUCTS = [
  { tag: 'Bottoms', title: 'Red Flag Pattern Pencil Skirt', price: '$69.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15244353897538709014_2048.jpg?v=1785329183', href: 'https://ciekr2-j1.myshopify.com/products/red-flag-pattern-pencil-skirt-womens-mid-waist-graphic-skirt' },
  { tag: 'Stationery', title: 'The Receipts Spiral Journal — Red Flag Minimalist Notebook', price: '$19.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15941908692174830345_2048.jpg?v=1785328444', href: 'https://ciekr2-j1.myshopify.com/products/the-receipts-spiral-journal-red-flag-minimalist-notebook' },
  { tag: 'Bottoms', title: 'Signature Red Flags Pencil Skirt', price: '$53.68', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/20260729123551-1f18b4a0-862a-6112-9f0e-eedfab1cfadf.png?v=1785328776', href: 'https://ciekr2-j1.myshopify.com/products/signature-red-flags-pencil-skirt' },
  { tag: 'Tops', title: 'Baby Tee — "Red Flags Match My Outfit" Graphic Crop Top', price: '$39.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349', href: 'https://ciekr2-j1.myshopify.com/products/baby-tee-red-flags-match-my-outfit-graphic-crop-top' },
  { tag: 'Accessories', title: 'Lightweight Red and Black Checker Scarf', price: '$39.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/13460490385159931143_2048.jpg?v=1785329453', href: 'https://ciekr2-j1.myshopify.com/products/lightweight-red-black-checker-scarf-modern-geometric-knit' },
  { tag: 'Accessories', title: 'Signature Lightweight Red Flag Fashion Scarf', price: '$39.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351', href: 'https://ciekr2-j1.myshopify.com/products/light-scarf-red-flag-lightweight-fashion-scarf' },
];

const CATEGORIES = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.tag)))];

function ProductCard({ product }) {
  return (
    <div className="bg-card border border-primary/15 group flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-primary">
      <div className="relative aspect-square w-full bg-ink flex items-center justify-center overflow-hidden">
        <Image
          src={product.img}
          alt={product.title}
          fittingType="fit"
          className="w-full h-full group-hover:opacity-90 transition-opacity"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment bg-ink/70 border border-primary/40 px-2.5 py-1">
          <Lock className="w-3 h-3" /> Drops Aug 04 · 9PM
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{product.tag}</span>
        <h3 className="font-display text-lg text-parchment leading-tight mb-6">{product.title}</h3>
        <div className="mt-auto pt-4 border-t border-primary/15 flex items-center justify-between">
          <span className="font-mono-flag text-xl text-parchment">{product.price}</span>
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/50 border border-parchment/20 px-4 py-2">
            Not For Sale Yet
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.tag === active);

  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      {/* Hero */}
      <header className="relative pt-40 pb-20 px-6 sm:px-12 text-center overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ First Drop · Aug 04 · 9PM ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment leading-[0.95] mb-6 uppercase">
            Featured Signature<br />Collection
          </h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-8">
            Nothing sells until Tuesday, August 4th at 9PM
          </p>
          <div className="mb-6 flex justify-center">
            <CountdownClock variant="boxed" target={new Date('2026-08-04T21:00:00')} />
          </div>
          <a
            href="#collection"
            className="inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4" /> Preview The Drop
          </a>
        </div>
      </header>

      <TickerTape variant="red" />

      {/* Collection + left menu */}
      <main id="collection" className="max-w-7xl mx-auto px-6 sm:px-12 py-20 sm:py-24">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment uppercase text-center mb-12">
          Featured Signature Collection
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left category menu */}
          <aside className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-28">
              <h3 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 pb-3 border-b border-primary/25">
                Browse
              </h3>
              <ul className="flex flex-row flex-wrap lg:flex-col gap-2">
                {CATEGORIES.map((cat) => {
                  const isActive = active === cat;
                  const count = cat === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.tag === cat).length;
                  return (
                    <li key={cat} className="lg:w-full">
                      <button
                        onClick={() => setActive(cat)}
                        className={`w-full text-left font-mono-flag text-[11px] uppercase tracking-[0.22em] px-4 py-3 transition-colors border ${
                          isActive
                            ? 'bg-primary text-parchment border-primary'
                            : 'border-transparent text-parchment/70 hover:text-primary hover:border-primary/30'
                        }`}
                      >
                        <span className="flex items-center justify-between gap-3">
                          {cat}
                          <span className={isActive ? 'text-parchment/70' : 'text-parchment/35'}>{count}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {visible.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </div>
            {visible.length === 0 && (
              <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/50 text-center py-16">
                No pieces in this category yet.
              </p>
            )}
          </div>
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