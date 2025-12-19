import { useCart } from "../contexts/CartContext.jsx";
import { motion } from "framer-motion";
import { FiShoppingCart, FiStar, FiCheck } from "react-icons/fi";

const ProductCard = ({ product, index }) => {
    const { addToCart, cart } = useCart();
    const isInCart = cart.some(item => item.id === product.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
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
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <FiStar className="text-amber-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                </div>

                {/* Quick Add to Cart */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addToCart(product)}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-lg ${
                        isInCart
                            ? 'bg-green-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
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
                                className="bg-green-400 h-1.5 rounded-full"
                                style={{ width: `${Math.min(100, (product.quantity / 50) * 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                    </div>
                    <span className="text-lg font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                            isInCart
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
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