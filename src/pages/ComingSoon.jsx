import React from 'react';
import RibbonCursor from '@/components/coming-soon/RibbonCursor';
import TickerTape from '@/components/coming-soon/TickerTape';
import Hero from '@/components/coming-soon/Hero';
import LeadCapture from '@/components/coming-soon/LeadCapture';
import ProductGallery from '@/components/coming-soon/ProductGallery';
import SiteFooter from '@/components/coming-soon/SiteFooter';

export default function ComingSoon() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dark bg-ink text-parchment min-h-screen relative opacity-100">
      <RibbonCursor />

      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-4 bg-ink/80 backdrop-blur-md border-b border-primary/20">
        <div className="flex items-center gap-3">
          <img src="https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f69e0d30b_red-flags-receipts.png" alt="Red Flags & Receipts" className="h-10 w-auto object-contain" />
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50">Est. August 01</span>
          <button
            onClick={scrollToSignup}
            className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment border border-parchment/40 px-4 py-2 hover:bg-primary hover:border-primary hover:text-parchment transition-colors">
            
            Get Notified
          </button>
        </div>
      </nav>

      <Hero onCtaClick={scrollToSignup} />

      {/* Scarf weave showcase */}
      <section className="bg-ink py-20 sm:py-28 px-6 sm:px-12">
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

      <TickerTape variant="red" />

      <LeadCapture />

      <ProductGallery />

      <TickerTape variant="dark" />

      <SiteFooter />
    </div>);

}