import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Instagram } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { buildWelcomeEmail, buildOwnerNotificationEmail } from '@/lib/emailTemplates';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setSaving(true);
    setError('');
    try {
      await base44.entities.WaitlistSignup.create({
        email,
        contact_method: 'email',
        source: 'contact',
        red_flag_note: `${name || 'Anonymous'}: ${message}`,
      });
      // Best-effort welcome reply to the sender (recipient must be a registered app user)
      try {
        await base44.integrations.Core.SendEmail({
          to: email,
          subject: '🚩 Message received — Red Flags & Receipts',
          body: buildWelcomeEmail(),
        });
      } catch (_) { /* reply is best-effort */ }
      // Best-effort owner notification (recipient must be a registered app user)
      try {
        await base44.integrations.Core.SendEmail({
          to: 'shopredflags@proton.me',
          subject: '🚩 New Contact Message',
          body: buildOwnerNotificationEmail({
            title: 'New Contact Message',
            lines: [
              { label: 'Name', value: name || 'Anonymous' },
              { label: 'Email', value: email },
              { label: 'Message', value: message },
            ],
          }),
        });
      } catch (_) { /* best-effort */ }
      setSent(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setSaving(false);
  };

  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <section className="px-6 sm:px-12 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-6 block">◆ Contact ◆</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment leading-[0.95] mb-4">
            Say hello.
            <br />
            <span className="text-primary italic">Or say nothing — we'll get the message.</span>
          </h1>
          <p className="font-body text-sm text-parchment/60 max-w-lg leading-relaxed">
            Questions, press, collabs, or your own red flag story — drop it below. AJ reads every one.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-12 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-primary/30 bg-ink p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-parchment" />
                </div>
                <h3 className="font-display font-black text-2xl text-parchment mb-2">Message received.</h3>
                <p className="font-body text-sm text-parchment/60">Thanks for reaching out — AJ will be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 mb-2 block">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (or don't)"
                    className="w-full bg-transparent border-b border-parchment/20 py-3 text-parchment placeholder-parchment/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-parchment/20 py-3 text-parchment placeholder-parchment/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 mb-2 block">
                    Message *
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Your message, your story, your red flags..."
                    className="w-full bg-transparent border-b border-parchment/20 py-3 text-parchment placeholder-parchment/30 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                {error && <p className="font-mono-flag text-xs text-primary">{error}</p>}
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-3 bg-primary text-parchment font-mono-flag text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-parchment hover:text-ink transition-colors disabled:opacity-50"
                >
                  {saving ? 'Sending...' : (<>
                    Send <Send className="w-4 h-4" />
                  </>)}
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Direct</h4>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-4 h-4 text-parchment/40" />
                <span className="font-mono-flag text-xs text-parchment/70">hello@redflagsandreceipts.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-parchment/40" />
                <span className="font-mono-flag text-xs text-parchment/70">Press &amp; partnerships welcome</span>
              </div>
            </div>
            <div>
              <h4 className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Find Me</h4>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-parchment/40" />
                <span className="font-mono-flag text-xs text-parchment/70">@redflagsandreceipts</span>
              </div>
            </div>
            <div className="border-t border-parchment/10 pt-6">
              <p className="font-display italic text-lg text-parchment/70 leading-snug">
                "Look at this scarf made of all the red flags you gave me."
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}