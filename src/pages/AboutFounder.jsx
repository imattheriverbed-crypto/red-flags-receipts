import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { Image } from '@/components/ui/image';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import ScarfWeave from '@/components/coming-soon/ScarfWeave';
import TickerTape from '@/components/coming-soon/TickerTape';

const FOUNDER_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/fe63bd653_generated_image.png';

export default function AboutFounder() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center px-6 sm:px-12 pt-32 pb-16 grain-overlay overflow-hidden">
        <Image
          src={FOUNDER_IMG}
          alt=""
          fittingType="fill"
          focalPointY={0.3}
          className="absolute inset-0 w-full h-full opacity-35 object-cover object-top translate-y-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ The Founder ◆</span>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-parchment leading-[0.95] mb-6">
            Amy <span className="text-primary not-italic" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}>"AJ"</span>
          </h1>
          <p className="font-body text-sm sm:text-base uppercase tracking-[0.25em] text-parchment/60 max-w-xl leading-relaxed">
            She moved to Los Angeles with high hopes.<br />
            The city had other plans.
          </p>
        </div>
      </section>

      <TickerTape variant="red" />

      {/* Story */}
      <section className="px-6 sm:px-12 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ Chapter One ◆</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment leading-tight mb-6">High hopes.</h2>
            <p className="font-body text-base text-parchment/70 leading-relaxed">
              AJ packed her life into a car and drove to Los Angeles with the kind of optimism only the
              uninitiated carry. New city, new start, new story. She was smart, capable, and certain
              she'd recognize a red flag if she saw one.
            </p>
          </div>

          <div>
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ Chapter Two ◆</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment leading-tight mb-6">Not one. Two.</h2>
            <p className="font-body text-base text-parchment/70 leading-relaxed">
              The first one came wrapped in charm. The second in sympathy. Two narcissists, two
              different playbooks, the same ending. She should have seen the signs — and she's smart
              enough to know it. That's the part that stings the most.
            </p>
          </div>

          <div>
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ Chapter Three ◆</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment leading-tight mb-6">
              They were packaged differently.
            </h2>
            <p className="font-body text-base text-parchment/70 leading-relaxed">
              The red flags weren't missing. They were redesigned. A compliment that doubled as a test.
              An apology that was really a boundary. A kindness that came with a leash. By the time she
              recognized the pattern, she was already wearing the scars.
            </p>
          </div>

          {/* Pull quote */}
          <div className="border-l-2 border-primary pl-6 py-4 my-16">
            <Quote className="w-6 h-6 text-primary mb-3" />
            <p className="font-display italic text-2xl sm:text-3xl text-parchment leading-snug">
              "I didn't miss the red flags. I just didn't know they came in this season's packaging."
            </p>
            <p className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/40 mt-4">— AJ, Founder</p>
          </div>

          <div>
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ The Pivot ◆</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment leading-tight mb-6">
              From warnings to wearables.
            </h2>
            <p className="font-body text-base text-parchment/70 leading-relaxed">
              So she wove them together. All 36 red flags — every sign she lived through — stitched into
              a single scarf. Not a warning. A badge. Red Flags &amp; Receipts is what happens when a
              smart woman stops hiding the evidence and starts wearing it out.
            </p>
          </div>
        </div>
      </section>

      {/* Scarf weave accent */}
      <section className="px-6 sm:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <ScarfWeave />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-12 py-20 sm:py-28 text-center">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-parchment leading-tight mb-6">
          Got your own red flags?
          <br />
          <span className="text-primary italic">Let's talk.</span>
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300"
        >
          Contact AJ <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}