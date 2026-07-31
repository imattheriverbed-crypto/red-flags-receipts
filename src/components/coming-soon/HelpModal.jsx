import React, { useState, useEffect } from 'react';
import { X, Heart, Sprout, MessageCircleQuestion } from 'lucide-react';
import PersonaCard from './PersonaCard';

const SHARED_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/d7da2c72e_12ad6075-d96e-4a62-8baa-41607a122bf8.png';

const PERSONAS = [
  {
    name: 'Miss Path',
    color: '#4A6757',
    icon: 'tree',
    tagline: 'Wise. Experienced. No-nonsense.',
    desc: 'Straightforward and perceptive. I ask the hard questions with care and help you see the truth so you can make empowered choices.',
    img: SHARED_IMG,
    focalX: 0.16,
    focalY: 0.4,
  },
  {
    name: 'Emily',
    color: '#8D7A9E',
    icon: 'cap',
    tagline: 'Thoughtful. Analytical. Grounded.',
    desc: 'I combine education and experience. With two narcissists behind me, I help you understand the dynamics and rebuild with clarity and confidence.',
    img: SHARED_IMG,
    focalX: 0.5,
    focalY: 0.4,
  },
  {
    name: 'Emma',
    color: '#C86F7A',
    icon: 'star',
    tagline: 'Witty. Warm. A smart-alec.',
    desc: "I'll make you laugh, call it like I see it, and be the best friend who helps you see what's really going on.",
    img: SHARED_IMG,
    focalX: 0.84,
    focalY: 0.4,
  },
];

export default function HelpModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Need help?"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary text-white px-5 py-3.5 shadow-xl ring-1 ring-white/20 transition-transform hover:scale-105"
      >
        <MessageCircleQuestion className="w-5 h-5" />
        <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] hidden sm:inline">Need Help?</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#F9F4EE] p-6 sm:p-10 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full text-[#1B263B]/60 hover:text-[#1B263B] hover:bg-black/5 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <Heart className="absolute top-6 left-6 w-9 h-9" style={{ color: '#E88C8D' }} fill="#E88C8D" />
            <Sprout className="absolute top-6 right-16 w-9 h-9" style={{ color: '#9FB69A' }} />

            <header className="text-center mb-9 pt-6">
              <h2 className="font-display text-2xl sm:text-4xl text-[#1B263B] leading-tight">
                Who would you like to talk with today?
              </h2>
              <p className="mt-3 font-body text-sm sm:text-base text-[#1B263B]/70 max-w-xl mx-auto">
                Each of us brings a different style of support. Choose the one that feels right for you.
              </p>
            </header>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {PERSONAS.map((p) => (
                <PersonaCard key={p.name} persona={p} onClose={() => setOpen(false)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}