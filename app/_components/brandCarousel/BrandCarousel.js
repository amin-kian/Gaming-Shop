'use client';

import Slider from '@/app/_components/slider/Slider';
import {getBrands} from "@/app/_lib/staticData";
import BrandLogo from "@/app/_components/brandCarousel/BrandLogo";


export default function BrandCarousel() {
    const brands = getBrands()
    return (
        <section className="w-full py-8 lg:py-16 bg-white mx-auto px-4 md:px-16">
            <Slider
                uniqueId="brand-carousel"
                data={brands}
                renderItem={(brand) => <BrandLogo brand={brand}/>}
                breakpoints={{
                    320: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                    1024: {slidesPerView: 6},
                }}
            />
        </section>
    );
}