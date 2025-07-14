"use client";

import "swiper/css";
import Slider from "@/app/_components/slider/Slider";
import CategoryCard from "@/app/_components/categorySlider/CategoryCard";

export default function ShopByCategory({data}) {

    return (
        <section className="w-full bg-white py-18 mx-auto px-16">
            <h2 className="text-[#23252d] text-5xl font-semibold text-center mb-20">
                Shop by Category
            </h2>
            <div className="bg-[#23252d] rounded-2xl p-20 hover-parent">
                <Slider
                    uniqueId="shopByCategory"
                    data={data}
                    renderItem={(category) => <CategoryCard {...category} />}
                    slidesPerView={6}
                    btnColor={'white'}
                />
            </div>
        </section>
    );
}
