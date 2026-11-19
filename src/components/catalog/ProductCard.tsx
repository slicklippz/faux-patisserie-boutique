'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuickView } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col bg-white text-left transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1:1 Square Product Image Container (Exact Mariposa's Kreations Style) */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-stone-50 rounded-lg cursor-pointer border border-stone-200/70"
        onClick={() => openQuickView(product)}
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top-Left Pill Badge: Sold out or Sale / Scarcity */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
          {product.isSold ? (
            <span className="inline-block px-3 py-1 rounded-full bg-[#E11D48] text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
              Sold out
            </span>
          ) : product.stockCount === 1 ? (
            <span className="inline-block px-3 py-1 rounded-full bg-[#EAB308] text-stone-900 text-[11px] font-bold tracking-wider uppercase shadow-sm">
              Only 1 Left
            </span>
          ) : product.compareAtPrice && product.compareAtPrice > product.price ? (
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D9488] text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
              Sale
            </span>
          ) : null}
        </div>

        {/* Quick View trigger icon top-right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-[#0D9488] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          title="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Mariposa's Kreations Hover Action: Solid Red "Add to cart" Full-Width Button at Bottom of Image */}
        {!product.isSold && (
          <div
            className={`absolute inset-x-0 bottom-0 p-2.5 z-20 transition-all duration-200 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 pointer-events-none'
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
              className="w-full bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.98] text-white font-sans text-xs font-bold tracking-wider uppercase py-2.5 px-3 rounded shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to cart</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Information below Image */}
      <div className="pt-3 pb-1 flex flex-col space-y-1">
        
        {/* Vendor Line: VETTE'S CRAFTING (Muted Uppercase) */}
        <p className="text-[11px] font-sans uppercase tracking-widest text-stone-500 font-medium">
          Vette&apos;s Crafting
        </p>

        {/* Product Title (Classic Editorial Serif) */}
        <h3
          onClick={() => openQuickView(product)}
          className="font-serif text-sm sm:text-base font-medium text-stone-900 group-hover:text-[#0D9488] transition-colors line-clamp-2 leading-snug cursor-pointer"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Pricing: $XX.XX USD (Mariposa's Kreations Format) */}
        <div className="flex items-baseline gap-2 pt-0.5">
          <span className="font-sans text-sm sm:text-base font-semibold text-stone-900">
            ${product.price.toFixed(2)} USD
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="font-sans text-xs sm:text-sm text-stone-400 line-through">
              ${product.compareAtPrice.toFixed(2)} USD
            </span>
          )}
        </div>

      </div>
    </div>
  );
}