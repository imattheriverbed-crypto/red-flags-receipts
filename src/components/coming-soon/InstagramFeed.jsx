import React from 'react';
import { Crown, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const PHOTOS = [
'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a8bd5e8c0_generated_image.png',
'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/66e1a3d73_generated_image.png',
'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/eed049deb_generated_image.png',
'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/ef6328d93_generated_image.png',
'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/01b702ebe_generated_image.png',
'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/ffb611f5a_generated_image.png'];


export default function InstagramFeed() {
  return (
    <section className="bg-ink sm:py-28 px-6 sm:px-12 border-t border-primary/10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-parchment uppercase tracking-wide mb-3">
            Share The Look On Instagram
          </h2>
          <p className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.25em] text-parchment/50">
            Tag <span className="text-primary">#RedFlagsAndReceipts</span> to get featured
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-2 flex-1">
            {PHOTOS.map((src, i) =>
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-full overflow-hidden bg-card border border-primary/15 group">
              
                <Image src={src} alt="Instagram post" fittingType="fill" className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </a>
            )}
          </div>

          <div className="bg-parchment flex flex-col items-center justify-center text-center px-6 py-8 lg:w-52 gap-4">
            <Crown className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <p className="font-mono-flag text-[11px] sm:text-xs uppercase tracking-[0.15em] text-primary leading-snug">
              Real People.<br />Real Style.<br />Real Stories.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.2em] bg-primary text-parchment px-6 py-3 hover:bg-ink transition-colors duration-300 w-full justify-center"
            >
              View The Feed <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <p className="font-script text-base text-primary/80 leading-snug">
              Thank you for watching.
            </p>
          </div>
        </div>
      </div>
    </section>);

}