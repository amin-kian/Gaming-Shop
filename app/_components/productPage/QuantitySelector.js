import {FaMinus, FaPlus} from 'react-icons/fa';

export default function QuantitySelector({quantity, setQuantity}) {
    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="w-1/2 lg:w-1/4 bg-gray-100 flex items-center justify-center rounded-md mb-10">
            <button onClick={handleDecrement} className="px-4 py-3 hover:bg-gray-100 transition-colors">
                <FaMinus/>
            </button>
            <span className="px-6 py-3 font-bold">{quantity}</span>
            <button onClick={handleIncrement} className="px-4 py-3 hover:bg-gray-100 transition-colors">
                <FaPlus/>
            </button>
        </div>
    );
}