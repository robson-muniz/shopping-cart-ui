// components/CategoryFilter.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Audio', 'Wearables', 'Accessories', 'Adapters'];

const CategoryFilter = ({ activeCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
                <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                        activeCategory === category
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};

// Update ProductList to filter by category