// src/components/SearchBar.jsx
import { useState } from 'react';
import { FiSearch, FiX, FiFilter } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SearchBar = ({ onSearch, onFilter }) => {
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        'all', 'smartphones', 'laptops', 'fragrances', 'skincare',
        'groceries', 'home-decoration', 'furniture', 'tops',
        'womens-dresses', 'womens-shoes', 'mens-shirts',
        'mens-shoes', 'mens-watches', 'womens-watches',
        'womens-bags', 'womens-jewellery', 'sunglasses',
        'automotive', 'motorcycle', 'lighting'
    ];

    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            onSearch(data.products);
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            onFilter(null);
        } else {
            try {
                fetch(`https://dummyjson.com/products/category/${category}`)
                    .then(res => res.json())
                    .then(data => onFilter(data.products))
                    .catch(err => console.error('Filter failed:', err));
            } catch (error) {
                console.error('Filter failed:', error);
            }
        }
    };

    const handleReset = () => {
        setQuery('');
        setSelectedCategory('all');
        onSearch(null);
        onFilter(null);
    };

    return (
        <div className="w-full mb-10">
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto mb-6">
                <div className="relative">
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Search for products, brands, or categories..."
                        className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg dark:text-gray-300 dark:placeholder-gray-500"
                    />
                    {query && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={handleReset}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FiX className="text-lg" />
                        </motion.button>
                    )}
                </div>

                <div className="flex justify-center mt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSearch}
                        disabled={!query.trim()}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                            query.trim()
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        Search Products
                    </motion.button>

                    {(query || selectedCategory !== 'all') && (
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={handleReset}
                            className="ml-4 px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            Clear Filters
                        </motion.button>
                    )}
                </div>
            </div>

            {/* Categories Filter */}
            <div className="border-t border-b border-gray-100 dark:border-gray-800 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-4">
                        <FiFilter className="text-gray-500 dark:text-gray-400 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Browse Categories</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.slice(0, 10).map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                                {category === 'all' ? 'All Products' : category.replace('-', ' ')}
                            </motion.button>
                        ))}
                    </div>

                    {/* Show more categories button */}
                    <div className="text-center mt-4">
                        <details className="inline-block">
                            <summary className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium cursor-pointer">
                                More categories
                            </summary>
                            <div className="flex flex-wrap gap-2 justify-center mt-3">
                                {categories.slice(10).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`px-3 py-1 text-sm rounded-full ${
                                            selectedCategory === category
                                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {category.replace('-', ' ')}
                                    </button>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;