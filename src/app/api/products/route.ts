import { NextResponse } from 'next/server';
import { getProducts, saveProducts } from '@/lib/products';
import { Product } from '@/types/product';

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error('Failed to load products:', error);
    return NextResponse.json({ success: false, error: 'Failed to retrieve products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { products, passcode } = body;

    const validPasscode = process.env.ADMIN_PASSCODE || 'patisserie2026';
    if (passcode !== validPasscode) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Invalid admin passcode.' }, { status: 401 });
    }

    if (!Array.isArray(products)) {
      return NextResponse.json({ success: false, error: 'Invalid payload: products must be an array.' }, { status: 400 });
    }

    const success = await saveProducts(products as Product[]);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Failed to save products to disk' }, { status: 500 });
    }

    return NextResponse.json({ success: true, count: products.length, message: 'Products successfully updated' });
  } catch (error) {
    console.error('Failed to update products:', error);
    return NextResponse.json({ success: false, error: 'Server error processing product update' }, { status: 500 });
  }
}
