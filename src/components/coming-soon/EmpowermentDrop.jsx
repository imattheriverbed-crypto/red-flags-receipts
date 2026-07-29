import React, { useState } from 'react';
import { Crown, Heart, Shield, Sparkles, Shirt, Leaf, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { base44 } from '@/api/base44Client';

const FRONT_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/e04bb928b_generated_image.png';
const BACK_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/0850e2d5e_generated_image.png';
const LIFESTYLE_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/aabf1c720_generated_image.png';

const FEATURES = [
  { icon: Crown, title: 'PREMIUM QUALITY', desc: 'Soft, midweight fleece that feels as good as it looks.' },
  { icon: Heart, title: 'EMPOWERING MESSAGE', desc: "A daily reminder that you're the priority." },
  { icon: Shield, title: 'MADE TO LAST', desc: 'Durable print. Built for your healing era.' },
  { icon: Sparkles, title: 'PERFECT FIT', desc: 'Unisex sizing. Cozy, relaxed, confident.' },
];

const DETAILS = [
  { icon: Shirt, desc: 'Unisex Heavy Blend™ Crewneck / 50% cotton / 50% polyester' },
  { icon: Leaf, desc: 'Soft, midweight fleece / 8.0 oz / yd² (271 g/m²)' },
  { icon: Shirt, desc: 'Relaxed fit / True to size' },
  { icon: Star, desc: 'High quality DTG print / Made to last' },
  { icon: Shirt, desc: 'Ribbed knit collar / Cuffs & waistband' },
  { icon: Heart, desc: 'Designed for your healing era' },
];

const COLORS = [
  { name: 'Black', hex: '#0A0A0A' },
  { name: 'Sand', hex: '#D8C3A5' },
  { name: 'Charcoal', hex: '#3A3A3A' },
  { name: 'Maroon', hex: '#7A1F2B' },
];

const PANELS = [
  { img: LIFESTYLE_IMG, caption: 'MY LIFE. MY RULES. ♡' },
  { img: BACK_IMG, caption: 'BOUNDARIES ARE POWER. ♡' },
  { img: FRONT_IMG, caption: 'I CHOOSE ME. ♡' },
];

function NotifyButton() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNotify = async () => {
    if (done) return;
    setLoading(true);
    try {
      await base44.entities.WaitlistSignup.create({
        source: 'ceo-of-me',
        contact_method: 'email',
        interested_traits: ['CEO OF ME'],
      });
    } catch (e) { /* best-effort */ }
    setDone(true);
    setLoading(false);
  };

  return (
    <button
      onClick={handleNotify}
      disabled={loading || done}
      className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-primary to-primary/70 text-parchment font-mono-flag text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-md hover:from-primary/90 hover:to-primary/60 transition-colors disabled:opacity-60"
    >
      {loading ? 'Sending...' : done ? '✓ You\'re Notified' : 'Shop the Collection'}
      {!done && !loading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
    </button>
  );
}

export default function EmpowermentDrop() {
  return (
    <section className="relative bg-ink text-parchment py-20 sm:py-28 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section marker */}
        <div className="text-center mb-12">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ Empowerment Drop #1 ◆</span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment leading-none">
            CEO OF <span className="text-primary">ME</span>
          </h2>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* LEFT — hero text + features + boundary box */}
          <div className="lg:col-span-4 order-1">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.25em] text-parchment/50 block mb-4">#1 — CEO OF ME</span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-parchment leading-none mb-4 flex items-center gap-3">
              <Crown className="w-8 h-8 text-primary" />
              CEO OF ME
            </h3>
            <p className="font-body text-base text-primary italic mb-4">I hired me. I trust me. I choose me.</p>
            <p className="font-body text-sm text-parchment/70 mb-8 max-w-sm">
              For the one who left, leveled up, and built a life they love.
            </p>

            <ul className="space-y-4 mb-8">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-9 h-9 border border-primary/40 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <span className="font-mono-flag text-[10px] uppercase tracking-[0.15em] text-parchment block">{f.title}</span>
                    <span className="font-body text-xs text-parchment/55">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-2 border-primary/40 p-5 max-w-sm">
              <p className="font-display text-sm text-parchment leading-snug italic">
                I'M NOT PERFECT. BUT MY BOUNDARIES ARE. <span className="text-primary not-italic font-black">THAT'S GROWTH.</span>
              </p>
            </div>

            <div className="mt-8">
              <NotifyButton />
            </div>
          </div>

          {/* CENTER — main product image with red glow */}
          <div className="lg:col-span-4 order-2 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 -z-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-primary/30 blur-3xl" />
              </div>
              <div className="relative">
                <Image
                  src={FRONT_IMG}
                  alt="CEO OF ME sweatshirt front"
                  fittingType="fit"
                  className="w-full aspect-[4/5]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — details sidebar */}
          <div className="lg:col-span-4 order-3 space-y-6">
            {/* Front detail */}
            <div>
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary block mb-2">FRONT DETAIL</span>
              <div className="border border-parchment/15 overflow-hidden">
                <Image src={FRONT_IMG} alt="Front detail" fittingType="fill" className="w-full aspect-[16/10]" />
              </div>
            </div>

            {/* Back design */}
            <div>
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary block mb-2">BACK DESIGN</span>
              <div className="border border-parchment/15 overflow-hidden">
                <Image src={BACK_IMG} alt="Back design" fittingType="fill" className="w-full aspect-[16/10]" />
              </div>
              <p className="font-body text-[11px] text-parchment/50 mt-2 italic">
                PROMOTED MYSELF. RESPECT MY TIME. PROTECT MY PEACE. <span className="text-primary">THAT'S MY POLICY.</span> ♡
              </p>
            </div>

            {/* Color options */}
            <div>
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary block mb-3">COLOR OPTIONS</span>
              <div className="flex gap-3">
                {COLORS.map((c, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span
                      className="w-8 h-8 rounded-full border-2 border-parchment/30 block"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-mono-flag text-[8px] uppercase tracking-wider text-parchment/50">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product details grid */}
            <div>
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary block mb-3">PRODUCT DETAILS</span>
              <div className="grid grid-cols-1 gap-3">
                {DETAILS.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <d.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-[11px] text-parchment/60 leading-snug">{d.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer lifestyle panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          {PANELS.map((p, i) => (
            <div key={i} className="relative group overflow-hidden border border-parchment/10">
              <Image src={p.img} alt={p.caption} fittingType="fill" className="w-full aspect-[3/4]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="font-display text-sm sm:text-base text-parchment">{p.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}