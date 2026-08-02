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
      const sameCategoryProducts = PRODUCTS.filter(
        (item) =>
          item.slug !== product.slug &&
          item.tag === product.tag
      );

      const otherProducts = PRODUCTS.filter(
        (item) =>
          item.slug !== product.slug &&
          item.tag !== product.tag
      );

      setRelated(
        [...sameCategoryProducts, ...otherProducts].slice(0, 3)
      );
    } else {
      setRelated([]);
    }

    setActiveImg(0);
    window.scrollTo(0, 0);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="dark min-h-screen bg-[#050505] font-body text-white">
        <SiteNav />

        <main className="mx-auto max-w-3xl px-6 pb-16 pt-32 text-center">
          <h1 className="mb-6 font-bebas text-5xl text-white">
            Product Not Found
          </h1>

          <Link
            to="/shop"
            className="inline-block bg-[#b31313] px-6 py-3.5 uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#8f0d0d]"
          >
            Back to Shop
          </Link>
        </main>

        <ProductFooter />
      </div>
    );
  }

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.img];

  const currentImage =
    images[activeImg] || images[0] || product.img;

  return (
    <div className="dark min-h-screen bg-[#050505] font-body text-white">
      <SiteNav />

      <main className="mx-auto w-[90%] max-w-[1600px] pb-32 pt-40 lg:pb-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 font-mono-flag text-[11px] uppercase tracking-[0.22em]">
          <Link
            to="/shop"
            className="text-parchment/55 transition-colors hover:text-primary"
          >
            Shop
          </Link>

          {product.tag && (
            <>
              <ChevronRight className="h-3 w-3 text-parchment/30" />

              <Link
                to={`/shop?cat=${encodeURIComponent(product.tag)}`}
                className="text-parchment/55 transition-colors hover:text-primary"
              >
                {product.tag}
              </Link>
            </>
          )}

          <ChevronRight className="h-3 w-3 text-parchment/30" />

          <span className="text-primary">
            {product.title}
          </span>
        </nav>

        {/* Product layout */}
        <section
          className={`grid gap-8 lg:gap-10 ${
            images.length > 1
              ? 'lg:grid-cols-[110px_1.2fr_0.9fr]'
              : 'lg:grid-cols-[1.2fr_0.9fr]'
          }`}
        >
          {/* Desktop thumbnails */}
          {images.length > 1 && (
            <div className="hidden flex-col gap-4 lg:flex">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImg(index)}
                  aria-label={`View ${product.title} image ${index + 1}`}
                  className={`aspect-square w-full overflow-hidden rounded-xl border bg-[#0c0c0c] shadow-lg transition-all ${
                    activeImg === index
                      ? 'border-primary ring-1 ring-primary'
                      : 'border-white/15 hover:border-white/40'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    fittingType="fit"
                    className="h-full w-full transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main product image */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0c0c0c] to-black p-6 shadow-2xl ring-1 ring-white/5 sm:p-10">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
              <Image
                src={currentImage}
                alt={product.title}
                fittingType="fit"
                className="h-full w-full transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>

            {/* Mobile thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:hidden">
                {images.map((image, index) => (
                  <button
                    key={`mobile-${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImg(index)}
                    aria-label={`View ${product.title} image ${index + 1}`}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-[#0c0c0c] ${
                      activeImg === index
                        ? 'border-primary ring-1 ring-primary'
                        : 'border-white/15'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      fittingType="fit"
                      className="h-full w-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product information */}
          <div className="flex flex-col">
            <small className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#b91c1c]">
              Limited Drop
            </small>

            <h1 className="my-2 mb-4 font-bebas text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {product.title}
            </h1>

            <div className="mb-6 text-2xl">
              {product.price}
            </div>

            <p className="mb-7 leading-[1.8] text-white/65">
              {product.description}
            </p>

            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-[#b31313] py-4 text-center uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#8f0d0d]"
            >
              Choose Options &amp; Buy
              <ExternalLink className="h-4 w-4" />
            </a>

            <p className="mt-3 text-center text-xs leading-relaxed text-white/45">
              Available sizes, colors and inventory are shown on Shopify.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h2 className="mb-3 font-bebas text-2xl tracking-[0.05em]">
                Product Details
              </h2>

              <p className="leading-[1.8] text-white/60">
                This item is produced and fulfilled through our connected
                Shopify store. Select your available options on the Shopify
                product page before checkout.
              </p>
            </div>
          </div>
        </section>

        {/* Description and related products */}
        <section className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-[2fr_1fr] lg:gap-10">
          <div className="border border-[#202020] bg-[#0e0e0e] p-8 sm:p-10">
            <h2 className="mb-5 font-bebas text-3xl tracking-[0.05em]">
              Description
            </h2>

            <p className="leading-[1.9] text-white/65">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-bebas text-3xl tracking-[0.05em]">
              You May Also Like
            </h2>

            <div className="grid gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/shop/${item.slug}`}
                  className="group flex items-center gap-4 border border-[#222] bg-[#111] p-3 transition-all hover:-translate-y-1 hover:border-primary"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden bg-[#101010]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fittingType="fit"
                      className="h-full w-full transition-opacity group-hover:opacity-80"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bebas text-lg leading-tight tracking-wide">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
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

      {/* Mobile sticky purchase bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-black/95 p-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-bebas text-lg leading-tight">
              {product.title}
            </p>

            <p className="text-sm text-white/65">
              {product.price}
            </p>
          </div>

          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#b31313] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#8f0d0d]"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}