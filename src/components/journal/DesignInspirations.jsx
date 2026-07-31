import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Image } from '@/components/ui/image';
import { X, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DesignInspirations() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const list = await base44.entities.JournalEntry.filter({ published: true }, 'design_number', 100);
        setEntries(list || []);
      } catch { setEntries([]); }
      try {
        const u = await base44.auth.me();
        setIsAdmin(u?.role === 'admin');
      } catch { setIsAdmin(false); }
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-parchment/50">
          The inspiration behind each of the 36 red flag scarf designs
        </p>
        {isAdmin && (
          <Link
            to="/admin/journal"
            className="inline-flex items-center gap-2 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/40 px-4 py-2 hover:bg-primary hover:text-parchment transition-colors"
          >
            <Lock className="w-3 h-3" /> Compose Entries
          </Link>
        )}
      </div>

      {loading ? (
        <p className="font-mono-flag text-xs uppercase tracking-[0.2em] text-parchment/40 text-center py-20">Loading the warnings…</p>
      ) : entries.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-display italic text-xl text-parchment/60 max-w-lg mx-auto leading-snug">
            The first inspiration notes publish with the drop. Each of the 36 designs gets its own story.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map((e) => (
            <button
              key={e.id}
              onClick={() => setActive(e)}
              className="group text-left bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-card">
                {e.hero ? (
                  <Image src={e.hero} alt={e.title} fittingType="fill" className="w-full h-full group-hover:scale-[1.04] transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary/40">No image</div>
                )}
                <span className="absolute top-3 left-3 font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment bg-black/70 border border-primary/40 px-2.5 py-1 rounded-full">
                  {e.date_label || `Design ${e.design_number ?? ''}`}
                </span>
              </div>
              <div className="p-6">
                {e.scarf_name && <span className="font-mono-flag text-[10px] uppercase tracking-[0.28em] text-primary block mb-2">{e.scarf_name}</span>}
                <h4 className="font-display text-xl text-parchment leading-tight mb-3 group-hover:text-primary transition-colors">{e.title}</h4>
                {e.excerpt && <p className="font-body text-sm text-parchment/50 leading-relaxed line-clamp-3">{e.excerpt}</p>}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Entry modal */}
      {active && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto" onClick={() => setActive(null)}>
          <div className="relative bg-ink border border-primary/30 max-w-2xl w-full my-8" onClick={(ev) => ev.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-parchment/70 hover:text-primary transition-colors">
              <X className="w-5 h-5" />
            </button>
            {active.hero && (
              <div className="aspect-[3/2] w-full overflow-hidden border-b border-primary/20">
                <Image src={active.hero} alt={active.title} fittingType="fill" className="w-full h-full" />
              </div>
            )}
            <div className="p-8">
              <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">{active.date_label || active.tag} {active.scarf_name ? `· ${active.scarf_name}` : ''}</span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-parchment leading-tight mb-6">{active.title}</h3>
              {active.excerpt && <p className="font-body text-base text-parchment/60 leading-relaxed mb-6">{active.excerpt}</p>}
              <div className="space-y-5">
                {(active.body || '').split(/\n{2,}/).map((p, i) => (
                  <p key={i} className="font-body text-base leading-relaxed text-parchment/80">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}