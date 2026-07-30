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

  // Upcoming card: glass overlay on hover reveals the drop date + product list (not clickable)
  return (
    <div className="group relative block aspect-[3/4] overflow-hidden bg-ink border-2 border-primary/70">
      <img
        src={collection.img}
        alt={collection.name}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

      {/* Status badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className={`font-mono-flag text-[9px] uppercase tracking-[0.2em] px-3 py-1 ${collection.statusStyle}`}>
          {collection.status}
        </span>
      </div>

      {/* Name (fades on hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-display font-black text-2xl text-parchment leading-[0.95] mb-1">
          {collection.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-3 font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/60">
          Hover to reveal the drop
        </div>
      </div>

      {/* Glass hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 bg-ink/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-3">◆ Dropping ◆</span>
        <span className="font-display font-black text-3xl sm:text-4xl text-parchment leading-none mb-2">
          {collection.date}
        </span>
        <h3 className="font-display text-base text-parchment/80 italic mb-5">{collection.name}</h3>
        <ul className="space-y-1.5">
          {(collection.products || []).map((p) => (
            <li key={p} className="font-mono-flag text-[11px] uppercase tracking-[0.15em] text-parchment/85 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary shrink-0" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}