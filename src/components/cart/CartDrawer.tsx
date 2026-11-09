'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/types/product';
import { CheckoutModal } from './CheckoutModal';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Truck,
  ShieldCheck,
  Check,
  Tag
} from 'lucide-react';

// AOV Gamification Upsell Items (Baymard CRO recommendation)
const UPSELL_ITEMS: Product[] = [
  {
    id: 'upsell-hooks',
    title: 'Velvet Ribbon Ornament Hooks (Set of 12)',
    subtitle: 'Wired velvet ties for delicate evergreen boughs',
    price: 8,
    category: 'Custom Requests',
    images: ['/products/citrus-tropics-trio.jpg'],
    inStock: true,
    stockCount: 50,
    scarcityBadge: 'Popular Add-On',
    isSold: false,
    description: 'Pack of 12 wired velvet ties for delicate boughs.',
    materials: ['Satin velvet', 'Bendable copper wire'],
    dimensions: '6" length',
    stylingTip: 'Tie into delicate bows on your Christmas tree tips.',
    shipsInDays: 'Ships together',
    rating: 5.0,
    reviewCount: 92,
  },
  {
    id: 'upsell-box',
    title: 'Heirloom Archival Storage Box',
    subtitle: 'Crush-proof foam divider box for safe off-season keeping',
    price: 14,
    category: 'Cake Slices & Gift Boxes',
    images: ['/products/velvet-berry-cake-slice.jpg'],
    inStock: true,
    stockCount: 30,
    scarcityBadge: 'Keepsake Safe',
    isSold: false,
    description: 'Rigid collector box designed to protect your confections year after year.',
    materials: ['Lined bookboard', 'Pre-cut foam insert'],
    dimensions: '10" x 8" x 4"',
    stylingTip: 'Store in a temperature controlled closet for decades.',
    shipsInDays: 'Ships together',
    rating: 5.0,
    reviewCount: 47,
  },
  {
    id: 'upsell-donut-pick',
    title: 'Hand-Piped Mini Pastel Donut Tree Pick',
    subtitle: 'Single accent floral pick frosted with miniature charms',
    price: 16,
    category: 'Donut Wreaths',
    images: ['/products/pastel-donuts-set6.jpg'],
    inStock: true,
    stockCount: 15,
    scarcityBadge: 'Limited Pick',
    isSold: false,
    description: 'Slender wired floral pick topped with a mini faux donut.',
    materials: ['Floral wire', 'Polymer foam clay'],
    dimensions: '12" pick stem',
    stylingTip: 'Insert directly into the center of wreaths or garlands.',
    shipsInDays: 'Ships together',
    rating: 4.9,
    reviewCount: 36,
  },
];

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    addToCart,
    subtotal,
    freeShippingThreshold,
    amountAwayFromFreeShipping,
    hasFreeShipping,
    freeShippingProgress,
    itemCount,
    discountCode,
    discountPercent,
    applyDiscountCode,
    removeDiscountCode,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = Number((subtotal * discountPercent).toFixed(2));
  const shipping = hasFreeShipping ? 0 : 6.95;
  const finalTotal = Number((subtotal - discountAmount + shipping).toFixed(2));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyDiscountCode(inputCode);
      setInputCode('');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#1C1917]/60 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#1C1917]/10">
            
            {/* Top Drawer Header */}
            <div className="p-5 bg-white border-b border-[#1C1917]/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#7E22CE]">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-[#1C1917]">
                    Your Confection Tote
                  </h2>
                  <p className="text-[11px] text-[#4A5D4E] font-medium">
                    {itemCount} {itemCount === 1 ? 'Handmade Piece' : 'Handmade Pieces'}
                  </p>
                </div>
              </div>

              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center text-[#1C1917]/60 hover:text-[#1C1917] transition"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zeigarnik Effect Free Shipping Meter */}
            <div className="p-4 bg-gradient-to-r from-[#FFF9F5] to-[#FAF5F0] border-b border-[#1C1917]/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[#1C1917]">
                  <Truck className="w-4 h-4 text-[#7E22CE]" />
                  {hasFreeShipping ? (
                    <strong className="text-emerald-700">🎉 FREE Priority Shipping Unlocked!</strong>
                  ) : (
                    <span>
                      Add <strong className="text-[#7E22CE]">${amountAwayFromFreeShipping.toFixed(2)}</strong> for Free Priority Shipping
                    </span>
                  )}
                </span>
                <span className="text-[11px] text-[#1C1917]/50 font-bold">{freeShippingProgress}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full bg-[#1C1917]/10 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    hasFreeShipping
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                      : 'bg-gradient-to-r from-[#7E22CE] to-[#C2410C]'
                  }`}
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>

              {!hasFreeShipping && (
                <p className="text-[10px] text-[#1C1917]/60 italic">
                  💡 Ships safely in crush-proof packaging from Florida
                </p>
              )}
            </div>

            {/* Scrollable Center Area: Cart Items + Upsells */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
              
              {/* If Empty */}
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FAF0E6] flex items-center justify-center mx-auto text-[#C2410C]">
                    <ShoppingBag className="w-8 h-8 opacity-60" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    Your tote is empty
                  </h3>
                  <p className="text-xs text-[#1C1917]/60 max-w-xs mx-auto">
                    Explore our small-batch cakes, waffle cones, and pastel donut wreaths to begin your collection.
                  </p>
                  <button
                    onClick={closeCart}
                    className="inline-flex items-center gap-1.5 bg-[#2D5A3D] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#1E3F2B] transition shadow-md"
                  >
                    <span>Explore Vette's Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Item List */
                <div className="space-y-3.5">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3.5 bg-white p-3.5 rounded-2xl border border-[#1C1917]/10 shadow-sm"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-18 h-22 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-serif text-xs font-bold text-[#1C1917] line-clamp-1">
                              {item.product.title}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-stone-400 hover:text-rose-600 transition p-0.5"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {item.selectedAddon && (
                            <p className="text-[10px] text-[#4A5D4E] font-medium line-clamp-1 mt-0.5">
                              ✨ {item.selectedAddon}
                            </p>
                          )}

                          <p className="text-xs font-bold text-[#7E22CE] mt-1">
                            ${(item.product.price * item.quantity).toFixed(2)}
                            {item.quantity > 1 && (
                              <span className="text-[10px] text-[#1C1917]/50 font-normal ml-1">
                                (${item.product.price.toFixed(2)} ea)
                              </span>
                            )}
                          </p>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[#1C1917]/15 rounded-lg bg-stone-50">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-stone-200 rounded-l-lg transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-[#1C1917]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-stone-200 rounded-r-lg transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-[10px] text-[#4A5D4E] font-medium">
                            Ready to ship
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 1-Click "Complete the Set" Upsell Section (Baymard AOV Gamification) */}
              {cart.length > 0 && (
                <div className="pt-3 border-t border-[#1C1917]/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-[#1C1917] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
                      <span>Complete Your Holiday Set</span>
                    </span>
                    <span className="text-[10px] text-[#4A5D4E] font-medium uppercase tracking-wider">
                      1-Click Studio Add-On
                    </span>
                  </div>

                  <div className="space-y-2">
                    {UPSELL_ITEMS.map((upsell) => {
                      const isInCart = cart.some((i) => i.product.id === upsell.id);
                      if (isInCart) return null;

                      return (
                        <div
                          key={upsell.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#1C1917]/10 hover:border-[#7E22CE]/40 transition group"
                        >
                          <div className="flex items-center gap-2.5">
                            <img
                              src={upsell.images[0]}
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <p className="text-xs font-semibold text-[#1C1917] line-clamp-1 group-hover:text-[#7E22CE] transition-colors">
                                {upsell.title}
                              </p>
                              <p className="text-[11px] font-bold text-[#7E22CE]">
                                +${upsell.price.toFixed(2)}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => addToCart(upsell, 1)}
                            className="bg-[#FAF8F5] hover:bg-[#7E22CE] hover:text-white text-[#1C1917] text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#1C1917]/15 transition active:scale-95 flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Discount Code Form */}
              {cart.length > 0 && (
                <div className="pt-2">
                  {discountCode ? (
                    <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Tag className="w-3.5 h-3.5" />
                        Code &quot;{discountCode}&quot; Applied (-{(discountPercent * 100)}%)
                      </span>
                      <button
                        onClick={removeDiscountCode}
                        className="text-[11px] text-rose-600 hover:underline font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Discount code (try SWEET10)"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        className="flex-1 bg-white border border-[#1C1917]/15 px-3 py-2 rounded-xl text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]/30"
                      />
                      <button
                        type="submit"
                        className="bg-[#1C1917] hover:bg-[#2E2825] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>

            {/* Bottom Drawer Checkout Footer */}
            {cart.length > 0 && (
              <div className="p-5 bg-white border-t border-[#1C1917]/10 space-y-3.5">
                
                {/* Financial Totals Breakdown */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#1C1917]/70">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Discount ({discountCode}):</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#1C1917]/70">
                    <span>USPS Priority Shipping:</span>
                    <span>
                      {shipping === 0 ? (
                        <strong className="text-emerald-700">FREE</strong>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#1C1917] pt-2 border-t border-[#1C1917]/10">
                    <span>Estimated Total:</span>
                    <span className="text-xl text-[#7E22CE]">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* 1-Click Guest Checkout Button (CRO Baymard Highlight) */}
                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full bg-[#2D5A3D] hover:bg-[#1E3F2B] active:scale-[0.99] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 group transition"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>1-Click Fast Guest Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Payment Brand Trust Badges SVG Underneath */}
                <div className="space-y-1.5 text-center">
                  <div className="flex items-center justify-center gap-3 text-stone-500 text-xs">
                    <span className="font-bold tracking-tight"> Pay</span>
                    <span>•</span>
                    <span className="font-bold tracking-tight">G Pay</span>
                    <span>•</span>
                    <span className="font-semibold">VISA</span>
                    <span>•</span>
                    <span className="font-semibold">Mastercard</span>
                    <span>•</span>
                    <span className="font-semibold text-pink-600">Klarna</span>
                  </div>
                  <p className="text-[10px] text-[#4A5D4E] font-medium">
                    🔒 Zero Marketplace Fees • Ships from Florida in Crush-Proof Boxes
                  </p>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />
    </>
  );
}
