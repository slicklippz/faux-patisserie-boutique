'use client';

import React from 'react';
import { Heart, Sparkles, BookmarkCheck, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export function MeetTheMakerSection() {
  return (
    <section id="intro" className="py-16 bg-[#FAFAFA] border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Millie's Pottery Style Clean White Artist Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Photo Grid of Vette's creations */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square border border-[#E2E8F0]">
                <img
                  src="/products/holiday-sprinkle-donuts-set9.jpg"
                  alt="Holiday Sprinkle Donuts"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square border border-[#E2E8F0]">
                <img
                  src="/products/peppermint-twist-cones-set4.jpg"
                  alt="Peppermint Twist Cones"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square border border-[#E2E8F0]">
                <img
                  src="/products/mint-chocolate-chip-cones-set4.jpg"
                  alt="Mint Chocolate Chip Cones"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-[#F0FDFA] flex flex-col items-center justify-center p-4 text-center border border-[#CCFBF1]">
                <span className="text-3xl mb-1">🌿</span>
                <p className="font-serif font-bold text-xs text-[#0F766E]">Made with Joy</p>
                <p className="text-[11px] text-[#16A34A] font-semibold">New drops weekly</p>
              </div>
            </div>

            {/* Right: Vette's Full Words & Community Transparency */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDFA] text-[#0D9488] text-xs font-bold uppercase tracking-wider border border-[#CCFBF1]">
                <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>A Personal Note from Vette</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight">
                Crafted by Hand with Joy &amp; Community Care
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed">
                &ldquo;Hello friends! We’re thrilled to introduce <strong>Vette&apos;s Crafting</strong>, a small, handmade hobby dedicated to bringing you unique, crafted pieces that blend creativity with quality. Every item is made by hand with joy.&rdquo;
              </p>

              <div className="p-4 rounded-2xl bg-[#FEF9C3]/50 border border-[#FEF08A] space-y-1.5">
                <div className="flex items-start gap-2.5">
                  <BookmarkCheck className="w-4 h-4 text-[#CA8A04] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#713F12] leading-relaxed font-medium">
                    <strong className="text-[#1E293B]">Creator &amp; Tutorial Transparency:</strong> &ldquo;I will include the tutorial or the name of the other creator if the product was not inspired by me. Our goal is to offer creations that add a personal touch to your home.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="flex items-center gap-2 text-[#334155] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>New designs posted weekly</span>
                </div>
                <div className="flex items-center gap-2 text-[#334155] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Custom orders available upon request</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#catalog"
                  className="bg-[#E11D48] hover:bg-[#BE123C] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#custom"
                  className="bg-white hover:bg-[#F0FDFA] border-2 border-[#0D9488] text-[#0D9488] px-6 py-3 rounded-full text-xs font-bold transition flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#16A34A]" />
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
