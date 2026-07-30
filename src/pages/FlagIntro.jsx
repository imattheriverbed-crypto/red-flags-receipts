import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function FlagIntro() {
  const navigate = useNavigate();
  const goHome = () => navigate('/home');

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-6 py-24">
      {/* faint vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(180,0,0,0.14),transparent_62%)] pointer-events-none" />

      {/* Flag — looping cloth animation, pushed left so the pole sits off-frame */}
      <video
        src="https://media.base44.com/videos/public/6a5a113aa6cf7e3091bf0eec/658df0297_Flag_Loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-10 h-full w-full object-cover mix-blend-screen"
      />

      {/* Prompt — overlaid in front of the flag */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <p className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#ff0000] mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          A Question For You...
        </p>
        <h1 className="font-display text-2xl sm:text-4xl lg:text-[2.8rem] leading-snug text-[#e0e0e0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Have you ever ignored something... because you wanted the story to be{' '}
          <span className="italic text-[#ff0000]">different</span>?
        </h1>

        <button
          onClick={goHome}
          className="group mt-10 inline-flex items-center gap-3 border border-white text-white font-mono-flag text-xs uppercase tracking-[0.3em] px-8 py-3.5 hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm bg-black/30"
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