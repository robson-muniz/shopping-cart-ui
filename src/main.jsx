// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx"; // Add this

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider> {/* Wrap with ThemeProvider */}
            <ProductProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductProvider>
        </ThemeProvider>
    </StrictMode>,
)