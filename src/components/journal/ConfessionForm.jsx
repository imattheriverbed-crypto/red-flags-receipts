import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Send, Check } from 'lucide-react';

export default function ConfessionForm({ onSubmitted }) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [wantsPub, setWantsPub] = useState(false);
  const [status, setStatus] = useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    if (!body.trim()) return;
    setStatus('loading');
    try {
      await base44.entities.Confession.create({
        body: body.trim(),
        author_display: author.trim() || null,
        wants_publication: wantsPub,
        status: 'pending',
      });
      setStatus('done');
      setBody('');
      setAuthor('');
      setWantsPub(false);
      onSubmitted?.();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="bg-primary/10 border border-primary/40 p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-primary mb-4">
          <Check className="w-6 h-6 text-primary" strokeWidth={3} />
        </div>
        <p className="font-display text-2xl text-parchment mb-2">Submitted.</p>
        <p className="font-body text-sm text-parchment/60 max-w-md mx-auto">
          Your words are held privately. {wantsPub ? 'You opted in to be considered for publication — if selected, we’ll reach out before anything goes live.' : 'They will not be published unless you opt in.'}
        </p>
        <button onClick={() => setStatus('idle')} className="mt-6 font-mono-flag text-[10px] uppercase tracking-[0.25em] text-primary hover:underline">
          Write another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-gradient-to-b from-[#0c0c0c] to-black border border-white/10 p-6 sm:p-8">
      <p className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary mb-5">Say it. We’re not listening back.</p>
      <textarea
        value={body}
        onChange={(e) => { setBody(e.target.value); setStatus('idle'); }}
        rows={6}
        maxLength={2000}
        placeholder="Confess it. Yell it. Name them or don’t. This stays between you and the scarf."
        className="w-full px-4 py-3 font-body text-sm bg-black text-parchment border border-white/15 placeholder-parchment/30 focus:outline-none focus:border-primary resize-none mb-4"
      />
      <div className="flex flex-col sm:flex-row gap-4 mb-5">
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Pen name (optional)"
          className="flex-1 px-4 py-3 font-mono-flag text-xs uppercase tracking-[0.15em] bg-black text-parchment border border-white/15 placeholder-parchment/30 focus:outline-none focus:border-primary"
        />
        <label className="flex items-center gap-3 cursor-pointer select-none px-4 py-3 border border-white/15 hover:border-primary/50 transition-colors">
          <input
            type="checkbox"
            checked={wantsPub}
            onChange={(e) => setWantsPub(e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <span className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-parchment/80">Consider me for publication</span>
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'loading' || !body.trim()}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-parchment font-mono-flag text-xs uppercase tracking-[0.2em] px-6 py-4 hover:bg-parchment hover:text-ink transition-colors disabled:opacity-40"
      >
        {status === 'loading' ? 'Sending…' : 'Submit'} <Send className="w-4 h-4" />
      </button>
      {status === 'error' && <p className="font-mono-flag text-[10px] uppercase tracking-[0.2em] text-primary mt-3 text-center">Something went wrong. Try again.</p>}
      <p className="font-mono-flag text-[9px] uppercase tracking-[0.2em] text-parchment/30 mt-4 text-center">
        Submissions are private until reviewed. Opting in does not guarantee publication.
      </p>
    </form>
  );
}