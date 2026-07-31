import React, { useState } from 'react';
import { ArrowRight, Check, Mail, MessageSquare } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { buildWelcomeEmail, buildOwnerNotificationEmail } from '@/lib/emailTemplates';

const TRAITS = [
  'CEO OF ME',
  'PETS.',
  'TRAVEL.',
  'FUCK YOU.',
  'RECEIPTS JOURNAL',
  'OUTERWEAR.',
  'FITNESS.',
  'BAGS.',
];

export default function LeadCapture() {
  const [method, setMethod] = useState('email');
  const [value, setValue] = useState('');
  const [traits, setTraits] = useState([]);
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');
  const activated = value.trim().length > 0;

  const toggleTrait = (t) => {
    setTraits((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
    if (status === 'error') { setStatus('idle'); setError(''); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+()\-]{7,}$/;

    if (method === 'email' && !emailRegex.test(value)) {
      setError('That email looks suspicious. Even for us.');
      setStatus('error');
      return;
    }
    if (method === 'sms' && !phoneRegex.test(value)) {
      setError('That number looks off. Try again.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    try {
      await base44.entities.WaitlistSignup.create({
        email: method === 'email' ? value : null,
        phone: method === 'sms' ? value : null,
        contact_method: method,
        source: 'lead-capture',
        interested_traits: traits,
        red_flag_note: note.trim() || null,
      });

      // Best-effort welcome reply to the signer (recipient must be a registered app user)
      if (method === 'email') {
        try {
          await base44.integrations.Core.SendEmail({
            to: value,
            subject: "🚩 You're on the list — Red Flags & Receipts",
            body: buildWelcomeEmail(),
          });
        } catch (e) { /* reply is best-effort */ }
      }
      // Best-effort owner notification (recipient must be a registered app user)
      try {
        await base44.integrations.Core.SendEmail({
          to: 'shopredflags@proton.me',
          subject: '🚩 New Waitlist Signup',
          body: buildOwnerNotificationEmail({
            title: 'New Waitlist Signup',
            lines: [
              { label: 'Contact', value: value },
              { label: 'Method', value: method.toUpperCase() },
              { label: 'Source', value: 'Lead Capture (homepage)' },
              { label: 'Interested Traits', value: traits.length ? traits.join(', ') : '—' },
              { label: 'Red Flag Note', value: note.trim() || '—' },
            ],
          }),
        });
      } catch (e) { /* notification is best-effort */ }

      setStatus('success');
    } catch (err) {
      setError('Something went wrong. Try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="signup" className="relative min-h-[70vh] bg-primary flex items-center justify-center px-6 py-20 transition-colors duration-700">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border-2 border-ink">
            <Check className="w-8 h-8 text-ink" strokeWidth={3} />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-ink mb-4 leading-tight">
            YOU'RE ON THE LIST.
          </h2>
          <p className="font-mono-flag text-sm uppercase tracking-[0.2em] text-ink/70 mb-2">
            The warning arrives Tuesday, August 4th · 9PM.
          </p>
          <p className="font-body text-ink/60 text-sm">
            Your priority access discount is locked in. We'll {method === 'email' ? 'email' : 'text'} you the moment the collection drops — and unlike your ex, we actually follow through.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="signup"
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-6 py-16 sm:py-20 transition-colors duration-700 bg-parchment"
    >
      {/* Warning tape top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#0A0A0A,#0A0A0A_20px,#E2211C_20px,#E2211C_40px)]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#0A0A0A,#0A0A0A_20px,#E2211C_20px,#E2211C_40px)]" />

      <div className="w-full max-w-3xl text-center">
        <span className="font-mono-flag text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
          ◆ Priority Access ◆
        </span>

        <h2 className="font-display font-black text-3xl sm:text-6xl leading-[0.95] mb-4 text-ink">
          Where should we<br />send the warning?
        </h2>

        <p className="font-body text-sm sm:text-base mb-8 sm:mb-10 max-w-md mx-auto text-ink/60">
          Sign up for exclusive launch-day access to the Red Flag scarf. We promise not to leave you on read — just the drop, then we ghost.
        </p>

        {/* Method toggle */}
        <div className="inline-flex border-2 border-ink mb-6">
          <button
            type="button"
            onClick={() => { setMethod('email'); setValue(''); }}
            className={`flex items-center gap-2 px-6 py-2 font-mono-flag text-xs uppercase tracking-[0.15em] transition-colors ${method === 'email' ? 'bg-ink text-parchment' : 'text-ink'}`}
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </button>
          <button
            type="button"
            onClick={() => { setMethod('sms'); setValue(''); }}
            className={`flex items-center gap-2 px-6 py-2 font-mono-flag text-xs uppercase tracking-[0.15em] transition-colors ${method === 'sms' ? 'bg-ink text-parchment' : 'text-ink'}`}
          >
            <MessageSquare className="w-3.5 h-3.5" /> SMS
          </button>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left">
          {/* Contact input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={value}
              onChange={(e) => { setValue(e.target.value); setStatus('idle'); setError(''); }}
              placeholder={method === 'email' ? 'the.email.you.actually.check@gmail.com' : 'the number you actually pick up'}
              className="flex-1 px-6 py-5 text-lg sm:text-xl font-mono-flag bg-ink text-parchment border-2 border-ink placeholder-parchment/40 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="ghost-hover group inline-flex items-center justify-center gap-3 bg-primary text-parchment font-mono-flag text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-5 hover:bg-ink transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending...' : 'Get the Discount'}
              {status !== 'loading' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>

          {/* Red flag traits — which hit close? */}
          <div className="mt-8">
            <label className="font-mono-flag text-[11px] uppercase tracking-[0.2em] text-ink/70 block mb-2">
              Which red flags hit close? <span className="text-primary">Pick all that apply.</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {TRAITS.map((t) => {
                const on = traits.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTrait(t)}
                    className={`font-mono-flag text-[10px] sm:text-[11px] uppercase tracking-[0.15em] px-3.5 py-2.5 border-2 transition-all ${
                      on
                        ? 'bg-primary border-primary text-parchment'
                        : 'bg-transparent border-ink/30 text-ink/70 hover:border-ink hover:text-ink'
                    }`}
                  >
                    {on && <Check className="w-3 h-3 inline mr-1.5 -mt-px" />}{t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Red flag note */}
          <div className="mt-6">
            <label className="font-mono-flag text-[11px] uppercase tracking-[0.2em] text-ink/70 block mb-2">
              Leave a red flag note <span className="text-ink/35">(optional, but the receipts love it)</span>
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              maxLength={280}
              placeholder="The one red flag you wish you'd seen sooner, the trait you're most here for, or a note for the archive..."
              className="w-full px-5 py-4 font-body text-sm bg-ink text-parchment border-2 border-ink placeholder-parchment/40 focus:outline-none focus:ring-0 resize-none"
            />
            <div className="text-right font-mono-flag text-[9px] uppercase tracking-[0.15em] text-ink/40 mt-1">
              {note.length}/280
            </div>
          </div>
        </form>

        {error && (
          <p className="font-mono-flag text-xs uppercase tracking-[0.15em] text-ink mt-4">{error}</p>
        )}

        <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] mt-6 text-ink/40">
          Early access · Launch discount · Tuesday, August 4 · 9PM
        </p>
      </div>
    </section>
  );
}