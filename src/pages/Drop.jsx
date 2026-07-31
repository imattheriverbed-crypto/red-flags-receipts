import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Check } from 'lucide-react';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import TickerTape from '@/components/coming-soon/TickerTape';
import CountdownClock from '@/components/coming-soon/CountdownClock';
import { Image } from '@/components/ui/image';
import { base44 } from '@/api/base44Client';
import { buildWelcomeEmail, buildOwnerNotificationEmail } from '@/lib/emailTemplates';
import { UPCOMING, getDropBySlug } from '@/data/drops';

const DROP_DATES = {
  'pets': '2026-08-08T12:00:00',
  'bags': '2026-08-15T12:00:00',
  '50-lang': '2026-08-22T12:00:00',
  'receipts-journal': '2026-08-29T12:00:00',
};

function RemindMe({ drop }) {
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSaving(true);
    try {
      await base44.entities.WaitlistSignup.create({
        email,
        contact_method: 'email',
        source: `drop-page-${drop.slug}`,
        interested_traits: [drop.name],
      });
      try { await base44.integrations.Core.SendEmail({ to: email, subject: "🚩 You're on the list — Red Flags & Receipts", body: buildWelcomeEmail() }); } catch {}
      try { await base44.integrations.Core.SendEmail({ to: 'castingcallforqueens@gmail.com', subject: '🚩 New Drop Reminder', body: buildOwnerNotificationEmail({ title: 'New Drop Reminder', lines: [{ label: 'Email', value: email }, { label: 'Drop', value: drop.name }, { label: 'Source', value: 'Drop detail page' }] }) }); } catch {}
      setDone(true);
    } catch {
      setDone(true);
    }
    setSaving(false);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 bg-primary/15 border border-primary px-6 py-4">
        <Check className="w-5 h-5 text-primary" />
        <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment">Reminder set — we'll ping you when {drop.name} drops.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-3.5 font-mono-flag text-sm bg-parchment text-ink placeholder-ink/30 focus:outline-none"
      />
      <button type="submit" disabled={saving} className="inline-flex items-center justify-center gap-2 bg-primary text-parchment px-6 py-3.5 font-mono-flag text-xs uppercase tracking-[0.2em] hover:bg-parchment hover:text-ink transition-colors disabled:opacity-50">
        <Bell className="w-4 h-4" /> {saving ? '...' : 'Remind Me'}
      </button>
    </form>
  );
}

export default function Drop() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const drop = getDropBySlug(slug);

  if (!drop) {
    return (
      <div className="dark bg-ink text-parchment min-h-screen">
        <SiteNav />
        <div className="max-w-xl mx-auto px-6 py-40 text-center">
          <h1 className="font-display font-black text-3xl text-parchment uppercase mb-4">Drop not found</h1>
          <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/50 mb-8">This drop isn't scheduled yet.</p>
          <Link to="/collections" className="font-mono-flag text-xs uppercase tracking-[0.2em] bg-primary text-parchment px-6 py-3 hover:bg-parchment hover:text-ink transition-colors">Back to Collections</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const others = UPCOMING.filter((d) => d.slug !== slug);

  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />

      <section className="relative pt-32 pb-16 px-6 sm:px-12 grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-ink pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <button onClick={() => navigate('/collections')} className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-parchment/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Collections
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[3/4] overflow-hidden border border-primary/25">
              <Image src={drop.img} alt={drop.name} fittingType="fit" className="w-full h-full" />
              <div className="absolute top-4 left-4">
                <span className="font-mono-flag text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-primary text-parchment">Upcoming Drop</span>
              </div>
            </div>

            <div>
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">◆ Dropping {drop.date} ◆</span>
              <h1 className="font-display font-black text-4xl sm:text-6xl text-parchment uppercase leading-[0.95] mb-6">{drop.name}</h1>
              <p className="font-body text-base text-parchment/70 leading-relaxed max-w-md mb-8">{drop.desc}</p>

              <div className="mb-10">
                <CountdownClock target={DROP_DATES[drop.slug]} variant="boxed" />
              </div>

              <div className="mb-4">
                <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/50 block mb-4">Get notified the moment it drops</span>
                <RemindMe drop={drop} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TickerTape variant="red" />

      {/* Other upcoming drops */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-parchment mb-8">More Drops Coming</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((d) => (
            <Link key={d.slug} to={`/collections/${d.slug}`} className="group relative block aspect-[3/4] overflow-hidden border border-primary/20">
              <img src={d.img} alt={d.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary block mb-1">{d.date}</span>
                <h3 className="font-display font-black text-xl text-parchment leading-tight">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}