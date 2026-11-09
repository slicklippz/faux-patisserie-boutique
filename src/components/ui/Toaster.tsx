'use client';

import React from 'react';
import { useCart } from '@/lib/cart-context';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function Toaster() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 bg-[#1C1917] text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/10 text-sm font-medium tracking-wide">
        <Sparkles className="w-4 h-4 text-[#F472B6] animate-pulse" />
        <span>{toastMessage}</span>
        <CheckCircle2 className="w-4 h-4 text-[#86EFAC]" />
      </div>
    </div>
  );
}
