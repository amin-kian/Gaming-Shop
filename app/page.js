// in app/page.js
import dynamic from 'next/dynamic';
import FeaturedProducts from "@/app/_components/products/FeaturedProducts";
import AdvertisementSlider from "@/app/_components/advertisementSlider/AdvertisementSlider";
import StoreFeatures from "@/app/_components/storeFeature/StoreFeatures";
import ShopByCategory from "@/app/_components/categorySlider/ShopByCategory";
import TimerLoader from "@/app/_components/products/CountDownLoader";
import {getCustomerReviews, getHotspotsData, getProducts} from "@/app/_lib/fakerJs";
import {getCategories, getSaleEndDate} from "@/app/_lib/staticData";

const ProductsSliderContainer = dynamic(() => import('@/app/_components/products/ProductsSliderContainer'));
const CustomerReviews = dynamic(() => import('@/app/_components/testimonials/CustomerReviews'));
const BrandCarousel = dynamic(() => import('@/app/_components/brandCarousel/BrandCarousel'));
const InteractiveHero = dynamic(() => import('@/app/_components/interactiveHero/InteractiveHero'));
const MapLoader = dynamic(() => import('@/app/_components/map/MapLoader'));


export const metadata = {
    title: "Home Page",
};

export default async function Home() {
    const products = await getProducts(6);
    const hotspotsData = await getHotspotsData();
    const reviews = await getCustomerReviews(5);
    const categories = getCategories();
    const saleEndDate = getSaleEndDate();

    return (
        <div>
            {/*normal loading*/}
            <FeaturedProducts products={products.slice(0, 2)}/>
            <AdvertisementSlider/>
            <StoreFeatures/>
            <ShopByCategory categories={categories}/>

            {/*lazy loading*/}
            <ProductsSliderContainer title={"Hot Deals"} data={products} bg={'bg-gray-100'} showAddToCardBigBtn={false}>
                <TimerLoader targetDate={saleEndDate}/>
            </ProductsSliderContainer>

            <ProductsSliderContainer title={'Popular Product'} data={products} showAddToCardBigBtn={true}/>

            <InteractiveHero hotspots={hotspotsData}/>

            <ProductsSliderContainer title={'Recommended Product'} data={products} showAddToCardBigBtn={true}/>

            <CustomerReviews reviews={reviews}/>

            <BrandCarousel/>

            <MapLoader/>
        </div>
    );
}