import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CollectionCard({ collection, large = false }) {
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
          Shop collection <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}