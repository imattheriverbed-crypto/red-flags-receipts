import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import { Link } from 'react-router-dom';
import { Trash2, Eye, EyeOff, Check, X, ArrowLeft } from 'lucide-react';

function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const EMPTY = { title: '', scarf_name: '', design_number: '', date_label: '', excerpt: '', body: '', hero: '', tag: 'Design Inspiration', published: false };

export default function JournalAdmin() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [tab, setTab] = useState('entries');
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [entries, setEntries] = useState([]);
  const [confessions, setConfessions] = useState([]);

  const load = async () => {
    try {
      const [e, c] = await Promise.all([
        base44.entities.JournalEntry.list('-created_date', 100),
        base44.entities.Confession.list('-created_date', 100),
      ]);
      setEntries(e || []);
      setConfessions(c || []);
    } catch { /* ignore */ }
  };

  useEffect(() => {
    (async () => {
      try {
        const u = await base44.auth.me();
        setUser(u);
        if (u?.role === 'admin') await load();
      } catch { setUser(null); }
      setAuthChecked(true);
    })();
  }, []);

  if (!authChecked) {
    return (
      <div className="dark bg-ink text-parchment min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-parchment/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="dark bg-ink text-parchment min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display font-black text-3xl text-parchment mb-4">Admins only.</h1>
          <p className="font-body text-sm text-parchment/60 mb-8">Sign in as an admin to compose journal entries and review confessions.</p>
          <a href="/login" className="inline-flex items-center gap-2 font-mono-flag text-[11px] uppercase tracking-[0.25em] bg-primary text-parchment px-6 py-3 hover:bg-parchment hover:text-ink transition-colors">Sign in →</a>
        </div>
      </div>
    );
  }

  const saveEntry = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) return;
    setSaving(true);
    try {
      await base44.entities.JournalEntry.create({
        ...form,
        slug: slugify(form.title),
        design_number: form.design_number ? Number(form.design_number) : null,
        published: !!form.published,
      });
      setForm(EMPTY);
      await load();
    } catch { /* show inline later */ }
    setSaving(false);
  };

  const togglePublish = async (entry) => {
    await base44.entities.JournalEntry.update(entry.id, { published: !entry.published });
    await load();
  };
  const removeEntry = async (entry) => {
    if (!confirm('Delete this entry?')) return;
    await base44.entities.JournalEntry.delete(entry.id);
    await load();
  };
  const setConfStatus = async (c, status) => {
    await base44.entities.Confession.update(c.id, { status });
    await load();
  };
  const removeConf = async (c) => {
    if (!confirm('Delete this confession?')) return;
    await base44.entities.Confession.delete(c.id);
    await load();
  };

  return (
    <div className="dark bg-ink text-parchment min-h-screen">
      <SiteNav />
      <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-24">
        <Link to="/journal" className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-parchment/50 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-parchment uppercase mb-2">Journal Studio</h1>
        <p className="font-body text-sm text-parchment/50 mb-10">Compose design inspirations · review confessions</p>

        {/* Tab switch */}
        <div className="inline-flex border border-primary/30 mb-10">
          {[
            ['entries', `Design Entries (${entries.length})`],
            ['confessions', `Confessions (${confessions.filter((c) => c.status === 'pending').length} pending)`],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-5 py-2.5 font-mono-flag text-[11px] uppercase tracking-[0.2em] transition-colors ${tab === k ? 'bg-primary text-parchment' : 'text-parchment/70 hover:text-primary'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'entries' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Compose form */}
            <form onSubmit={saveEntry} className="bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 p-6 space-y-4 h-fit">
              <h2 className="font-mono-flag text-[11px] uppercase tracking-[0.25em] text-primary">New Design Inspiration</h2>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm" />
              <div className="grid grid-cols-2 gap-3">
                <input value={form.scarf_name} onChange={(e) => setForm({ ...form, scarf_name: e.target.value })} placeholder="Scarf name" className="px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm" />
                <input value={form.design_number} onChange={(e) => setForm({ ...form, design_number: e.target.value })} type="number" min="1" max="36" placeholder="Design #" className="px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm" />
              </div>
              <input value={form.date_label} onChange={(e) => setForm({ ...form, date_label: e.target.value })} placeholder="Date label (e.g. Design 01)" className="w-full px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm" />
              <input value={form.hero} onChange={(e) => setForm({ ...form, hero: e.target.value })} placeholder="Image URL (hero)" className="w-full px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm" />
              <input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Excerpt (short teaser)" className="w-full px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm" />
              <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} rows={6} placeholder="The inspiration — separate paragraphs with a blank line" className="w-full px-4 py-3 bg-black text-parchment border border-white/15 focus:outline-none focus:border-primary text-sm resize-none" />
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-4 h-4 accent-primary" />
                <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/80">Publish immediately</span>
              </label>
              <button type="submit" disabled={saving} className="w-full bg-primary text-parchment font-mono-flag text-[11px] uppercase tracking-[0.2em] px-5 py-3 hover:bg-parchment hover:text-ink transition-colors disabled:opacity-40">
                {saving ? 'Saving…' : 'Save Entry'}
              </button>
            </form>

            {/* Entry list */}
            <div className="space-y-4">
              {entries.length === 0 && <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/40">No entries yet.</p>}
              {entries.map((entry) => (
                <div key={entry.id} className="bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 p-5 flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-mono-flag text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 ${entry.published ? 'bg-primary text-parchment' : 'border border-white/20 text-parchment/50'}`}>
                        {entry.published ? 'Live' : 'Draft'}
                      </span>
                      {entry.design_number != null && <span className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/40">#{entry.design_number}</span>}
                    </div>
                    <h3 className="font-display text-lg text-parchment truncate">{entry.title}</h3>
                    {entry.scarf_name && <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary/70">{entry.scarf_name}</p>}
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button onClick={() => togglePublish(entry)} title={entry.published ? 'Unpublish' : 'Publish'} className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-primary hover:text-primary transition-colors">
                      {entry.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button onClick={() => removeEntry(entry)} className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-primary hover:text-primary transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'confessions' && (
          <div className="space-y-4">
            {confessions.length === 0 && <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/40">No confessions yet.</p>}
            {confessions.map((c) => (
              <div key={c.id} className="bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`font-mono-flag text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 ${c.status === 'pending' ? 'bg-primary/20 text-primary border border-primary/40' : c.status === 'published' ? 'bg-primary text-parchment' : 'border border-white/20 text-parchment/40'}`}>
                    {c.status}
                  </span>
                  {c.wants_publication && <span className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-primary/80">✦ opted in to publish</span>}
                  <span className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/40 ml-auto">{c.author_display || 'Anonymous'}</span>
                </div>
                <p className="font-body text-sm text-parchment/80 leading-relaxed whitespace-pre-line mb-4">{c.body}</p>
                <div className="flex gap-2">
                  {c.status !== 'published' && (
                    <button onClick={() => setConfStatus(c, 'published')} className="inline-flex items-center gap-1.5 font-mono-flag text-[10px] uppercase tracking-[0.2em] bg-primary text-parchment px-3 py-2 hover:bg-parchment hover:text-ink transition-colors">
                      <Check className="w-3.5 h-3.5" /> Publish
                    </button>
                  )}
                  {c.status !== 'rejected' && (
                    <button onClick={() => setConfStatus(c, 'rejected')} className="inline-flex items-center gap-1.5 font-mono-flag text-[10px] uppercase tracking-[0.2em] border border-white/20 text-parchment/70 px-3 py-2 hover:border-primary hover:text-primary transition-colors">
                      <X className="w-3.5 h-3.5" /> Reject
                    </button>
                  )}
                  {c.status !== 'pending' && (
                    <button onClick={() => setConfStatus(c, 'pending')} className="font-mono-flag text-[10px] uppercase tracking-[0.2em] border border-white/20 text-parchment/70 px-3 py-2 hover:border-primary hover:text-primary transition-colors">
                      Reset to pending
                    </button>
                  )}
                  <button onClick={() => removeConf(c)} className="ml-auto w-9 h-9 flex items-center justify-center border border-white/15 hover:border-primary hover:text-primary transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}