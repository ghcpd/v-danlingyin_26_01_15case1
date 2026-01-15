import { useState, useMemo } from 'react';
import { products } from './data/products';
import { ProductList } from './components/ProductList';
import { CategoryFilter } from './components/CategoryFilter';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map((product) => product.category));
    return Array.from(uniqueCategories).sort();
  }, []);

  // Filter products based on selected category
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
          <h1 className="text-3xl font-bold text-gray-900">
            Simple Product Listing
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

export default App;
