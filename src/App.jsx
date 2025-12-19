// src/App.jsx
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiStar } from "react-icons/fi";
import { Toaster } from "react-hot-toast";

const App = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Handle search results
    const handleSearch = (products) => {
        setFilteredProducts(products);
    };

    // Handle filter results
    const handleFilter = (products) => {
        setFilteredProducts(products);
    };

    // Reset all filters
    const resetFilters = () => {
        setFilteredProducts(null);
        setSearchQuery('');
        setSelectedCategory('all');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
            {/* Toaster for notifications */}
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#fff',
                        color: '#333',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                    },
                }}
            />

            <Header onCartClick={() => setIsCartOpen(true)} />

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <main className="container mx-auto px-4 py-8 flex-grow">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                        <FiShoppingBag className="text-3xl text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Discover Amazing Products
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Browse our collection of premium products with free shipping on orders over $50
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">100+</div>
                            <div className="flex justify-center text-amber-400 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className="fill-current" />
                                ))}
                            </div>
                            <div className="text-sm text-gray-500">Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">Free</div>
                            <div className="text-sm text-gray-500">Shipping Over $50</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">24/7</div>
                            <div className="text-sm text-gray-500">Support</div>
                        </div>
                    </div>
                </motion.div>

                {/* Search and Filter Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <SearchBar
                        onSearch={handleSearch}
                        onFilter={handleFilter}
                    />
                </motion.div>

                {/* Products Section */}
                <section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredProducts ? 'Search Results' : 'Featured Products'}
                        </h2>
                        <button
                            onClick={resetFilters}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                filteredProducts
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'text-gray-400 cursor-default'
                            }`}
                            disabled={!filteredProducts}
                        >
                            Show All Products
                        </button>
                    </div>

                    <ProductList
                        filteredProducts={filteredProducts}
                        searchQuery={searchQuery}
                        selectedCategory={selectedCategory}
                    />
                </section>

                {/* Call to Action Banner */}
                {!filteredProducts && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Experience?</h3>
                        <p className="mb-6 opacity-90">Join thousands of satisfied customers worldwide</p>
                        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg">
                            Shop Now
                        </button>
                    </motion.div>
                )}
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll to Top Button */}
            <ScrollToTop />
        </div>
    );
};

export default App;