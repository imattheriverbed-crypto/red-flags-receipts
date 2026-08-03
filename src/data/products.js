// Single source of truth for shop products.
// Each product page lives inside this site and links to Shopify for checkout.

const RAW = [
  {
    tag: 'Accessories',
    title: 'The Original Red Flags Scarf',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351',
    href: 'https://shopredflags.myshopify.com/products/signature-lightweight-red-flag-fashion-scarf',
    tagline: 'The one that started it all.',
    description: 'Before there was a collection, there was a scarf. Covered in familiar warnings, excuses, and suspicious little sentences, The Original Red Flags Scarf turns hindsight into wearable art. Lightweight, versatile, and designed to start conversations, it can be worn around your neck, over your shoulders, as a head scarf, or tied to a favorite bag.',
  },
  {
    tag: 'Bottoms',
    title: 'Signature Red Flags Pencil Skirt',
    price: '$53.68',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/20260729123551-1f18b4a0-862a-6112-9f0e-eedfab1cfadf.png?v=1785328776',
    href: 'https://shopredflags.myshopify.com/products/signature-red-flags-pencil-skirt-1',
    tagline: 'I survived. I learned. I leveled up.',
    description: 'The signature pattern in a fitted pencil silhouette. Familiar phrases become a bold statement piece, finished with the message that matters most: I Survived. I Learned. I Leveled Up. Dress it up with heels or wear it with sneakers and a tee.',
  },
  {
    tag: 'Stationery',
    title: 'The Receipts Spiral Journal',
    price: '$24.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15941908692174830345_2048.jpg?v=1785328444',
    href: 'https://shopredflags.myshopify.com/products/the-receipts-spiral-journal',
    tagline: 'Write it down. Trust yourself. Keep the receipts.',
    description: 'A spiral journal for thoughts, plans, therapy notes, goals, and the details you never want to second-guess. Its clean, minimalist cover makes it easy to carry and easy to use every day. Your story is worth keeping.',
  },
  {
    tag: 'Accessories',
    title: 'Red & Black Checker Statement Scarf',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/13460490385159931143_2048.jpg?v=1785329453',
    href: 'https://shopredflags.myshopify.com/products/lightweight-red-and-black-checker-scarf',
    tagline: 'Classic pattern. Bold message.',
    description: 'A lightweight red-and-black checker scarf with an easy drape and unmistakable attitude. Tie it, layer it, or let it finish the outfit. Timeless enough for every season and bold enough to be remembered.',
  },
  {
    tag: 'Tops',
    title: 'Red Flags Match My Outfit Baby Tee',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349',
    href: 'https://shopredflags.myshopify.com/products/baby-tee-red-flags-match-my-outfit-graphic-crop-top-1',
    tagline: 'Match the outfit. Never repeat the pattern.',
    description: 'A fitted graphic baby tee made for the days when your standards and your outfit are equally clear. Soft, playful, and easy to style with the Signature Pencil Skirt, jeans, or anything that needs a little warning label.',
  },
  {
    tag: 'Tops',
    title: 'Blind Love Women’s Relaxed T-Shirt',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349',
    href: 'https://shopredflags.myshopify.com/products/womens-relaxed-blind-love-t-shirt',
    tagline: 'Love was not blind. The signs were just blurry.',
    description: 'A relaxed everyday tee about the clarity that arrives after the lesson. Comfortable, effortless, and designed to say something without trying too hard.',
  },
  {
    tag: 'Accessories',
    title: 'Signature Red Flags Backpack',
    price: '$59.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15244353897538709014_2048.jpg?v=1785329183',
    href: 'https://shopredflags.myshopify.com/products/backpack',
    tagline: 'Carry confidence. Leave the baggage behind.',
    description: 'A bold everyday backpack made for commuting, travel, school, and everything ahead. The signature design turns practical storage into a conversation piece. Pack your future, not your past.',
  },
  {
    tag: 'Limited Edition',
    title: 'Red Flags & Receipts No. 01 Playing Cards',
    price: '$29.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351',
    href: 'https://shopredflags.myshopify.com/products/red-flags-receipts-no-01-50-limited-edition-playing-cards',
    tagline: 'Play the cards. Do not ignore the signs.',
    description: 'A collectible deck created for game night, gifting, and display. No. 01 is limited to only 50 decks, making it one of the rarest pieces in the first Red Flags & Receipts release. When they are gone, they are gone.',
  },
];

export const PRODUCTS = RAW.map((p) => ({ ...p, slug: p.href.split('/').pop() }));
export const CATEGORIES = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.tag)))];
export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
