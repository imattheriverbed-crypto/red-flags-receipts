import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import { Image } from '@/components/ui/image';

const FEATURED = {
  img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/ffb611f5a_generated_image.png',
  date: 'Field Note 01',
  title: 'The Receipts We Kept',
  excerpt: 'Every text you didn’t answer, every promise that expired, every apology that came with conditions. We kept them all — not as evidence against you, but as proof we survived. The journal opens with the receipts.',
  tag: 'Founder’s Letter',
};

const ENTRIES = [
  {
    date: 'Field Note 02',
    title: 'Thirty-Six Warnings, One Scarf',
    excerpt: 'How the signature print became a wearable archive of every red flag we lived through — woven, not warned.',
  },
  {
    date: 'Field Note 03',
    title: 'Narc-Free, Always',
    excerpt: 'The pivot that turned the wreckage into a wardrobe. A celebration, not a deterrent.',
  },
  {
    date: 'Field Note 04',
    title: 'The Drop Schedule',
    excerpt: 'Why we release little by little — and why the next warning is always already on the loom.',
  },
];

export default function Journal() {
  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <header className="relative pt-40 pb-20 px-6 sm:px-12 text-center overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ The Journal ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment leading-[0.95] mb-6">
            Receipts, Red Flags<br /><span className="text-primary italic">&amp; Comebacks</span>
          </h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/50">
            The stories behind every warning
          </p>
        </div>
      </header>

      <TickerTape variant="red" />

      {/* Featured entry */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-24">
        <Link to="/journal" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div className="relative aspect-[4/3] w-full bg-card overflow-hidden border border-primary/15">
            <Image src={FEATURED.img} alt={FEATURED.title} fittingType="fill" className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{FEATURED.tag} · {FEATURED.date}</span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-parchment leading-tight mb-5 group-hover:text-primary transition-colors">
              {FEATURED.title}
            </h3>
            <p className="font-body text-sm sm:text-base text-parchment/60 leading-relaxed mb-8 max-w-lg">
              {FEATURED.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 font-mono-flag text-[11px] uppercase tracking-[0.25em] text-parchment group-hover:text-primary transition-colors">
              Read The Entry <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* Secondary entries */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-primary/15 pt-12">
          {ENTRIES.map((e) => (
            <Link key={e.title} to="/journal" className="group border-t border-primary/20 pt-6">
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-3 block">{e.date}</span>
              <h4 className="font-display text-xl sm:text-2xl text-parchment leading-tight mb-3 group-hover:text-primary transition-colors">{e.title}</h4>
              <p className="font-body text-sm text-parchment/50 leading-relaxed">{e.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-b border-primary/15 bg-card/40 py-16 px-6 text-center">
        <p className="font-display italic text-xl sm:text-2xl text-parchment/80 max-w-2xl mx-auto leading-snug mb-8">
          First entries publish with the drop. Join the list to read before anyone else.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 font-mono-flag text-[11px] uppercase tracking-[0.25em] bg-primary text-parchment px-8 py-3.5 hover:bg-parchment hover:text-ink transition-colors duration-300"
        >
          Join The Waitlist <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}