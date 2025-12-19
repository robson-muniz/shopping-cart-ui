// components/QuickViewModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiStar, FiShoppingCart, FiPackage } from 'react-icons/fi';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white"
                    >
                        <FiX className="text-xl" />
                    </button>

                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover rounded-xl shadow-lg"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                                <FiStar className="text-amber-400 fill-current mr-1" />
                                <span className="font-semibold">{product.rating}</span>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            <div>
                <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                                <h2 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h2>
                                <p className="text-gray-600 mt-4">{product.description}</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <FiPackage className="mr-3" />
                                    <span>{product.quantity} units in stock</span>
                                </div>

                                <div className="text-3xl font-bold text-blue-600">
                                    ${product.price.toFixed(2)}
                                </div>

                                <div className="pt-6">
                                    <button
                                        onClick={() => {
                                            onAddToCart(product);
                                            onClose();
                                        }}
                                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center"
                                    >
                                        <FiShoppingCart className="mr-2" />
                                        Add to Cart - ${product.price.toFixed(2)}
                                    </button>
                                </div>

                                <div className="text-sm text-gray-500 text-center">
                                    Free shipping on orders over $50 • 30-day return policy
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};