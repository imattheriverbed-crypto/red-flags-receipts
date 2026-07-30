import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const N = 18; // vertical slices
const FLAG_W = 540;
const FLAG_H = 300;
const SLICE = FLAG_W / N;

export default function FlagHero() {
  const scrollToNext = () => {
    const el = document.getElementById('after-flag');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-6 py-28">
      {/* faint vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,0,0,0.12),transparent_60%)] pointer-events-none" />

      {/* Flag */}
      <div className="relative flex items-start justify-center origin-bottom scale-[0.52] sm:scale-75 lg:scale-100">
        {/* Pole */}
        <div className="relative shrink-0" style={{ width: 10, height: FLAG_H + 120 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a5a5a] via-[#c8c8c8] to-[#5a5a5a] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)]" />
          <div className="absolute -top-3 -left-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#e0e0e0] to-[#888] shadow-md" />
        </div>

        {/* Fabric: vertical slices that wave */}
        <div className="relative flag-sway" style={{ width: FLAG_W, height: FLAG_H, perspective: 800 }}>
          {Array.from({ length: N }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 flag-slice"
              style={{
                left: i * SLICE,
                width: SLICE + 1,
                height: '100%',
                backgroundImage:
                  'repeating-linear-gradient(90deg, #a00000, #c20000 7%, #6a0000 14%, #9a0000 21%, #400000 28%, #b00000 35%)',
                backgroundSize: `${FLAG_W}px ${FLAG_H}px`,
                backgroundPositionX: `${-i * SLICE}px`,
                backgroundRepeat: 'no-repeat',
                animationDelay: `${-(i / N) * 2.4}s`,
                boxShadow: 'inset 0 0 18px rgba(0,0,0,0.35)',
              }}
            />
          ))}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      </div>

      {/* Prompt */}
      <div className="relative z-10 text-center max-w-3xl mt-10 sm:mt-14">
        <p className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#ff0000] mb-5">
          A Question For You...
        </p>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-[2.6rem] leading-snug text-[#e0e0e0]">
          Have you ever ignored something... because you wanted the story to be{' '}
          <span className="italic text-[#ff0000]">different</span>?
        </h1>

        <button
          onClick={scrollToNext}
          className="group mt-10 inline-flex items-center gap-3 border border-[#ff0000] text-[#ff0000] font-mono-flag text-xs uppercase tracking-[0.3em] px-8 py-3.5 hover:bg-[#ff0000] hover:text-black transition-colors duration-300"
        >
          Continue
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Scroll chevron */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white animate-bounce"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </section>
  );
}