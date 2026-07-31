import React, { useState, useEffect, useMemo } from 'react';
import { base44 } from '@/api/base44Client';
import ConfessionForm from './ConfessionForm';
import { Quote } from 'lucide-react';

const FILTERS = [
  'All',
  'Relationship Red Flags',
  'Family Red Flags',
  'Friendship',
  'Work & Career',
  'Life Lessons',
  'Other',
];

export default function ConfessionWall() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('All');

  const load = async () => {
    try {
      const list = await base44.entities.Confession.filter({ status: 'published' }, '-created_date', 50);
      setItems(list || []);
    } catch { setItems([]); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const visible = useMemo(() => {
    if (active === 'All') return items;
    return items.filter((c) => (c.category || 'Other') === active);
  }, [items, active]);

  const counts = useMemo(() => {
    const m = { All: items.length };
    for (const c of items) {
      const k = c.category || 'Other';
      m[k] = (m[k] || 0) + 1;
    }
    return m;
  }, [items]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* The wall */}
      <div>
        <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/50 mb-6">
          The Confession Wall — published with permission
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono-flag text-[10px] uppercase tracking-[0.2em] px-3 py-2 border transition-colors ${
                active === f
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-white/15 text-parchment/55 hover:border-white/40'
              }`}
            >
              {f}{counts[f] ? ` (${counts[f]})` : ''}
            </button>
          ))}
        </div>
        {loading ? (
          <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/40">Loading the wall…</p>
        ) : items.length === 0 ? (
          <div className="border border-primary/20 p-10 text-center">
            <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
            <p className="font-display italic text-lg text-parchment/60 leading-snug">
              The wall is empty for now. Be the first to put it into words.
            </p>
          </div>
        ) : visible.length === 0 ? (
          <div className="border border-primary/20 p-10 text-center">
            <p className="font-display italic text-lg text-parchment/60 leading-snug">
              Nothing in this theme yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {visible.map((c) => (
              <div key={c.id} className="bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-5 h-5 text-primary/60" />
                  <span className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-primary/80 border border-primary/30 px-2.5 py-1">
                    {c.category || 'Other'}
                  </span>
                </div>
                <p className="font-display text-lg text-parchment/85 leading-relaxed whitespace-pre-line">“{c.body}”</p>
                <p className="font-mono-flag text-[10px] uppercase tracking-[0.25em] text-primary/70 mt-5">
                  — {c.author_display || 'Anonymous'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* The form */}
      <div>
        <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/50 mb-8">
          Confess it. Vent it. Let it go.
        </p>
        <ConfessionForm onSubmitted={load} />
      </div>
    </div>
  );
}