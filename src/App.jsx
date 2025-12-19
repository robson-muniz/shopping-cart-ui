import ProductList from "./components/ProductList";
import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiStar } from "react-icons/fi";

const App = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header onCartClick={() => setIsCartOpen(true)} />

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <main className="container mx-auto px-4 py-8">
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
                        Handpicked selection of premium products with free shipping on orders over $50
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">4.8</div>
                            <div className="flex justify-center text-amber-400 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className="fill-current" />
                                ))}
                            </div>
                            <div className="text-sm text-gray-500">Customer Rating</div>
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

                {/* Products Section */}
                <section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                        {/* Product count removed from here - ProductList handles it internally */}
                    </div>
                    <ProductList />
                </section>

                {/* Footer Banner */}
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
            </main>
        </div>
    );
};

export default App;