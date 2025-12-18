const ProductCard = ({product}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            {/* Fix image: use leading slash for public folder */}
            <img
                src={product.image}
                alt={product.name}
                className="h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-500  text-sm mb-2">{product.description}</p>
            <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;