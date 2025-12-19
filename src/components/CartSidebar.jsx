// src/components/CartSidebar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext.jsx";
import { FiShoppingCart, FiX, FiTrash2, FiPlus, FiMinus, FiPackage } from "react-icons/fi";

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, addToCart, removeFromCart, removeItemCompletely, clearCart } = useCart();

    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed right-0 top-0 h-full w-full md:w-96 bg-white dark:bg-gray-900 z-50 shadow-2xl dark:shadow-gray-900 overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <FiShoppingCart className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Your Cart</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-700 dark:text-gray-300"
                                >
                                    <FiX className="text-xl" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Cart Items */}
                        <div className="p-6">
                            {cart.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                >
                                    <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                                        <FiPackage className="text-3xl text-gray-400 dark:text-gray-500" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Your cart is empty
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                                        Add some amazing products to get started!
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
                                    >
                                        Continue Shopping
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="space-y-4 mb-6">
                                        {cart.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div className="ml-4 flex-1">
                                                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-blue-600 dark:text-blue-400 font-bold">
                                                        ${item.price.toFixed(2)}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        ${(item.price * item.qty).toFixed(2)} total
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center space-y-2">
                                                    <div className="flex items-center space-x-3">
                                                        <motion.button
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <FiMinus className="text-sm" />
                                                        </motion.button>
                                                        <span className="font-bold min-w-[24px] text-center dark:text-gray-300">
                                                            {item.qty}
                                                        </span>
                                                        <motion.button
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => addToCart(item)}
                                                            className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <FiPlus className="text-sm" />
                                                        </motion.button>
                                                    </div>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => {
                                                            const confirmRemove = window.confirm(
                                                                `Remove all ${item.qty} ${item.name}(s) from cart?`
                                                            );
                                                            if (confirmRemove) {
                                                                removeItemCompletely(item.id);
                                                            }
                                                        }}
                                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
                                                        aria-label="Remove item"
                                                    >
                                                        <FiTrash2 />
                                                    </motion.button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Summary */}
                                    <div className="border-t dark:border-gray-800 pt-6 space-y-4">
                                        <div className="flex justify-between text-lg">
                                            <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                                            <span className="font-bold dark:text-gray-300">${total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-lg">
                                            <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                                            <span className="font-bold dark:text-gray-300">
                                                {total > 50 ? 'Free' : '$5.99'}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-xl font-bold pt-4 border-t dark:border-gray-800">
                                            <span className="dark:text-gray-300">Total</span>
                                            <span className="dark:text-gray-300">${(total + (total > 50 ? 0 : 5.99)).toFixed(2)}</span>
                                        </div>

                                        {/* Actions */}
                                        <div className="space-y-3 pt-4">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-shadow"
                                            >
                                                Checkout Now
                                            </motion.button>
                                            <button
                                                onClick={() => {
                                                    if (cart.length > 0 && window.confirm('Clear entire cart?')) {
                                                        clearCart();
                                                    }
                                                }}
                                                className="w-full py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-semibold transition-colors"
                                            >
                                                Clear Cart
                                            </button>
                                            <button
                                                onClick={onClose}
                                                className="w-full py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                                            >
                                                Continue Shopping
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;