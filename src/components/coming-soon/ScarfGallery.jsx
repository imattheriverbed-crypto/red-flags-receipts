import React from 'react';
import { Image } from '@/components/ui/image';

const GALLERY_ITEMS = [
  { tag: 'Signature Scarf', title: 'Red Flags Lightweight Scarf', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351' },
  { tag: 'Checker Scarf', title: 'Red & Black Checker Scarf', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/13460490385159931143_2048.jpg?v=1785329453' },
  { tag: 'Stationery', title: 'The Receipts Spiral Journal', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15941908692174830345_2048.jpg?v=1785328444' },
  { tag: 'Bottoms', title: 'Signature Pencil Skirt', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/20260729123551-1f18b4a0-862a-6112-9f0e-eedfab1cfadf.png?v=1785328776' },
  { tag: 'Tops', title: '"Match My Outfit" Baby Tee', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349' },
  { tag: 'Bottoms', title: 'Red Flag Pattern Pencil Skirt', img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15244353897538709014_2048.jpg?v=1785329183' },
  { tag: 'Tops', title: 'Red Flag Graphic Tee — Black', img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/7c037bca0_generated_image.png' },
  { tag: 'Tops', title: 'Oversized Charcoal Flag Tee', img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f949fcb5b_generated_image.png' },
  { tag: 'Tops', title: 'Warning Stripe White Tee', img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/b0c954876_generated_image.png' },
];

export default function ScarfGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20 sm:py-24">
      <div className="text-center mb-12">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary block mb-4">◆ The Archive ◆</span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-parchment uppercase mb-4">
          Scarves & Accessories
        </h2>
        <p className="font-body text-sm uppercase tracking-[0.22em] text-parchment/55 max-w-xl mx-auto">
          A preview of the pieces dropping across the season. Prices revealed at launch.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} className="group flex flex-col bg-card border border-primary/15 hover:border-primary transition-colors">
            <div className="relative aspect-[4/5] w-full bg-ink overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fittingType="fit"
                className="w-full h-full group-hover:opacity-95 transition-opacity"
              />
              <span className="absolute top-3 left-3 font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment bg-ink/70 border border-primary/40 px-2.5 py-1">
                {item.tag}
              </span>
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="font-display text-sm sm:text-base text-parchment leading-tight mb-4 [-webkit-text-stroke:0.3px_hsl(var(--parchment))]">{item.title}</h3>
              <div className="mt-auto pt-3 border-t border-primary/15 flex items-center justify-between">
                <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/40 [-webkit-text-stroke:0.3px_hsl(var(--parchment))]">
                  Price TBD
                </span>
                <span className="font-mono-flag text-sm text-primary/70 [-webkit-text-stroke:0.3px_hsl(var(--parchment))]">$00.00</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}