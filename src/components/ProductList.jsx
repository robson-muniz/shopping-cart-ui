// src/components/ProductList.jsx
import ProductCard from "./ProductCard.jsx";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiLoader, FiFilter, FiSearch } from "react-icons/fi";

const ProductList = ({ filteredProducts, searchQuery, selectedCategory }) => {
    const { products, loading, error } = useContext(ProductContext);

    // Use filtered products if provided, otherwise use all products
    const displayProducts = filteredProducts || products;

    // Show search/filter status
    const showFilterStatus = filteredProducts || searchQuery || selectedCategory;

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

    if (displayProducts.length === 0 && !loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
            >
                <div className="inline-block p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                    <FiSearch className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No Products Found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {searchQuery
                        ? `No products found for "${searchQuery}". Try a different search term.`
                        : selectedCategory && selectedCategory !== 'all'
                            ? `No products found in "${selectedCategory.replace('-', ' ')}" category.`
                            : 'We couldn\'t find any products. Check back soon for new arrivals!'
                    }
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
                >
                    View All Products
                </button>
            </motion.div>
        );
    }

    return (
        <>
            {/* Filter Status */}
            {showFilterStatus && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <FiFilter className="text-blue-500 mr-2" />
                            <span className="font-semibold text-gray-700">
                                Showing {displayProducts.length} {displayProducts.length === 1 ? 'product' : 'products'}
                                {searchQuery && ` for "${searchQuery}"`}
                                {selectedCategory && selectedCategory !== 'all' && ` in "${selectedCategory.replace('-', ' ')}"`}
                            </span>
                        </div>
                        <div className="text-gray-600">
                            {filteredProducts && (
                                <span>Filtered from {products.length} total products</span>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Products Grid */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {displayProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default ProductList;