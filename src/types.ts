export type ProductCategory = 'Electronics' | 'Home' | 'Accessories' | 'Books' | 'Clothing';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
}
