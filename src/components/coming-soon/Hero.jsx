import React from 'react';
import { ArrowDown, Bell } from 'lucide-react';
import CountdownClock from './CountdownClock';

const MODEL_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a8bd5e8c0_generated_image.png';

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink grain-overlay">
      {/* Background model image */}
      <div className="absolute inset-0">
        <img src={MODEL_IMG} alt="Women wearing the Red Flags collection" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center min-h-screen px-6 sm:px-12 py-24">
        <div className="max-w-3xl">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment bg-primary px-3 py-1 mb-6 inline-block">
            Home
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-parchment leading-[0.95] mb-6">
            HOME OF THE<br />
            <span className="text-primary">RED FLAGS</span><br />
            COLLECTION
          </h1>

          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-parchment/70 max-w-md leading-relaxed mb-10">
            Bold designs. Real stories.<br />
            Made for people who see the signs.
          </p>

          {/* Countdown to the first drop, overlaid on the photo */}
          <div className="mb-10 bg-ink/40 backdrop-blur-sm px-6 py-5 inline-block border border-primary/20">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/60 block mb-3">
              ◆ First Drop · Aug 01 ◆
            </span>
            <CountdownClock variant="inline" />
          </div>

          <div>
            <button
              onClick={onCtaClick}
              className="group inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors duration-300"
            >
              <Bell className="w-4 h-4" />
              Get Notified
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-30 hidden sm:flex flex-col items-center gap-2">
        <span className="font-mono-flag text-[9px] uppercase tracking-[0.3em] text-parchment/40 [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        <ArrowDown className="w-3 h-3 text-parchment/30 animate-bounce" />
      </div>
    </section>
  );
}