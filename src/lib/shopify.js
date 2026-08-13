const SHOPIFY_STORE = 'https://shopredflags.myshopify.com';

export async function fetchShopifyProduct(handle) {
  const response = await fetch(`${SHOPIFY_STORE}/products/${handle}.js`, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Unable to load Shopify product (${response.status})`);
  }

  return response.json();
}

export function formatMoney(cents, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format((Number(cents) || 0) / 100);
}

export function buildCheckoutUrl(lines) {
  const validLines = lines.filter((line) => line.variantId && line.quantity > 0);
  if (!validLines.length) return null;

  const cartPath = validLines
    .map((line) => `${line.variantId}:${line.quantity}`)
    .join(',');

  return `${SHOPIFY_STORE}/cart/${cartPath}?checkout`;
}

export { SHOPIFY_STORE };
