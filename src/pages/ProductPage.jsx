import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ExternalLink } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import NewsletterBanner from '@/components/coming-soon/NewsletterBanner';
import ProductFooter from '@/components/coming-soon/ProductFooter';
import { Image } from '@/components/ui/image';
import { getProductBySlug, PRODUCTS } from '@/data/products';

const COLORS = [
  { name: 'Black', hex: '#111' },
  { name: 'Cream', hex: '#ddd' },
];
const SIZES = ['S', 'M', 'L', 'XL', '2XL'];
const FEATURES = ['100% Cotton', 'Oversized Vintage Fit', 'DTG Printed', 'Limited Quantity'];

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(null);
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
    window.scrollTo(0, 0);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="dark bg-[#050505] text-white font-body min-h-screen">
        <SiteNav />
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <h1 className="font-bebas text-5xl text-white mb-6">Product Not Found</h1>
          <Link
            to="/shop"
            className="inline-block bg-[#b31313] text-white uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-[#8f0d0d] transition-colors"
          >
            Back to Shop
          </Link>
        </div>
        <ProductFooter />
      </div>
    );
  }

  const images = [product.img];

  const selected = [];
  if (COLORS[color]) selected.push(['color', COLORS[color].name]);
  if (size) selected.push(['size', size]);
  const qs = new URLSearchParams(selected).toString();
  const checkoutHref = qs ? `${product.href}${product.href.includes('?') ? '&' : '?'}${qs}` : product.href;

  return (
    <div className="dark bg-[#050505] text-white font-body min-h-screen">
      <SiteNav />

      <div className="w-[90%] max-w-[1600px] mx-auto pt-28 pb-16">
        {/* Product */}
        <section className="grid lg:grid-cols-[110px_1.2fr_0.9fr] gap-8 lg:gap-10">
          {/* Thumbnails */}
          <div className="hidden lg:flex flex-col gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`aspect-square w-full overflow-hidden bg-[#101010] border transition-colors ${
                  activeImg === i ? 'border-primary' : 'border-white/25 hover:border-white/50'
                }`}
              >
                <Image src={img} alt="" fittingType="fit" className="w-full h-full" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="bg-[#101010] p-5 sm:p-6">
            <div className="aspect-square w-full overflow-hidden">
              <Image src={images[activeImg]} alt={product.title} fittingType="fit" className="w-full h-full" />
            </div>
          </div>

          {/* Info */}
          <div>
            <small className="block text-[#b91c1c] uppercase tracking-[0.25em] text-xs mb-2">Limited Drop</small>
            <h1 className="font-bebas text-4xl sm:text-6xl lg:text-7xl leading-[0.95] my-2 mb-4">{product.title}</h1>
            <div className="text-2xl mb-5">{product.price}</div>

            <h4 className="font-body font-semibold uppercase tracking-[0.15em] text-sm text-white/80 mb-2">Color</h4>
            <div className="flex gap-3.5 mb-6">
              {COLORS.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setColor(i)}
                  aria-label={c.name}
                  className={`w-9 h-9 rounded-full border-2 transition-colors ${
                    color === i ? 'border-primary' : 'border-white hover:border-white/70'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>

            <h4 className="font-body font-semibold uppercase tracking-[0.15em] text-sm text-white/80 mb-2">Size</h4>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-5 py-3 border text-sm uppercase tracking-[0.1em] transition-colors ${
                    size === s
                      ? 'border-primary text-primary'
                      : 'border-white/30 text-white hover:border-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <a
              href={checkoutHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#b31313] text-white uppercase tracking-[0.15em] py-4 text-center hover:bg-[#8f0d0d] transition-colors mb-3"
            >
              Add To Cart
            </a>
            <a
              href={checkoutHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-transparent border border-white text-white uppercase tracking-[0.15em] py-4 hover:border-primary hover:text-primary transition-colors"
            >
              Buy It Now <ExternalLink className="w-4 h-4" />
            </a>

            <ul className="mt-7 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/75 text-sm">
                  <Check className="w-4 h-4 text-[#b31313] shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Description + You May Also Like */}
        <section className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 mt-16 sm:mt-20">
          <div className="bg-[#0e0e0e] border border-[#202020] p-8 sm:p-10">
            <h2 className="font-bebas text-3xl tracking-[0.05em] mb-5">Description</h2>
            <p className="text-white/65 leading-[1.9]">{product.description}</p>
          </div>
          <div>
            <h2 className="font-bebas text-3xl tracking-[0.05em] mb-5">You May Also Like</h2>
            <div className="grid gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/shop/${p.slug}`}
                  className="group bg-[#111] border border-[#222] p-3 flex items-center gap-4 hover:border-primary hover:-translate-y-1 transition-all"
                >
                  <div className="w-20 h-20 shrink-0 bg-[#101010] overflow-hidden">
                    <Image src={p.img} alt={p.title} fittingType="fit" className="w-full h-full group-hover:opacity-80 transition-opacity" />
                  </div>
                  <h3 className="font-bebas text-lg tracking-wide leading-tight">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NewsletterBanner />
      </div>

      <ProductFooter />
    </div>
  );
}