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
        <circle cx="50" cy="50" r="49" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
        {/* Inner ring */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="#D32F2F" strokeWidth="0.5" opacity="0.5" />

        {/* Top arc text "RED FLAGS" */}
        <path id="topArc" d="M 12 50 A 38 38 0 0 1 88 50" fill="none" />
        <text fill="#FFFFFF" fontSize="7" fontFamily="monospace" letterSpacing="2" fontWeight="bold">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">RED FLAGS</textPath>
        </text>

        {/* Bottom arc text "& RECEIPTS" */}
        <path id="bottomArc" d="M 14 50 A 37 37 0 0 0 86 50" fill="none" />
        <text fill="#FFFFFF" fontSize="7" fontFamily="monospace" letterSpacing="2" fontWeight="bold">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">& RECEIPTS</textPath>
        </text>

        {/* Center flag icon */}
        <g transform="translate(50,50)">
          {/* Flag pole */}
          <rect x="-1" y="-15" width="2" height="26" fill="#FFFFFF" rx="0.5" />
          {/* Flag - wavy red */}
          <path
            d="M 1 -15 Q 8 -12 14 -14 Q 18 -15 14 -9 Q 8 -7 1 -9 Z"
            fill="#D32F2F"
          />
          <path
            d="M 1 -9 Q 8 -6 14 -8 Q 18 -9 14 -3 Q 8 -1 1 -3 Z"
            fill="#D32F2F"
            opacity="0.85"
          />
          {/* Base dot */}
          <circle cx="0" cy="12" r="2" fill="#D32F2F" />
        </g>

        {/* Side stars */}
        <circle cx="8" cy="50" r="1.2" fill="#D32F2F" />
        <circle cx="92" cy="50" r="1.2" fill="#D32F2F" />
      </svg>
    </span>
  );
}