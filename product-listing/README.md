# Simple Product Listing

A simple product listing web application built with React 18, TypeScript, and Tailwind CSS.

## Description

This application displays a list of products with their name, price, and category. Users can filter products by category using simple filter buttons.

## Features

- **Display all products** - View a grid of all available products
- **Filter by category** - Click category buttons to filter products
- **Responsive design** - Grid layout adapts to different screen sizes
- **Strong TypeScript typing** - All data models are fully typed

## Tech Stack

- React 18
- TypeScript (strict mode)
- Vite
- Tailwind CSS
- pnpm

## How to Run

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Navigate to the project directory
cd product-listing

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
product-listing/
├── src/
│   ├── components/
│   │   ├── CategoryFilter.tsx  # Filter buttons component
│   │   ├── ProductCard.tsx     # Individual product display
│   │   └── ProductList.tsx     # Grid of product cards
│   ├── data/
│   │   └── products.ts         # Mock product data
│   ├── types/
│   │   └── product.ts          # TypeScript interfaces
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Tailwind CSS imports
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```
