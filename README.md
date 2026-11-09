# Maison Faux-Bake Patisserie 🍰✨

An artisanal, conversion-rate-optimized (CRO) e-commerce web application engineered for custom, handcrafted faux-bake holiday ornaments and decor.

## 🌟 Tech Stack & Zero-Fee Architecture
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS (Custom Patisserie Palettes: Warm Alabaster, Deep Espresso, Muted Sage, Confection Berry, Warm Terracotta)
- **Typography:** Playfair Display (Editorial artistry) + Plus Jakarta Sans (Clean, high-converting scannability)
- **Micro-Interactions & Gamification:** Framer Motion, Canvas Confetti
- **Icons:** Lucide Icons
- **Direct Zero-Fee Checkout Architecture:** Pre-wired Stripe Checkout and 1-Click Fast Guest Checkout supporting Apple Pay, Google Pay, Cards, and BNPL (Klarna / Afterpay) with **$0 in marketplace fees**.

---

## 🚀 Live Preview & Access

The server is currently running live in development mode:
- **Storefront:** [http://localhost:3000](http://localhost:3000)
- **Studio Admin & Product Editor:** [http://localhost:3000/admin](http://localhost:3000/admin)
  - **Default Studio Passcode:** `patisserie2026`

---

## 🧁 Conversion-Engineered CRO Features (Baymard Institute Data-Backed)

### 1. Hero Section with "Labor Illusion" Storytelling
- Headline: *"One-of-a-Kind Handcrafted Faux Patisserie Decor."*
- Storytelling triggers emphasizing the 48-hour slow-cure process, lightweight polymer foam clay cores (under 2.5 oz, guaranteed safe for delicate Christmas tree branches), and authentic glass micro-bead sugar dusting.
- Micro-Trust Bar:
  - ⭐ **5.0 Maker Rating** (1,400+ Verified Collectors)
  - 📦 **Crush-Proof Packaging** (Individually cocooned, ships from Florida)
  - 🔒 **100% Direct Studio Purchase** (Zero corporate middleman markups)

### 2. Etsy-Style Filterable Catalog
- Instant client-side category filtering:
  - `All Pieces`
  - `Ice Cream Cones`
  - `Donut Wreaths`
  - `Cake Slices & Gift Boxes`
  - `Custom Requests`
  - `Recently Sold Archive` (Social proof trigger)
- 4:5 portrait ratio cards with smooth hover-zoom and secondary photo hover switch.
- Scarcity badges: *"Only 1 Left"*, *"Small Batch (Set of 4)"*, and prestigious *"SOLD"* badge.

### 3. Product Detail Modal (`QuickViewModal`)
- **Upfront Cost Transparency:** Exact shipping cost or *"Free Priority Shipping over $75"* and estimated delivery dates displayed **before** the shopper ever clicks Add to Cart (combating the #1 reason for 40% cart abandonment).
- **Craftsmanship Breakdown (IKEA Effect):** Accordion detailing the clay medium, glass beads, UV sealant, and hanging wires.
- **Scale & Placement Guide:** Exact dimensions and styling suggestions.
- **Mobile Sticky Buy Bar:** On viewports under 768px, a pinned bottom bar in the natural thumb zone ensures frictionless conversion.

### 4. Slide-Out Cart Drawer with AOV Gamification
- **Free Shipping Progress Bar (Zeigarnik Effect):** Visual meter calculating *"You're $X away from Free Priority Shipping!"* with celebratory confetti when $75 is reached.
- **1-Click "Complete the Set" Upsell Cards:**
  - Velvet Ribbon Ornament Hooks (Set of 12) — $8.00
  - Heirloom Archival Storage Box — $14.00
  - Mini Pastel Sprinkle Donut Tree Pick — $16.00
- **Frictionless Express Guest Checkout:** 1-Click Guest Checkout with Apple Pay, Google Pay, and Klarna/Afterpay BNPL breakdown.
- **Instant Order Confirmation Receipt:** Complete breakdown with savings notice (*"100% Direct Studio Purchase — $0 Marketplace Cut Taken"*).

### 5. Studio Owner Management Suite (`/admin`)
- Protected by passcode (`patisserie2026`).
- **1-Click SOLD Toggle:** Shifts items between Active stock and the Social Proof Sold Archive instantly.
- **Inline Editing:** Edit prices and adjust stock count (+ / -) directly.
- **Add / Edit Modal:** Full editing for Title, Price, Compare-At Price, Category, Stock Count, Dimensions, Styling Tips, Materials, and Photo URLs.
- **Zero-Code Persistence:** Automatically syncs to `/data/products.json` via `/api/products` and browser fallback storage.
- **Export & Seed Restore:** 1-click JSON export and factory reset back to the 8 custom handcrafted seed pieces.

---

## 🎨 Initial Custom Inventory (8 Seed Listings)
1. **Lavender Frosted Gift Box & Gingerbread Topper** ($48, compare $58)
2. **Velvet Berry Cake Slice with Maraschino Cherry** ($34, compare $42)
3. **Purple Galaxy Swirl Trio (Cone, Cake Slice & Cupcake)** ($85 — Marked as **SOLD** for social proof)
4. **Pastel Patisserie Donut Collection (Set of 6)** ($95, compare $115)
5. **Festive Red & Green Holiday Sprinkle Donuts (Set of 9)** ($125, compare $150)
6. **Mint Chocolate Chip Striped Ornament Cones (Set of 4)** ($68)
7. **Peppermint Twist & Blue Frosting Cookie Cones (Set of 4)** ($68)
8. **Citrus Tropics Faux Soft-Serve Trio (Pineapple, Lime & Banana)** ($58)
