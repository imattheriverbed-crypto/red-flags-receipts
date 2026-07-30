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
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/86e0cee69_generated_image.png',
    desc: 'Ramsey approved. Apparel for the ones who love you unconditionally — outfit your sidekick in pieces that speak their language.',
    products: ['Signature Bandana', 'Sidekick Tee', 'Good Boy Hoodie', 'Collar Charm'],
  },
  {
    slug: 'travel',
    name: 'TRAVEL.',
    date: 'Aug 15',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/8f33092b5_generated_image.png',
    desc: 'Totes, backpacks, purses & luggage. Some lessons become scars. Some become style. Carry the flags with you — wherever you go.',
    products: ['Receipts Tote', 'Warning Crossbody', '36-Flag Backpack', 'Carry-On Flag'],
  },
  {
    slug: 'fuck-you',
    name: 'FUCK YOU.',
    date: 'Aug 22',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/8c9f2a956_generated_image.png',
    desc: 'Two ways to close the chapter — "go fuck yourself" in 50 languages, or "bless your heart" with a smile. Distressed screen print. Choose your goodbye.',
    products: ['50 Languages Tee', 'Bless Your Heart Tee', 'GFY Hoodie', 'Goodbye Cap'],
  },
  {
    slug: 'receipts-journal',
    name: 'RECEIPTS JOURNAL',
    date: 'Aug 29',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/c119e4112_generated_image.png',
    desc: 'An exclusive, extensive recorder of receipts. Track the patterns, save the evidence, protect your peace — 100+ pages designed to help you see it clear and take your power back.',
    products: ['Receipts Journal', 'Evidence Notebook', 'Pattern Tracker', 'Red Flag Pen Set'],
  },
  {
    slug: 'outerwear',
    name: 'OUTERWEAR.',
    date: 'Sep 05',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/04f5f7b63_generated_image.png',
    desc: 'Trenches, bombers & coats lined in the warning print. Wrap yourself in the red flags you survived — outerwear that tells the story before you say a word.',
    products: ['Warning Trench', 'Flag-Lined Bomber', 'Receipts Overcoat', 'Signal Cape'],
  },
  {
    slug: 'fitness',
    name: 'FITNESS.',
    date: 'Sep 12',
    status: 'Upcoming',
    statusStyle: 'bg-ink/70 text-parchment border border-parchment/30',
    img: 'https://media.base44.com/images/public/6a5a113aa6cf7e3091bf0eec/f8d3eb67f_generated_image.png',
    desc: 'Activewear for the comeback. Sports bras, leggings & wraps built for the version of you that trains through the heartbreak. Sweat out the receipts.',
    products: ['Power Sports Bra', 'Flag Sash Leggings', 'Survival Hoodie', 'Reset Cap'],
  },
];

export function getDropBySlug(slug) {
  return UPCOMING.find((d) => d.slug === slug);
}