'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Heart, Star, ShieldCheck, Leaf, ArrowDown, Mail, PackageCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0D9488] via-[#0D9488] to-[#0f766e] text-white pt-6 pb-16 sm:pb-20 lg:pt-10 lg:pb-24">
      
      {/* Whimsical Polka Dot & Craft Sparkle Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Playful Floating Craft Accent Bubbles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#FEF08A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-72 h-72 rounded-full bg-[#16A34A]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Left Story & Badges, Right Playful Craft Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Whimsical Craft Identity, Vette's Story & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Playful Craft Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-[#FEF08A] text-xs font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-4 h-4 fill-[#FEF08A] animate-pulse" />
              <span>Vette&apos;s Air Dry Foam Clay Studio</span>
              <span className="text-white/60">•</span>
              <span className="text-white">Handmade with Joy</span>
            </div>

            {/* Main Editorial & Fun Craft Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-sm">
                Whimsical Handcrafted{' '}
                <span className="text-[#FEF08A] inline-block underline decoration-[#E11D48] decoration-wavy decoration-2 underline-offset-8">
                  Air Dry Foam Clay
                </span>{' '}
                Decor That Brings Joy.
              </h1>
              <p className="font-sans text-teal-100 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-medium pt-1">
                Sweet faux-bake confections, cake slices, and holiday donut ornaments sculpted by hand in Florida. Made for tiered stands, holiday trees, and gift boxes.
              </p>
            </div>

            {/* Vette's Authentic Story Card (White craft card on vibrant teal background) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white text-stone-900 shadow-xl border-2 border-teal-200/60 text-left space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FEF08A]/30 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                <Leaf className="w-4 h-4 text-[#16A34A] fill-[#16A34A]" />
                <span>Meet the Maker • Personal Promise</span>
              </div>

              <blockquote className="font-serif italic text-sm sm:text-base text-stone-800 leading-relaxed">
                &ldquo;Hello friends! We’re thrilled to introduce Vette&apos;s Crafting, a small, handmade hobby dedicated to bringing you unique, crafted pieces that blend creativity with quality. Every item is made by hand with joy. I will include the tutorial or the name of the other creator if the product was not inspired by me. Our goal is to offer creations that add a personal touch to your home.&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs border-t border-stone-200">
                <span className="font-bold text-[#16A34A] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]" />
                  <span>— Vette, Sculptor &amp; Founder</span>
                  <span className="text-[10px] text-stone-500 font-normal bg-stone-100 px-2 py-0.5 rounded-full">
                    Favorite Color: Green 💚
                  </span>
                </span>
                <span className="text-[11px] text-stone-500 font-medium">
                  Follow for weekly drops &amp; custom designs
                </span>
              </div>
            </div>

            {/* 4 Click-Inspiring Craft Trust Badges (Yellow, Green, Red, White) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-left">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-full bg-[#FEF08A] text-stone-900 flex items-center justify-center font-bold flex-shrink-0">
                  <Star className="w-4 h-4 fill-[#CA8A04] text-[#CA8A04]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-tight">5.0 Rating</p>
                  <p className="text-[10px] text-teal-100 truncate">Handcrafted Joy</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-tight">100% Clay</p>
                  <p className="text-[10px] text-teal-100 truncate">Air Dry Foam</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-full bg-[#E11D48] text-white flex items-center justify-center font-bold flex-shrink-0">
                  <PackageCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-tight">Crush-Proof</p>
                  <p className="text-[10px] text-teal-100 truncate">Safe Shipping</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-2.5 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-full bg-white text-[#0D9488] flex items-center justify-center font-bold flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#0D9488]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-tight">Featherlight</p>
                  <p className="text-[10px] text-teal-100 truncate">Tree-Branch Safe</p>
                </div>
              </div>
            </div>

            {/* High-Converting Action CTAs (Red & Yellow) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Shop Air Dry Foam Clay Drop</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#custom"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FEF08A] hover:bg-[#FACC15] text-stone-900 text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow hover:shadow-md transition-all"
              >
                <Mail className="w-4 h-4 text-stone-900" />
                <span>Custom Order Request</span>
              </a>
            </div>

          </div>

          {/* Right Column: Playful Craft Polaroid Showcase with Real Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Playful Floating Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-[#FEF08A] text-stone-900 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border-2 border-stone-900 transform -rotate-6 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]" />
                <span>100% Handcrafted</span>
              </div>

              {/* 4-Image Craft Collage Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 shadow-2xl">
                
                {/* Photo 1: Pastel Donuts */}
                <div className="group relative bg-white p-2 rounded-2xl shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/products/pastel-donuts-set6.jpg"
                      alt="Handcrafted Pastel Air Dry Foam Clay Donuts"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-serif text-[11px] font-bold text-stone-800 truncate">Pastel Donut Confections</p>
                    <p className="text-[10px] text-[#16A34A] font-bold">Air Dry Foam Clay</p>
                  </div>
                </div>

                {/* Photo 2: Berry Cake Slice */}
                <div className="group relative bg-white p-2 rounded-2xl shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/products/velvet-berry-cake-slice.jpg"
                      alt="Velvet Berry Air Dry Foam Clay Cake Slice"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-serif text-[11px] font-bold text-stone-800 truncate">Velvet Berry Cake Slice</p>
                    <p className="text-[10px] text-[#E11D48] font-bold">With Glazed Cherry</p>
                  </div>
                </div>

                {/* Photo 3: Peppermint Twist Cones */}
                <div className="group relative bg-white p-2 rounded-2xl shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/products/peppermint-twist-cones-set4.jpg"
                      alt="Peppermint Twist Air Dry Foam Clay Cones"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-serif text-[11px] font-bold text-stone-800 truncate">Peppermint Twist Cones</p>
                    <p className="text-[10px] text-[#0D9488] font-bold">Set of 4 Ornaments</p>
                  </div>
                </div>

                {/* Photo 4: Holiday Sprinkle Donuts */}
                <div className="group relative bg-white p-2 rounded-2xl shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100">
                    <Image
                      src="/products/holiday-sprinkle-donuts-set9.jpg"
                      alt="Festive Holiday Sprinkle Air Dry Foam Clay Donuts"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="font-serif text-[11px] font-bold text-stone-800 truncate">Holiday Sprinkle Donuts</p>
                    <p className="text-[10px] text-[#16A34A] font-bold">Set of 9 Keepsakes</p>
                  </div>
                </div>

              </div>

              {/* Bottom Playful Tag */}
              <div className="mt-3 text-center">
                <span className="inline-block bg-[#0f766e] text-teal-100 text-[11px] font-semibold px-4 py-1 rounded-full border border-teal-500/40">
                  ✨ Authentic Photography of Vette&apos;s Hand-Sculpted Creations
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Whimsical Scalloped / Wavy SVG Divider transitioning into Pure White Grid */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

    </section>
  );
}
