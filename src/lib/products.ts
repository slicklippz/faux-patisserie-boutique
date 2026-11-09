import fs from 'fs';
import path from 'path';
import { Product } from '@/types/product';
import initialProducts from '@/data/products.json';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'products.json');
const SRC_DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'products.json');

export async function getProducts(): Promise<Product[]> {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const data = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
    if (fs.existsSync(SRC_DATA_FILE_PATH)) {
      const data = fs.readFileSync(SRC_DATA_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading products from disk, falling back to embedded products:', error);
  }
  return initialProducts as Product[];
}

export async function saveProducts(products: Product[]): Promise<boolean> {
  try {
    const jsonString = JSON.stringify(products, null, 2);
    
    // Ensure directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, jsonString, 'utf-8');

    const srcDataDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(srcDataDir)) {
      fs.mkdirSync(srcDataDir, { recursive: true });
    }
    fs.writeFileSync(SRC_DATA_FILE_PATH, jsonString, 'utf-8');

    return true;
  } catch (error) {
    console.error('Error writing products to disk:', error);
    return false;
  }
}
