'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Sparkles, ShieldCheck, Heart, Menu, X, ArrowRight, PackageCheck, Leaf } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function Header() {
  const { openCart, itemCount, subtotal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#2D5A3D]/15 transition-all">
      {/* Top Announcement Bar with Vette's Community Note */}
      <div className="bg-[#1E3F2B] text-[#FAF8F5] text-xs py-2 px-4 font-sans tracking-wide border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-emerald-200">Weekly Drop:</span>
            <span>New handcrafted designs posted weekly! Made by hand with joy.</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1">
              <PackageCheck className="w-3.5 h-3.5 text-emerald-300" />
              Crush-proof foam packaging
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              Free Shipping over $75
            </span>
            <span>•</span>
            <Link
              href="/admin"
              className="text-emerald-200 hover:text-white underline transition-colors"
            >
              Studio Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1917] hover:text-[#2D5A3D] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Identity / Logo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EDF5F0] border border-[#2D5A3D]/30 flex items-center justify-center text-[#2D5A3D] group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                  Vette&apos;s Crafting
                </span>
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#2D5A3D] font-semibold -mt-1">
                  Handmade with Joy • Unique Crafted Pieces
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium text-[#1C1917]/80">
            <a href="#intro" className="hover:text-[#2D5A3D] transition-colors flex items-center gap-1">
              <span>Meet Vette</span>
              <span className="bg-[#2D5A3D]/10 text-[#2D5A3D] text-[10px] px-2 py-0.5 rounded-full font-bold">
                Story
              </span>
            </a>
            <a href="#catalog" className="hover:text-[#2D5A3D] transition-colors">
              The Shop
            </a>
            <a href="#craft" className="hover:text-[#2D5A3D] transition-colors">
              Craft &amp; Tutorial Notes
            </a>
            <a href="#reviews" className="hover:text-[#2D5A3D] transition-colors">
              Collector Reviews
            </a>
            <a href="#custom" className="hover:text-[#2D5A3D] transition-colors text-[#2D5A3D] font-bold">
              Custom Order
            </a>
          </nav>

          {/* Right Action: Cart Button & Admin shortcut */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden lg:inline-flex items-center text-xs text-[#1C1917]/70 hover:text-[#2D5A3D] px-2.5 py-1.5 rounded-md hover:bg-[#2D5A3D]/5 transition font-medium"
              title="Studio Dashboard & Product Editor"
            >
              Studio Edit
            </Link>

            <button
              onClick={openCart}
              className="relative flex items-center gap-2.5 bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              aria-label="Open Cart Drawer"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-200" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Tote
              </span>
              {itemCount > 0 && (
                <span className="bg-[#C2410C] text-white text-[11px] font-bold px-2 py-0.5 rounded-full leading-tight">
                  {itemCount}
                </span>
              )}
              {subtotal > 0 && (
                <span className="hidden sm:inline-block text-xs font-medium text-emerald-100 border-l border-emerald-400/30 pl-2">
                  ${subtotal.toFixed(2)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#2D5A3D]/15 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 font-sans text-sm">
            <a
              href="#intro"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2D5A3D]/5 font-semibold text-[#2D5A3D]"
            >
              🌿 Meet Vette &amp; Our Story
            </a>
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2D5A3D]/5 font-medium"
            >
              🍰 Explore The Shop
            </a>
            <a
              href="#craft"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2D5A3D]/5 font-medium"
            >
              ✨ Craft &amp; Tutorial Credits
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2D5A3D]/5 font-medium"
            >
              ⭐ 5-Star Collector Reviews
            </a>
            <a
              href="#custom"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2D5A3D]/5 font-bold text-[#C2410C]"
            >
              💌 Message for Custom Order
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-[#2D5A3D]/10 text-[#2D5A3D] font-bold flex items-center justify-between"
            >
              <span>Vette&apos;s Studio Admin</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
