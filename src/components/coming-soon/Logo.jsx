import React from 'react';

const ORIGINAL_LOGO_URL = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/54dc4e552_generated_image.png';

export const LOGO_URL = ORIGINAL_LOGO_URL;

// Renders the official red-on-white badge as a white logo with a transparent
// background: invert + grayscale turns the red art into light gray and the
// white background into black, then mix-blend-mode:screen drops the black
// (shows the dark page behind) and lifts the gray toward white.
export default function Logo({ className = '', height = 'h-16' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={ORIGINAL_LOGO_URL}
        alt="Red Flags & Receipts"
        className={`${height} w-auto`}
        style={{
          filter: 'invert(1) grayscale(1) brightness(1.5) contrast(1.15)',
          mixBlendMode: 'screen',
        }}
      />
    </span>
  );
}