import { secrets } from "base44:runtime";

const SHOP_DOMAIN = "ciekr2-j1.myshopify.com";
const API_VERSION = "2024-10";

const PRODUCTS_QUERY = `query {
  products(first: 100, sortKey: TITLE) {
    edges {
      node {
        handle
        title
        description
        productType
        tags
        onlineStoreUrl
        featuredImage { url }
        images(first: 8) { edges { node { url altText } } }
        variants(first: 50) {
          edges {
            node {
              title
              availableForSale
              price { amount currencyCode }
              selectedOptions { name value }
            }
          }
        }
        priceRange {
          minVariantPrice { amount currencyCode }
          maxVariantPrice { amount currencyCode }
        }
      }
    }
  }
}`;

function formatPrice(amount, currency) {
  const n = Number(amount || 0);
  const sym = currency === "USD" ? "$" : "";
  return `${sym}${n.toFixed(2)}`;
}

function normalizeTag(productType, tags) {
  const pt = (productType || "").trim();
  if (pt) return pt;
  const tagMap = ["Tops", "Bottoms", "Accessories", "Stationery", "Outerwear", "Fitness"];
  const matched = (tags || []).find((t) => tagMap.includes(t));
  return matched || "Apparel";
}

// Fallback normalizer for the public products.json feed (no auth)
function fromProductsJson(list) {
  return (list || []).map((p) => {
    const images = (p.images || []).map((i) => i.src).filter(Boolean);
    const img = images[0] || "";
    const variants = (p.variants || []).map((v) => ({
      title: v.title,
      available: v.available,
      price: formatPrice(v.price, "USD"),
      options: [],
    }));
    const prices = (p.variants || []).map((v) => Number(v.price || 0)).filter((n) => n > 0);
    let price = "";
    if (prices.length) {
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      price = formatPrice(String(min), "USD");
      if (max !== min) price = `${price} – ${formatPrice(String(max), "USD")}`;
    }
    const tag = normalizeTag(p.product_type, p.tags);
    const href = `https://${SHOP_DOMAIN}/products/${p.handle}`;
    return {
      tag,
      title: p.title,
      price,
      img,
      href,
      slug: p.handle,
      description: (p.body_html || "").replace(/<[^>]+>/g, "").trim(),
      images,
      variants,
    };
  });
}

export default async function(req) {
  // 1) Try the authenticated Storefront GraphQL API
  try {
    const token = secrets.get("SHOPIFY_STOREFRONT_TOKEN");
    if (token) {
      const url = `https://${SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": token,
        },
        body: JSON.stringify({ query: PRODUCTS_QUERY }),
      });

      // Storefront failed (bad token, 401, etc.) — fall through to the admin API
      if (!res.ok) {
        // (diagnostic only; the fallback below handles it)
        try { await res.text(); } catch {}
      } else {
        const json = await res.json();
        if (!json.errors) {
          const edges = json.data?.products?.edges || [];
          const products = edges.map(({ node }) => {
            const images = (node.images?.edges || []).map((e) => e.node.url).filter(Boolean);
            const img = images[0] || node.featuredImage?.url || "";
            const variants = (node.variants?.edges || []).map((e) => {
              const v = e.node;
              return {
                title: v.title,
                available: v.availableForSale,
                price: formatPrice(v.price?.amount, v.price?.currencyCode),
                options: v.selectedOptions || [],
              };
            });
            const minP = node.priceRange?.minVariantPrice;
            const maxP = node.priceRange?.maxVariantPrice;
            let price = formatPrice(minP?.amount, minP?.currencyCode);
            if (maxP && Number(maxP.amount) !== Number(minP?.amount)) {
              price = `${price} – ${formatPrice(maxP.amount, maxP.currencyCode)}`;
            }
            const tag = normalizeTag(node.productType, node.tags);
            const href = node.onlineStoreUrl || `https://${SHOP_DOMAIN}/products/${node.handle}`;
            return {
              tag,
              title: node.title,
              price,
              img,
              href,
              slug: node.handle,
              description: node.description || "",
              images,
              variants,
            };
          });
          return Response.json({ products, count: products.length, source: "storefront" });
        }
      }
    }
  } catch (e) {
    // fall through to admin API
  }

  // 2) Fallback: Admin GraphQL API (shpat_... token)
  try {
    const adminToken = secrets.get("SHOPIFY_ADMIN_TOKEN");
    if (adminToken) {
      const url = `https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/graphql.json`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": adminToken,
        },
        body: JSON.stringify({ query: PRODUCTS_QUERY }),
      });
      if (res.ok) {
        const json = await res.json();
        if (!json.errors) {
          const edges = json.data?.products?.edges || [];
          const products = edges.map(({ node }) => {
            const images = (node.images?.edges || []).map((e) => e.node.url).filter(Boolean);
            const img = images[0] || node.featuredImage?.url || "";
            const variants = (node.variants?.edges || []).map((e) => {
              const v = e.node;
              return {
                title: v.title,
                available: v.availableForSale,
                price: formatPrice(v.price, "USD"),
                options: v.selectedOptions || [],
              };
            });
            const minP = node.priceRange?.minVariantPrice;
            const maxP = node.priceRange?.maxVariantPrice;
            let price = formatPrice(minP?.amount, minP?.currencyCode);
            if (maxP && Number(maxP.amount) !== Number(minP?.amount)) {
              price = `${price} – ${formatPrice(maxP.amount, maxP.currencyCode)}`;
            }
            const tag = normalizeTag(node.productType, node.tags);
            const href = node.onlineStoreUrl || `https://${SHOP_DOMAIN}/products/${node.handle}`;
            return {
              tag,
              title: node.title,
              price,
              img,
              href,
              slug: node.handle,
              description: node.description || "",
              images,
              variants,
            };
          });
          return Response.json({ products, count: products.length, source: "admin" });
        }
      }
    }
  } catch (e) {
    // fall through to public feed
  }

  // 3) Fallback: public products.json feed (no auth required)
  try {
    const r = await fetch(`https://${SHOP_DOMAIN}/products.json?limit=250`);
    if (r.ok) {
      const json = await r.json();
      const products = fromProductsJson(json.products);
      return Response.json({ products, count: products.length, source: "products-json" });
    }
    const txt = await r.text();
    return Response.json({ error: `Public feed ${r.status}`, detail: txt.slice(0, 200) }, { status: 502 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}