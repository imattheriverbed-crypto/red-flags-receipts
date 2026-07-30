import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Lock, ArrowLeft, ExternalLink, Home, Shirt, Tag, Check, ChevronRight,
} from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import { Image } from '@/components/ui/image';
import { getProductBySlug, PRODUCTS } from '@/data/products';

const COLORS = [
  { name: 'Black', hex: '#0A0A0A' },
  { name: 'Bone', hex: '#E8DCC4' },
];

const SIZES = ['S', 'M', 'L', 'XL', '2XL'];

const FEATURES = [
  { icon: Home, text: '100% Cotton – Premium Quality' },
  { icon: Shirt, text: 'Oversized Unisex Fit' },
  { icon: Tag, text: 'Vintage Washed for that lived-in feel' },
  { icon: Lock, text: 'Limited Drop – Once it’s gone, it’s gone' },
];

const BULLETS = [
  'DTG Printed',
  'Pre-shrunk',
  'Designed in California',
  'Made to order',
];

const TABS = ['DESCRIPTION', 'DETAILS', 'SHIPPING & RETURNS'];

function parsePrice(price) {
  const n = parseFloat(String(price).replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function formatMoney(n) {
  return `$${n.toFixed(2)}`;
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(null);
  const [tab, setTab] = useState(0);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product) {
      const sameTag = PRODUCTS.filter((p) => p.slug !== product.slug && p.tag === product.tag);
      const others = PRODUCTS.filter((p) => p.slug !== product.slug && p.tag !== product.tag);
      setRelated([...sameTag, ...others].slice(0, 3));
    } else {
      setRelated([]);
    }
    setActiveImg(0);
    setColor(0);
    setSize(null);
    setTab(0);
    window.scrollTo(0, 0);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="dark bg-ink text-parchment min-h-screen">
        <SiteNav />
        <div className="max-w-3xl mx-auto px-6 py-40 text-center">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ 404 ◆</span>
          <h1 className="font-display font-black text-4xl text-parchment uppercase mb-6">Product Not Found</h1>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-mono-flag text-xs uppercase tracking-[0.2em] bg-primary text-parchment px-6 py-3.5 hover:bg-parchment hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const images = [product.img];
  const priceNum = parsePrice(product.price);
  const install = priceNum / 4;

  return (
    <div className="dark bg-black text-white min-h-screen font-body">
      <SiteNav />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-28 pb-20">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-mono-flag text-[11px] uppercase tracking-[0.25em] text-white/50 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        {/* Product detail */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Gallery */}
          <div className="flex flex-row gap-4">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-3 w-20 shrink-0">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square w-20 border overflow-hidden bg-[#111] transition-colors ${
                    activeImg === i ? 'border-primary' : 'border-white/15 hover:border-white/40'
                  }`}
                >
                  <Image src={img} alt="" fittingType="fit" className="w-full h-full" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1">
              <div className="relative aspect-square w-full bg-[#111] border border-white/10 overflow-hidden">
                <Image src={images[activeImg]} alt={product.title} fittingType="fit" className="w-full h-full" />
              </div>
              <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-white/40 mt-3">
                {activeImg + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-2">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-3 block">◆ Limited Drop ◆</span>
            <h1 className="font-heading font-black text-2xl sm:text-3xl uppercase leading-tight mb-5 text-white">
              {product.title}
            </h1>
            <p className="font-mono-flag text-xl text-white mb-2">{product.price} USD</p>
            <p className="font-body text-xs text-white/45 mb-7">
              or 4 interest-free payments of {formatMoney(install)} with <span className="text-white/70 font-medium">Shop Pay</span>. <a href="#" className="underline hover:text-primary">Learn more</a>
            </p>

            {/* Color */}
            <div className="mb-6">
              <p className="font-mono-flag text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3">
                Color: <span className="text-white">{COLORS[color].name}</span>
              </p>
              <div className="flex items-center gap-3">
                {COLORS.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(i)}
                    aria-label={c.name}
                    className={`relative w-9 h-9 rounded-full transition-all ${
                      color === i ? 'ring-2 ring-primary ring-offset-2 ring-offset-black' : 'ring-1 ring-white/20'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono-flag text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Size: <span className="text-white">{size ? `Oversized Fit · ${size}` : 'Oversized Fit'}</span>
                </p>
                <a href="#" className="font-mono-flag text-[11px] uppercase tracking-[0.2em] text-primary hover:underline">Size Guide</a>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[3rem] px-4 py-3 font-mono-flag text-xs uppercase tracking-[0.15em] border transition-colors ${
                      size === s
                        ? 'bg-primary text-white border-primary'
                        : 'bg-transparent text-white border-white/25 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white font-mono-flag text-sm uppercase tracking-[0.2em] py-4 hover:bg-[#B91C1C] transition-colors"
              >
                Add to Cart
              </a>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent text-white font-mono-flag text-sm uppercase tracking-[0.2em] py-4 border border-white hover:border-primary hover:text-primary transition-colors"
              >
                Buy It Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-white/35 mb-8 leading-relaxed">
              Checkout handled securely on Shopify. Nothing ships until Tuesday, August 4th at 9PM.
            </p>

            {/* Features */}
            <ul className="border-t border-white/10 pt-6 space-y-3">
              {FEATURES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 border border-primary/40 text-primary shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="font-body text-sm text-white/80">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20 border-t border-white/10">
          <div className="flex flex-wrap gap-6 sm:gap-10 border-b border-white/10">
            {TABS.map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                className={`font-mono-flag text-xs uppercase tracking-[0.2em] py-4 -mb-px border-b-2 transition-colors ${
                  tab === i ? 'border-primary text-white' : 'border-transparent text-white/45 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-3xl">
            {tab === 0 && (
              <div>
                <p className="font-body text-sm text-white/75 leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {BULLETS.map((b) => (
                    <li key={b} className="flex items-center gap-3 font-body text-sm text-white/75">
                      <span className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tab === 1 && (
              <ul className="space-y-2">
                {['Material: 100% combed ring-spun cotton', 'Fit: Oversized unisex', 'Weight: 7.5 oz/yd²', 'Print: DTG, water-based ink', 'Care: Machine wash cold, tumble dry low'].map((d) => (
                  <li key={d} className="flex items-center gap-3 font-body text-sm text-white/75">
                    <span className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
            {tab === 2 && (
              <p className="font-body text-sm text-white/75 leading-relaxed">
                Made to order and fulfilled through Printify. Production takes 2–5 business days, then ships via standard tracked mail (3–7 days domestic). Returns accepted within 14 days for unworn items with tags. As each piece is printed on demand, we cannot accept returns on items that have been washed or worn.
              </p>
            )}
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/shop/${p.slug}`}
                  className="group bg-[#0A0A0A] border border-white/10 flex flex-col transition-colors hover:border-primary"
                >
                  <div className="relative aspect-square w-full bg-[#111] overflow-hidden">
                    <Image src={p.img} alt={p.title} fittingType="fit" className="w-full h-full group-hover:opacity-90 transition-opacity" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-heading text-sm text-white leading-tight mb-3 uppercase">{p.title}</h3>
                    <span className="mt-auto font-mono-flag text-sm text-white/70">{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}