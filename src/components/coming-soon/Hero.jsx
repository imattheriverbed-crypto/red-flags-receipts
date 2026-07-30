import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownClock from './CountdownClock';

const SLIDES = [
  {
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a8bd5e8c0_generated_image.png',
    headline: (<>WEAR THE <span className="text-primary">WARNING</span>.</>),
  },
  {
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a43b1a331_generated_image.png',
    headline: (<>NOT FOR <span className="text-primary">EVERYONE</span>. MADE FOR YOU.</>),
  },
  {
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/189eb8221_generated_image.png',
    headline: (<>SURVIVED <span className="text-primary">IT</span>. WEAR IT.</>),
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink grain-overlay">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <img src={s.img} alt="" className="w-full h-full object-cover object-[50%_25%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center min-h-screen px-6 sm:px-12 py-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/80">First Drop • Aug 01</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-parchment leading-[0.95] mb-6">
            {SLIDES[index].headline}
          </h1>

          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-parchment/70 max-w-md mb-3">
            Luxury streetwear inspired by the red flags we survived.
          </p>
          <p className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 mb-10">
            Scarves • Apparel • Journals • Limited Drops
          </p>

          <div className="mb-10">
            <CountdownClock variant="boxed" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.2em] bg-primary text-parchment px-8 py-3.5 hover:bg-parchment hover:text-ink transition-colors duration-300"
            >
              Shop The Drop
            </button>
            <button
              onClick={() => navigate('/about')}
              className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.2em] bg-transparent border border-parchment/40 text-parchment px-8 py-3.5 hover:bg-parchment hover:text-ink hover:border-parchment transition-colors duration-300"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 transition-all duration-300 ${i === index ? 'w-10 bg-primary' : 'w-5 bg-parchment/30 hover:bg-parchment/60'}`}
          />
        ))}
      </div>
    </section>
  );
}