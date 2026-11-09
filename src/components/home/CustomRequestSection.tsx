'use client';

import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, Heart, Shield, Clock, Leaf } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function CustomRequestSection() {
  const { showToast } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Custom Donut Set');
  const [palette, setPalette] = useState('Pastel Green & Gold Holiday Trim');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Custom order message sent to Vette! We will reply within 24 hours.');
  };

  return (
    <section id="custom" className="py-20 bg-white border-b border-[#2D5A3D]/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Message */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF5F0] text-[#2D5A3D] text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 fill-current" />
              <span>Direct Studio Commissions</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight">
              Message Us Directly for Your Custom Order
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
              &ldquo;Thank you for joining our creative community — we can’t wait to share our craft with you! If you have a specific color palette, holiday theme, or dream confection piece in mind, send us a message below.&rdquo;
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#1C1917]">
                <div className="w-7 h-7 rounded-full bg-[#EDF5F0] text-[#2D5A3D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Custom icing colors &amp; personalized sprinkle toppings</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1C1917]">
                <div className="w-7 h-7 rounded-full bg-[#EDF5F0] text-[#2D5A3D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Choice of velvet ribbon color (including Vette&apos;s favorite greens)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#1C1917]">
                <div className="w-7 h-7 rounded-full bg-[#EDF5F0] text-[#2D5A3D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Work-in-progress preview photos sent before dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#2D5A3D]/20 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#2D5A3D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    Message Sent to Vette!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1C1917]/70 max-w-md mx-auto">
                    Thank you, {name}! Vette will personally review your ideas and reply with photos and details to <strong className="text-[#1C1917]">{email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#2D5A3D] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1C1917] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-[#2D5A3D]/20 rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1C1917] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jessica@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-[#2D5A3D]/20 rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1C1917] mb-1">
                        Confection Type
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-white border border-[#2D5A3D]/20 rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                      >
                        <option value="Custom Donut Set">Pastel Donut Wreath Set</option>
                        <option value="Custom Cake Slice">Custom Gateau / Cake Slice</option>
                        <option value="Custom Ice Cream Cone">Sculpted Soft-Serve Cone Set</option>
                        <option value="Complete Holiday Package">Full Tree Confection Collection</option>
                        <option value="Recreate a Sold Piece">Recreate an Archived Piece</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1C1917] mb-1">
                        Desired Palette / Theme
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sage Green, Cream & Peppermint"
                        value={palette}
                        onChange={(e) => setPalette(e.target.value)}
                        className="w-full bg-white border border-[#2D5A3D]/20 rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C1917] mb-1">
                      Tell Vette About Your Custom Piece
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your tree style, ribbon preferences, or any specific tutorial / creator inspiration you'd love us to work from..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-[#2D5A3D]/20 rounded-xl p-3 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2D5A3D] hover:bg-[#1E3F2B] active:scale-[0.99] text-white py-3 px-6 rounded-full font-bold text-xs shadow-md flex items-center justify-center gap-2 transition"
                  >
                    <Send className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Send Message Directly to Vette</span>
                  </button>

                  <p className="text-[10px] text-center text-[#1C1917]/50">
                    No payment required upfront. We will consult with you on the design before crafting.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
