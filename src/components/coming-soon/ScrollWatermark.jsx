import React, { useState, useEffect } from 'react';
import Logo from './Logo';

// Faint logo watermark that slowly rotates as the user scrolls.
// Sits behind page content at ~5% opacity with an overlay blend so it reads
// as a subtle "receipt" watermark over the dark sections.
export default function ScrollWatermark() {
  const [rot, setRot] = useState(0);

  useEffect(() => {
    const onScroll = () => setRot(window.scrollY * 0.12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
      <div
        style={{ transform: `rotate(${rot}deg)`, opacity: 0.05, mixBlendMode: 'overlay' }}
        className="w-[70vh] h-[70vh] max-w-[90vw] max-h-[90vw]"
      >
        <Logo height="h-full" className="w-full h-full" />
      </div>
    </div>
  );
}