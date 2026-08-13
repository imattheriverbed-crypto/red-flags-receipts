import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { buildCheckoutUrl } from './shopify';

const STORAGE_KEY = 'red-flags-receipts-cart-v1';
const CartContext = createContext(null);

function loadCart() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((current) => {
      const existing = current.find((line) => String(line.variantId) === String(item.variantId));
      if (existing) {
        return current.map((line) =>
          String(line.variantId) === String(item.variantId)
            ? { ...line, quantity: line.quantity + (item.quantity || 1) }
            : line
        );
      }
      return [...current, { ...item, quantity: item.quantity || 1 }];
    });
    setIsOpen(true);
  };

  const updateQuantity = (variantId, quantity) => {
    const nextQuantity = Math.max(0, Number(quantity) || 0);
    setItems((current) =>
      nextQuantity === 0
        ? current.filter((line) => String(line.variantId) !== String(variantId))
        : current.map((line) =>
            String(line.variantId) === String(variantId)
              ? { ...line, quantity: nextQuantity }
              : line
          )
    );
  };

  const removeItem = (variantId) => {
    setItems((current) => current.filter((line) => String(line.variantId) !== String(variantId)));
  };

  const clearCart = () => setItems([]);
  const itemCount = items.reduce((sum, line) => sum + line.quantity, 0);
  const subtotalCents = items.reduce((sum, line) => sum + Number(line.priceCents || 0) * line.quantity, 0);
  const checkoutUrl = buildCheckoutUrl(items);

  const value = useMemo(
    () => ({
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      itemCount,
      subtotalCents,
      checkoutUrl,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [items, itemCount, subtotalCents, checkoutUrl, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
