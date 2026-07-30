import React from 'react';

const LOGO_IMAGE_URL = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/7140eb6a9_CopyofScarfDesignSwap3.png';

export const LOGO_URL = LOGO_IMAGE_URL;

export default function Logo({ className = '', height = 'h-16' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_IMAGE_URL}
        alt="Red Flags & Receipts"
        className={`${height} w-auto rounded-full`}
      />
    </span>
  );
}