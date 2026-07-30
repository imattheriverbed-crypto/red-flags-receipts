import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

// Sections on the landing page (/home) tracked for pre-launch attention.
const SECTIONS = [
  { id: 'hero', name: 'Hero / Share The Look' },
  { id: 'signature-print', name: 'Signature Print' },
  { id: 'signup', name: 'Signup Form' },
  { id: 'upcoming-drops', name: 'Upcoming Drops' },
  { id: 'footer', name: 'Footer' },
];

export default function SectionTracker() {
  const location = useLocation();

  useEffect(() => {
    const gtag = window.gtag;
    const track = (eventName, params) => {
      if (typeof gtag === 'function') gtag('event', eventName, params);
      try { base44.analytics.track({ eventName, properties: params }); } catch (e) { /* best-effort */ }
    };

    // Landing page view (manual, so it works alongside send_page_view: false)
    track('landing_page_view', { path: location.pathname });

    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            const section = SECTIONS.find((s) => s.id === entry.target.id);
            if (section) {
              track('section_view', { section_id: section.id, section_name: section.name });
            }
          }
        });
      },
      { threshold: [0.5] }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}