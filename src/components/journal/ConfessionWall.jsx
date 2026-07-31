import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import ConfessionForm from './ConfessionForm';
import { Quote } from 'lucide-react';

export default function ConfessionWall() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const list = await base44.entities.Confession.filter({ status: 'published' }, '-created_date', 50);
      setItems(list || []);
    } catch { setItems([]); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* The wall */}
      <div>
        <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/50 mb-8">
          The Confession Wall — published with permission
        </p>
        {loading ? (
          <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/40">Loading the wall…</p>
        ) : items.length === 0 ? (
          <div className="border border-primary/20 p-10 text-center">
            <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
            <p className="font-display italic text-lg text-parchment/60 leading-snug">
              The wall is empty for now. Be the first to put it into words.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((c) => (
              <div key={c.id} className="bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 p-6">
                <Quote className="w-5 h-5 text-primary/60 mb-4" />
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