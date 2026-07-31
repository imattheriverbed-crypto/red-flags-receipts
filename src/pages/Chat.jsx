import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Send, ArrowLeft, LogIn, UserPlus, ShieldCheck } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { ADVISORS } from '@/data/advisors';
import SiteNav from '@/components/coming-soon/SiteNav';
import SiteFooter from '@/components/coming-soon/SiteFooter';
import { Image } from '@/components/ui/image';
import ChatMessage from '@/components/chat/ChatMessage';

const LIMIT_MS = 5 * 60 * 1000;

export default function Chat() {
  const { advisor } = useParams();
  const a = ADVISORS.find((x) => x.slug === advisor) || ADVISORS[0];

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [chatStart, setChatStart] = useState(null);
  const [now, setNow] = useState(Date.now());
  const scrollRef = useRef(null);

  useEffect(() => { base44.auth.isAuthenticated().then(setAuthed); }, []);

  useEffect(() => {
    const saved = localStorage.getItem(`chat_${a.slug}`);
    if (saved) { try { setMessages(JSON.parse(saved)); } catch { /* ignore */ } }
    const st = localStorage.getItem(`anonChatStart_${a.slug}`);
    if (st) setChatStart(Number(st));
  }, [a.slug]);

  useEffect(() => {
    localStorage.setItem(`chat_${a.slug}`, JSON.stringify(messages));
  }, [messages, a.slug]);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const elapsed = chatStart ? now - chatStart : 0;
  const expired = !authed && !!chatStart && elapsed > LIMIT_MS;
  const remaining = authed || !chatStart ? LIMIT_MS : Math.max(0, LIMIT_MS - elapsed);
  const mm = String(Math.floor(remaining / 60000));
  const ss = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');

  async function send(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading || expired) return;
    if (!authed && !chatStart) {
      const t = Date.now();
      localStorage.setItem(`anonChatStart_${a.slug}`, String(t));
      setChatStart(t);
    }
    const userMsg = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const history = next.map((m) => `${m.role === 'user' ? 'User' : a.name}: ${m.content}`).join('\n');
      const prompt = `${a.systemPrompt}\n\nConversation so far:\n${history}\n\nRespond now as ${a.name}. Stay in character. Reply with only your next message.`;
      const res = await base44.integrations.Core.InvokeLLM({ prompt, model: 'automatic' });
      const reply = typeof res === 'string' ? res : String(res ?? '');
      setMessages([...next, { role: 'assistant', content: reply || '…' }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Sorry, I had trouble responding just now. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-ink text-parchment flex flex-col">
      <SiteNav />
      <div className="max-w-2xl mx-auto w-full px-4 pt-28 pb-8 flex-1 flex flex-col">
        {/* header */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <Link to="/home" className="text-parchment/60 hover:text-primary transition-colors" aria-label="Back">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/15 flex-shrink-0">
            <Image src={a.img} fittingType="fill" className="w-full h-full" alt={a.name} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-xl leading-none text-white">{a.name}</h1>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: a.accent }}>{a.tagline}</p>
          </div>
        </div>

        <p className="font-body text-[10px] text-parchment/40 mt-2 flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3" /> Peer support, not professional therapy. In crisis, call or text 988.
        </p>

        {!authed && (
          <p className="mt-2 font-body text-[11px] text-parchment/50">
            {expired
              ? 'Free chat window ended. '
              : `Free chat: ${mm}:${ss} remaining · `}
            <Link to="/register" className="text-primary hover:underline">Log in for unlimited chat</Link>
          </p>
        )}

        {/* messages */}
        <div className="flex-1 min-h-[45vh] max-h-[55vh] overflow-y-auto py-4 space-y-3 scrollbar-hide">
          {messages.length === 0 && !loading && (
            <div className="text-center text-parchment/40 font-body text-sm mt-10">
              Say hi to {a.name} — ask anything about red flags, boundaries, or your situation.
            </div>
          )}
          {messages.map((m, i) => <ChatMessage key={i} message={m} accent={a.accent} />)}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl px-4 py-3">
                <span className="inline-flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-parchment/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-parchment/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-parchment/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* gate */}
        {expired && (
          <div className="mt-3 mb-3 rounded-xl bg-primary/10 ring-1 ring-primary/40 p-4 text-center">
            <p className="font-display text-lg text-parchment">Your free chat window has ended</p>
            <p className="font-body text-xs text-parchment/60 mt-1 mb-3">
              Create a free account to keep talking with {a.name}, anytime.
            </p>
            <div className="flex gap-2 justify-center">
              <Link to="/register" className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:opacity-90">
                <UserPlus className="w-4 h-4" /> Sign up free
              </Link>
              <Link to="/login" className="inline-flex items-center gap-1.5 bg-white/10 text-parchment text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-white/15">
                <LogIn className="w-4 h-4" /> Log in
              </Link>
            </div>
          </div>
        )}

        {/* input */}
        <form onSubmit={send} className="flex gap-2 pt-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={expired ? 'Log in to continue…' : `Message ${a.name}…`}
            disabled={loading || expired}
            className="flex-1 bg-white/5 ring-1 ring-white/15 rounded-xl px-4 py-3 text-sm text-parchment placeholder:text-parchment/35 focus:outline-none focus:ring-primary disabled:opacity-40"
          />
          <button type="submit" disabled={loading || expired} aria-label="Send" className="flex items-center justify-center w-12 rounded-xl bg-primary text-white hover:opacity-90 disabled:opacity-40 transition-opacity">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
      <SiteFooter />
    </div>
  );
}