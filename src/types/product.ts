export type ProductCategory =
  | 'All Pieces'
  | 'Ice Cream Cones'
  | 'Donut Wreaths'
  | 'Cake Slices & Gift Boxes'
  | 'Custom Requests'
  | 'Recently Sold Archive';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  category: 'Ice Cream Cones' | 'Donut Wreaths' | 'Cake Slices & Gift Boxes' | 'Custom Requests';
  images: string[];
  inStock: boolean;
  stockCount: number;
  scarcityBadge: string;
  isSold: boolean;
  description: string;
  materials: string[];
  dimensions: string;
  stylingTip: string;
  shipsInDays: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  creatorCredit?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedAddon?: string;
}

export interface OrderDetails {
  customerName: string;
  customerEmail: string;
  shippingAddress: {
    line1: string;
    city: string;
    state: string;
    postalCode: string;
  };
  paymentMethod: 'card' | 'apple_pay' | 'google_pay' | 'klarna' | 'afterpay';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}
