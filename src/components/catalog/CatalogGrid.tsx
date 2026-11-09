'use client';

import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '@/types/product';
import { ProductCard } from './ProductCard';
import { Filter, Search, Sparkles, SlidersHorizontal, RotateCcw, Package } from 'lucide-react';

interface CatalogGridProps {
  initialProducts: Product[];
}

const CATEGORIES: ProductCategory[] = [
  'All Pieces',
  'Ice Cream Cones',
  'Donut Wreaths',
  'Cake Slices & Gift Boxes',
  'Custom Requests',
  'Recently Sold Archive',
];

export function CatalogGrid({ initialProducts }: CatalogGridProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All Pieces');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => {
        // Category filtering
        if (selectedCategory === 'Recently Sold Archive') {
          if (!prod.isSold && prod.inStock) return false;
        } else if (selectedCategory === 'All Pieces') {
          // Show all active pieces + sold pieces
        } else {
          if (prod.category !== selectedCategory) return false;
        }

        // Search query filtering
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = prod.title.toLowerCase().includes(q);
          const matchDesc = prod.description.toLowerCase().includes(q);
          const matchCategory = prod.category.toLowerCase().includes(q);
          const matchMaterials = prod.materials.some(m => m.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchCategory && !matchMaterials) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default featured: available first, then featured, then price
        if (a.isSold && !b.isSold) return 1;
        if (!a.isSold && b.isSold) return -1;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Pieces': products.length,
      'Recently Sold Archive': products.filter(p => p.isSold).length,
    };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  return (
    <section id="catalog" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      
      {/* Section Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-[#C2410C] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Holiday Patisserie Showcase</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
          Handcrafted Heirloom Decor
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#1C1917]/70 leading-relaxed">
          Each piece is individually hand-piped, kiln-cured, and sealed in our studio. Never mass manufactured; when a batch sells out, it joins our archive.
        </p>
      </div>

      {/* Etsy-Style Category Filter Chips & Controls Bar */}
      <div className="space-y-4 mb-8">
        
        {/* Horizontal Scrollable Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#1C1917]/10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat] ?? 0;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 text-[#1C1917]/80 border border-[#1C1917]/10 hover:border-[#1C1917]/30'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-[#1C1917]/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          
          {/* Instant Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#1C1917]/40 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cones, donuts, lavender..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#1C1917]/15 rounded-full text-xs text-[#1C1917] placeholder-[#1C1917]/40 focus:outline-none focus:ring-2 focus:ring-[#7E22CE]/30 focus:border-[#7E22CE] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[#1C1917]/40 hover:text-[#1C1917]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results count & Sort dropdown */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-xs font-medium text-[#1C1917]/60">
              Showing <strong className="text-[#1C1917]">{filteredProducts.length}</strong> creations
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#1C1917]/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#1C1917]/15 rounded-lg text-xs font-medium px-3 py-1.5 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]/30 cursor-pointer"
              >
                <option value="featured">Sort by: Curated Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated (5.0 Stars)</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Catalog Grid (Responsive 1-4 Columns) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-[#1C1917]/20 max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-[#1C1917]/40">
            <Package className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1C1917]">
            No ornaments match your selection
          </h3>
          <p className="text-xs text-[#1C1917]/60">
            Try adjusting your search keywords or browsing our other patisserie categories.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All Pieces');
              setSearchQuery('');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#7E22CE] bg-[#FCE7F3] px-4 py-2 rounded-full hover:bg-[#FCE7F3]/80 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Social Proof Archive Anchor Callout */}
      <div id="sold-archive" className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF8F5] via-[#F5F2EB] to-[#FAF8F5] border border-[#1C1917]/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4A5D4E]">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Social Proof & Archival Collection</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
            Missed a sold piece? We take custom commissions.
          </h3>
          <p className="text-xs sm:text-sm text-[#1C1917]/70">
            Our faux bake pieces are produced in limited batches. If an archived piece is marked SOLD, we can sculpt a similar bespoke piece tailored to your holiday color scheme.
          </p>
        </div>
        <a
          href="#custom"
          className="flex-shrink-0 bg-[#1C1917] hover:bg-[#2E2825] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-md transition"
        >
          Commission Bespoke Decor
        </a>
      </div>

    </section>
  );
}
