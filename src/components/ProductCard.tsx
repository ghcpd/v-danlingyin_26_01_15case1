import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <header className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {product.category}
        </span>
      </header>
      <p className="text-base font-semibold text-emerald-700">{currencyFormatter.format(product.price)}</p>
    </article>
  );
}
