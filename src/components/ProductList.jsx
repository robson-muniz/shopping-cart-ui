import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiLoader, FiFilter } from "react-icons/fi";

const ProductList = () => {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mb-4"
                >
                    <FiLoader className="text-4xl text-blue-500" />
                </motion.div>
                <p className="text-gray-600">Loading amazing products...</p>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
            >
                <div className="inline-block p-4 bg-red-50 rounded-full mb-4">
                    <FiLoader className="text-2xl text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h3>
                <p className="text-gray-600">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                    Try Again
                </button>
            </motion.div>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductList;