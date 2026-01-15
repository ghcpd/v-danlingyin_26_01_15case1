import { Product } from '../types/product';

export const products: Product[] = [
  { id: 1, name: 'Wireless Mouse', price: 29.99, category: 'Electronics' },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99, category: 'Electronics' },
  { id: 3, name: 'USB-C Hub', price: 45.99, category: 'Electronics' },
  { id: 4, name: 'Cotton T-Shirt', price: 19.99, category: 'Clothing' },
  { id: 5, name: 'Denim Jeans', price: 59.99, category: 'Clothing' },
  { id: 6, name: 'Running Shoes', price: 79.99, category: 'Clothing' },
  { id: 7, name: 'Coffee Maker', price: 49.99, category: 'Home' },
  { id: 8, name: 'Desk Lamp', price: 34.99, category: 'Home' },
  { id: 9, name: 'Throw Pillow', price: 24.99, category: 'Home' },
  { id: 10, name: 'Notebook Set', price: 12.99, category: 'Office' },
  { id: 11, name: 'Ballpoint Pens', price: 8.99, category: 'Office' },
  { id: 12, name: 'Desk Organizer', price: 22.99, category: 'Office' },
];

export const categories: string[] = [...new Set(products.map((p) => p.category))];
