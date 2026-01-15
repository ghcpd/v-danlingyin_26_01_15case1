# Simple Product Listing

A minimal React 18 + TypeScript + Vite app that lists products from mock data and lets you filter by category. Styled with Tailwind CSS. No backend or persistence.

## Features
- Display all products with name, price, and category
- Filter products by category via quick-select buttons
- Strongly typed product model (no `any`)
- Simple responsive grid layout

## Getting Started
Prerequisites: [pnpm](https://pnpm.io/) and Node 18+.

```bash
pnpm install
pnpm dev
```

Then open the URL shown in the terminal (default http://localhost:5173).

## Scripts
- `pnpm dev` – start the dev server
- `pnpm build` – production build
- `pnpm preview` – preview the production build locally

## Project Structure
- [src/App.tsx](src/App.tsx): Page layout and filter logic
- [src/components/CategoryFilter.tsx](src/components/CategoryFilter.tsx): Category buttons
- [src/components/ProductCard.tsx](src/components/ProductCard.tsx): Individual product display
- [src/data/products.ts](src/data/products.ts): Mock product data
- [src/types.ts](src/types.ts): Product and category types
