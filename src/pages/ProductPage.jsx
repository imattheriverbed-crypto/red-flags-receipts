import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Lock, ArrowLeft, ExternalLink } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import { Image } from '@/components/ui/image';
import { getProductBySlug, PRODUCTS } from '@/data/products';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product) {
      const sameTag = PRODUCTS.filter((p) => p.slug !== product.slug && p.tag === product.tag);
      const others = PRODUCTS.filter((p) => p.slug !== product.slug && p.tag !== product.tag);
      setRelated([...sameTag, ...others].slice(0, 3));
    } else {
      setRelated([]);
    }
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

  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-20">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-mono-flag text-[11px] uppercase tracking-[0.25em] text-parchment/60 hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative aspect-square w-full bg-card border border-primary/20 overflow-hidden">
            <Image src={product.img} alt={product.title} fittingType="fit" className="w-full h-full" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment bg-ink/70 border border-primary/40 px-2.5 py-1">
              <Lock className="w-3 h-3" /> Drops Aug 04 · 9PM
            </span>
          </div>

          {/* Details */}
          <div className="lg:pt-4">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">{product.tag}</span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-parchment leading-tight mb-5">{product.title}</h1>
            <p className="font-mono-flag text-2xl text-parchment mb-8">{product.price}</p>

            <p className="font-body text-sm text-parchment/70 leading-relaxed max-w-md mb-10">
              {product.description}
            </p>

            {/* Connected to Shopify */}
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300"
            >
              Buy on Shopify <ExternalLink className="w-4 h-4" />
            </a>

            <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/40 mt-6 leading-relaxed">
              Checkout is handled securely on Shopify.<br />
              Nothing ships until Tuesday, August 4th at 9PM.
            </p>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-parchment uppercase mb-8 text-center">
              More From The Drop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/shop/${p.slug}`}
                  className="group bg-card border border-primary/15 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-primary"
                >
                  <div className="relative aspect-square w-full bg-ink overflow-hidden">
                    <Image src={p.img} alt={p.title} fittingType="fit" className="w-full h-full group-hover:opacity-90 transition-opacity" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="font-mono-flag text-[9px] uppercase tracking-[0.25em] text-primary mb-2">{p.tag}</span>
                    <h3 className="font-display text-base text-parchment leading-tight mb-4">{p.title}</h3>
                    <span className="mt-auto font-mono-flag text-sm text-parchment/70">{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <TickerTape variant="dark" />

      <SiteFooter />
    </div>
  );
}