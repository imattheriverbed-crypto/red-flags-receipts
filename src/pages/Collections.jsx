import React from 'react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import CollectionCard from '@/components/coming-soon/CollectionCard';

const EMPOWERMENT_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/9cac8a48c_Copilot_20260729_101403.png';
const PARTY_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a8bd5e8c0_generated_image.png';
const SURVIVED_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/ef6328d93_generated_image.png';
const LANG_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/6df07dbb7_38bf0d10-9897-4f90-81d3-0ee9b46ac015.png';
const JOURNAL_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/6d8774117_RedFlagsreceiptsjournalmockup.png';

const FEATURED = {
  name: 'Signature Collection',
  date: 'Available Now',
  status: '◆ Available Now ◆',
  statusStyle: 'bg-primary text-parchment',
  desc: 'Skirts, scarves, journals and the receipts to match. The first chapter — live and shipping now via our Printify store.',
  img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351',
};

const UPCOMING = [
  {
    name: 'PETS.',
    date: 'Aug 08',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: PARTY_IMG,
  },
  {
    name: 'BAGS.',
    date: 'Aug 15',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: SURVIVED_IMG,
  },
  {
    name: '50 LANG × BLESS',
    date: 'Aug 22',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: LANG_IMG,
  },
  {
    name: 'RECEIPTS JOURNAL',
    date: 'Aug 29',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: JOURNAL_IMG,
  },
];

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
            <CollectionCard key={c.name} collection={c} />
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