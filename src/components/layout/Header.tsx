'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function Header() {
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D9488] text-white shadow-md border-b border-[#0f766e]">
      
      {/* 1. Top Announcement Bar (Deep Teal with Sunshine Yellow Highlights) */}
      <div className="bg-[#0f766e] text-white text-xs py-2 px-4 text-center font-sans tracking-wide border-b border-teal-700/50">
        <p className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-bold text-[#FEF08A]">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Welcome to Vette&apos;s Crafting
          </span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <span className="font-medium text-teal-100">Fresh Air Dry Foam Clay Designs Weekly</span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <span className="font-bold text-[#FEF08A] bg-teal-800/60 px-2 py-0.5 rounded-full text-[11px]">
            Free Shipping on Orders $75+
          </span>
        </p>
      </div>

      {/* 2. Main Header Bar: Search on left, Centered Logo, Icons on right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="relative flex items-center justify-between">
          
          {/* Left: Search Trigger & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 w-1/3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-white hover:text-[#FEF08A] transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden sm:inline-flex items-center gap-2 text-teal-100 hover:text-white transition text-xs font-semibold bg-teal-800/40 hover:bg-teal-800/70 px-3 py-1.5 rounded-full"
              title="Search store"
            >
              <Search className="w-3.5 h-3.5 text-[#FEF08A]" />
              <span>Search Designs</span>
            </button>
          </div>

          {/* Center: Clean Brand Logo */}
          <div className="flex flex-col items-center justify-center text-center w-1/3">
            <Link href="/" className="group flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-[#FEF08A] transition-colors drop-shadow-sm">
                Vette&apos;s Crafting
              </span>
            </Link>
          </div>

          {/* Right: Studio Admin & Shopping Bag */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 w-1/3">
            <Link
              href="/admin"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-teal-100 hover:text-white font-medium transition bg-teal-800/40 hover:bg-teal-800/70 px-3 py-1.5 rounded-full"
              title="Studio Admin Dashboard"
            >
              <User className="w-3.5 h-3.5 text-[#FEF08A]" />
              <span className="hidden lg:inline">Studio Admin</span>
            </Link>

            <button
              onClick={openCart}
              className="relative p-2 text-white hover:text-[#FEF08A] transition flex items-center gap-2 bg-teal-800/50 hover:bg-teal-800/80 px-3.5 py-1.5 rounded-full border border-teal-500/40 shadow-sm"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#FEF08A]" />
              <span className="hidden sm:inline text-xs font-bold tracking-wide">Cart</span>
              {itemCount > 0 ? (
                <span className="bg-[#E11D48] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow animate-bounce">
                  {itemCount}
                </span>
              ) : (
                <span className="text-[10px] font-medium text-teal-200">(0)</span>
              )}
            </button>
          </div>

        </div>

        {/* Collapsible Search Input */}
        {searchOpen && (
          <div className="mt-3 pt-3 border-t border-teal-600/50 flex items-center justify-center animate-fadeIn">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search Air Dry Foam Clay cones, donuts, cakes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-teal-400 rounded-full px-4 py-2 pl-10 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FEF08A] shadow-inner"
                autoFocus
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-2.5" />
            </div>
          </div>
        )}
      </div>

      {/* 3. Sub-Navigation Bar directly below Logo */}
      <nav className="border-t border-teal-600/40 bg-[#0d8a7f] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center space-x-8 text-xs font-bold tracking-wider uppercase text-teal-100 py-3">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#collection"
                className="text-white border-b-2 border-[#FEF08A] pb-1 font-extrabold flex items-center gap-1.5"
              >
                <span>Air Dry Foam Clay</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FEF08A] animate-pulse" />
              </Link>
            </li>
            <li>
              <Link href="/#collection" className="hover:text-white transition">
                Shop All Pieces
              </Link>
            </li>
            <li>
              <Link href="/#custom" className="hover:text-white text-[#FEF08A] transition flex items-center gap-1">
                <span>Custom Orders</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f766e] border-t border-teal-600 px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-white py-1.5 hover:text-[#FEF08A]"
          >
            Home
          </Link>
          <Link
            href="/#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#FEF08A] py-1.5"
          >
            Air Dry Foam Clay Collection
          </Link>
          <Link
            href="/#custom"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-white py-1.5 hover:text-[#FEF08A]"
          >
            Custom Orders
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-teal-200 py-1.5 border-t border-teal-600/60 pt-2"
          >
            Studio Admin
          </Link>
        </div>
      )}

    </header>
  );
}
