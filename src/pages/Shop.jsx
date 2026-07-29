import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import { Image } from '@/components/ui/image';

const PRODUCTS = [
  { tag: 'Bottoms', title: 'Red Flag Pattern Pencil Skirt', price: '$69.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15244353897538709014_2048.jpg?v=1785329183', href: 'https://ciekr2-j1.myshopify.com/products/red-flag-pattern-pencil-skirt-womens-mid-waist-graphic-skirt' },
  { tag: 'Stationery', title: 'The Receipts Spiral Journal — Red Flag Minimalist Notebook', price: '$19.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15941908692174830345_2048.jpg?v=1785328444', href: 'https://ciekr2-j1.myshopify.com/products/the-receipts-spiral-journal-red-flag-minimalist-notebook' },
  { tag: 'Bottoms', title: 'Signature Red Flags Pencil Skirt', price: '$53.68', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/20260729123551-1f18b4a0-862a-6112-9f0e-eedfab1cfadf.png?v=1785328776', href: 'https://ciekr2-j1.myshopify.com/products/signature-red-flags-pencil-skirt' },
  { tag: 'Tops', title: 'Baby Tee — "Red Flags Match My Outfit" Graphic Crop Top', price: '$39.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349', href: 'https://ciekr2-j1.myshopify.com/products/baby-tee-red-flags-match-my-outfit-graphic-crop-top' },
  { tag: 'Accessories', title: 'Lightweight Red and Black Checker Scarf', price: '$39.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/13460490385159931143_2048.jpg?v=1785329453', href: 'https://ciekr2-j1.myshopify.com/products/lightweight-red-black-checker-scarf-modern-geometric-knit' },
  { tag: 'Accessories', title: 'Signature Lightweight Red Flag Fashion Scarf', price: '$39.99', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351', href: 'https://ciekr2-j1.myshopify.com/products/light-scarf-red-flag-lightweight-fashion-scarf' },
];

function ProductCard({ product }) {
  return (
    <div className="bg-card border border-primary/15 group flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-primary">
      <div className="relative aspect-[4/3] w-full bg-ink flex items-center justify-center overflow-hidden">
        <Image
          src={product.img}
          alt={product.title}
          fittingType="fit"
          className="w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{product.tag}</span>
        <h3 className="font-display text-lg text-parchment leading-tight mb-6">
          <a href={product.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{product.title}</a>
        </h3>
        <div className="mt-auto pt-4 border-t border-primary/15 flex items-center justify-between">
          <span className="font-mono-flag text-xl text-parchment">{product.price}</span>
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-flag text-[10px] uppercase tracking-[0.2em] bg-primary text-parchment px-4 py-2 hover:bg-parchment hover:text-ink transition-colors"
          >
            View Product
          </a>
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
            Featured Signature<br />Collection
          </h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-10">
            First Drop from Red Flags &amp; Receipts
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
          Featured Signature Collection
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