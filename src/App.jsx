import ProductList from "./components/ProductList";

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">🛒 Shopping Cart UI</h1>
            <ProductList />
        </div>
    );
};

export default App;
