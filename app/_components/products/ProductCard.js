import Image from 'next/image';
import Link from 'next/link';
import ProductCardActionButtons from "@/app/_components/products/CardActionButtons";
import ProductPrice from "@/app/_components/products/ProductPrice";
import {MdOutlineShoppingBag} from "react-icons/md";
import {FaRegEye, FaRegHeart} from "react-icons/fa";
import {LuArrowUpDown} from "react-icons/lu";
import ActionButton from "@/app/_components/products/ActionButton";

export default function ProductCard({product, showAddToCardBigBtn, columnCount = 0}) {
    const {name, image, imageHover, price, originalPrice, discount, colors, description} = product;

    const getDynamicHeight = () => {
        switch (columnCount) {
            case 2:
                return '170px md:240px lg:600px';
            case 3:
                return '170px md:330px lg:400px';
            case 4:
                return '170px md:270px lg:300px';
            case 5:
                return '170px lg:230px';
            case 6:
                return '170px lg:180px';
            default:
                return 'h-[170px] md:h-[240px] lg:h-[300px]'
        }
    };

    // Determine if it's a list view based on columnCount
    const isListView = columnCount === 1;

    if (isListView) {
        return (
            <div
                className="w-full bg-white border-b border-gray-200 p-2 md:p-4 flex   items-start  justify-start gap-4  md:gap-7">
                {/* Image Section (Left) */}
                <Link href="#"
                      className="flex-shrink-0 relative w-50 h-70 md:w-100 md:h-120 overflow-hidden rounded-md aspect-square group/image">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <Image
                        src={imageHover}
                        alt={`${name} (hover view)`}
                        fill
                        className="
                        object-cover
                         opacity-0
                         z-10
                         transition-all duration-800
                         group-hover/image:opacity-100
                         group-hover/image:scale-115"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {discount && (
                        <div
                            className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full z-20">
                            {discount}
                        </div>
                    )}
                </Link>

                {/* Details Section (Right) */}
                <div className="flex flex-col gap-4 p-8 text-left">
                    <Link href="#">
                        <h3 className="text-sm md:text-2xl text-black mb-2 line-clamp-2">
                            {name}
                        </h3>
                    </Link>

                    {originalPrice && (
                        <p className="text-sm font-bold text-black line-through">
                            ${originalPrice.toFixed(2)}
                        </p>
                    )}
                    <p className={`text-xl font-bold ${originalPrice ? "text-red-600" : "text-black"}`}>${price.toFixed(2)}</p>

                    {/* Full Description for List View */}
                    {description && (
                        <p className="hidden md:block text-black text-sm md:text-base mb-4 line-clamp-3">
                            {description}
                        </p>
                    )}

                    {/* Colors */}
                    {colors && colors.length > 0 && (
                        <div className="flex items-centerjustify-start gap-2 mb-4">
                            {colors.map((color) => (
                                <span
                                    key={color}
                                    className="block size-4 md:size-5 rounded-full border border-gray-300"
                                    style={{backgroundColor: color}}
                                ></span>
                            ))}
                        </div>
                    )}

                    {/* Action Buttons for List View */}
                    <div className="flex gap-2 mt-0 md:mt-4">
                        <div
                            className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-xl md:text-3xl"
                            style={{transitionDelay: '100ms'}}>
                            <ActionButton label="Add to Cart">
                                <MdOutlineShoppingBag/>
                            </ActionButton>
                        </div>

                        <div
                            className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-xl md:text-3xl"
                            style={{transitionDelay: '200ms'}}>
                            <ActionButton label="Add to Wishlist">
                                <FaRegHeart/>
                            </ActionButton>
                        </div>

                        <div
                            className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-xl md:text-3xl"
                            style={{transitionDelay: '300ms'}}>
                            <ActionButton label="Compare">
                                <LuArrowUpDown/>
                            </ActionButton>
                        </div>

                        <div
                            className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-xl md:text-3xl"
                            style={{transitionDelay: '400ms'}}>
                            <ActionButton label="Quick View">
                                <FaRegEye/>
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // GRID VIEW LAYOUT (Your existing layout)
    return (
        <div
            className={`w-full border border-gray-300 bg-white rounded-lg shadow-md p-1.5 md:p-4 pb-5 md:pb-10 group`}
        >
            <Link href="#">
                <div
                    className={`relative w-full overflow-hidden rounded-md mb-4 aspect-square group/image ${getDynamicHeight()}`}
                >
                    {/* Base Image */}
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover z-0 transition-opacity duration-1200"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* Hover Image: Now uses 'group-hover/image' to trigger only on image hover */}
                    <Image
                        src={imageHover}
                        alt={`${name} (hover view)`}
                        fill
                        className="
                        object-cover
                         opacity-0
                         z-10
                         transition-all duration-800
                         group-hover/image:opacity-100
                         group-hover/image:scale-115"
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    <div
                        className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ProductCardActionButtons showAddToCardBigBtn={showAddToCardBigBtn}/>
                    </div>


                    {discount && (
                        <div
                            className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 md:px-4 md:py-2 rounded-full z-20">
                            {discount}
                        </div>
                    )}
                </div>
                <h3 className="md:text-xl font-semibold text-black text-center line-clamp-2 min-h-[3.5rem]">
                    {name}
                </h3>
                <ProductPrice price={price} originalPrice={originalPrice}/>
                <div className="flex items-center justify-center gap-2 mt-3">
                    {colors.map((color) => (
                        <span
                            key={color}
                            className="block size-3.5 md:size-5 rounded-full border border-gray-300"
                            style={{backgroundColor: color}}
                        ></span>
                    ))}
                </div>
            </Link>
            {showAddToCardBigBtn && <button
                className='w-full mt-7 md:mt-10 bg-white border border-gray-200 text-slate-800 text-xs md:text-sm font-semibold uppercase tracking-wider px-5 py-3 md:px-8 rounded-full shadow-sm
               hover:bg-gray-50 hover:border-gray-900
               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
            >
                Add To Cart
            </button>}
        </div>
    );
}