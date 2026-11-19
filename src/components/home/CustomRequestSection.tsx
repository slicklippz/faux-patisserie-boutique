'use client';

import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, Heart, Shield, Clock, Leaf } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function CustomRequestSection() {
  const { showToast } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Custom Donut Set');
  const [palette, setPalette] = useState('Teal, Green, Red & Yellow Holiday Theme');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Custom order message sent to Vette! We will reply within 24 hours.');
  };

  return (
    <section id="custom" className="py-20 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Message */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDFA] text-[#0D9488] text-xs font-bold uppercase tracking-wider border border-[#CCFBF1]">
              <Leaf className="w-3.5 h-3.5 text-[#16A34A] fill-current" />
              <span>Direct Studio Commissions</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight">
              Message Us Directly for Your Custom Order
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed">
              &ldquo;Thank you for joining our creative community — we can’t wait to share our craft with you! If you have a specific color palette, holiday theme, or dream confection piece in mind, send us a message below.&rdquo;
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Custom icing colors &amp; personalized sprinkle toppings</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Choice of velvet ribbon color (Teal, Forest Green, Gold, Red)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#334155]">
                <div className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Work-in-progress preview photos sent before dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form (Pure White with Soft Gray/Teal Border) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFA] p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                    Message Sent to Vette!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
                    Thank you, {name}! Vette will personally review your ideas and reply with photos and details to <strong className="text-[#1E293B]">{email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#0D9488] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jessica@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Confection Type
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30"
                      >
                        <option value="Custom Donut Set">Pastel Donut Wreath Set</option>
                        <option value="Custom Cake Slice">Custom Gateau / Cake Slice</option>
                        <option value="Custom Ice Cream Cone">Sculpted Soft-Serve Cone Set</option>
                        <option value="Complete Holiday Package">Full Tree Confection Collection</option>
                        <option value="Recreate a Sold Piece">Recreate an Archived Piece</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1">
                        Desired Palette / Theme
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Teal, Green, Red & Yellow Accent"
                        value={palette}
                        onChange={(e) => setPalette(e.target.value)}
                        className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1">
                      Tell Vette About Your Custom Piece
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your tree style, ribbon preferences, or any specific tutorial / creator inspiration you'd love us to work from..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-[#CBD5E1] rounded-xl p-3 text-xs text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30"
                    />
                  </div>

                  {/* High-Converting Red Action Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#E11D48] hover:bg-[#BE123C] active:scale-[0.99] text-white py-3.5 px-6 rounded-full font-bold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition"
                  >
                    <Send className="w-3.5 h-3.5 text-[#FEF08A]" />
                    <span>Send Message Directly to Vette</span>
                  </button>

                  <p className="text-[10px] text-center text-[#64748B]">
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
