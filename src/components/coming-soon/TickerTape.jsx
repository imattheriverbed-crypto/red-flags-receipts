import React from 'react';

const PHRASE = 'LOOK AT THIS SCARF MADE OF ALL THE RED FLAGS YOU GAVE ME';

export default function TickerTape({ variant = 'dark' }) {
  const bg = variant === 'red' ? 'bg-primary text-ink' : 'bg-ink text-parchment';
  const items = Array.from({ length: 6 });

  return (
    <div className={`relative overflow-hidden ticker-fade ${bg} border-y border-primary/30 py-3 select-none`}>
      <div className="ticker-track flex whitespace-nowrap">
        {[...items, ...items].map((_, i) => (
          <span key={i} className="font-mono-flag text-xs sm:text-sm uppercase tracking-[0.3em] flex items-center gap-6 px-6">
            {PHRASE}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}