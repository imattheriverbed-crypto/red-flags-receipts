import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    excerpt: 'How the signature print became a wearable archive of every red flag we lived through.',
  },
  {
    date: 'Field Note 03',
    title: 'Narc-Free, Always',
    excerpt: 'The pivot that turned the wreckage into a wardrobe. A celebration, not a deterrent.',
  },
];

export default function JournalPreview() {
  return (
    <section className="bg-ink py-20 sm:py-28 px-6 sm:px-12 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ The Journal ◆</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-parchment leading-tight mb-4">
            Receipts, Red Flags<br /><span className="text-primary italic">&amp; Comebacks</span>
          </h2>
          <p className="font-body text-sm text-parchment/50 max-w-md mx-auto">
            The stories behind every warning. Written by the survivors who wore them out.
          </p>
        </div>

        {/* Featured entry */}
        <Link to="/journal" className="group block grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
          {ENTRIES.map((e) => (
            <Link key={e.title} to="/journal" className="group border-t border-primary/20 pt-6">
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-3 block">{e.date}</span>
              <h4 className="font-display text-xl sm:text-2xl text-parchment leading-tight mb-3 group-hover:text-primary transition-colors">{e.title}</h4>
              <p className="font-body text-sm text-parchment/50 leading-relaxed">{e.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/journal"
            className="inline-flex items-center gap-3 font-mono-flag text-[11px] uppercase tracking-[0.25em] bg-transparent border border-parchment/40 text-parchment px-8 py-3.5 hover:bg-primary hover:border-primary hover:text-parchment transition-colors duration-300"
          >
            Enter The Journal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}