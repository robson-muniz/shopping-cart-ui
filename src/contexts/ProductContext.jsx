// src/contexts/ProductContext.jsx
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }
                const data = await response.json();

                // Map DummyJSON structure to match your app's expected format
                const formattedProducts = data.products.map(product => ({
                    id: product.id,
                    name: product.title,               // 'title' → 'name'
                    description: product.description,
                    price: product.price,
                    quantity: product.stock,           // 'stock' → 'quantity'
                    category: product.category,
                    rating: product.rating,
                    image: product.thumbnail,          // Use thumbnail as main image
                    images: product.images,            // Keep all images for gallery
                    discountPercentage: product.discountPercentage,
                    brand: product.brand
                }));

                setProducts(formattedProducts);
            } catch (err) {
                setError(err.message);
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
}