import React from 'react';
import { ShoppingBag } from 'lucide-react';

const MODEL_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/5c8830d8c_generated_image.png';

export default function HeroBanner({ onCtaClick }) {
  return (
    <div className="hidden lg:flex relative w-[400px] xl:w-[440px] flex-shrink-0 mb-16 overflow-hidden border border-primary/30 bg-ink">
      {/* Model photo */}
      <div className="relative w-[45%]">
        <img src={MODEL_IMG} alt="Model wearing the Red Flags collection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink" />
      </div>

      {/* Text panel */}
      <div className="relative w-[55%] flex flex-col justify-center px-6 py-8">
        <span className="font-mono-flag text-[9px] uppercase tracking-[0.3em] text-parchment bg-primary px-3 py-1 self-start mb-6">
          Home
        </span>
        <h3 className="font-display font-black text-2xl xl:text-3xl text-parchment leading-[1.05] mb-3">
          HOME OF THE<br />
          <span className="text-primary">RED FLAGS</span><br />
          COLLECTION
        </h3>
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-parchment/60 leading-relaxed mb-6">
          Bold designs.<br />Real stories.<br />Made for people who see the signs.
        </p>
        <button
          onClick={onCtaClick}
          className="inline-flex items-center gap-2 bg-primary text-parchment font-mono-flag text-[10px] uppercase tracking-[0.2em] px-5 py-3 self-start hover:bg-parchment hover:text-ink transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Shop Now
        </button>
      </div>
    </div>
  );
}