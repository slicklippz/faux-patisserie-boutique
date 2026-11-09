'use client';

import React from 'react';
import { Heart, Sparkles, BookmarkCheck, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export function MeetTheMakerSection() {
  return (
    <section id="intro" className="py-16 bg-[#EDF5F0]/70 border-b border-[#2D5A3D]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2D5A3D]/20 shadow-lg relative overflow-hidden">
          
          {/* Subtle botanical corner decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#EBF4EE] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Photo Grid of Vette's creations */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src="/products/holiday-sprinkle-donuts-set9.jpg"
                  alt="Holiday Sprinkle Donuts"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src="/products/peppermint-twist-cones-set4.jpg"
                  alt="Peppermint Twist Cones"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src="/products/mint-chocolate-chip-cones-set4.jpg"
                  alt="Mint Chocolate Chip Cones"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-[#EDF5F0] flex flex-col items-center justify-center p-4 text-center border border-[#2D5A3D]/20">
                <span className="text-2xl mb-1">🌿</span>
                <p className="font-serif font-bold text-xs text-[#1E3F2B]">Made with Joy</p>
                <p className="text-[10px] text-[#2D5A3D]">New designs weekly</p>
              </div>
            </div>

            {/* Right: Vette's Full Words & Community Transparency */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF5F0] text-[#2D5A3D] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
                <span>A Personal Note from Vette</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight">
                Crafted by Hand with Joy &amp; Community Care
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#1C1917]/80 leading-relaxed">
                &ldquo;Hello friends! We’re thrilled to introduce <strong>Vette&apos;s Crafting</strong>, a small, handmade hobby dedicated to bringing you unique, crafted pieces that blend creativity with quality. Every item is made by hand with joy.&rdquo;
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#2D5A3D]/15 space-y-2">
                <div className="flex items-start gap-2.5">
                  <BookmarkCheck className="w-4 h-4 text-[#2D5A3D] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    <strong className="text-[#1E3F2B]">Creator &amp; Tutorial Transparency:</strong> &ldquo;I will include the tutorial or the name of the other creator if the product was not inspired by me. Our goal is to offer creations that add a personal touch to your home.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="flex items-center gap-2 text-[#1C1917]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
                  <span>New designs posted weekly</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1917]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
                  <span>Custom orders available upon request</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#catalog"
                  className="bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md transition flex items-center gap-2"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#custom"
                  className="bg-white hover:bg-stone-50 border border-[#2D5A3D]/30 text-[#2D5A3D] px-6 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#C2410C]" />
                  <span>Message for Custom Order</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
