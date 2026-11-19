'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CatalogGridProps {
  initialProducts: Product[];
}

export function CatalogGrid({ initialProducts }: CatalogGridProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'in-stock' | 'sold-out'>('all');
  const [sortBy, setSortBy] = useState<'best-selling' | 'featured' | 'a-z' | 'z-a' | 'price-asc' | 'price-desc' | 'date-new'>('best-selling');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => {
        if (availabilityFilter === 'in-stock') return !prod.isSold && prod.inStock;
        if (availabilityFilter === 'sold-out') return prod.isSold || !prod.inStock;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'a-z') return a.title.localeCompare(b.title);
        if (sortBy === 'z-a') return b.title.localeCompare(a.title);
        if (sortBy === 'best-selling') return (b.reviewCount || 0) - (a.reviewCount || 0);
        if (a.isSold && !b.isSold) return 1;
        if (!a.isSold && b.isSold) return -1;
        return 0;
      });
  }, [products, availabilityFilter, sortBy]);

  return (
    <section id="collection" className="bg-white py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Filter & Sort Bar (Teal-Tinted Minimalist Toolbar) */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-4 bg-[#F0FDFA] border border-[#99F6E4] rounded-xl text-xs text-stone-700 font-sans mb-8">
        
        {/* Left: Filter Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-bold text-[#0F766E] uppercase tracking-wider text-[11px]">
            Filter:
          </span>

          {/* Availability Filter Pill Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setAvailabilityFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs transition ${
                availabilityFilter === 'all'
                  ? 'bg-[#0D9488] text-white font-bold shadow-sm'
                  : 'bg-white hover:bg-[#CCFBF1] text-[#0F766E] border border-[#99F6E4]'
              }`}
            >
              All ({products.length})
            </button>

            <button
              onClick={() => setAvailabilityFilter('in-stock')}
              className={`px-3.5 py-1.5 rounded-full text-xs transition ${
                availabilityFilter === 'in-stock'
                  ? 'bg-[#16A34A] text-white font-bold shadow-sm'
                  : 'bg-white hover:bg-[#CCFBF1] text-[#0F766E] border border-[#99F6E4]'
              }`}
            >
              In stock ({products.filter((p) => !p.isSold).length})
            </button>

            <button
              onClick={() => setAvailabilityFilter('sold-out')}
              className={`px-3.5 py-1.5 rounded-full text-xs transition ${
                availabilityFilter === 'sold-out'
                  ? 'bg-[#E11D48] text-white font-bold shadow-sm'
                  : 'bg-white hover:bg-[#CCFBF1] text-[#0F766E] border border-[#99F6E4]'
              }`}
            >
              Sold out ({products.filter((p) => p.isSold).length})
            </button>
          </div>
        </div>

        {/* Right: Sort By Dropdown & Product Counter */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-1.5">
            <label htmlFor="sort-select" className="text-[#0F766E] font-medium">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white font-semibold text-stone-900 focus:outline-none cursor-pointer px-2.5 py-1 rounded-md border border-[#99F6E4] text-xs"
            >
              <option value="best-selling">Best selling</option>
              <option value="featured">Featured</option>
              <option value="a-z">Alphabetically, A-Z</option>
              <option value="z-a">Alphabetically, Z-A</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
            </select>
          </div>

          <span className="text-[#0F766E] font-semibold text-xs hidden sm:inline">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>
        </div>

      </div>

      {/* 2. Product Grid (4 Columns Desktop, 2 Columns Mobile) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-[#F0FDFA] rounded-2xl border border-dashed border-[#5EEAD4]">
          <p className="font-serif text-lg text-[#0F766E]">No pieces found in this selection.</p>
          <button
            onClick={() => {
              setAvailabilityFilter('all');
              setSortBy('best-selling');
            }}
            className="mt-3 px-4 py-2 rounded-full bg-[#FEF08A] hover:bg-[#FDE047] text-stone-900 text-xs font-bold uppercase tracking-wider transition"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* 3. Pagination Bar */}
      <div className="mt-14 pt-8 border-t border-[#99F6E4] flex items-center justify-center gap-3 text-xs text-stone-600 font-sans">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className={`px-3 py-1.5 flex items-center gap-1 ${
            currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:text-[#0D9488]'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <span className="w-7 h-7 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold">
          1
        </span>

        <button
          disabled
          className="w-7 h-7 rounded-full text-stone-400 opacity-60 flex items-center justify-center cursor-not-allowed"
        >
          2
        </button>

        <button
          disabled
          className="px-3 py-1.5 flex items-center gap-1 opacity-40 cursor-not-allowed"
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}
