import FeaturedProductCards from "@/app/_components/products/FeaturedProductCard";

export default function FeaturedProducts({data}) {
    const backgroundImageSrc = "/img/featured-product-bg.png";

    return (
        <section
            className="w-full flex flex-col justify-center items-center h-screen px-16 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${backgroundImageSrc})`}}>
            <div className="w-full mx-auto grid grid-cols-2 gap-8">
                {data.map((product) => (
                    <FeaturedProductCards
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}
