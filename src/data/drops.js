const EMPOWERMENT_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/9cac8a48c_Copilot_20260729_101403.png';
const PARTY_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/a8bd5e8c0_generated_image.png';
const SURVIVED_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/ef6328d93_generated_image.png';
const LANG_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/6df07dbb7_38bf0d10-9897-4f90-81d3-0ee9b46ac015.png';
const JOURNAL_IMG = 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/6d8774117_RedFlagsreceiptsjournalmockup.png';

export const FEATURED = {
  slug: 'signature-collection',
  name: 'Signature Collection',
  date: 'Aug 04',
  dateISO: '2026-08-04T21:00:00',
  status: '◆ Drops Aug 04 · 9PM ◆',
  statusStyle: 'bg-primary text-parchment',
  desc: 'Skirts, scarves, journals and the receipts to match. The first chapter drops Tuesday, August 4th at 9PM — nothing sells until then. Join the waitlist and be first in line.',
  img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351',
};

export const UPCOMING = [
  {
    slug: 'pets',
    name: 'PETS.',
    date: 'Aug 08',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: PARTY_IMG,
    desc: 'Ramsey approved. Apparel for the ones who love you unconditionally — outfit your sidekick in pieces that speak their language.',
  },
  {
    slug: 'bags',
    name: 'BAGS.',
    date: 'Aug 15',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: SURVIVED_IMG,
    desc: 'Totes, backpacks, purses & luggage. Some lessons become scars. Some become style. Carry the flags with you.',
  },
  {
    slug: '50-lang',
    name: '50 LANG × BLESS',
    date: 'Aug 22',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: LANG_IMG,
    desc: 'Two ways to close the chapter — "go fuck yourself" in 50 languages, or "bless your heart" with a smile. Distressed screen print. Choose your goodbye.',
  },
  {
    slug: 'receipts-journal',
    name: 'RECEIPTS JOURNAL',
    date: 'Aug 29',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: JOURNAL_IMG,
    desc: 'An exclusive, extensive recorder of receipts. Track the patterns, save the evidence, protect your peace — 100+ pages designed to help you see it clear and take your power back.',
  },
];

export function getDropBySlug(slug) {
  return UPCOMING.find((d) => d.slug === slug);
}