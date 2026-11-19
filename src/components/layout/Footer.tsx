'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Check } from 'lucide-react';

export function Footer() {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('Thank you for subscribing to weekly drops!');
    }
  };

  return (
    <footer className="bg-[#F0FDFA] border-t border-[#99F6E4] text-stone-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        
        {/* 3-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#99F6E4]">
          
          {/* Column 1: Brand Info & Social Media Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#0F766E] tracking-normal">
              Vette&apos;s Crafting
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Custom air dry foam clay faux-bake ornaments, holiday decor, and collectible displays.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1 text-xs text-[#0F766E]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0D9488] transition font-semibold"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0D9488] transition font-semibold"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0D9488] transition font-semibold"
              >
                YouTube
              </a>
              <span>•</span>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0D9488] transition font-semibold"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Column 2: Info & Policies */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#0F766E] tracking-normal">
              Info
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#collection" className="hover:text-[#0D9488] transition">
                  Air Dry Foam Clay Collection
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#BE123C] transition text-[#E11D48] font-bold">
                  Custom Orders &amp; Inquiries
                </a>
              </li>
              <li>
                <span className="text-stone-500">Crush-Proof Safe Packaging</span>
              </li>
              <li>
                <span className="text-stone-500">Free Shipping on Orders $75+</span>
              </li>
              <li>
                <Link href="/admin" className="text-[#0D9488] hover:underline font-bold">
                  Studio Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Subscribe to our emails */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#0F766E] tracking-normal">
              Subscribe to our emails
            </h4>
            <p className="text-xs text-stone-600">
              Be the first to see new weekly air dry foam clay designs and holiday drops.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#16A34A] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>You are subscribed to weekly drop alerts!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#5EEAD4] rounded-md px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0D9488] placeholder:text-stone-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded text-xs font-bold uppercase tracking-wider transition"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            <p className="text-[11px] text-stone-500 pt-1">
              Follow on Shop Pay • Direct 0% Platform Fee Checkout
            </p>
          </div>

        </div>

        {/* Bottom Bar: Country / Currency Dropdown & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          
          {/* Country / Currency */}
          <div className="flex items-center gap-2">
            <label htmlFor="country-select" className="text-[11px] text-[#0F766E] uppercase tracking-wider font-bold">
              Country/region
            </label>
            <select
              id="country-select"
              defaultValue="USD"
              className="bg-white border border-[#99F6E4] rounded px-2.5 py-1 text-xs text-stone-800 font-medium focus:outline-none"
            >
              <option value="USD">USD $ | United States</option>
              <option value="CAD">CAD $ | Canada</option>
              <option value="GBP">GBP £ | United Kingdom</option>
              <option value="EUR">EUR € | European Union</option>
            </select>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['Visa', 'Mastercard', 'Amex', 'Discover', 'Apple Pay', 'Google Pay', 'Shop Pay'].map((badge) => (
              <span
                key={badge}
                className="px-2 py-0.5 border border-[#99F6E4] bg-white rounded text-[10px] font-bold text-[#0F766E]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-stone-500 text-center sm:text-right">
            <span>© 2026, </span>
            <Link href="/" className="hover:text-[#0F766E] font-semibold">
              Vette&apos;s Crafting
            </Link>
            <span> • All Rights Reserved</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
