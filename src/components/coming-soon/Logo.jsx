import React from 'react';

export const LOGO_URL = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f69e0d30b_red-flags-receipts.png';

export default function Logo({ className = '', height = 'h-10' }) {
  return (
    <img
      src={LOGO_URL}
      alt="Red Flags & Receipts"
      className={`${height} w-auto object-contain`}
    />
  );
}