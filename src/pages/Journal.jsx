import React from 'react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';

export default function Journal() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <header className="relative pt-40 pb-20 px-6 sm:px-12 text-center grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ Stories From The Survivors ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment uppercase leading-[0.95] mb-6">Journal</h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/60">Receipts, red flags, and the comebacks.</p>
        </div>
      </header>

      <TickerTape variant="red" />

      <section className="max-w-4xl mx-auto px-6 sm:px-12 py-20 text-center">
        <p className="font-display italic text-xl sm:text-2xl text-parchment/80 max-w-2xl mx-auto leading-snug">
          The journal collects the warnings we lived through and the pivots that followed. First entries drop August 01.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}