import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const N = 22; // vertical slices
const FLAG_W = 760;
const FLAG_H = 440;
const SLICE = FLAG_W / N;

export default function FlagIntro() {
  const navigate = useNavigate();
  const goHome = () => navigate('/home');

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-6 py-24">
      {/* faint vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(180,0,0,0.14),transparent_62%)] pointer-events-none" />

      {/* Flag */}
      <div className="relative flex items-start justify-center origin-bottom scale-[0.6] sm:scale-90 lg:scale-100">
        {/* Pole */}
        <div className="relative shrink-0" style={{ width: 12, height: FLAG_H + 170 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] via-[#d0d0d0] to-[#4a4a4a] rounded-full shadow-[0_0_24px_rgba(0,0,0,0.7)]" />
          <div className="absolute -top-4 -left-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#e8e8e8] to-[#7a7a7a] shadow-md" />
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
                  'repeating-linear-gradient(90deg, #a00000, #c40000 6%, #660000 12%, #9a0000 18%, #3d0000 24%, #b00000 30%)',
                backgroundSize: `${FLAG_W}px ${FLAG_H}px`,
                backgroundPositionX: `${-i * SLICE}px`,
                backgroundRepeat: 'no-repeat',
                animationDelay: `${-(i / N) * 2.4}s`,
                boxShadow: 'inset 0 0 22px rgba(0,0,0,0.4)',
              }}
            />
          ))}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/55 to-transparent" />
        </div>
      </div>

      {/* Prompt */}
      <div className="relative z-10 text-center max-w-3xl mt-12 sm:mt-16">
        <p className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#ff0000] mb-5">
          A Question For You...
        </p>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-[2.8rem] leading-snug text-[#e0e0e0]">
          Have you ever ignored something... because you wanted the story to be{' '}
          <span className="italic text-[#ff0000]">different</span>?
        </h1>

        <button
          onClick={goHome}
          className="group mt-10 inline-flex items-center gap-3 border border-[#ff0000] text-[#ff0000] font-mono-flag text-xs uppercase tracking-[0.3em] px-8 py-3.5 hover:bg-[#ff0000] hover:text-black transition-colors duration-300"
        >
          Continue
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Scroll chevron */}
      <button
        onClick={goHome}
        aria-label="Enter the site"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white animate-bounce"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </section>
  );
}