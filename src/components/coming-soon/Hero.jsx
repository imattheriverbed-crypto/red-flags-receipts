import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flag, ReceiptText, Globe2, LockKeyhole, ArrowRight } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a8bd5e8c0_generated_image.png';

export default function Hero() {
  const navigate = useNavigate();

  const features = [
    { icon: Flag, title: 'Signature Designs', copy: 'Bold pieces that speak.' },
    { icon: ReceiptText, title: 'Real Receipts', copy: 'Inspired by the truth.' },
    { icon: Globe2, title: 'Worldwide Shipping', copy: 'We ship everywhere.' },
    { icon: LockKeyhole, title: 'Secure Checkout', copy: 'Safe, simple, secure.' },
  ];

  return (
    <section className="bg-[#f3f0ec] text-black pt-[118px] md:pt-[132px]">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr] min-h-[680px] lg:min-h-[760px]">
        <div className="flex items-center px-7 sm:px-12 lg:px-20 xl:px-24 py-16 lg:py-20">
          <div className="max-w-[610px]">
            <p className="font-mono-flag text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-primary mb-8">
              Red Flags &amp; Receipts™
            </p>

            <h1 className="font-display font-black uppercase text-[clamp(4rem,8vw,8.5rem)] leading-[0.78] tracking-[-0.055em] mb-8">
              <span className="block">We Saw</span>
              <span className="block">The Signs.</span>
              <span className="block text-primary mt-3">We Made</span>
              <span className="block text-primary">An Outfit.</span>
            </h1>

            <div className="w-14 h-[3px] bg-black mb-6" />

            <p className="font-body text-lg sm:text-xl mb-8">
              Wear the warning. Keep the receipt.
            </p>

            <button
              onClick={() => navigate('/shop')}
              className="group inline-flex items-center gap-6 bg-primary text-white px-8 py-4 font-mono-flag text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-black transition-colors"
            >
              Shop The Drop
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-full overflow-hidden bg-[#ddd7d0]">
          <img
            src={HERO_IMAGE}
            alt="Red Flags & Receipts editorial fashion campaign"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3f0ec]/25 via-transparent to-transparent lg:block hidden" />
          <div className="absolute right-8 sm:right-12 bottom-10 bg-white/85 backdrop-blur-sm px-5 py-4 rotate-[-2deg] shadow-sm max-w-[190px]">
            <p className="font-display italic text-xl leading-tight">Not my fault—</p>
            <p className="font-display italic text-xl leading-tight"><span className="text-primary underline">I saw</span> the signs.</p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
        {features.map(({ icon: Icon, title, copy }, index) => (
          <div
            key={title}
            className={`flex items-center gap-4 px-5 sm:px-8 py-6 lg:py-7 ${index % 2 === 0 ? 'border-r border-white/15' : ''} lg:border-r lg:last:border-r-0 border-b lg:border-b-0 border-white/15`}
          >
            <Icon className="w-7 h-7 text-primary shrink-0" strokeWidth={1.7} />
            <div>
              <p className="font-mono-flag text-[10px] sm:text-[11px] uppercase tracking-[0.17em] font-bold">{title}</p>
              <p className="font-body text-xs sm:text-sm text-white/65 mt-1">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
