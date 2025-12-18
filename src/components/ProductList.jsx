import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext"; // Adjust path if needed

const ProductList = () => {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;