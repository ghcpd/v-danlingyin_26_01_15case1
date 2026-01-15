import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-2xl font-bold text-green-600 mb-2">
        ${product.price.toFixed(2)}
      </p>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
        {product.category}
      </span>
    </div>
  );
}
