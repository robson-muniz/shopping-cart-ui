import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiMapPin, FiPhone, FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold">ShopStyle</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Premium e-commerce experience with handpicked products and exceptional service.
                        </p>
                        <div className="flex items-center text-gray-400">
                            <FiHeart className="mr-2 text-red-400" />
                            <span>Made with passion</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Products', 'About Us', 'Contact', 'FAQs', 'Shipping Policy'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <FiMapPin className="mr-3 flex-shrink-0" />
                                <span>123 Shopping Street, City</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FiPhone className="mr-3 flex-shrink-0" />
                                <span>(123) 456-7890</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FiMail className="mr-3 flex-shrink-0" />
                                <span>support@shopstyle.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe for exclusive offers and new arrivals.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-r-lg font-semibold hover:opacity-90 transition-opacity">
                                Join
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            {[
                                { Icon: FiFacebook, label: 'Facebook' },
                                { Icon: FiTwitter, label: 'Twitter' },
                                { Icon: FiInstagram, label: 'Instagram' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ShopStyle. All rights reserved.</p>
                    <p className="text-sm mt-2">Designed with ❤️ for the best shopping experience</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;