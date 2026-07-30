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

      {/* Flag — looping cloth animation */}
      <video
        src="https://media.base44.com/videos/public/6a5a113aa6cf7e3091bf0eec/658df0297_Flag_Loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="relative z-10 w-full max-w-5xl h-auto mix-blend-screen"
      />


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