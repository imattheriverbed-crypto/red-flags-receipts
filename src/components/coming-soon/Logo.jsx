import React from 'react';

export default function Logo({ className = '', height = 'h-16', stampOnLoad = false }) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Red Flags & Receipts">
      <svg
        viewBox="0 0 200 200"
        className={`${height} w-auto ${stampOnLoad ? 'stamp-in' : ''}`}
        role="img"
        aria-label="Red Flags & Receipts"
      >
        <defs>
          <path id="rfs-top-arc" d="M 26,100 A 74,74 0 0 1 174,100" fill="none" />
          <path id="rfs-bottom-arc" d="M 26,100 A 74,74 0 0 0 174,100" fill="none" />
        </defs>

        {/* Concentric rings */}
        <circle cx="100" cy="100" r="96" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />

        {/* Top text */}
        <text fill="#FFFFFF" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="700"
          letterSpacing="2.2" textAnchor="middle" stroke="#FFFFFF" strokeWidth="0.3">
          <textPath href="#rfs-top-arc" startOffset="50%">RED FLAGS &amp; RECEIPTS</textPath>
        </text>

        {/* Bottom text */}
        <text fill="#FFFFFF" fontFamily="'Inter', sans-serif" fontSize="8.5" fontWeight="600"
          letterSpacing="1.8" textAnchor="middle" stroke="#FFFFFF" strokeWidth="0.3">
          <textPath href="#rfs-bottom-arc" startOffset="50%">STREETWEAR EST. 2020</textPath>
        </text>

        {/* Central flag, tilted slightly right */}
        <g transform="rotate(8 100 100)">
          {/* pole */}
          <line x1="80" y1="58" x2="80" y2="142" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
          {/* pole finial */}
          <circle cx="80" cy="58" r="3" fill="#FFFFFF" />
          {/* fabric */}
          <path
            d="M80,66 C 92,62 104,70 122,64 L 122,94 C 104,100 92,92 80,96 Z"
            fill="#E11D48"
            stroke="#FFFFFF"
            strokeWidth="0.6"
          />
          {/* fold highlight */}
          <path
            d="M80,79 C 92,75 104,83 122,77 L 122,94 C 104,100 92,92 80,96 Z"
            fill="#BE123C"
            opacity="0.55"
          />
        </g>
      </svg>
    </span>
  );
}