import { useCart } from "../contexts/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";
import {useState} from "react";
import {ssrModuleExportsKey} from "vite/module-runner";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    
    const { cart } = useCart(); // 👈 destructure correctly

    // Safe reduce (cart is now an array)
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">
                ShopMate
            </h1>
            <div className="relative">
                <button  className='cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}>
                    <FaShoppingCart className='text-2xl text-gray-700'/>
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {itemCount}
                    </span>
                    )}
                </button>
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
                        <div className="p-4">
                            <h2 className="font-semibold text-lg mb-2">
                                Cart Item
                            </h2>
                            {cart.length === 0 ? (
                                <p className="text-gray-500 text-sm">
                                    Your Cart is empty.
                                </p>
                            ) : (<>
                                <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                                    {cart.map((item) => (
                                        <li key={item.id} className="flex justify-between items-center py-2">
                                            <div>
                                                <p className="font-semibold">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray500">
                                                    {item.qty} x $4{item.price}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 flex justify-between font-semibold">
                                    <span>Total:</span>
                                    <span>${total}</span>
                                </div>
                            </>)}

                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;