import FeaturedProducts from "@/app/_components/products/FeaturedProducts";
import StoreFeatures from "@/app/_components/StoreFeatures";
import ShopByCategory from "@/app/_components/categorySlider/ShopByCategory";
import HotDeals from "@/app/_components/products/HotDeals";
import ProductsSlider from "@/app/_components/products/ProductsSlider";
import InteractiveHero from "@/app/_components/interactiveHero/InteractiveHero";
import {getCategories, getProducts} from "@/app/_lib/data-service";

export const metadata = {
    title: "Home Page",
};

const products = getProducts(8);
const categories = getCategories(8)
const hotspotsData = [
    {
        id: 1,
        position: {top: 75, left: 45},
        product: {
            name: products[0].name,
            price: products[0].price,
            image: products[0].image,
        }
    },
    {
        id: 2,
        position: {top: 30, left: 72},
        product: {
            name: products[1].name,
            price: products[1].price,
            image: products[1].image,
        }
    },
];

export default function Home() {
    return (
        <div>
            <FeaturedProducts data={products.slice(0, 2)}/>
            <StoreFeatures/>
            <ShopByCategory data={categories}/>
            <HotDeals data={products}/>
            <ProductsSlider title={'Popular Product'} data={products}/>
            <InteractiveHero
                backgroundImage="/img/heroInteractiveBg.webp"
                hotspots={hotspotsData}
            />
            <ProductsSlider title={'Recommended Product'} data={products}/>
        </div>
    );
}
