import { ProductCategory } from '../types';

export type CategoryOption = ProductCategory | 'All';

interface CategoryFilterProps {
  categories: CategoryOption[];
  activeCategory: CategoryOption;
  onSelect: (category: CategoryOption) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'border-emerald-600 bg-emerald-600 text-white shadow'
                : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
