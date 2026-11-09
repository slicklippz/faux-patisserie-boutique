'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '@/types/product';
import confetti from 'canvas-confetti';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number, selectedAddon?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  subtotal: number;
  freeShippingThreshold: number;
  amountAwayFromFreeShipping: number;
  hasFreeShipping: boolean;
  freeShippingProgress: number;
  itemCount: number;
  discountCode: string;
  discountPercent: number;
  setDiscountCode: (code: string) => void;
  applyDiscountCode: (code: string) => boolean;
  removeDiscountCode: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const FREE_SHIPPING_THRESHOLD = 75;

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasCelebratedFreeShipping, setHasCelebratedFreeShipping] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('maison_patisserie_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to parse cart from local storage', e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('maison_patisserie_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to local storage', e);
    }
  }, [cart]);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const amountAwayFromFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  // Trigger celebration when threshold is reached
  useEffect(() => {
    if (hasFreeShipping && !hasCelebratedFreeShipping && cart.length > 0) {
      setHasCelebratedFreeShipping(true);
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#7E22CE', '#C2410C', '#4A5D4E', '#F472B6', '#FBBF24'],
      });
    } else if (!hasFreeShipping) {
      setHasCelebratedFreeShipping(false);
    }
  }, [hasFreeShipping, hasCelebratedFreeShipping, cart.length]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (product: Product, quantity = 1, selectedAddon?: string) => {
    if (product.isSold || !product.inStock) {
      showToast('This collector piece is currently marked as SOLD.');
      return;
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, selectedAddon: selectedAddon || item.selectedAddon }
            : item
        );
      }
      return [...prev, { product, quantity, selectedAddon }];
    });

    showToast(`Added "${product.title}" to your tote`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const applyDiscountCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SWEET10' || clean === 'PATISSERIE10') {
      setDiscountCode(clean);
      setDiscountPercent(0.10);
      showToast('Sweet! 10% holiday discount applied');
      return true;
    }
    if (clean === 'VIP20') {
      setDiscountCode(clean);
      setDiscountPercent(0.20);
      showToast('VIP Collector 20% discount unlocked!');
      return true;
    }
    showToast('Invalid discount code. Try "SWEET10" for 10% off');
    return false;
  };

  const removeDiscountCode = () => {
    setDiscountCode('');
    setDiscountPercent(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountAwayFromFreeShipping,
        hasFreeShipping,
        freeShippingProgress,
        itemCount,
        discountCode,
        discountPercent,
        setDiscountCode,
        applyDiscountCode,
        removeDiscountCode,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
