import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';

import SiteNav from '@/components/coming-soon/SiteNav';
import NewsletterBanner from '@/components/coming-soon/NewsletterBanner';
import ProductFooter from '@/components/coming-soon/ProductFooter';
import { Image } from '@/components/ui/image';
import { getProductBySlug, PRODUCTS } from '@/data/products';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [activeImg, setActiveImg] = useState(0);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product) {
      const sameTag = PRODUCTS.filter(
        (item) =>
          item.slug !== product.slug &&
          item.tag === product.tag
      );

      const otherProducts = PRODUCTS.filter(
        (item) =>
          item.slug !== product.slug &&
          item.tag !== product.tag
      );

      setRelated([...sameTag, ...otherProducts].slice(0, 3));
    } else {
      setRelated([]);
    }

    setActiveImg(0);
    window.scrollTo(0, 0);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="dark bg-[#050505] text-white font-body min-h-screen">
        <SiteNav />

        <div className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <h1 className="font-bebas text-5xl text-white mb-6">
            Product Not Found
          </h1>

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

  const images = product.images?.length
    ? product.images
    : [product.img];

  return (
    <div className="dark bg-[#050505] text-white font-body min-h-screen">
      <SiteNav />

      <main className="w-[90%] max-w-[1600px] mx-auto pt-40 pb-16">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 mb-6 font-mono-flag text-[11px] uppercase tracking-[0.22em]">
          <Link
            to="/shop"
            className="text-parchment/55 hover:text-primary transition-colors"
          >
            Shop
          </Link>

          {product.tag && (
            <>
              <ChevronRight className="w-3 h-3 text-parchment/30" />

              <Link
                to={`/shop?cat=${encodeURIComponent(product.tag)}`}
                className="text-parchment/55 hover:text-primary transition-colors"
              >
                {product.tag}
              </Link>
            </>
          )}

          <ChevronRight className="w-3 h-3 text-parchment/30" />

          <span className="text-primary">
            {product.title}
          </span>
        </nav>

        {/* Product */}
        <section className="grid lg:grid-cols-[110px_1.2fr_0.9fr] gap-8 lg:gap-10">
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="hidden lg:flex flex-col gap-4">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImg(index)}
                  className={`aspect-square w-full overflow-hidden rounded-xl bg-[#0c0c0c] border shadow-lg transition-all ${
                    activeImg === index
                      ? 'border-primary ring-1 ring-primary'
                      : 'border-white/15 hover:border-white/40'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    fittingType="fit"
                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main image */}
          <div
            className={`relative bg-gradient-to-b from-[#0c0c0c] to-black p-6 sm:p-10 rounded-2xl shadow-2xl ring-1 ring-white/5 ${
              images.length === 1 ? 'lg:col-start-1 lg:col-span-2' : ''
            }`}
          >
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
              <Image
                src={images[activeImg]}
                alt={product.title}
                fittingType="fit"
                className="w-full h-full transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* Product information */}
          <div>
            <small className="block text-[#b91c1c] uppercase tracking-[0.25em] text-xs mb-2">
              Limited Drop
            </small>

            <h1 className="font-bebas text-4xl sm:text-6xl lg:text-7xl leading-[0.95] my-2 mb-4">
              {product.title}
            </h1>

            <div className="text-2xl mb-6">
              {product.price}
            </div>

            <p className="text-white/65 leading-[1.8] mb-7">
              {product.description}
            </p>

            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#b31313] text-white uppercase tracking-[0.15em] py-4 text-center hover:bg-[#8f0d0d] transition-colors"
            >
              Choose Options & Buy
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-center text-white/45 text-xs mt-3 leading-relaxed">
              Available colors, sizes and inventory are shown securely on
              Shopify.
            </p>
          </div>
        </section>

        {/* Description and related products */}
        <section className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10 mt-16 sm:mt-20">
          <div className="bg-[#0e0e0e] border border-[#202020] p-8 sm:p-10">
            <h2 className="font-bebas text-3xl tracking-[0.05em] mb-5">
              Description
            </h2>

            <p className="text-white/65 leading-[1.9]">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="font-bebas text-3xl tracking-[0.05em] mb-5">
              You May Also Like
            </h2>

            <div className="grid gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/shop/${item.slug}`}
                  className="group bg-[#111] border border-[#222] p-3 flex items-center gap-4 hover:border-primary hover:-translate-y-1 transition-all"
                >
                  <div className="w-20 h-20 shrink-0 bg-[#101010] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fittingType="fit"
                      className="w-full h-full group-hover:opacity-80 transition-opacity"
                    />
                  </div>

                  <div>
                    <h3 className="font-bebas text-lg tracking-wide leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-white/50 text-sm mt-1">
                      {item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NewsletterBanner />
      </main>

      <ProductFooter />
    </div>
  );
}