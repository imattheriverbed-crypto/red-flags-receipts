import React from 'react';

export const LOGO_URL = '';

export default function Logo({ className = '', height = 'h-16' }) {
  const sizeMap = {
    'h-10': 40,
    'h-12': 48,
    'h-14': 56,
    'h-16': 64,
    'h-20': 80,
    'h-24': 96,
  };
  const size = sizeMap[height] || 64;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Red Flags & Receipts"
      >
        {/* Outer ring */}
        <circle cx="50" cy="50" r="49" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
        {/* Inner ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#FFFFFF" strokeWidth="0.6" />

        {/* Top arc text "RED FLAGS & RECEIPTS" */}
        <path id="topArc" d="M 12 50 A 38 38 0 0 1 88 50" fill="none" />
        <text fill="#FFFFFF" fontSize="5.5" fontFamily="monospace" letterSpacing="1.4" fontWeight="bold">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">RED FLAGS &amp; RECEIPTS</textPath>
        </text>

        {/* Bottom arc text "STREETWEAR EST. 2020" */}
        <path id="bottomArc" d="M 14 50 A 37 37 0 0 0 86 50" fill="none" />
        <text fill="#FFFFFF" fontSize="5.5" fontFamily="monospace" letterSpacing="1.4" fontWeight="bold">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">STREETWEAR EST. 2020</textPath>
        </text>

        {/* Center flag icon - tilted left, wavy right edge, pole */}
        <g transform="translate(50,50) rotate(-12)">
          {/* Flag pole */}
          <rect x="-0.8" y="-16" width="1.4" height="30" fill="#FFFFFF" rx="0.3" />
          {/* Flag - wavy right edge */}
          <path
            d="M 0.6 -16
               L 16 -14
               Q 13 -10 16 -7
               Q 13 -4 16 -1
               L 0.6 -3
               Z"
            fill="#9D2B3D"
          />
          {/* Pole base */}
          <circle cx="-0.1" cy="15" r="1.6" fill="#FFFFFF" />
        </g>

        {/* Side dots */}
        <circle cx="8" cy="50" r="0.8" fill="#FFFFFF" />
        <circle cx="92" cy="50" r="0.8" fill="#FFFFFF" />
      </svg>
    </span>
  );
}