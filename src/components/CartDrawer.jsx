import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { formatMoney } from '@/lib/shopify';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotalCents,
    checkoutUrl,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-black/70 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[90] h-full w-full max-w-md bg-[#090909] text-white border-l border-primary/30 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <p className="font-mono-flag text-[10px] uppercase tracking-[0.3em] text-primary">Your Bag</p>
            <h2 className="font-bebas text-3xl tracking-wide">RED FLAGS & RECEIPTS</h2>
          </div>
          <button onClick={closeCart} aria-label="Close cart" className="w-10 h-10 grid place-items-center border border-white/15 hover:border-primary hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-[calc(100%-190px)] overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="h-full min-h-64 grid place-items-center text-center">
              <div>
                <p className="font-bebas text-3xl mb-2">Your bag is empty.</p>
                <p className="text-white/50 text-sm">No red flags yet. Impressive.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.variantId} className="grid grid-cols-[82px_1fr] gap-4 border-b border-white/10 pb-5">
                  <div className="w-20 h-20 bg-white/5 overflow-hidden">
                    {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bebas text-xl leading-none">{item.title}</h3>
                        {item.variantTitle && item.variantTitle !== 'Default Title' && (
                          <p className="text-white/50 text-xs mt-1">{item.variantTitle}</p>
                        )}
                        <p className="text-primary font-semibold text-sm mt-2">{formatMoney(item.priceCents)}</p>
                      </div>
                      <button onClick={() => removeItem(item.variantId)} aria-label={`Remove ${item.title}`} className="text-white/40 hover:text-primary transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 inline-flex items-center border border-white/15">
                      <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="w-9 h-9 grid place-items-center hover:text-primary" aria-label="Decrease quantity">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-9 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="w-9 h-9 grid place-items-center hover:text-primary" aria-label="Increase quantity">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono-flag text-[10px] uppercase tracking-[0.25em] text-white/55">Subtotal</span>
            <strong className="text-lg">{formatMoney(subtotalCents)}</strong>
          </div>
          <a
            href={checkoutUrl || '#'}
            onClick={(event) => {
              if (!checkoutUrl) event.preventDefault();
            }}
            className={`flex min-h-12 items-center justify-center bg-primary px-5 text-center font-mono-flag text-xs font-bold uppercase tracking-[0.22em] transition-colors ${checkoutUrl ? 'hover:bg-white hover:text-black' : 'opacity-40 cursor-not-allowed'}`}
          >
            Checkout Securely
          </a>
          <p className="text-[10px] text-white/35 text-center mt-2">Checkout is completed securely by Shopify.</p>
        </div>
      </aside>
    </>
  );
}
