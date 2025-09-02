# 👕 Clothes Store Demo

<img width="1920" height="960" alt="Cover" src="https://github.com/user-attachments/assets/3e783713-5962-46cd-9e34-fbf31da145b6" />

A fully responsive e-commerce clothing store built with Next.js 14 and TypeScript. This project demonstrates modern frontend architecture and best practices for building scalable web applications.

## ✨ Features

* **Product Catalog** - Browse products with dynamic filtering and sorting
* **Category Navigation** - Filter products by categories
* **Advanced Filtering** - Filter by price range, size, and color
* **Shopping Cart** - Add/remove items with quantity control
* **Responsive Design** - Optimized for all devices from mobile to desktop
* **Performance Optimized** - Fast loading with Next.js App Router and Server Components
* **State Management** - Global state with Redux Toolkit and persisted cart

## 🛠️ Tech Stack

* **Frontend Framework**: [Next.js 14](https://nextjs.org/) with App Router
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
* **Styling**: [TailwindCSS](https://tailwindcss.com/)
* **UI Components**:
  * [Embla Carousel](https://www.embla-carousel.com/) for image sliders
  * [React Range](https://github.com/tajo/react-range) for price range filters
* **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Installation
1. Clone the repository
```bash
git clone https://github.com/yliubyva/nextjs-ecommerce.git
cd nextjs-ecommerce
```
2. Install dependencies
```bash
npm install
# or
yarn install
```
3. Run the development server
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

## 📐 Project Structure

```bash
src/
  ├── app/                # Next.js App Router, handling pages and routes
  ├── data/               # Mock data like products.ts
  ├── features/           # Feature-based modules
  │   ├── products/       # Product-related components and logic
  │   └── cart/           # Cart-related components and logic
  ├── shared/             # Shared UI components
  │   └── ui/             # UI components (atoms, molecules, organisms)
  ├── lib/                # Holds global configurations, like the Redux store
```
### 🧪 Future Improvements

* Wishlist functionality
* Product reviews and ratings 
* Checkout page
* Integration with backend API (e.g., mock server or real DB)
* Unit and integration tests with Jest and React Testing Library

## 📱 Live Demo
Check out the live demo: https://nextjs-ecommerce-5wxk.vercel.app/

Developed by [Yana Liubyva](https://www.linkedin.com/in/yliubyva/)
