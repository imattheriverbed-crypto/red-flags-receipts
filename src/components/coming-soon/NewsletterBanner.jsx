import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Image } from '@/components/ui/image';
import { ArrowRight, Check } from 'lucide-react';

const PORTRAIT = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/1935c46fe_generated_image.png';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setError('');
    try {
      await base44.entities.WaitlistSignup.create({
        email,
        contact_method: 'email',
        source: 'product_footer',
      });
      setStatus('done');
    } catch (err) {
      setError('Something went wrong. Try again.');
      setStatus('idle');
    }
  };

  return (
    <section className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-[#0a0a0a]">
          <Image src={PORTRAIT} alt="Join the list" fittingType="fill" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center px-6 sm:px-12 py-14">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">◆ The List ◆</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white leading-tight mb-4">
            Join The List.<br />Get The Receipts.
          </h2>
          <p className="font-body text-sm text-white/55 leading-relaxed mb-8 max-w-md">
            First access to every drop, journal entries, and the warnings — straight to your inbox. No spam, no exes.
          </p>

          {status === 'done' ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 border border-primary text-primary">
                <Check className="w-4 h-4" />
              </span>
              <span className="font-mono-flag text-xs uppercase tracking-[0.2em] text-white">You're on the list.</span>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-transparent border border-white/25 text-white placeholder-white/40 px-5 py-4 font-body text-sm focus:border-primary outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-primary text-white font-mono-flag text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#B91C1C] transition-colors disabled:opacity-50 inline-flex items-center gap-2 justify-center"
              >
                {status === 'loading' ? 'Sending…' : (<>Sign Me Up <ArrowRight className="w-4 h-4" /></>)}
              </button>
            </form>
          )}
          {error && <p className="font-body text-xs text-primary mt-3">{error}</p>}
        </div>
      </div>
    </section>
  );
}