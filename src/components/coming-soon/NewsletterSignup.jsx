import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setError('Enter a valid email address.');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      await base44.entities.WaitlistSignup.create({
        email,
        contact_method: 'email',
        source: 'footer-newsletter',
      });
      // Best-effort notification email (recipient must be a registered app user)
      try {
        await base44.integrations.Core.SendEmail({
          to: 'shopredflags@proton.me',
          subject: '🚩 New Newsletter Signup',
          body: `A new subscriber joined the newsletter.\n\nEmail: ${email}\nSource: footer-newsletter`,
        });
      } catch (e) { /* notification is best-effort */ }
      setStatus('done');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (status === 'done') {
    return (
      <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary leading-relaxed">
        ✓ You’re on the list.<br />Updates incoming.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex items-stretch gap-0 border border-parchment/20 focus-within:border-primary transition-colors">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
          placeholder="Email address"
          disabled={status === 'loading'}
          className="flex-1 bg-transparent px-3 py-2.5 font-body text-xs text-parchment placeholder:text-parchment/30 outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary text-parchment px-4 flex items-center justify-center hover:bg-parchment hover:text-ink transition-colors disabled:opacity-50"
          aria-label="Subscribe"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {status === 'error' && (
        <p className="font-mono-flag text-[9px] uppercase tracking-[0.15em] text-primary mt-2">{error}</p>
      )}
    </form>
  );
}