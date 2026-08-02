// Single source of truth for shop products.
// `href` points to the live Shopify product page — the in-app product page
// uses this data and links out to Shopify for purchase ("connected but separate").

const RAW = [
  {
    tag: 'Bottoms',
    title: 'Red Flag Pattern Pencil Skirt',
    price: '$69.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15244353897538709014_2048.jpg?v=1785329183',
    href: 'https://shopredflags.myshopify.com/products/red-flag-pattern-pencil-skirt-womens-mid-waist-graphic-skirt',
    description: 'A sharp mid-waist pencil skirt cut from our signature red flag print. Tailored to command the room — and the receipts.',
  },
  {
    tag: 'Stationery',
    title: 'The Receipts Spiral Journal',
    price: '$19.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15941908692174830345_2048.jpg?v=1785328444',
    href: 'https://shopredflags.myshopify.com/products/the-receipts-spiral-journal-red-flag-minimalist-notebook',
    description: 'Keep your own receipts. A minimalist spiral journal branded with the red flag mark — made for the chronicles you\'ll never delete.',
  },
  {
    tag: 'Bottoms',
    title: 'Signature Red Flags Pencil Skirt',
    price: '$53.68',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/20260729123551-1f18b4a0-862a-6112-9f0e-eedfab1cfadf.png?v=1785328776',
    href: 'https://shopredflags.myshopify.com/products/signature-red-flags-pencil-skirt',
    description: 'The hero piece. Our signature red flags woven into a second-skin pencil skirt that says everything without a word.',
  },
  {
    tag: 'Tops',
    title: 'Baby Tee — "Red Flags Match My Outfit"',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349',
    href: 'https://shopredflags.myshopify.com/products/baby-tee-red-flags-match-my-outfit-graphic-crop-top',
    description: 'A cropped baby tee for the ones whose standards — and outfits — never waver. Soft, fitted, unbothered.',
  },
  {
    tag: 'Accessories',
    title: 'Lightweight Red and Black Checker Scarf',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/13460490385159931143_2048.jpg?v=1785329453',
    href: 'https://shopredflags.myshopify.com/products/lightweight-red-black-checker-scarf-modern-geometric-knit',
    description: 'A modern geometric knit scarf in red and black checks. Lightweight enough to tie, bold enough to remember.',
  },
  {
    tag: 'Accessories',
    title: 'Signature Lightweight Red Flag Fashion Scarf',
    price: '$39.99',
    img: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351',
    href: 'https://shopredflags.myshopify.com/products/light-scarf-red-flag-lightweight-fashion-scarf',
    description: 'The original. Our signature lightweight fashion scarf bearing the red flag print — the piece that started it all.',
  },
];

export const PRODUCTS = RAW.map((p) => ({ ...p, slug: p.href.split('/').pop() }));

export const CATEGORIES = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.tag)))];

export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);