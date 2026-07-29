import React, { useState } from 'react';
import { Bell, Check, Crown, PawPrint } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const LANGUAGES_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/6df07dbb7_38bf0d10-9897-4f90-81d3-0ee9b46ac015.png';
const EMPOWERMENT_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/9cac8a48c_Copilot_20260729_101403.png';
const PETS_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/96ea557da_generated_image.png';
const TOTE_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/92a01dd29_Copilot_20260729_125659.png';

const DROPS = [
  { trait: 'CEO OF ME', desc: 'I hired me. I trust me. I choose me. For the one who left, leveled up, and built a life they love.', img: EMPOWERMENT_IMG, drop: 'Aug 01', tone: 'empower' },
  { trait: 'PETS.', desc: 'Ramsey approved. Because they love you unconditionally — outfit your sidekick in apparel that speaks their language.', img: PETS_IMG, drop: 'Aug 08', tone: 'pets' },
  { trait: 'BAGS.', desc: 'Totes, backpacks, purses & luggage. Some lessons become scars. Some become style. Carry the flags with you.', img: TOTE_IMG, drop: 'Aug 15', tone: 'bags', fit: true },
  { trait: '50 LANGUAGES × BLESS YOUR HEART', desc: 'Two ways to close the chapter — "go fuck yourself" in 50 languages, or "bless your heart" with a smile. Distressed screen print. Choose your goodbye.', img: LANGUAGES_IMG, drop: 'Aug 22', fit: true },
];

function DropCard({ drop, index }) {
  const [reminded, setReminded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);

  const handleRemind = async () => {
    if (reminded) return;
    setShowPrompt(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSaving(true);
    try {
      await base44.entities.WaitlistSignup.create({
        email: email,
        contact_method: 'email',
        source: `gallery-drop-${index}`,
        interested_traits: [drop.trait],
      });

      // Best-effort notification email (recipient must be a registered app user)
      try {
        await base44.integrations.Core.SendEmail({
          to: 'longbeachlocal17@gmail.com',
          subject: '🚩 New Drop Reminder Set',
          body: `Someone set a drop reminder!\n\nEmail: ${email}\nTrait: ${drop.trait}\nSource: gallery-drop-${index}`,
        });
      } catch (e) { /* best-effort */ }

      setReminded(true);
      setShowPrompt(false);
    } catch (err) {
      // still mark as reminded for UX
      setReminded(true);
      setShowPrompt(false);
    }
    setSaving(false);
  };

  return (
    <div className="flex-shrink-0 w-[80vw] sm:w-[380px] snap-center group">
      <div className="relative aspect-[3/4] overflow-hidden bg-ink border border-primary/20">
        <img src={drop.img} alt={drop.trait} className={`w-full h-full ${drop.fit ? 'object-contain object-top' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment bg-primary px-3 py-1">
            {drop.tone === 'empower' ? 'Empowerment Drop' : drop.tone === 'pets' ? 'Pet Drop' : drop.tone === 'bags' ? 'Bag Drop' : `Drop ${drop.drop}`}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-black text-xl sm:text-2xl text-parchment leading-tight mb-1 flex items-center gap-2">
            {drop.tone === 'empower' && <Crown className="w-5 h-5 text-primary" />}
            {drop.tone === 'pets' && <PawPrint className="w-5 h-5 text-primary" />}
            {drop.trait}
          </h3>
          <p className="font-body text-xs text-parchment/60 mb-4">{drop.desc}</p>

          {showPrompt ? (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm font-mono-flag bg-parchment text-ink placeholder-ink/30 focus:outline-none"
                autoFocus
              />
              <button type="submit" disabled={saving} className="bg-primary text-parchment px-4 py-2 text-xs font-mono-flag uppercase tracking-wider hover:bg-parchment hover:text-ink transition-colors disabled:opacity-50">
                {saving ? '...' : 'Set'}
              </button>
            </form>
          ) : (
            <button
              onClick={handleRemind}
              disabled={reminded}
              className={`inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-colors ${
                reminded ? 'bg-parchment text-ink cursor-default' : 'bg-ink/60 text-parchment border border-parchment/30 hover:bg-primary hover:border-primary'
              }`}
            >
              {reminded ? <><Check className="w-3 h-3" /> Reminder Set</> : <><Bell className="w-3 h-3" /> Remind Me</>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <section className="relative bg-ink py-20 sm:py-28 overflow-hidden">
      <div className="px-6 sm:px-12 mb-12">
        <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ Little by Little ◆</span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-parchment leading-tight max-w-2xl">
            The drops are scheduled.<br />
            <span className="text-primary italic">The flags are woven.</span>
          </h2>
          <p className="font-body text-sm text-parchment/50 max-w-xs">
            Each trait gets its own release. Set a reminder for the ones that hit a little too close.
          </p>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 sm:px-12 pb-6">
        {DROPS.map((drop, i) => (
          <DropCard key={i} drop={drop} index={i} />
        ))}
      </div>
    </section>
  );
}