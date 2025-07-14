'use client'

import CountdownTimer from '../CountdownTimer';
import Slider from "@/app/_components/slider/Slider";
import ProductCard from "@/app/_components/products/ProductCard";


export default function HotDeals({data}) {
    //CHANGE
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 10);

    return (
        <section className="py-20 bg-gray-100 relative hover-parent">
            <div className="w-full mx-auto px-16">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-20">
                    <h2 className="text-[#23252d] text-5xl font-semibold text-center">Hot Deals</h2>
                    <CountdownTimer targetDate={saleEndDate}/>
                </div>

                {/* Slider */}

                <Slider
                    uniqueId="hot-deals"
                    data={data}
                    slidesPerView={4}
                    renderItem={(product) => (
                        <ProductCard product={product} showAddToCardBigBtn={false}/>
                    )}
                    btnColor={'black'}
                />
            </div>
        </section>
    );
}