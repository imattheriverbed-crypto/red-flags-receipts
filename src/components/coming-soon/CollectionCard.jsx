import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CollectionCard({ collection, large = false, to = '/shop' }) {
  const upcoming = collection.status === 'Upcoming';

  // Featured / available-now card: no flip
  if (!upcoming) {
    return (
      <Link
        to="/shop"
        className={`group relative block overflow-hidden bg-ink border border-primary/20 ${large ? 'aspect-[16/10]' : 'aspect-[3/4]'}`}
      >
        <img
          src={collection.img}
          alt={collection.name}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${large ? 'object-cover object-[50%_30%]' : 'object-cover object-top'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`font-mono-flag text-[9px] uppercase tracking-[0.2em] px-3 py-1 ${collection.statusStyle}`}>
            {collection.status}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary">{collection.date}</span>
          </div>
          <h3 className={`font-display font-black text-parchment leading-[0.95] mb-1 ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
            {collection.name}
          </h3>
          {large && (
            <p className="font-body text-sm text-parchment/70 max-w-md leading-relaxed">{collection.desc}</p>
          )}
          <div className="flex items-center gap-1.5 mt-3 font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/60 group-hover:text-primary transition-colors">
            Preview the drop <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    );
  }

  // Upcoming card: flip on hover to reveal the drop date
  return (
    <div className="[perspective:1400px]">
      <Link
        to={to}
        className="group relative block aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-700 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden bg-ink border border-primary/20 [backface-visibility:hidden]">
          <img
            src={collection.img}
            alt={collection.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`font-mono-flag text-[9px] uppercase tracking-[0.2em] px-3 py-1 ${collection.statusStyle}`}>
              {collection.status}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display font-black text-2xl text-parchment leading-[0.95] mb-1">
              {collection.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-3 font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/60">
              Hover to reveal drop date <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-ink border border-primary [transform:rotateY(180deg)] [backface-visibility:hidden] grain-overlay flex flex-col items-center justify-center p-6 text-center">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-5">◆ Dropping ◆</span>
          <span className="font-display font-black text-4xl sm:text-5xl text-parchment leading-none mb-3">
            {collection.date}
          </span>
          <h3 className="font-display text-lg text-parchment/80 italic mb-6">{collection.name}</h3>
          <div className="flex items-center gap-1.5 font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/70 group-hover:text-primary transition-colors">
            Shop collection <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}