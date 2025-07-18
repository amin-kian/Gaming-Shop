'use client'

import Slider from "@/app/_components/slider/Slider";
import ProductCard from "@/app/_components/products/ProductCard";
import {getSaleEndDate} from "@/app/_lib/staticData";

export default function ProductsSliderContainer({children, title, data, bg = 'bg-white', showAddToCardBigBtn}) {
    const saleEndDate = getSaleEndDate();

    const sliderBreakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
    };

    return (
        <section className={`py-10 md:py-20  relative hover-parent ${bg}`}>
            <div className="w-full mx-auto px-4 md:px-16">
                {/* Section Header */}
                <div
                    className="w-full flex flex-col justify-between items-start md:flex-row md:items-center mb-10 md:mb-15 lg:mb-20 gap-3">
                    <h2 className="text-[#23252d]
                    text-2xl md:text-4xl lg:text-5xl font-semibold only:mx-auto text-center">{title}</h2>
                    {children}
                </div>

                {/* Slider */}
                <Slider
                    uniqueId={title.toLowerCase().replace(/\s+/g, '-')}
                    data={data}
                    renderItem={(product) => (
                        <ProductCard product={product} showAddToCardBigBtn={showAddToCardBigBtn}/>
                    )}
                    breakpoints={sliderBreakpoints}
                />
            </div>
        </section>
    );
}


