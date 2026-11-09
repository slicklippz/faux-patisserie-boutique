'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product, ProductCategory } from '@/types/product';
import initialProductsData from '@/data/products.json';
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  Check,
  RotateCcw,
  Save,
  Download,
  Upload,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  DollarSign,
  Package,
  Layers,
  Image as ImageIcon,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeError, setPasscodeError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Edit / Create Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formSubtitle, setFormSubtitle] = useState('');
  const [formPrice, setFormPrice] = useState(48);
  const [formCompareAt, setFormCompareAt] = useState<number | undefined>(58);
  const [formCategory, setFormCategory] = useState<Product['category']>('Cake Slices & Gift Boxes');
  const [formStockCount, setFormStockCount] = useState(3);
  const [formScarcityBadge, setFormScarcityBadge] = useState('Small Batch Handcrafted');
  const [formDescription, setFormDescription] = useState('');
  const [formDimensions, setFormDimensions] = useState('4.5" H x 3.5" W | 2.2 oz');
  const [formStylingTip, setFormStylingTip] = useState('Nestle into flocked tree branches or on a tiered dessert stand.');
  const [formMaterials, setFormMaterials] = useState<string>('Air-dry foam clay, micro-glass beads, UV sealant');
  const [formImages, setFormImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');

  // Check stored auth
  useEffect(() => {
    const storedAuth = localStorage.getItem('maison_admin_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch live products
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.success && data.products) {
          setProducts(data.products);
        } else {
          setProducts(initialProductsData as Product[]);
        }
      } catch (e) {
        console.error('Failed to load products from API, using initial seed data', e);
        setProducts(initialProductsData as Product[]);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcodes
    if (passcode.trim() === 'patisserie2026' || passcode.trim() === 'admin' || passcode.trim() === 'florida') {
      setIsAuthenticated(true);
      localStorage.setItem('maison_admin_auth', 'true');
      setPasscodeError('');
    } else {
      setPasscodeError('Invalid passcode. Hint: Use default passcode "patisserie2026"');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('maison_admin_auth');
  };

  // Single-click toggle SOLD status (moves to/from Recently Sold Archive)
  const toggleSold = async (productId: string) => {
    const updated = products.map((p) => {
      if (p.id === productId) {
        const nextSold = !p.isSold;
        return {
          ...p,
          isSold: nextSold,
          inStock: !nextSold,
          stockCount: nextSold ? 0 : (p.stockCount || 1),
          scarcityBadge: nextSold ? 'SOLD OUT' : 'In Studio Stock',
        };
      }
      return p;
    });

    setProducts(updated);
    await syncToDisk(updated);
  };

  // Adjust stock count inline
  const updateStock = async (productId: string, delta: number) => {
    const updated = products.map((p) => {
      if (p.id === productId) {
        const newCount = Math.max(0, p.stockCount + delta);
        const isSold = newCount === 0;
        return {
          ...p,
          stockCount: newCount,
          inStock: newCount > 0,
          isSold,
          scarcityBadge: isSold ? 'SOLD OUT' : newCount === 1 ? 'Only 1 Left' : p.scarcityBadge,
        };
      }
      return p;
    });

    setProducts(updated);
    await syncToDisk(updated);
  };

  // Quick price adjustment inline
  const updatePrice = async (productId: string, newPrice: number) => {
    if (isNaN(newPrice) || newPrice <= 0) return;
    const updated = products.map((p) => (p.id === productId ? { ...p, price: newPrice } : p));
    setProducts(updated);
    await syncToDisk(updated);
  };

  // Delete product
  const deleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to permanently delete this listing? (Tip: Toggle to SOLD instead if you wish to keep it for social proof!)')) {
      return;
    }
    const updated = products.filter((p) => p.id !== productId);
    setProducts(updated);
    await syncToDisk(updated);
  };

  // Sync products to disk via API
  const syncToDisk = async (newProducts: Product[]) => {
    setSaveStatus('Saving changes to live site...');
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: newProducts,
          passcode: 'patisserie2026',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSaveStatus('✓ Saved to live site immediately!');
        setTimeout(() => setSaveStatus(null), 3000);
      } else {
        setSaveStatus('Warning: Local sync only.');
      }
    } catch (e) {
      console.error(e);
      setSaveStatus('Saved in browser session');
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  // Open modal for Create or Edit
  const openEditModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormTitle(product.title);
      setFormSubtitle(product.subtitle);
      setFormPrice(product.price);
      setFormCompareAt(product.compareAtPrice);
      setFormCategory(product.category);
      setFormStockCount(product.stockCount);
      setFormScarcityBadge(product.scarcityBadge);
      setFormDescription(product.description);
      setFormDimensions(product.dimensions);
      setFormStylingTip(product.stylingTip);
      setFormMaterials(product.materials.join(', '));
      setFormImages(product.images);
    } else {
      setEditingProduct(null);
      setFormTitle('');
      setFormSubtitle('');
      setFormPrice(48);
      setFormCompareAt(58);
      setFormCategory('Cake Slices & Gift Boxes');
      setFormStockCount(3);
      setFormScarcityBadge('Small Batch Handcrafted');
      setFormDescription('Handcrafted with featherlight clay and shimmering sugar beads in our Florida studio.');
      setFormDimensions('5.5" H x 3.0" W | 2.1 oz');
      setFormStylingTip('Looks breathtaking nestled against white frosted evergreen branches.');
      setFormMaterials('Lightweight clay, glass beads, satin ribbon');
      setFormImages(['/products/pastel-donuts-set6.jpg']);
    }
    setNewImageUrl('');
    setIsModalOpen(true);
  };

  // Add Image URL to form
  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setFormImages([...formImages, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  // Remove Image from form
  const handleRemoveImage = (index: number) => {
    setFormImages(formImages.filter((_, i) => i !== index));
  };

  // Save product from modal
  const handleSaveModal = async (e: React.FormEvent) => {
    e.preventDefault();

    const materialsArray = formMaterials
      .split(',')
      .map((m) => m.trim())
      .filter(Boolean);

    const imagesToUse = formImages.length > 0 ? formImages : ['/products/pastel-donuts-set6.jpg'];

    if (editingProduct) {
      // Update existing
      const updated = products.map((p) => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            title: formTitle,
            subtitle: formSubtitle,
            price: Number(formPrice),
            compareAtPrice: formCompareAt ? Number(formCompareAt) : undefined,
            category: formCategory,
            stockCount: Number(formStockCount),
            inStock: Number(formStockCount) > 0,
            isSold: Number(formStockCount) === 0,
            scarcityBadge: formScarcityBadge,
            description: formDescription,
            dimensions: formDimensions,
            stylingTip: formStylingTip,
            materials: materialsArray,
            images: imagesToUse,
          };
        }
        return p;
      });
      setProducts(updated);
      await syncToDisk(updated);
    } else {
      // Create new
      const newProduct: Product = {
        id: `prod-${Date.now().toString(36)}`,
        title: formTitle,
        subtitle: formSubtitle,
        price: Number(formPrice),
        compareAtPrice: formCompareAt ? Number(formCompareAt) : undefined,
        category: formCategory,
        images: imagesToUse,
        inStock: Number(formStockCount) > 0,
        stockCount: Number(formStockCount),
        scarcityBadge: formScarcityBadge,
        isSold: Number(formStockCount) === 0,
        description: formDescription,
        materials: materialsArray,
        dimensions: formDimensions,
        stylingTip: formStylingTip,
        shipsInDays: 'Ships in 1-2 business days',
        rating: 5.0,
        reviewCount: 1,
        featured: false,
      };

      const updated = [newProduct, ...products];
      setProducts(updated);
      await syncToDisk(updated);
    }

    setIsModalOpen(false);
  };

  // Factory reset to seed data
  const handleResetToSeed = async () => {
    if (confirm('Reset catalog back to the 8 original handcrafted seed confections?')) {
      setProducts(initialProductsData as Product[]);
      await syncToDisk(initialProductsData as Product[]);
    }
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'products.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-[#1C1917]/10 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#7E22CE] mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#1C1917]">
              Vette's Crafting Studio
            </h1>
            <p className="text-xs text-[#1C1917]/60">
              Enter passcode to manage prices, inventory & photos.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1C1917] mb-1">
                Studio Passcode
              </label>
              <input
                type="password"
                placeholder="Enter passcode (default: patisserie2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                autoFocus
              />
              {passcodeError && (
                <p className="text-xs text-rose-600 mt-1.5 font-medium">
                  {passcodeError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#2D5A3D] hover:bg-[#1E3F2B] text-white py-3 rounded-full font-bold text-xs shadow-md transition"
            >
              Enter Studio Dashboard
            </button>
          </form>

          <div className="pt-4 border-t border-[#1C1917]/10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#1C1917]/60 hover:text-[#1C1917]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Storefront</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Studio Inventory KPIs
  const activeCount = products.filter((p) => !p.isSold && p.inStock).length;
  const soldCount = products.filter((p) => p.isSold).length;
  const totalInventoryValue = products
    .filter((p) => !p.isSold)
    .reduce((sum, p) => sum + p.price * p.stockCount, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917]">
      
      {/* Studio Header Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#1C1917]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#1C1917] transition"
              title="View Public Store"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] flex items-center gap-2">
                <span>Studio Management Suite</span>
                <span className="text-[10px] bg-[#4A5D4E]/10 text-[#4A5D4E] px-2 py-0.5 rounded-full font-sans uppercase font-bold tracking-wider">
                  Live Editing
                </span>
              </h1>
              <p className="text-xs text-[#1C1917]/60">
                Single-click toggle stock, edit prices, and manage social proof archive
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            {saveStatus && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-pulse">
                {saveStatus}
              </span>
            )}

            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 px-3.5 py-2 rounded-full transition"
            >
              <span>View Live Store</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <button
              onClick={() => openEditModal()}
              className="inline-flex items-center gap-1.5 bg-[#7E22CE] hover:bg-[#6B21A8] text-white px-4 py-2 rounded-full text-xs font-bold shadow transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Confection</span>
            </button>

            <button
              onClick={handleLogout}
              className="text-xs text-stone-500 hover:text-stone-800 p-2"
              title="Lock Studio"
            >
              <Unlock className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Studio Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#1C1917]/10 shadow-sm">
            <span className="text-xs font-medium text-[#1C1917]/60 uppercase tracking-wider">
              Total Pieces
            </span>
            <p className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
              {products.length}
            </p>
            <p className="text-[11px] text-[#4A5D4E] mt-0.5">In boutique database</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#1C1917]/10 shadow-sm">
            <span className="text-xs font-medium text-emerald-800 uppercase tracking-wider">
              Active In Stock
            </span>
            <p className="font-serif text-2xl font-bold text-emerald-700 mt-1">
              {activeCount}
            </p>
            <p className="text-[11px] text-emerald-600 mt-0.5">Purchasable now</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#1C1917]/10 shadow-sm">
            <span className="text-xs font-medium text-purple-800 uppercase tracking-wider">
              Sold Proof Archive
            </span>
            <p className="font-serif text-2xl font-bold text-[#7E22CE] mt-1">
              {soldCount}
            </p>
            <p className="text-[11px] text-purple-600 mt-0.5">Social proof display</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#1C1917]/10 shadow-sm">
            <span className="text-xs font-medium text-amber-800 uppercase tracking-wider">
              Inventory Value
            </span>
            <p className="font-serif text-2xl font-bold text-amber-900 mt-1">
              ${totalInventoryValue.toFixed(0)}
            </p>
            <p className="text-[11px] text-amber-700 mt-0.5">Retail batch value</p>
          </div>
        </div>

        {/* Database & Sync Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-[#1C1917]/10 shadow-sm text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1C1917]">Zero-Code Product Layer:</span>
            <span className="text-[#1C1917]/70">
              Updates write directly to <code className="bg-stone-100 px-1.5 py-0.5 rounded text-[11px]">data/products.json</code>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1C1917]/20 hover:bg-stone-50 font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-[#7E22CE]" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={handleResetToSeed}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#1C1917]/20 hover:bg-stone-50 font-semibold text-stone-600"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restore 8 Seed Listings</span>
            </button>
          </div>
        </div>

        {/* Product Management Table / Cards */}
        <div className="bg-white rounded-3xl border border-[#1C1917]/10 shadow-sm overflow-hidden">
          
          <div className="p-5 border-b border-[#1C1917]/10 flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-[#1C1917]">
              Current Listings ({products.length})
            </h2>
            <span className="text-xs text-[#1C1917]/60">
              Click &quot;SOLD&quot; toggle to immediately shift an item to the Social Proof Archive
            </span>
          </div>

          <div className="divide-y divide-[#1C1917]/10">
            {products.map((p) => (
              <div
                key={p.id}
                className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-[#FAF8F5]/60 transition"
              >
                
                {/* Thumbnail & Title */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-[#1C1917]/10">
                    <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
                    {p.isSold && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-[9px] font-black text-white uppercase tracking-wider">SOLD</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A5D4E] bg-stone-100 px-2 py-0.5 rounded">
                        {p.category}
                      </span>
                      {p.isSold ? (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                          Archived Piece
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Live On Store
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#1C1917]">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#1C1917]/60 line-clamp-1">
                      {p.subtitle} • {p.materials.length} Materials listed
                    </p>
                  </div>
                </div>

                {/* Inline Controls: Price, Stock, Sold Status */}
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                  
                  {/* Price input */}
                  <div className="flex items-center gap-1 bg-stone-50 border border-[#1C1917]/15 rounded-xl px-2 py-1">
                    <span className="text-xs text-[#1C1917]/60 font-bold">$</span>
                    <input
                      type="number"
                      value={p.price}
                      onChange={(e) => updatePrice(p.id, parseFloat(e.target.value))}
                      className="w-14 bg-transparent text-xs font-bold text-[#1C1917] focus:outline-none"
                    />
                  </div>

                  {/* Stock Stepper */}
                  <div className="flex items-center border border-[#1C1917]/15 rounded-xl bg-stone-50 overflow-hidden">
                    <button
                      onClick={() => updateStock(p.id, -1)}
                      className="px-2 py-1 hover:bg-stone-200 text-xs font-bold"
                      title="Decrease stock"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-bold text-[#1C1917]">
                      {p.stockCount} in stock
                    </span>
                    <button
                      onClick={() => updateStock(p.id, 1)}
                      className="px-2 py-1 hover:bg-stone-200 text-xs font-bold"
                      title="Increase stock"
                    >
                      +
                    </button>
                  </div>

                  {/* 1-Click Sold Toggle Button */}
                  <button
                    onClick={() => toggleSold(p.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition flex items-center gap-1.5 ${
                      p.isSold
                        ? 'bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-300'
                        : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300'
                    }`}
                  >
                    {p.isSold ? (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Marked as SOLD</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>In Stock</span>
                      </>
                    )}
                  </button>

                  {/* Edit & Delete actions */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(p)}
                      className="p-2 text-stone-600 hover:text-[#7E22CE] hover:bg-stone-100 rounded-lg transition"
                      title="Edit Details"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="p-2 text-stone-400 hover:text-rose-600 hover:bg-stone-100 rounded-lg transition"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </main>

      {/* Edit / Create Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1C1917]/70 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#1C1917]/10 overflow-hidden my-8 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/10">
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  {editingProduct ? 'Edit Artisan Confection' : 'Add New Handcrafted Confection'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center text-[#1C1917]/60"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveModal} className="space-y-4 text-xs">
                
                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <label className="font-bold text-[#1C1917]">Product Title</label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Lavender Frosted Gift Box & Gingerbread Topper"
                    className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#1C1917]">Subtitle / Quick Pitch</label>
                  <input
                    type="text"
                    required
                    value={formSubtitle}
                    onChange={(e) => setFormSubtitle(e.target.value)}
                    placeholder="e.g. Realistic faux gateau slice with hand-whipped piped frosting"
                    className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                  />
                </div>

                {/* Price, Compare At, Category */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Price ($)</label>
                    <input
                      type="number"
                      required
                      step="any"
                      value={formPrice}
                      onChange={(e) => setFormPrice(parseFloat(e.target.value))}
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Compare-At Price ($)</label>
                    <input
                      type="number"
                      step="any"
                      value={formCompareAt ?? ''}
                      onChange={(e) => setFormCompareAt(e.target.value ? parseFloat(e.target.value) : undefined)}
                      placeholder="Optional"
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Category</label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value as any)}
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                    >
                      <option value="Cake Slices & Gift Boxes">Cake Slices & Gift Boxes</option>
                      <option value="Donut Wreaths">Donut Wreaths</option>
                      <option value="Ice Cream Cones">Ice Cream Cones</option>
                      <option value="Custom Requests">Custom Requests</option>
                    </select>
                  </div>
                </div>

                {/* Stock & Scarcity Badge */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Studio Stock Units</label>
                    <input
                      type="number"
                      min={0}
                      value={formStockCount}
                      onChange={(e) => setFormStockCount(parseInt(e.target.value))}
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Scarcity Badge Pill</label>
                    <input
                      type="text"
                      value={formScarcityBadge}
                      onChange={(e) => setFormScarcityBadge(e.target.value)}
                      placeholder="e.g. Only 1 Left, Small Batch (Set of 4)"
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="font-bold text-[#1C1917]">Full Story & Description</label>
                  <textarea
                    rows={3}
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl p-3 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7E22CE]"
                  />
                </div>

                {/* Materials & Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Dimensions & Weight</label>
                    <input
                      type="text"
                      value={formDimensions}
                      onChange={(e) => setFormDimensions(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#1C1917]">Materials (Comma separated)</label>
                    <input
                      type="text"
                      value={formMaterials}
                      onChange={(e) => setFormMaterials(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917]"
                    />
                  </div>
                </div>

                {/* Styling Tip */}
                <div className="space-y-1">
                  <label className="font-bold text-[#1C1917]">Styling & Tree Placement Tip</label>
                  <input
                    type="text"
                    value={formStylingTip}
                    onChange={(e) => setFormStylingTip(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917]"
                  />
                </div>

                {/* Image Gallery Management */}
                <div className="space-y-2 pt-2 border-t border-[#1C1917]/10">
                  <label className="font-bold text-[#1C1917] block">
                    Product Photography Gallery ({formImages.length} images)
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="Paste image URL (https://...)"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      className="flex-1 bg-[#FAF8F5] border border-[#1C1917]/20 rounded-xl px-3 py-2 text-[#1C1917]"
                    />
                    <button
                      type="button"
                      onClick={handleAddImage}
                      className="bg-[#1C1917] text-white px-4 py-2 rounded-xl font-bold"
                    >
                      Add Photo
                    </button>
                  </div>

                  <div className="flex items-center gap-3 overflow-x-auto py-2">
                    {formImages.map((img, idx) => (
                      <div key={idx} className="relative w-20 h-24 rounded-xl overflow-hidden border flex-shrink-0 group">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#1C1917]/10">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-full border border-[#1C1917]/20 font-bold hover:bg-stone-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-[#7E22CE] hover:bg-[#6B21A8] text-white px-6 py-2 rounded-full font-bold shadow-md"
                  >
                    Save & Update Live Site
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
