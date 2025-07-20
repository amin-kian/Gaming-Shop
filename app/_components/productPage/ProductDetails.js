import QuantitySelector from "./QuantitySelector";
import InfoSection from "./InfoSection";
import SafeCheckout from "./SafeCheckout";
import {LiaShippingFastSolid} from "react-icons/lia";
import {BsBoxArrowInDown} from "react-icons/bs";
import {FaRegHeart} from "react-icons/fa";
import {LuArrowUpDown} from "react-icons/lu";

export default function ProductDetails({product, quantity, setQuantity, selectedColor, setSelectedColor}) {

    const addToCartPrice = (product.price * quantity).toFixed(2);

    return (
        <div className='w-full'>
            <h1 className="text-base lg:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center justify-start gap-2 mb-5">
                {product.originalPrice && (
                    <p className="text-xl lg:text-2xl text-center text-black line-through">
                        ${product.originalPrice.toFixed(2)}
                    </p>
                )}
                <p className={`text-2xl lg:text-3xl text-center ${product.originalPrice ? "text-red-600" : "text-black"}`}>${product.price.toFixed(2)}</p>
            </div>


            <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Color: <span className="font-bold">{selectedColor}</span></h3>
                <div className="flex items-center gap-3">
                    {product.colors.map((color) => (
                        <div key={color}
                             className={`flex items-center justify-center p-1 ${selectedColor === color ? 'border-black scale-110' : 'border-gray-300'} border-1 transition-all rounded-full`}>
                            <button
                                onClick={() => setSelectedColor(color)}
                                className='size-5 rounded-full '
                                style={{backgroundColor: color}}
                                aria-label={`Select color ${color}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            <div className="w-full flex items-center justify-center gap-2 md:gap-4 mb-3">
                <button
                    className="flex-1 h-12 lg:h-14 bg-gray-900 text-white text-xs md:text-sm lg:text-xl font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                    Add to cart - ${addToCartPrice}
                </button>
                <button
                    className="flex items-center justify-center h-12 w-10 lg:h-14 lg:w-14 border border-gray-300 rounded-md hover:border-black transition-colors"
                    aria-label="Add to Wishlist">
                    <FaRegHeart className="text-xl"/>
                </button>
                <button
                    className="flex items-center justify-center h-12 w-10 lg:h-14 lg:w-14 border border-gray-300 rounded-md hover:border-black transition-colors"
                    aria-label="Compare">
                    <LuArrowUpDown className="text-xl"/>
                </button>

            </div>

            <button
                className="w-full text-sm bg-purple-600 text-white font-semibold h-10 md:h-12 rounded-lg mb-8 hover:bg-purple-500 transition-colors">
                BUY IT NOW
            </button>

            <div className="flex flex-col lg:flex-row items-center justify-center">
                <InfoSection
                    icon={<LiaShippingFastSolid/>}
                    title="Estimate delivery times 12-26 days (International), 3-6 days (United States)."
                />
                <InfoSection
                    icon={<BsBoxArrowInDown/>}
                    title="Return within 30 days of purchase Duties & taxes are non-refundable."
                />
            </div>

            <div className="mt-8">
                <SafeCheckout/>
            </div>
        </div>
    );
}