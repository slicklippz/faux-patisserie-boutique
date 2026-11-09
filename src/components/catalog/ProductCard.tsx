'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/lib/cart-context';
import { Eye, ShoppingBag, Sparkles, Star, CheckCircle, Clock, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuickView } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  // Use second photo on hover if available
  const activeImage =
    isHovered && product.images.length > 1
      ? product.images[1]
      : product.images[currentImageIndex] || product.images[0];

  return (
    <div
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#2D5A3D]/15 shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 4:5 Aspect Ratio Locked Product Image Container */}
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 cursor-pointer"
        onClick={() => openQuickView(product)}
      >
        {/* Main Product Image with Smooth Hover-Zoom */}
        <img
          src={activeImage}
          alt={product.title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Dynamic Scarcity & Social Proof Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isSold ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1C1917]/90 text-white text-[11px] font-bold tracking-widest uppercase shadow-md backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              SOLD ARCHIVE
            </span>
          ) : product.stockCount === 1 ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C2410C] text-white text-[10px] font-bold tracking-wider uppercase shadow-md animate-pulse">
              ⚡ Only 1 Left
            </span>
          ) : product.scarcityBadge ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#1E3F2B] border border-[#2D5A3D]/20 text-[10px] font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3 h-3 text-[#2D5A3D]" />
              {product.scarcityBadge}
            </span>
          ) : null}

          {discountPercent > 0 && !product.isSold && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#2D5A3D] text-white text-[10px] font-bold shadow-sm self-start">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Maker Rating Pill on Card */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-[#2D5A3D]/15 flex items-center gap-1 z-10">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          <span className="text-[11px] font-bold text-[#1C1917]">{product.rating.toFixed(1)}</span>
          <span className="text-[10px] text-[#1C1917]/50">({product.reviewCount})</span>
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 bg-white/95 hover:bg-white text-[#1E3F2B] px-4 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-lg flex items-center gap-1.5 active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-[#2D5A3D]" />
            <span>View Details &amp; Materials</span>
          </button>
        </div>

        {/* Multi-photo dot indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {product.images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  (isHovered && idx === 1) || (!isHovered && idx === 0)
                    ? 'bg-white scale-125'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content & Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div className="space-y-1.5">
          {/* Category Tag */}
          <p className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#2D5A3D]">
            {product.category}
          </p>

          {/* Title */}
          <h3
            onClick={() => openQuickView(product)}
            className="font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#2D5A3D] transition-colors line-clamp-1 cursor-pointer"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-[#1C1917]/70 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Creator Credit Pill */}
          {product.creatorCredit && (
            <p className="text-[10px] text-[#2D5A3D] font-medium flex items-center gap-1 mt-1 truncate">
              <Heart className="w-3 h-3 text-rose-400 flex-shrink-0" />
              <span className="truncate">{product.creatorCredit}</span>
            </p>
          )}
        </div>

        {/* Pricing, Upfront Shipping & Call-to-Action */}
        <div className="pt-3 border-t border-[#2D5A3D]/10 mt-3 space-y-2.5">
          {/* Price row */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-xl font-bold text-[#1C1917]">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-[#1C1917]/40 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            <span className="text-[11px] font-semibold text-[#2D5A3D] flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-[#2D5A3D]" />
              {product.isSold ? 'Archived' : 'Ready to Ship'}
            </span>
          </div>

          {/* Upfront Transparency Tag */}
          <p className="text-[11px] text-[#1C1917]/60 flex items-center gap-1 font-sans">
            <Clock className="w-3 h-3 text-[#2D5A3D]" />
            <span>
              {product.price >= 75 ? 'Free Priority Shipping Included' : 'Ships in 1-2 days from Florida'}
            </span>
          </p>

          {/* Action CTA Button in Vette's Forest Green */}
          {product.isSold ? (
            <button
              onClick={() => openQuickView(product)}
              className="w-full bg-[#1C1917]/10 hover:bg-[#1C1917]/20 text-[#1C1917] font-bold text-xs py-2.5 px-3 rounded-xl transition duration-150 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2D5A3D]" />
              <span>View Sold Piece &amp; Commission Similar</span>
            </button>
          ) : (
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full bg-[#2D5A3D] hover:bg-[#1E3F2B] active:bg-[#152e1f] text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-sm hover:shadow transition duration-150 flex items-center justify-center gap-2 group/btn"
            >
              <ShoppingBag className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform text-emerald-200" />
              <span>Add to Tote • ${product.price.toFixed(2)}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
