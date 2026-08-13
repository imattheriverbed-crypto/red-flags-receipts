import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

export default function CommerceLinkBridge() {
  const navigate = useNavigate();
  const { openCart } = useCart();

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

      // Keep the Shop page inside the branded site instead of sending Home back to the intro flag.
      if (anchor.closest('.rf-shop') && href === '/') {
        event.preventDefault();
        navigate('/home');
        return;
      }

      // Old Shop cards still point directly to Shopify. Route known product URLs to the
      // matching on-site product page so sizes/colors/cart stay here until checkout.
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
