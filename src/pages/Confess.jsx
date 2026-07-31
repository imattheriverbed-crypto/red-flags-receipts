import React from 'react';
import { Quote } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import ConfessionWall from '@/components/journal/ConfessionWall';

export default function Confess() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <header className="relative pt-40 pb-16 px-6 sm:px-12 text-center overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Quote className="w-10 h-10 text-primary mx-auto mb-6" />
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ Confess It ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment leading-[0.95] mb-6">
            Say it to the<br /><span className="text-primary italic">scarf.</span>
          </h1>
          <p className="font-body text-sm sm:text-base text-parchment/60 leading-relaxed max-w-xl mx-auto">
            Confess it. Yell at the one who did it. Write the thing you were never allowed to say. This stays between you and the page — unless you decide otherwise.
          </p>
          <p className="font-mono-flag text-[10px] uppercase tracking-[0.25em] text-parchment/40 mt-6">
            Toggle “Consider me for publication” if you want your story considered for the wall.
          </p>
        </div>
      </header>

      <TickerTape variant="dark" />

      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-24">
        <ConfessionWall />
      </section>

      <SiteFooter />
    </div>
  );
}