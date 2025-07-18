import Image from 'next/image';
import Link from 'next/link';
import ProductCardActionButtons from "@/app/_components/products/CardActionButtons";
import ProductPrice from "@/app/_components/products/ProductPrice";

export default function ProductCard({product, showAddToCardBigBtn}) {
    const {name, image, imageHover, price, originalPrice, discount, colors} = product;

    return (
        <div
            className="w-full border border-gray-300 bg-white rounded-lg shadow-md p-1.5 md:p-4 pb-5 md:pb-10 group">
            <Link href="#">
                <div
                    className="relative w-full h-[170px] md:h-[240px]  lg:h-[300px] overflow-hidden rounded-md mb-4 aspect-square group/image">
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