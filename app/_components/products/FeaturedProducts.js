'use client'
import FeaturedProductCards from "@/app/_components/products/FeaturedProductCard";
import Slider from "@/app/_components/slider/Slider";

export default function FeaturedProducts({products}) {
    const backgroundImageSrc = "/img/featured-product-bg.png";

    const sliderBreakpoints = {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    };

    const renderProductCard = (product) => (
        <FeaturedProductCards
            key={product.id}
            {...product}
        />
    );

    return (
        <section
            className="w-full flex flex-col justify-center items-center py-16 min-h-4/5 md:min-h-screen  px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${backgroundImageSrc})`}}>

            <div className="w-full mx-auto">
                <Slider data={products} breakpoints={sliderBreakpoints} renderItem={renderProductCard} btnColor="white"
                        uniqueId="featured-products"/>
            </div>
        </section>
    );
}