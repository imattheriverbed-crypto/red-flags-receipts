import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

const MOCKUPS = {
  scarf: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/6717550338414912274_2048.jpg?v=1785328351',
  skirt: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/20260729123551-1f18b4a0-862a-6112-9f0e-eedfab1cfadf.png?v=1785328776',
  journal: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15941908692174830345_2048.jpg?v=1785328444',
  apparel: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/9815999074877441377_2048.jpg?v=1785329349',
  backpack: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/15244353897538709014_2048.jpg?v=1785329183',
  checker: 'https://cdn.shopify.com/s/files/1/0762/8036/5223/files/13460490385159931143_2048.jpg?v=1785329453',
};

function applyShopMockups() {
  const shop = document.querySelector('.rf-shop');
  if (!shop) return;

  const hero = shop.querySelector('.shop-hero');
  if (hero) {
    hero.style.backgroundImage = `linear-gradient(90deg,rgba(0,0,0,.96) 0%,rgba(0,0,0,.82) 43%,rgba(0,0,0,.20) 72%,rgba(0,0,0,.08) 100%), url("${MOCKUPS.scarf}")`;
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundSize = 'cover';
  }

  const titleMap = [
    ['Red Flag Hoodie', MOCKUPS.apparel],
    ['Signature Red Flag Scarf', MOCKUPS.scarf],
    ['Protect Your Peace Hat', MOCKUPS.checker],
    ['Close Chapters Tote', MOCKUPS.backpack],
    ['Signature Scarf', MOCKUPS.scarf],
    ['Signature Red Flags Pencil Skirt', MOCKUPS.skirt],
    ['The Receipts Spiral Journal', MOCKUPS.journal],
    ['Signature Red Flags Backpack', MOCKUPS.backpack],
  ];

  shop.querySelectorAll('.product-card').forEach((card) => {
    const title = card.querySelector('.product-card__title')?.textContent?.trim() || '';
    const match = titleMap.find(([name]) => name === title);
    const image = card.querySelector('.product-card__image');
    if (match && image) image.src = match[1];
  });

  const panelMockups = {
    apparel: [MOCKUPS.apparel, MOCKUPS.apparel, MOCKUPS.skirt, MOCKUPS.apparel],
    accessories: [MOCKUPS.scarf, MOCKUPS.checker, MOCKUPS.backpack, MOCKUPS.scarf],
    digital: [MOCKUPS.journal, MOCKUPS.journal, MOCKUPS.journal, MOCKUPS.journal],
  };

  Object.entries(panelMockups).forEach(([id, images]) => {
    const panel = shop.querySelector(`#${id}`);
    if (!panel) return;
    panel.querySelectorAll('.mini-product img').forEach((img, index) => {
      img.src = images[index % images.length];
    });
  });
}

export default function CommerceLinkBridge() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openCart } = useCart();

  useEffect(() => {
    const timer = window.setTimeout(applyShopMockups, 0);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const bag = target.closest('[aria-label="Shopping bag"]');
      if (bag) {
        event.preventDefault();
        openCart();
        return;
      }

      const anchor = target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      if (anchor.closest('.rf-shop') && href === '/') {
        event.preventDefault();
        navigate('/home');
        return;
      }

      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.hostname === 'shopredflags.myshopify.com' && url.pathname.startsWith('/products/')) {
          const handle = url.pathname.split('/').filter(Boolean)[1];
          if (handle) {
            event.preventDefault();
            navigate(`/shop/${handle}`);
          }
        }
      } catch {
        // Ignore malformed or non-navigation links.
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, openCart]);

  return null;
}
