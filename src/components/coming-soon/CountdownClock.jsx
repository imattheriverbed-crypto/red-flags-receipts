import React, { useState, useEffect } from 'react';

const DEFAULT_LAUNCH = new Date('2026-08-04T21:00:00');

function getRemaining(target = DEFAULT_LAUNCH) {
  const now = new Date();
  const diff = new Date(target) - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    done: false,
  };
}

export default function CountdownClock({ variant = 'floating', target }) {
  const targetDate = target ? new Date(target) : DEFAULT_LAUNCH;
  const [time, setTime] = useState(getRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setTime(getRemaining(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINUTES', value: time.minutes },
    { label: 'SECONDS', value: time.seconds },
  ];

  const pad = (n) => String(n).padStart(2, '0');

  if (variant === 'boxed') {
    return (
      <div className="flex items-stretch gap-2 sm:gap-3">
        {units.map((u) => (
          <div key={u.label} className="border border-primary/30 bg-ink/40 backdrop-blur-sm px-3 sm:px-5 py-2.5 sm:py-3 text-center min-w-[64px] sm:min-w-[88px]">
            <div className="font-display text-2xl sm:text-4xl font-black text-primary tabular-nums leading-none">{pad(u.value)}</div>
            <div className="font-mono-flag text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-parchment/50 mt-1.5">{u.label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-4 sm:gap-6">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-4 sm:gap-6">
            <div className="text-center">
              <div className="font-display text-3xl sm:text-5xl font-black text-primary tabular-nums">{pad(u.value)}</div>
              <div className="font-mono-flag text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-parchment/50 mt-1">{u.label}</div>
            </div>
            {i < units.length - 1 && <span className="font-display text-2xl text-parchment/20">:</span>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <span className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-parchment/40">Tension Remaining</span>
      <div className="flex items-center gap-3 sm:gap-5">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3 sm:gap-5">
            <div className="text-center">
              <div className="font-display text-4xl sm:text-6xl font-black text-primary tabular-nums leading-none">{pad(u.value)}</div>
              <div className="font-mono-flag text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-parchment/50 mt-2">{u.label}</div>
            </div>
            {i < units.length - 1 && <span className="font-display text-2xl sm:text-4xl text-parchment/20 -mt-3">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}