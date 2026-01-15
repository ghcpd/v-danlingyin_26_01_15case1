# Simple Product Listing

A simple, responsive product listing web application built with React, TypeScript, Vite, and Tailwind CSS.

## Description

This application displays a collection of products with the ability to filter them by category. Each product shows its name, price, and category. The UI is clean and modern, featuring a grid layout that adapts to different screen sizes.

## Features

- **Display All Products**: View a comprehensive list of products in a responsive grid layout
- **Filter by Category**: Filter products by selecting specific categories (Electronics, Sports, Home, Accessories)
- **Responsive Design**: Mobile-first design that works seamlessly on all device sizes
- **Type-Safe**: Built with TypeScript in strict mode for maximum type safety
- **Modern UI**: Clean interface styled with Tailwind CSS

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

## Prerequisites

- Node.js (v18 or higher)
- pnpm

## Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

## How to Run

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Build for Production

To create a production build:

```bash
pnpm build
```

To preview the production build:

```bash
pnpm preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── CategoryFilter.tsx   # Filter buttons for categories
│   │   ├── ProductCard.tsx      # Individual product display
│   │   └── ProductList.tsx      # Grid of product cards
│   ├── data/
│   │   └── products.ts          # Mock product data
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   ├── types.ts                 # TypeScript type definitions
│   └── index.css                # Global styles and Tailwind imports
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Components

### App
Main component that manages the application state and orchestrates the product filtering logic.

### CategoryFilter
Displays filter buttons for each category plus an "All" button to show all products.

### ProductList
Renders a responsive grid of product cards. Shows a message when no products match the filter.

### ProductCard
Displays individual product information including name, category, and price.

## Type Safety

The application uses TypeScript with strict mode enabled and includes:
- No `any` types
- Strict null checks
- Proper interface definitions for all props
- Type-safe product data model
