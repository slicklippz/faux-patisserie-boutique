'use client';

import React from 'react';
import { Sparkles, Shield, Clock, Heart, Award, ArrowDown, Check, Star, Leaf, Send } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function HeroSection() {
  const { openCart } = useCart();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#2D5A3D]/15 bg-gradient-to-b from-[#FAF8F5] via-[#F4F8F5] to-[#FAF8F5]">
      {/* Decorative Botanical Green & Pastel Ambience */}
      <div className="absolute top-10 right-[-5%] w-96 h-96 rounded-full bg-[#EBF4EE]/70 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#FEF3C7]/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vette's Personal Welcome & Story */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Scarcity / Artisan Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF5F0] border border-[#2D5A3D]/25 text-[#2D5A3D] text-xs font-bold tracking-wider uppercase shadow-sm">
              <Leaf className="w-3.5 h-3.5 text-[#2D5A3D] fill-current" />
              <span>Small Handmade Studio • Handcrafted with Joy</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              Welcome to{' '}
              <span className="text-[#2D5A3D] underline decoration-[#86C1A4]/60 decoration-wavy underline-offset-4">
                Vette&apos;s Crafting
              </span>
            </h1>

            {/* Vette's Authentic Heartfelt Introduction */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#2D5A3D]/20 shadow-sm space-y-2 text-left">
              <p className="font-serif italic text-base sm:text-lg text-[#1E3F2B] leading-relaxed">
                &ldquo;Hello friends! We’re thrilled to introduce Vette&apos;s Crafting, a small, handmade hobby dedicated to bringing you unique, crafted pieces that blend creativity with quality. Every item is made by hand with joy.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#1C1917]/75 font-sans leading-relaxed">
                Our goal is to offer creations that add a personal touch to your home. Follow our page for new designs that will be posted weekly, explore our shop below, or message us directly to place your custom order!
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#2D5A3D] font-semibold border-t border-[#2D5A3D]/10">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                  <span>— Vette, Owner &amp; Maker</span>
                </span>
                <span className="text-[11px] text-[#1C1917]/50 font-normal">
                  Honoring creators with tutorial &amp; inspiration credits
                </span>
              </div>
            </div>

            {/* Micro-Trust Highlights Bar */}
            <div className="pt-1">
              <div className="inline-grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-2xl bg-white border border-[#2D5A3D]/15 shadow-sm text-xs font-medium text-[#1C1917]/90 text-left">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917]">5.0 Maker Rating</span>
                    <p className="text-[11px] text-[#1C1917]/60">Handmade with Joy</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-2 sm:border-l sm:border-[#2D5A3D]/10">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <Shield className="w-3.5 h-3.5 text-[#2D5A3D]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917]">Crush-Proof Box</span>
                    <p className="text-[11px] text-[#1C1917]/60">Safe Holiday Transit</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-2 sm:border-l sm:border-[#2D5A3D]/10">
                  <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 flex-shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917]">Weekly Restocks</span>
                    <p className="text-[11px] text-[#1C1917]/60">New Designs Weekly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="#catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                <span>Explore Vette&apos;s Shop</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#custom"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#1C1917] border border-[#2D5A3D]/25 px-6 py-3.5 rounded-full font-bold transition duration-200 text-xs"
              >
                <Send className="w-3.5 h-3.5 text-[#C2410C]" />
                <span>Message for Custom Orders</span>
              </a>
            </div>

            {/* Guarantees */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-2 text-xs text-[#1C1917]/70">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2D5A3D]" />
                Non-perishable (never melts)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2D5A3D]" />
                Tree-branch safe (&lt;2.5 oz)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2D5A3D]" />
                Free shipping over $75
              </span>
            </div>

          </div>

          {/* Right Column: Vette's Real Handcrafted Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Feature Card: Vette's Pastel Donut Collection */}
              <div className="relative z-10 rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <img
                    src="/products/pastel-donuts-set6.jpg"
                    alt="Vette's Pastel Patisserie Donut Collection (Set of 6)"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating artisan seal badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-[#2D5A3D]/20 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[11px] font-bold text-[#1C1917] tracking-wider uppercase">
                      Vette&apos;s Handcrafted Set of 6
                    </span>
                  </div>

                  {/* Scarcity Pill overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1E3F2B]/95 backdrop-blur-md text-white p-3.5 rounded-2xl flex items-center justify-between shadow-xl">
                    <div>
                      <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">
                        Handcrafted by Vette
                      </p>
                      <p className="text-sm font-serif font-bold text-white">
                        Pastel Patisserie Donut Collection
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs line-through text-white/50 mr-1.5">$115</span>
                      <span className="text-base font-bold text-emerald-300">$95</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Mini Card: Velvet Berry Cake Slice */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 z-20 w-44 bg-white p-2.5 rounded-2xl shadow-xl border border-[#2D5A3D]/20 transform rotate-[3deg] hover:rotate-0 transition-transform">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2 bg-stone-100">
                  <img
                    src="/products/velvet-berry-cake-slice.jpg"
                    alt="Velvet Berry Cake Slice"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1.5 right-1.5 bg-[#C2410C] text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                    HOT
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#1C1917] truncate">
                  Velvet Berry Slice
                </p>
                <p className="text-[10px] text-[#2D5A3D] font-bold">
                  $34 • Hand-Piped
                </p>
              </div>

              {/* Mint Chocolate Chip Cones Mini Card */}
              <div className="hidden sm:block absolute -top-6 -right-6 z-20 w-48 bg-white p-2.5 rounded-2xl shadow-xl border border-[#2D5A3D]/20 transform rotate-[4deg] hover:rotate-0 transition-transform">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2 bg-stone-100">
                  <img
                    src="/products/mint-chocolate-chip-cones-set4.jpg"
                    alt="Mint Chocolate Chip Striped Ornament Cones"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1.5 right-1.5 bg-[#2D5A3D] text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                    SET OF 4
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#1C1917] truncate">
                  Mint Striped Cones
                </p>
                <p className="text-[10px] text-[#2D5A3D] font-bold">
                  $68 • Favorite Green
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
