import { useState, useMemo } from 'react';
import { products, categories } from './data/products';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductList } from './components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === null) {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Simple Product Listing</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

export default App;
