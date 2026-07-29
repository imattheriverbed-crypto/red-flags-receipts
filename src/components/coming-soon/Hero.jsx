import React from 'react';
import { ArrowDown } from 'lucide-react';
import CountdownClock from './CountdownClock';

const HERO_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/4841f04e4_light-scarf-red-flag-lightweight-fashion-scarf.jpg';
const BANNER_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a52424196_Screenshot2026-07-29133450.png';

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
      <div className="relative z-30 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 min-h-screen px-6 sm:px-12 pb-16 pt-32 opacity-100">
        <div className="max-w-2xl opacity-100 rounded-xl px-0 lg:px-8">
          <div className="inline-block mb-6">
            <span className="uppercase tracking-[0.3em] text-primary border border-primary/50 px-4 py-2 bg-ink/60 backdrop-blur-sm opacity-100 text-sm sm:text-sm text-center [font-family:'Bungee',_system-ui]">THE AUGUST 01 COLLECTION

            </span>
          </div>

          <h1 className="font-display font-black leading-[0.95] mb-6 max-w-4xl text-2xl sm:text-2xl lg:text-2xl text-[hsl(var(--foreground))]">



          </h1>

          <p className="text-base sm:text-lg text-parchment/70 max-w-xl leading-relaxed mb-10 [font-family:'Montserrat',_sans-serif]">Every excuse. 
Every warning. 
Every suspicious little sentence....
woven into the signature print that started it all.
</p>

          <div className="mb-12">
            <CountdownClock />
          </div>

          <button onClick={onCtaClick} className="group inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300">

            Get the Discount
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Home of the Red Flags Collection banner */}
        <div className="hidden lg:block w-[400px] xl:w-[460px] flex-shrink-0 mb-16">
          <img src={BANNER_IMG} alt="Home of the Red Flags Collection" className="w-full border border-primary/30 object-cover" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-30 hidden sm:flex flex-col items-center gap-2">
        <span className="font-mono-flag text-[9px] uppercase tracking-[0.3em] text-parchment/40 [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}