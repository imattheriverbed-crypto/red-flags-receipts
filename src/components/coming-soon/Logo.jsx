import React from 'react';

export const LOGO_URL = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f69e0d30b_red-flags-receipts.png';

export default function Logo({ className = '', height = 'h-10' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Red flag mark */}
      <svg
        viewBox="0 0 24 24"
        className={height}
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 2.5v19" stroke="hsl(2 83% 50%)" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M4 4c2.5-1.4 5-1.4 8 0 3 1.4 6 1.4 8.5 0v9.5c-2.5 1.4-5.5 1.4-8.5 0-3-1.4-5.5-1.4-8 0V4Z"
          fill="hsl(2 83% 50%)"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display font-black tracking-[0.04em] text-parchment" style={{ fontSize: '0.95rem', lineHeight: 1 }}>
          RED FLAGS
        </span>
        <span className="font-mono-flag tracking-[0.42em] text-primary/90 [-webkit-text-stroke:0.5px_hsl(var(--parchment))]" style={{ fontSize: '0.5rem', lineHeight: 1.4 }}>
          &amp; RECEIPTS
        </span>
      </span>
    </span>
  );
}