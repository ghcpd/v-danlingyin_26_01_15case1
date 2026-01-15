import { useMemo, useState } from 'react';
import { CategoryFilter, CategoryOption } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { products } from './data/products';
import { ProductCategory } from './types';

const categoryOptions: CategoryOption[] = [
  'All',
  ...Array.from(new Set(products.map((product) => product.category))) as ProductCategory[],
];

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryOption>('All');

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Simple Product Listing</p>
            <h1 className="text-3xl font-bold text-slate-900">Browse Products</h1>
            <p className="text-sm text-slate-600">Filter products by category or view them all.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              {visibleProducts.length} items
            </span>
          </div>
        </header>

        <section className="mb-8">
          <CategoryFilter
            categories={categoryOptions}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </section>

        <section>
          {visibleProducts.length === 0 ? (
            <p className="text-sm text-slate-600">No products found for this category.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
