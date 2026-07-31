import React from 'react';
import RibbonCursor from '@/components/coming-soon/RibbonCursor';
import TickerTape from '@/components/coming-soon/TickerTape';
import Hero from '@/components/coming-soon/Hero';

import InstagramFeed from '@/components/coming-soon/InstagramFeed';
import LeadCapture from '@/components/coming-soon/LeadCapture';
import ProductGallery from '@/components/coming-soon/ProductGallery';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import ScrollWatermark from '@/components/coming-soon/ScrollWatermark';
import SectionTracker from '@/components/coming-soon/SectionTracker';

export default function ComingSoon() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen relative opacity-100">
      <RibbonCursor />

      <ScrollWatermark />

      <SiteNav />

      <SectionTracker />

      <Hero />

      <InstagramFeed />

      {/* Scarf weave showcase */}
      <section id="signature-print" className="bg-ink sm:py-28 px-6 sm:px-12 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ The Signature Print ◆</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-parchment leading-tight mb-4">
              36 red flags.<br />
              <span className="text-primary italic">One scarf.</span>
            </h2>
            <p className="font-body text-sm text-parchment/50 max-w-md mx-auto">
              Every square is a warning you lived through. Woven together, they become the thing you wear out of the wreckage.
            </p>
          </div>
        </div>
      </section>

      <LeadCapture />

      <ProductGallery />

      <TickerTape variant="dark" />

      <SiteFooter />
    </div>);

}