import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 mb-3">{product.category}</p>
      <p className="text-2xl font-bold text-blue-600">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
