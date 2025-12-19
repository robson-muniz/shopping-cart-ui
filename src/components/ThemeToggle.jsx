// src/components/ThemeToggle.jsx
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        rotate: theme === 'light' ? 0 : 180,
                        scale: theme === 'light' ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    <FiSun className="w-5 h-5 text-amber-500" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        rotate: theme === 'light' ? -180 : 0,
                        scale: theme === 'light' ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    <FiMoon className="w-5 h-5 text-blue-400" />
                </motion.div>
            </div>

            {/* Animated background */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 -z-10"
                initial={false}
                animate={{
                    opacity: theme === 'light' ? 0.3 : 0.1
                }}
            />
        </motion.button>
    );
};

export default ThemeToggle;