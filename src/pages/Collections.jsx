import React from 'react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import CollectionCard from '@/components/coming-soon/CollectionCard';

import { FEATURED, UPCOMING } from '@/data/drops';

export default function Collections() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <header className="relative pt-40 pb-16 px-6 sm:px-12 text-center grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ The Archive ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment uppercase leading-[0.95] mb-6">Collections</h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/60">Every collection is a chapter. Every scarf is a receipt.</p>
        </div>
      </header>

      <TickerTape variant="red" />

      {/* Featured collection */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50">Opening The Archive</span>
        </div>
        <CollectionCard collection={FEATURED} large />
      </section>

      {/* Upcoming grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 pb-20">
        <div className="flex items-baseline justify-between mb-8 border-b border-parchment/10 pb-4">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-parchment">Upcoming Drops</h2>
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/40">Little by little</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING.map((c) => (
            <CollectionCard key={c.name} collection={c} to={`/collections/${c.slug}`} />
          ))}
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 py-16 text-center border-t border-parchment/10">
        <p className="font-display italic text-xl sm:text-2xl text-parchment/80 max-w-2xl mx-auto leading-snug">
          Made with Printify. Sold little by little. Every warning you ignored, woven into wearable art — not a deterrent, a badge of resilience.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}