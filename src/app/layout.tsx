import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { QuickViewModal } from "@/components/catalog/QuickViewModal";
import { Toaster } from "@/components/ui/Toaster";

export const metadata: Metadata = {
  title: "Vette's Crafting | Handmade Faux Confections & Heirloom Holiday Decor",
  description:
    "Welcome to Vette's Crafting! A small, handmade hobby bringing you unique faux-bake holiday confections, cakes, and donut ornaments made by hand with joy. Direct from Florida.",
  openGraph: {
    title: "Vette's Crafting | Handmade with Joy",
    description: "Handcrafted faux patisserie confections that add a personal touch to your home. New designs posted weekly!",
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
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#EBF4EE] selection:text-[#2D5A3D]">
        <CartProvider>
          {children}
          <CartDrawer />
          <QuickViewModal />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
