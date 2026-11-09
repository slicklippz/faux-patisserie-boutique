'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Heart, ShieldCheck, Mail, ArrowRight, Leaf } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function Footer() {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('You are on Vette\'s weekly drop list!');
    }
  };

  return (
    <footer className="bg-[#1E3F2B] text-[#FAF8F5] pt-16 pb-12 border-t border-emerald-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#2D5A3D]">
                <Leaf className="w-4 h-4 fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Vette&apos;s Crafting
              </span>
            </div>

            <p className="text-xs text-emerald-100/80 max-w-sm leading-relaxed">
              A small, handmade hobby dedicated to bringing you unique, crafted pieces that blend creativity with quality. Every item is made by hand with joy to add a personal touch to your home.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-300">
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>&ldquo;Thank you for joining our creative community!&rdquo; — Vette</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Explore The Shop
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <a href="#intro" className="hover:text-white transition">
                  Meet Vette &amp; Our Story
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition">
                  Handcrafted Confections
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-white transition">
                  Process &amp; Tutorial Credits
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">
                  Collector Reviews
                </a>
              </li>
              <li>
                <a href="#sold-archive" className="hover:text-white transition">
                  Sold Out Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Policies & Custom Orders */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Custom &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <a href="#custom" className="hover:text-white transition font-semibold text-emerald-300">
                  Message for Custom Order
                </a>
              </li>
              <li>Crush-Proof Packaging Standard</li>
              <li>Free Shipping on Orders $75+</li>
              <li>Ships with USPS Priority Tracking</li>
              <li>Non-Edible Heirloom Care</li>
              <li>
                <Link href="/admin" className="text-amber-300 hover:text-amber-200 underline font-medium">
                  Studio Owner Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Weekly Drop Notifications */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Weekly Design Drops
            </h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              New designs are posted weekly! Subscribe to get preview photos before batches go live.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-900 border border-emerald-500/40 text-xs text-emerald-200">
                ✓ You are subscribed to Vette&apos;s weekly drops!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email for weekly drops"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-emerald-950/70 border border-emerald-700/60 rounded-full px-3.5 py-2 text-xs text-white placeholder-emerald-300/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white p-1.5 rounded-full"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <p>© {new Date().getFullYear()} Vette&apos;s Crafting. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made by hand with joy in Florida</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
            <span>• Direct Zero-Fee Checkout</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
