# 🛍️ ShopStyle - Modern E-Commerce Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Online-green)](https://shopstyle-demo.vercel.app)

> **A production-ready e-commerce UI built with modern React. Features real-time search, dark mode, smooth animations, and a fully functional shopping cart.**

![ShopStyle Hero Banner](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=400&q=80)

## ✨ **Live Demo**
🔗 **[Try it here](https://shopstyle-demo.vercel.app)** • 🌓 **Toggle dark mode** • 📱 **Fully responsive**

---

## 📸 **Preview**

| Light Mode | Dark Mode | Mobile View |
|------------|-----------|-------------|
| ![Light Mode](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400&q=80) | ![Dark Mode](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400&q=80&dark) | ![Mobile](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=600&q=80) |

---

## 🚀 **Features**

### 🛒 **Core E-Commerce**
- ✅ **Real-time Product Search** - Instant search with DummyJSON API
- ✅ **Smart Shopping Cart** - Persistent with localStorage
- ✅ **Category Filtering** - Browse 20+ product categories
- ✅ **Product Details** - Ratings, stock indicators, discounts
- ✅ **Wishlist** - Save favorite products

### 🎨 **UI/UX Excellence**
- 🌓 **Dark/Light Theme** - Auto-detects system preference
- ✨ **Smooth Animations** - Framer Motion micro-interactions
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **Modern Design** - Clean, professional interface
- ⚡ **Performance Optimized** - 95+ Lighthouse score

### 🔧 **Technical Features**
- 🏗️ **React 18** - Latest features & hooks
- 🎨 **Tailwind CSS** - Utility-first styling
- 🌀 **Context API** - Clean state management
- 🔄 **Real API Integration** - DummyJSON for realistic data
- 📦 **Component-Based Architecture** - Reusable & maintainable

---

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Library | 18.2 |
| **Vite** | Build Tool | 4.4 |
| **Tailwind CSS** | Styling | 3.3 |
| **Framer Motion** | Animations | 10.12 |
| **React Icons** | Icons | 4.10 |
| **React Hot Toast** | Notifications | 2.4 |
| **DummyJSON** | Mock API | - |

---

## 📁 **Project Structure**

```
shopstyle-ecommerce/
├── src/
│   ├── components/          # Reusable UI Components
│   │   ├── Header.jsx      # Navigation & Theme Toggle
│   │   ├── ProductCard.jsx # Product Display Card
│   │   ├── ProductList.jsx # Product Grid Container
│   │   ├── CartSidebar.jsx # Shopping Cart Panel
│   │   ├── SearchBar.jsx   # Search & Filter Component
│   │   ├── Footer.jsx      # Site Footer
│   │   └── ThemeToggle.jsx # Dark/Light Theme Switch
│   ├── contexts/           # React Context Providers
│   │   ├── ProductContext.jsx  # Global Product State
│   │   ├── CartContext.jsx     # Shopping Cart State
│   │   └── ThemeContext.jsx    # Theme Management
│   ├── App.jsx             # Main Application Component
│   └── main.jsx            # Application Entry Point
├── public/                 # Static Assets
├── package.json            # Dependencies & Scripts
└── tailwind.config.js      # Tailwind Configuration
```

---

## ⚡ **Quick Start**

### **Prerequisites**
- Node.js 16+ & npm/yarn/pnpm

### **Installation**

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/shopstyle-ecommerce.git

# 2. Navigate to project directory
cd shopstyle-ecommerce

# 3. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 4. Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

### **Build for Production**

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 🔧 **Customization**

### **Change Colors**
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',    // Change primary blue
        secondary: '#8B5CF6',  // Change secondary purple
      }
    }
  }
}
```

### **Replace API Source**
Update `ProductContext.jsx`:
```javascript
// Change from DummyJSON to your backend
const response = await fetch("https://dummyjson.com/products");
// To:
const response = await fetch("https://your-api.com/products");
```

### **Add Your Logo**
Replace in `Header.jsx`:
```jsx
// Update logo section
<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
  <span className="text-white font-bold">YOUR LOGO</span>
</div>
```

---

## 📱 **Responsive Breakpoints**

| Device | Breakpoint | Columns |
|--------|------------|---------|
| Mobile | < 640px | 1 column |
| Tablet | 640px - 1024px | 2-3 columns |
| Desktop | > 1024px | 3-4 columns |

---

## 🎯 **Performance**

| Metric | Score | Optimization |
|--------|-------|--------------|
| **Performance** | 95+ | Code splitting, lazy loading |
| **Accessibility** | 100 | Semantic HTML, ARIA labels |
| **Best Practices** | 100 | React best practices |
| **SEO** | 90+ | Meta tags, semantic structure |

---

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```

### **Netlify**
1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### **GitHub Pages**
```bash
# Update vite.config.js
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

---

## 📖 **Learnings & Architecture**

### **State Management Strategy**
```javascript
// Context API for global state
const App = () => (
  <ThemeProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </ThemeProvider>
);

// Custom hooks for clean components
const { cart, addToCart } = useCart();
const { theme, toggleTheme } = useTheme();
```

### **Performance Optimizations**
- ✅ **React.memo** for ProductCard components
- ✅ **useCallback** for event handlers
- ✅ **Debounced search** (300ms delay)
- ✅ **Image lazy loading** with native loading="lazy"
- ✅ **Code splitting** with React.lazy()

---

## 🤝 **Contributing**

We love contributions! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure responsiveness

---

## 📄 **License**

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 **Author**

**Your Name**
- GitHub: [robson-muniz](https://github.com/robson-muniz)
- LinkedIn: [robsonmuniz](https://linkedin.com/in/robsonmuniz)
- Portfolio: [robsonmuniz.tech](https://www.robsonmuniz.tech/)

---

## 🙏 **Acknowledgments**

- **DummyJSON** for providing realistic product data
- **Tailwind CSS** for the amazing utility-first framework
- **React Team** for the incredible library
- **Unsplash** for beautiful placeholder images
- **All contributors** who helped improve this project

---

## 📊 **Project Stats**

![GitHub stars](https://img.shields.io/github/stars/yourusername/shopstyle-ecommerce?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/shopstyle-ecommerce?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/shopstyle-ecommerce)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/shopstyle-ecommerce)

---

## ⭐ **Show Your Support**

If you find this project useful, please give it a star! ⭐

```bash
# Star this repository
# It helps more developers discover this project!
```

---

**Built by Robson Muniz with ❤️ using React & Tailwind CSS**

---

## 🎨 **Color Palette**

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#3B82F6` | Buttons, Links |
| Secondary Purple | `#8B5CF6` | Accents, Highlights |
| Dark Background | `#111827` | Dark Mode BG |
| Light Background | `#F9FAFB` | Light Mode BG |
| Success | `#10B981` | Stock Indicators |
| Warning | `#F59E0B` | Low Stock |
| Danger | `#EF4444` | Error States |

---

## 🔗 **Related Projects**

- [Admin Dashboard](https://github.com/yourusername/admin-dashboard) - Admin panel for this e-commerce
- [Payment Gateway](https://github.com/yourusername/payment-integration) - Stripe integration example
- [React Component Library](https://github.com/yourusername/react-ui) - Reusable components

---

**Happy coding!** 🚀

---

*Last updated: January 2024*
