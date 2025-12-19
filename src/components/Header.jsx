import { useCart } from "../contexts/CartContext.jsx";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ onCartClick }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cart } = useCart();

    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ShopStyle
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {['Home', 'Products', 'Categories', 'Deals', 'About'].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2"
                        >
                            <FiSearch className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="ml-2 bg-transparent outline-none text-sm w-32"
                            />
                        </motion.div>

                        {/* User */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <FiUser className="text-xl text-gray-700" />
                        </motion.button>

                        {/* Cart */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onCartClick}
                            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <FiShoppingCart className="text-xl text-gray-700" />
                            {itemCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold"
                                >
                                    {itemCount}
                                </motion.span>
                            )}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2"
                        >
                            {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 border-t pt-4"
                        >
                            <div className="flex flex-col space-y-4">
                                {['Home', 'Products', 'Categories', 'Deals', 'About'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-gray-700 hover:text-blue-600 py-2"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                                    <FiSearch className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="ml-2 bg-transparent outline-none flex-1"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;