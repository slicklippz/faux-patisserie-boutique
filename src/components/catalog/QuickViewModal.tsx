'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  Layers,
  Ruler,
  ShoppingBag,
  Check,
  ChevronDown,
  ChevronUp,
  Gift,
  ArrowRight,
  Heart,
  BookmarkCheck
} from 'lucide-react';

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddon, setSelectedAddon] = useState<string>('Standard Satin Ribbon (Included)');
  const [isCraftsmanshipOpen, setIsCraftsmanshipOpen] = useState(true);
  const [isPlacementOpen, setIsPlacementOpen] = useState(true);

  // Reset state on open
  useEffect(() => {
    if (quickViewProduct) {
      setSelectedImageIndex(0);
      setQuantity(1);
      setSelectedAddon('Standard Satin Ribbon (Included)');
      setIsCraftsmanshipOpen(true);
      setIsPlacementOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFreeShipping = product.price >= 75;

  // Estimated delivery calculation (3-4 days from today)
  const today = new Date();
  const deliveryStart = new Date(today);
  deliveryStart.setDate(today.getDate() + 3);
  const deliveryEnd = new Date(today);
  deliveryEnd.setDate(today.getDate() + 5);

  const formattedDelivery = `${deliveryStart.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })} – ${deliveryEnd.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })}`;

  const handleAdd = () => {
    addToCart(product, quantity, selectedAddon);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/70 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Modal Card */}
        <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#2D5A3D]/20 overflow-hidden transform transition-all my-8">
          
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1C1917] shadow-md flex items-center justify-center transition active:scale-95"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white border-b md:border-b-0 md:border-r border-[#2D5A3D]/15">
              <div className="space-y-4">
                {/* Main Hero Photo View */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-100 shadow-inner group">
                  <img
                    src={product.images[selectedImageIndex] || product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* Scarcity badge in modal */}
                  <div className="absolute top-3 left-3">
                    {product.isSold ? (
                      <span className="bg-[#1C1917] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        SOLD OUT ARCHIVE
                      </span>
                    ) : (
                      <span className="bg-white/95 backdrop-blur-sm text-[#1E3F2B] text-[11px] font-bold px-3 py-1 rounded-full border border-[#2D5A3D]/20 flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-[#2D5A3D]" />
                        {product.scarcityBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnails row */}
                {product.images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                          selectedImageIndex === idx
                            ? 'border-[#2D5A3D] ring-2 ring-[#2D5A3D]/25 scale-105'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Vette's Crafting Trust Snippet */}
              <div className="mt-6 pt-4 border-t border-[#2D5A3D]/15 flex items-center justify-between text-xs text-[#1C1917]/70">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#2D5A3D]" />
                  <span>Crush-Proof Packaging Guaranteed</span>
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                  <span>Made by Hand with Joy</span>
                </span>
              </div>
            </div>

            {/* Right Column: Narrative & Purchase Controls */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#2D5A3D]">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full text-xs font-semibold text-emerald-900">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{product.rating.toFixed(1)}</span>
                    <span className="text-emerald-700/60 font-normal">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#1C1917]/70 mt-1 leading-snug">
                    {product.subtitle}
                  </p>
                </div>

                {/* Creator Credit Badge */}
                {product.creatorCredit && (
                  <div className="p-2.5 rounded-xl bg-[#EDF5F0] border border-[#2D5A3D]/20 text-xs text-[#1E3F2B] flex items-center gap-2">
                    <BookmarkCheck className="w-4 h-4 text-[#2D5A3D] flex-shrink-0" />
                    <span className="font-medium">{product.creatorCredit}</span>
                  </div>
                )}

                {/* Upfront Cost Transparency Block */}
                <div className="p-4 rounded-2xl bg-white border border-[#2D5A3D]/20 shadow-sm space-y-2">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-sans text-3xl font-bold text-[#1C1917]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.compareAtPrice && (
                        <span className="text-sm text-[#1C1917]/40 line-through">
                          ${product.compareAtPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold text-[#2D5A3D] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {product.inStock ? `${product.stockCount} Available in Studio` : 'Archived Collector Piece'}
                    </span>
                  </div>

                  {/* Guaranteed Shipping & Delivery Estimate */}
                  <div className="pt-2 border-t border-[#1C1917]/5 flex items-start gap-2.5 text-xs text-[#1C1917]/80">
                    <Truck className="w-4 h-4 text-[#2D5A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1C1917]">
                        {isFreeShipping
                          ? '🎉 Free Priority Shipping Included'
                          : 'Flat $6.95 Priority Shipping (Free on orders $75+)'}
                      </p>
                      <p className="text-[11px] text-[#1C1917]/60">
                        Estimated arrival: <strong className="text-[#1C1917]">{formattedDelivery}</strong> with tracking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-xs sm:text-sm text-[#1C1917]/80 leading-relaxed font-sans">
                  {product.description}
                </p>

                {/* Craftsmanship & Scale Guides */}
                <div className="space-y-2 pt-1">
                  {/* Craftsmanship Breakdown */}
                  <div className="border border-[#2D5A3D]/15 rounded-xl bg-white overflow-hidden">
                    <button
                      onClick={() => setIsCraftsmanshipOpen(!isCraftsmanshipOpen)}
                      className="w-full px-4 py-2.5 text-left font-sans text-xs font-bold text-[#1C1917] flex items-center justify-between hover:bg-stone-50"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#2D5A3D]" />
                        <span>Craftsmanship &amp; Materials</span>
                      </span>
                      {isCraftsmanshipOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {isCraftsmanshipOpen && (
                      <div className="px-4 pb-3 pt-1 text-xs text-[#1C1917]/80 space-y-1.5 border-t border-[#1C1917]/5 bg-[#EDF5F0]/30">
                        {product.materials.map((mat, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]"></span>
                            <span>{mat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Scale & Placement Guide */}
                  <div className="border border-[#2D5A3D]/15 rounded-xl bg-white overflow-hidden">
                    <button
                      onClick={() => setIsPlacementOpen(!isPlacementOpen)}
                      className="w-full px-4 py-2.5 text-left font-sans text-xs font-bold text-[#1C1917] flex items-center justify-between hover:bg-stone-50"
                    >
                      <span className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-[#C2410C]" />
                        <span>Dimensions &amp; Tree Placement</span>
                      </span>
                      {isPlacementOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {isPlacementOpen && (
                      <div className="px-4 pb-3 pt-1 text-xs text-[#1C1917]/80 space-y-2 border-t border-[#1C1917]/5 bg-[#EDF5F0]/30">
                        <p>
                          <strong className="text-[#1C1917]">Dimensions:</strong> {product.dimensions}
                        </p>
                        <p className="italic text-[#2D5A3D]">
                          💡 <strong className="font-semibold text-[#1C1917]">Styling Tip:</strong> {product.stylingTip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Finish Addon */}
                {!product.isSold && (
                  <div className="pt-1">
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">
                      Hanging Ribbon Finish:
                    </label>
                    <select
                      value={selectedAddon}
                      onChange={(e) => setSelectedAddon(e.target.value)}
                      className="w-full bg-white border border-[#2D5A3D]/25 rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]/30"
                    >
                      <option value="Standard Satin Ribbon (Included)">Standard Satin Ribbon (Included)</option>
                      <option value="Forest Green Velvet Ribbon (Free Upgrade)">Forest Green Velvet Ribbon (Free Upgrade)</option>
                      <option value="Gift Ready Gold Foil Box & Note Card (+$4.00)">Gift Ready Gold Foil Box &amp; Note Card (+$4.00)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Purchase Controls & Mobile Sticky */}
              <div className="pt-4 border-t border-[#2D5A3D]/15 space-y-3">
                {product.isSold ? (
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-stone-100 text-[#1C1917] text-xs font-medium text-center">
                      This piece was purchased by a collector.
                    </div>
                    <a
                      href="#custom"
                      onClick={closeQuickView}
                      className="w-full bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <span>Request a Custom Recreation</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-[#2D5A3D]/25 rounded-full bg-white px-2 py-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-7 h-7 flex items-center justify-center text-sm font-bold text-[#1C1917] hover:text-[#2D5A3D]"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-[#1C1917]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                        className="w-7 h-7 flex items-center justify-center text-sm font-bold text-[#1C1917] hover:text-[#2D5A3D]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Primary Button */}
                    <button
                      onClick={handleAdd}
                      className="flex-1 bg-[#2D5A3D] hover:bg-[#1E3F2B] active:scale-[0.99] text-white font-bold text-sm py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4 text-emerald-200" />
                      <span>Add to Tote • ${(product.price * quantity).toFixed(2)}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Sticky Buy Bar */}
          {!product.isSold && (
            <div className="md:hidden sticky bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#2D5A3D]/15 p-3 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <img
                  src={product.images[0]}
                  alt=""
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-[#1C1917] truncate max-w-[140px]">
                    {product.title}
                  </p>
                  <p className="text-xs font-bold text-[#2D5A3D]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="bg-[#2D5A3D] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-200" />
                <span>Add to Tote</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
