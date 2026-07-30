import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
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
    <section className="bg-[#111] mt-16 sm:mt-24 px-6 sm:px-[70px] py-14 sm:py-[70px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left">
          <h2 className="font-bebas text-4xl sm:text-5xl text-white leading-none mb-3">Join The List. Get The Receipts.</h2>
          <p className="text-white/55 text-sm">Be first to know about new drops.</p>
        </div>
        {status === 'done' ? (
          <p className="font-bebas text-3xl text-white tracking-wide">You're on the list. ✓</p>
        ) : (
          <form onSubmit={submit} className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 lg:w-[320px] px-4 py-4 bg-black border border-white/25 text-white placeholder-white/40 focus:border-primary outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#b31313] text-white uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#8f0d0d] transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending…' : 'Sign Me Up'}
            </button>
          </form>
        )}
        {error && <p className="text-primary text-xs">{error}</p>}
      </div>
    </section>
  );
}