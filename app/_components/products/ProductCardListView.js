import Link from "next/link";
import ActionButton from "@/app/_components/products/ActionButton";
import {MdOutlineShoppingBag} from "react-icons/md";
import {FaRegEye, FaRegHeart} from "react-icons/fa";
import {LuArrowUpDown} from "react-icons/lu";
import ProductCardImage from "@/app/_components/products/ProductCardImage";

export default function ProductCardListView({
                                                images,
                                                name,
                                                discount,
                                                colors,
                                                description,
                                                originalPrice,
                                                price,
                                                href,
                                                showAddToCardBigBtn,
                                            }) {
    return (
        <div
            className="w-full bg-white border-b border-gray-200  md:p-4 flex items-start  justify-start gap-3 md:gap-7">
            {/* Image Section (Left) */}
            <ProductCardImage href={href} images={images} discount={discount}
                              className='w-30 h-50 md:w-100 md:h-120'/>

            {/* Details Section (Right) */}
            <div className="flex flex-col gap-2 md:gap-4 py-2  md:p-8 md:py-0 text-left">
                <Link href={href}>
                    <h3 className="text-sm md:text-2xl text-black mb-2 line-clamp-2 hover:text-purple-600">
                        {name}
                    </h3>
                </Link>

                {originalPrice && (
                    <p className="text-xs md:text-sm font-bold text-black line-through">
                        ${originalPrice.toFixed(2)}
                    </p>
                )}
                <p className={`text-sm md:text-xl font-bold ${originalPrice ? "text-red-600" : "text-black"}`}>${price.toFixed(2)}</p>

                {/* Full Description for List View */}
                {description && (
                    <p className="hidden md:block text-black text-sm md:text-base mb-4 line-clamp-3">
                        {description}
                    </p>
                )}

                {/* Colors */}
                {colors && colors.length > 0 && (
                    <div className="flex items-centerjustify-start gap-2 md:mb-4">
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
                        className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-base md:text-3xl"
                        style={{transitionDelay: '100ms'}}>
                        <ActionButton label="Add to Cart">
                            <MdOutlineShoppingBag/>
                        </ActionButton>
                    </div>

                    <div
                        className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-base md:text-3xl"
                        style={{transitionDelay: '200ms'}}>
                        <ActionButton label="Add to Wishlist">
                            <FaRegHeart/>
                        </ActionButton>
                    </div>

                    <div
                        className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-base md:text-3xl"
                        style={{transitionDelay: '300ms'}}>
                        <ActionButton label="Compare">
                            <LuArrowUpDown/>
                        </ActionButton>
                    </div>

                    <div
                        className="transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-base md:text-3xl"
                        style={{transitionDelay: '400ms'}}>
                        <ActionButton label="Quick View">
                            <FaRegEye/>
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    )
}