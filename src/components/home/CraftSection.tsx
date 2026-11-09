'use client';

import React from 'react';
import { Sparkles, Clock, Feather, ShieldCheck, Heart, BookmarkCheck, Award, Leaf } from 'lucide-react';

export function CraftSection() {
  const steps = [
    {
      num: '01',
      title: 'Sculpted Foam Clay Core',
      desc: 'Each piece begins with featherlight polymer foam core, weighing under 2.5 oz so your Christmas tree branches never droop.',
      time: 'Phase 1: Shaping',
      icon: Feather,
    },
    {
      num: '02',
      title: 'Slow 48-Hour Micro-Cure',
      desc: 'To prevent cracking or shrinking, our confections cure in temperature-controlled drying racks for two full days before icing is applied.',
      time: 'Phase 2: 48h Cure',
      icon: Clock,
    },
    {
      num: '03',
      title: 'Hand-Piped Whipped Clay Frosting',
      desc: 'Applied using real French pastry piping tips to achieve authentic bakery ruffles, pinwheel swirls, and silky dollops.',
      time: 'Phase 3: Artistry',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Micro-Glass Sugar & Matte Seal',
      desc: 'Finished with authentic glass micro-beads for sparkling sugar realism, sealed with archival UV-resistant clear coat.',
      time: 'Phase 4: Archival',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="craft" className="py-20 bg-white border-y border-[#2D5A3D]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDF5F0] text-[#2D5A3D] text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-[#2D5A3D] fill-current" />
            <span>The Handcrafting Process • Vette&apos;s Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            How Every Confection is Made by Hand with Joy
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#1C1917]/70 leading-relaxed">
            Every cake slice, swirl cone, and pastel donut takes up to 4 days of dedicated handcrafting. We blend creative artistry with durable quality so your holiday decor lasts year after year.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-[#FAF8F5] border border-[#2D5A3D]/15 flex flex-col justify-between hover:border-[#2D5A3D]/40 transition group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-[#2D5A3D]/20 group-hover:text-[#2D5A3D]/50 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#2D5A3D] group-hover:scale-110 transition-transform border border-[#2D5A3D]/15">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#2D5A3D] bg-white px-2.5 py-1 rounded-md border border-[#2D5A3D]/15">
                    {step.time}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D5A3D]/10 flex items-center gap-1.5 text-[11px] font-bold text-[#2D5A3D]">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                  <span>Handmade with Joy by Vette</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creator & Tutorial Transparency Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#EDF5F0] via-[#FAF8F5] to-[#EDF5F0] border border-[#2D5A3D]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D5A3D] uppercase tracking-wider">
              <BookmarkCheck className="w-4 h-4 text-[#2D5A3D]" />
              <span>Community &amp; Creator Integrity</span>
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1C1917]">
              Giving Credit to the Crafting Community
            </h4>
            <p className="text-xs text-[#1C1917]/75 max-w-2xl leading-relaxed">
              &ldquo;I will include the tutorial or the name of the other creator if the product was not inspired by me. Our goal is to offer creations that add a personal touch to your home.&rdquo; — Vette
            </p>
          </div>
          <a
            href="#custom"
            className="flex-shrink-0 bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-md transition"
          >
            Request a Custom Design
          </a>
        </div>

      </div>
    </section>
  );
}
