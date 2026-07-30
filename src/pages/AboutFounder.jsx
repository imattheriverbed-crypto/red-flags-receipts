import React from 'react';
import { Crown, Heart, Flag, Check, Sparkles, Shirt, Quote } from 'lucide-react';
import { Image } from '@/components/ui/image';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';

const FOUNDER_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/fe63bd653_generated_image.png';

const ICON_GRID = [
  { icon: Sparkles, title: 'IT STARTED WITH A SCARF.', body: 'A reminder that the signs are usually there before the heartbreak.' },
  { icon: Shirt, title: 'THEN IT BECAME MORE.', body: 'Jackets. Journals. Blankets. Gifts.' },
  { icon: Heart, title: 'THEN IT BECAME US.', body: 'A community of people choosing themselves every day.' },
  { icon: Flag, title: "NOW IT'S A MOVEMENT.", body: 'To trust yourself. Set boundaries. Live free. Wear the lesson.' },
];

const CHECKLIST = [
  'ignored a feeling you knew was right',
  'mistook control for love',
  "shrank yourself to fit someone else's comfort",
  'apologized for setting a boundary',
  "forgot your worth because someone else never saw it",
];

const FOOTER_COLS = [
  { icon: Crown, title: 'WEAR THE LESSON.', body: "IT'S NOT JUST WHAT YOU WEAR. IT'S WHAT YOU KNOW." },
  { icon: Heart, title: 'TRUST YOURSELF.', body: 'YOUR INTUITION IS YOUR GREATEST SUPERPOWER.' },
  { icon: Flag, title: 'KEEP MOVING FORWARD.', body: 'YOUR PAST TAUGHT YOU. YOUR FUTURE IS YOURS TO DESIGN.' },
];

function IconColumn({ icon: Icon, title, body }) {
  return (
    <div className="text-center sm:text-left">
      <div className="flex justify-center sm:justify-start mb-4">
        <Icon className="w-9 h-9 text-burgundy" strokeWidth={1.25} />
      </div>
      <h4 className="font-mono-flag text-[11px] uppercase tracking-[0.22em] text-ink mb-2">{title}</h4>
      <p className="font-body text-sm text-ink/60 leading-relaxed">{body}</p>
    </div>
  );
}

export default function AboutFounder() {
  return (
    <div className="bg-cream text-ink min-h-screen">
      <SiteNav />

      <div className="lg:flex lg:items-stretch">
        {/* Left sidebar — black */}
        <aside className="relative bg-ink text-parchment lg:sticky lg:top-0 lg:h-screen lg:w-[42%] overflow-hidden flex flex-col">
          <Image
            src={FOUNDER_IMG}
            alt="Amy Hunter, founder"
            fittingType="fill"
            focalPointY={0.4}
            className="absolute inset-0 w-full h-full opacity-70 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/40 via-transparent to-ink/70" />

          <div className="relative z-10 flex flex-col h-full p-8 sm:p-12 lg:px-12 lg:py-24">
            <Quote className="w-10 h-10 text-burgundy fill-burgundy mb-6" />
            <h2 className="font-display font-black text-4xl sm:text-5xl leading-[0.95] mb-6">
              I WASN'T BROKEN.
              <br />
              I WAS <span className="text-burgundy text-5xl sm:text-6xl [-webkit-text-stroke:0.3px_hsl(var(--parchment))]">EDUCATED.</span>
            </h2>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-parchment/70 max-w-xs leading-relaxed mb-12">
              RED FLAGS EXISTS SO YOUR EDUCATION DOESN'T HAVE TO COST AS MUCH AS MINE.
            </p>

            <div className="mt-auto">
              <p className="font-script text-5xl sm:text-6xl text-burgundy leading-none">Amy Hunter</p>
              <p className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 mt-3 flex items-center gap-2">
                Founder, Red Flags
                <Heart className="w-3 h-3 text-burgundy fill-burgundy" />
              </p>
            </div>
          </div>
        </aside>

        {/* Right content — cream */}
        <main className="lg:w-[58%] px-8 sm:px-14 lg:px-20 py-20 lg:py-28">
          <div className="mb-12">
            <h3 className="font-mono-flag text-[11px] uppercase tracking-[0.32em] text-ink/70 mb-3">ABOUT THE FOUNDER</h3>
            <div className="w-12 h-[2px] bg-burgundy" />
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl leading-[1.05] mb-8">
            My story isn't the brand. Your healing is the <span className="text-burgundy">purpose.</span>
          </h1>

          <div className="space-y-5 font-body text-base text-ink/75 leading-relaxed max-w-xl mb-10">
            <p>
              I moved to Los Angeles carrying optimism and a suitcase full of plans. What I didn't carry was
              the ability to recognize a red flag when it was dressed up as love. Two relationships, two
              different playbooks, the same ending — and the quiet, stinging truth that I should have seen
              it coming.
            </p>
            <p>
              The red flags weren't missing. They were redesigned — a compliment that doubled as a test, an
              apology that was really a boundary, a kindness that came with a leash. Red Flags &amp; Receipts
              is what happened when I stopped hiding the evidence and started wearing it out. Every scarf,
              every journal, every piece is a lesson stitched into something you can hold.
            </p>
          </div>

          <p className="font-script text-3xl sm:text-4xl text-burgundy leading-tight mb-16">
            I turned my pain into purpose.
          </p>

          {/* Icon grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-16 border-b border-ink/15">
            {ICON_GRID.map((col) => (
              <IconColumn key={col.title} {...col} />
            ))}
          </div>

          {/* Checklist + note */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-ink mb-6">
                THIS BRAND IS FOR YOU IF YOU'VE EVER...
              </h3>
              <ul className="space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-burgundy shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="font-body text-sm text-ink/75 leading-relaxed capitalize">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex lg:items-center">
              <div className="border-l-2 border-burgundy pl-6">
                <p className="font-display italic text-xl sm:text-2xl text-ink/80 leading-snug">
                  You're not alone. You're not too much. And you're not starting over — you're starting with wisdom.
                </p>
                <Heart className="w-5 h-5 text-burgundy fill-burgundy mt-4" />
              </div>
            </div>
          </div>

          {/* Mission box */}
          <div className="relative bg-[#E7DCCB] border border-ink/10 p-8 sm:p-10">
            <span className="inline-block bg-burgundy text-parchment font-mono-flag text-[11px] uppercase tracking-[0.3em] px-4 py-1.5 mb-6">
              THE MISSION.
            </span>
            <p className="font-display text-lg sm:text-2xl text-ink leading-snug">
              To turn painful lessons into powerful reminders. To replace shame with confidence. To prove
              that even the hardest chapters can become the beginning of something meaningful.
            </p>
          </div>
        </main>
      </div>

      {/* Brand footer band */}
      <section className="bg-ink text-parchment py-16 px-8 sm:px-14 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="text-center sm:text-left">
              <col.icon className="w-8 h-8 text-burgundy mb-4 mx-auto sm:mx-0" strokeWidth={1.25} />
              <h4 className="font-mono-flag text-[11px] uppercase tracking-[0.28em] text-parchment mb-3">{col.title}</h4>
              <p className="font-body text-xs text-parchment/55 leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-burgundy text-parchment py-8 px-8 text-center">
        <p className="font-mono-flag text-[11px] uppercase tracking-[0.3em] text-parchment/90 mb-2">
          THANK YOU FOR BEING PART OF THE MOVEMENT.
        </p>
        <p className="font-script text-3xl text-parchment">— Amy</p>
      </div>

      <SiteFooter />
    </div>
  );
}