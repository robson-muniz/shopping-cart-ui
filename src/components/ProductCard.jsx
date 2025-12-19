// src/components/ProductCard.jsx
import { useCart } from "../contexts/CartContext.jsx";
import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiCheck, FiTag, FiHeart } from "react-icons/fi";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product, index }) => {
    const { addToCart, cart } = useCart();
    const [isWishlisted, setIsWishlisted] = useState(false);
    const isInCart = cart.some(item => item.id === product.id);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(
            <div className="flex items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-lg mr-3 object-cover"
                />
                <div>
                    <p className="font-semibold">Added to cart!</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{product.name}</p>
                </div>
            </div>,
            {
                duration: 3000,
                style: {
                    background: '#fff',
                    color: '#333',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                }
            }
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <FiStar className="text-amber-400 fill-current mr-1" />
                    <span className="font-semibold text-sm dark:text-gray-300">
                        {product.rating ? product.rating.toFixed(1) : 'N/A'}
                    </span>
                </div>

                {/* Discount Badge */}
                {product.discountPercentage && product.discountPercentage > 0 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full flex items-center text-sm font-bold">
                        <FiTag className="mr-1" />
                        -{product.discountPercentage}%
                    </div>
                )}

                {/* Wishlist Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-14 right-3 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
                >
                    <FiHeart className={isWishlisted ? "text-red-500 fill-current" : "text-gray-400 dark:text-gray-500"} />
                </motion.button>

                {/* Quick Add to Cart */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleAddToCart}
                    className={`absolute bottom-3 right-3 p-2 rounded-full shadow-lg ${
                        isInCart
                            ? 'bg-green-500 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500'
                    } transition-colors`}
                >
                    {isInCart ? <FiCheck /> : <FiShoppingCart />}
                </motion.button>

                {/* Stock Indicator */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white text-sm">
                        <div className="flex justify-between mb-1">
                            <span>Stock</span>
                            <span>{product.quantity} left</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div
                                className={`h-1.5 rounded-full ${
                                    product.quantity > 10 ? 'bg-green-400' :
                                        product.quantity > 0 ? 'bg-yellow-400' : 'bg-red-400'
                                }`}
                                style={{
                                    width: `${Math.min(100, (product.quantity / 100) * 100)}%`
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                        <div className="flex items-center mt-1">
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">
                                {product.category}
                            </span>
                            {product.brand && (
                                <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                                    {product.brand}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-right">
                        {product.discountPercentage && product.discountPercentage > 0 ? (
                            <>
                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                    ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-400 dark:text-gray-500 line-through ml-2 block">
                                    ${product.price.toFixed(2)}
                                </span>
                            </>
                        ) : (
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToCart}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                            isInCart
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg dark:hover:shadow-gray-900/50'
                        }`}
                    >
                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;