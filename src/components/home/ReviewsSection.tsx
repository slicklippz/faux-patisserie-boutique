'use client';

import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Madeline R.',
    location: 'Winter Park, FL',
    verified: true,
    rating: 5,
    title: 'The realism is astounding — guest favorite!',
    comment:
      'I ordered the Pastel Patisserie Donut Collection and the Velvet Berry Cake Slice. Everyone who visits thinks they are fresh from a boutique bakery! The featherlight weight hung perfectly on our 7.5ft tree.',
    productName: 'Pastel Patisserie Donut Collection (Set of 6)',
    date: 'Holiday Season 2025',
  },
  {
    name: 'Brianna K.',
    location: 'Charleston, SC',
    verified: true,
    rating: 5,
    title: 'Flawlessly packed in custom foam',
    comment:
      'Shipping ornaments always makes me nervous, but Vette packed these confections in precision-cut crush-proof foam. Arrived in 2 days from Florida without a single sprinkle loose!',
    productName: 'Velvet Berry Cake Slice with Maraschino Cherry',
    date: 'October 2026',
  },
  {
    name: 'Clara & David L.',
    location: 'Savannah, GA',
    verified: true,
    rating: 5,
    title: 'Worth every penny compared to mass-produced decor',
    comment:
      'You can tell these are piped with love by an actual artisan. The glitter shimmer catches the fairy lights in the most magical way. We will be ordering more every holiday.',
    productName: 'Mint Chocolate Chip Striped Ornament Cones',
    date: 'November 2026',
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-2 border border-[#FEF08A]">
              <Star className="w-3.5 h-3.5 fill-current text-[#EAB308]" />
              <span>Verified Collector Social Proof</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B]">
              Loved by 1,400+ Holiday Decor Enthusiasts
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-[#FAFAFA] px-5 py-3 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="flex text-[#EAB308]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-[#1E293B]">5.0 Studio Rating</p>
              <p className="text-[11px] text-[#15803D] font-bold">Zero Breakage Guarantee</p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards (White surface with soft border) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md hover:border-[#0D9488]/40 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#EAB308]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#94A3B8]">{rev.date}</span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#1E293B]">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed font-sans">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1E293B]">{rev.name}</span>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-[#15803D] font-bold bg-[#DCFCE7] px-2 py-0.5 rounded-full border border-[#BBF7D0]">
                      <CheckCircle className="w-3 h-3" />
                      Verified Collector
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>{rev.location}</span>
                  <span className="truncate max-w-[150px] font-bold text-[#0D9488]">
                    {rev.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
