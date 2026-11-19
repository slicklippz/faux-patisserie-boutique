import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { QuickViewModal } from "@/components/catalog/QuickViewModal";
import { Toaster } from "@/components/ui/Toaster";

export const metadata: Metadata = {
  title: "Vette's Crafting | Air Dry Foam Clay",
  description:
    "Welcome to Vette's Crafting! Custom air dry foam clay faux-bake ornaments, holiday decor, and collectible displays. Handmade with joy.",
  openGraph: {
    title: "Vette's Crafting | Air Dry Foam Clay",
    description: "Unique crafted pieces that add a personal touch to your home. New designs posted weekly!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#1E293B] selection:bg-[#FEF08A] selection:text-[#0F766E]">
        <CartProvider>
          {children}
          <CartDrawer />
          <QuickViewModal />
          <Toaster />
        </CartProvider>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
          strategy="afterInteractive"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
