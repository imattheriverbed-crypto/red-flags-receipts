import React from 'react';
import { ArrowDown } from 'lucide-react';
import CountdownClock from './CountdownClock';

const HERO_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/bfd269dd0_download.png';

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink grain-overlay">
      {/* Background model image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Model wearing the red flag signature scarf" className="w-full h-full object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-end min-h-screen px-6 sm:px-12 pb-16 pt-32 bg-[#0f0f0f]">
        <div className="max-w-5xl">
          <div className="inline-block mb-6">
            <span className="font-mono-flag text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary border border-primary/50 px-4 py-2 bg-ink/60 backdrop-blur-sm">
              The August 01 Collection
            </span>
          </div>

          <h1 className="font-display font-black leading-[0.95] mb-6 max-w-4xl text-2xl sm:text-2xl lg:text-2xl text-[hsl(var(--foreground))]">



          </h1>

          <p className="font-body text-parchment/70 max-w-xl leading-relaxed mb-10 text-xl sm:text-xl">Every excuse. Every warning. Every suspicious little sentence—woven into the signature print that started it all.

          </p>

          <div className="mb-12">
            <CountdownClock />
          </div>

          <button
            onClick={onCtaClick}
            className="group inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300">
            
            Get the Discount
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-30 hidden sm:flex flex-col items-center gap-2">
        <span className="font-mono-flag text-[9px] uppercase tracking-[0.3em] text-parchment/40 [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}