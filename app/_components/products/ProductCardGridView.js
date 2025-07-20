import Link from "next/link";
import ProductPrice from "@/app/_components/products/ProductPrice";
import ProductCardImage from "@/app/_components/products/ProductCardImage";

export default function ProductCardGridView({
                                                images,
                                                name,
                                                discount,
                                                colors,
                                                originalPrice,
                                                price,
                                                columnCount,
                                                showAddToCardBigBtn,
                                                href,
                                            }) {

    const getDynamicHeight = () => {
        switch (columnCount) {
            case 2:
                return 'w-full  h-170px md:h-240px lg:h-600px';
            case 3:
                return 'w-full  h-170px md:h-330px lg:h-400px';
            case 4:
                return 'w-full  h-170px md:h-270px lg:h-300px';
            case 5:
                return 'w-full  h-170px lg:h-230px';
            case 6:
                return 'w-full  h-170px lg:h-180px';
            default:
                return 'w-full h-[170px] md:h-[240px] lg:h-[300px]'
        }
    };

    return (
        <div
            className={`w-full border border-gray-300 bg-white rounded-lg shadow-md p-1.5 md:p-4 pb-5 md:pb-10 group`}
        >
            <ProductCardImage href={href} images={images} className={getDynamicHeight()} discount={discount}
                              showActionButton={true}
                              showAddToCardBigBtn={showAddToCardBigBtn}/>

            <Link href={href}>
                <h3 className="md:text-xl font-semibold text-black text-center line-clamp-2 min-h-[3.5rem] hover:text-purple-600">
                    {name}
                </h3>
            </Link>

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