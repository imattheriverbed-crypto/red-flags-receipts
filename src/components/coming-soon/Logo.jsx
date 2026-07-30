import React from 'react';

export const LOGO_URL = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/5b6cad098_ChatGPTImageJul30202611_25_22AM.png';

export default function Logo({ className = '', height = 'h-10' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_URL}
        alt="Red Flags & Receipts"
        className={`${height} w-auto rounded-full bg-parchment`}
      />
    </span>
  );
}