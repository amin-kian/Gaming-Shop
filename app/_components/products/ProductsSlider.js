'use client'

import Slider from "@/app/_components/slider/Slider";
import ProductCard from "@/app/_components/products/ProductCard";

export default function ProductsSlider({title, data}) {

    return (
        <section className="py-20 bg-white relative hover-parent">
            <div className="w-full mx-auto px-16">
                {/* Section Header */}
                <h2 className="text-[#23252d] text-5xl font-semibold text-center mb-10">{title}</h2>

                {/* Slider */}
                <Slider
                    uniqueId={title.toLowerCase().replace(/\s+/g, '-')}
                    data={data}
                    slidesPerView={4}
                    renderItem={(product) => (
                        <ProductCard product={product} showAddToCardBigBtn={true}/>
                    )}
                    btnColor={'black'}
                />
            </div>
        </section>
    );
}