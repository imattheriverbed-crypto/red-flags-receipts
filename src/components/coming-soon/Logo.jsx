import React from 'react';

const ORIGINAL_LOGO_URL = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/59cd04c9e_generated_image.png';

export const LOGO_URL = ORIGINAL_LOGO_URL;

export default function Logo({ className = '', height = 'h-16' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={ORIGINAL_LOGO_URL}
        alt="Red Flags & Receipts"
        className={`${height} w-auto rounded-full ring-1 ring-primary/40`}
      />
    </span>
  );
}