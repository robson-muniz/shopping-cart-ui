import { createContext, useState, useEffect } from "react"; // Fixed: lowercase 'c'
// Remove this import - you don't need it in the context file
// import ProductList from "../components/ProductList.jsx";

// Create the context properly
export const ProductContext = createContext(); // Add parentheses ()

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("/api/products"); // Added leading slash
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
                console.log(err);
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