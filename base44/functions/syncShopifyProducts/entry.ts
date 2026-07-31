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

function normalizeTag(node) {
  const pt = (node.productType || "").trim();
  if (pt) return pt;
  const tagMap = { Tops: 1, Bottoms: 1, Accessories: 1, Stationery: 1, Outerwear: 1, Fitness: 1 };
  const matched = (node.tags || []).find((t) => tagMap[t]);
  return matched || "Apparel";
}

export default async function(req) {
  try {
    const token = secrets.get("SHOPIFY_STOREFRONT_TOKEN");
    if (!token) return Response.json({ error: "Missing Shopify token" }, { status: 500 });

    const url = `https://${SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return Response.json({ error: `Shopify API ${res.status}`, detail: txt }, { status: 502 });
    }

    const json = await res.json();
    if (json.errors) {
      return Response.json({ error: "GraphQL errors", detail: json.errors }, { status: 502 });
    }

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
      const tag = normalizeTag(node);
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

    return Response.json({ products, count: products.length });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}