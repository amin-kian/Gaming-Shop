"use client";

import "swiper/css";
import Slider from "@/app/_components/slider/Slider";
import CategoryCard from "@/app/_components/categorySlider/CategoryCard";

export default function ShopByCategory({categories}) {
    const sliderBreakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 16,
        },
    };

    return (
        <section className="w-full bg-white py-10 md:py-10 lg:py-18 mx-auto px-4 md:px-16">
            <h2 className="text-[#23252d] text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-20">
                Shop by Category
            </h2>
            <div className="w-full bg-[#23252d] rounded-2xl py-5 md:py-12 lg:p-20 hover-parent">
                <Slider
                    uniqueId="shopByCategory"
                    data={categories}
                    renderItem={(category) => <CategoryCard {...category} />}
                    slidesPerView={6}
                    btnColor={'white'}
                    breakpoints={sliderBreakpoints}
                    showPagination={true}
                />
            </div>
        </section>
    );
}
