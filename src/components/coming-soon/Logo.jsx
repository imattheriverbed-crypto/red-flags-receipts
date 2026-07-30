import React from 'react';

export default function Logo({ className = '', height = 'h-16' }) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Red Flags & Receipts">
      <svg
        viewBox="0 0 200 200"
        className={`${height} w-auto`}
        role="img"
        aria-label="Red Flags & Receipts"
      >
        <defs>
          <path id="rfs-top-arc" d="M 26,100 A 74,74 0 0 1 174,100" fill="none" />
          <path id="rfs-bottom-arc" d="M 26,100 A 74,74 0 0 0 174,100" fill="none" />
        </defs>

        {/* Concentric rings */}
        <circle cx="100" cy="100" r="96" fill="none" stroke="#EAEAEA" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#EAEAEA" strokeWidth="1.2" />

        {/* Top text */}
        <text fill="#EAEAEA" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="700"
          letterSpacing="2.2" textAnchor="middle">
          <textPath href="#rfs-top-arc" startOffset="50%">RED FLAGS &amp; RECEIPTS</textPath>
        </text>

        {/* Bottom text */}
        <text fill="#EAEAEA" fontFamily="'Inter', sans-serif" fontSize="8.5" fontWeight="600"
          letterSpacing="1.8" textAnchor="middle">
          <textPath href="#rfs-bottom-arc" startOffset="50%">STREETWEAR EST. 2020</textPath>
        </text>

        {/* Central flag, tilted slightly right */}
        <g transform="rotate(8 100 100)">
          {/* pole */}
          <line x1="80" y1="62" x2="80" y2="138" stroke="#EAEAEA" strokeWidth="2" strokeLinecap="round" />
          {/* fabric */}
          <path
            d="M80,70 C 92,66 104,74 120,68 L 120,93 C 104,99 92,91 80,95 Z"
            fill="#E11D48"
          />
          {/* subtle fold highlight */}
          <path
            d="M80,82 C 92,78 104,86 120,80 L 120,93 C 104,99 92,91 80,95 Z"
            fill="#BE123C"
            opacity="0.55"
          />
        </g>
      </svg>
    </span>
  );
}