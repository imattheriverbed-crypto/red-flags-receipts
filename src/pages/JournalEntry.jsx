import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import { Image } from '@/components/ui/image';
import { JOURNAL_ENTRIES } from '@/data/journalEntries';

export default function JournalEntry() {
  const { slug } = useParams();
  const entry = JOURNAL_ENTRIES.find((e) => e.slug === slug);
  const index = JOURNAL_ENTRIES.findIndex((e) => e.slug === slug);
  const next = JOURNAL_ENTRIES[(index + 1) % JOURNAL_ENTRIES.length];

  if (!entry) {
    return (
      <div className="dark bg-ink text-parchment min-h-screen">
        <SiteNav />
        <div className="max-w-2xl mx-auto px-6 py-40 text-center">
          <h1 className="font-display text-4xl text-parchment mb-6">Entry not found</h1>
          <Link to="/journal" className="font-mono-flag text-[11px] uppercase tracking-[0.25em] text-primary hover:underline">
            ← Back to The Journal
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      {/* Article header — minimal, photography-first */}
      <header className="pt-40 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-parchment/50 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> The Journal
          </Link>

          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-5 block">
            {entry.tag} · {entry.date}
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-parchment leading-[1.05] mb-6">
            {entry.title}
          </h1>
          <p className="font-body text-base sm:text-lg text-parchment/55 leading-relaxed max-w-2xl">
            {entry.excerpt}
          </p>
        </div>
      </header>

      {/* Hero photo — full-bleed within container, lets the image pop */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="aspect-[3/2] w-full overflow-hidden bg-card border border-primary/10">
          <Image src={entry.hero} alt={entry.title} fittingType="fill" className="w-full h-full" />
        </div>
      </div>

      {/* Body — clean minimal prose on light panel for readability */}
      <article className="bg-parchment text-ink py-20 mt-16">
        <div className="max-w-2xl mx-auto px-6">
          {entry.body.map((block, i) => {
            if (typeof block === 'string') {
              return (
                <p key={i} className="font-body text-base sm:text-lg leading-relaxed text-ink/80 mb-7">
                  {block}
                </p>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={i}
                  className="my-10 border-l-2 border-primary pl-6 font-display italic text-xl sm:text-2xl text-ink leading-snug"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === 'image') {
              return (
                <figure key={i} className="my-12 -mx-6 sm:mx-0">
                  <div className="aspect-[3/2] w-full overflow-hidden bg-secondary">
                    <Image src={block.src} alt={block.caption || ''} fittingType="fill" className="w-full h-full" />
                  </div>
                  {block.caption && (
                    <figcaption className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-3 text-center">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return null;
          })}

          <div className="mt-14 pt-8 border-t border-ink/10 flex items-center justify-between">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-ink/60 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Entries
            </Link>
            <Link
              to={`/journal/${next.slug}`}
              className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-ink/60 hover:text-primary transition-colors"
            >
              Next: {next.title} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-primary/15 bg-card/40 py-16 px-6 text-center">
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