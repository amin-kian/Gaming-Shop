import FeaturedProducts from "@/app/_components/products/FeaturedProducts";
import AdvertisementSlider from "@/app/_components/advertisementSlider/AdvertisementSlider";
import ShopByCategory from "@/app/_components/categorySlider/ShopByCategory";
import StoreFeatures from "@/app/_components/storeFeature/StoreFeatures";
import ProductsSliderContainer from "@/app/_components/products/ProductsSliderContainer";
import CustomerReviews from "@/app/_components/testimonials/CustomerReviews";
import BrandCarousel from "@/app/_components/brandCarousel/BrandCarousel";
import InteractiveHero from "@/app/_components/interactiveHero/InteractiveHero";
import {getCustomerReviews, getHotspotsData, getProducts} from "@/app/_lib/fakerJs";
import {getCategories, getSaleEndDate} from "@/app/_lib/staticData";
import TimerLoader from "@/app/_components/products/CountDownLoader";
import Footer from "@/app/_components/footer/Footer";
import MapLoader from "@/app/_components/map/MapLoader";
import MobileNav from "@/app/_components/mobileBottomNav/MobileNav";

export const metadata = {
    title: "Home Page",
};


export default async function Home() {
    const products = await getProducts(8);
    const hotspotsData = await getHotspotsData();
    const reviews = await getCustomerReviews(5);


    const categories = getCategories()
    const saleEndDate = getSaleEndDate();
    const wishlistCount = 0;
    const cartCount = 0;
    
    return (
        <div>
            <FeaturedProducts products={products.slice(0, 2)}/>

            <AdvertisementSlider/>

            <StoreFeatures/>

            <ShopByCategory categories={categories}/>

            <ProductsSliderContainer title={"Hot Deals"} data={products} bg={'bg-gray-100'} showAddToCardBigBtn={false}>
                <TimerLoader targetDate={saleEndDate}/>
            </ProductsSliderContainer>

            <ProductsSliderContainer title={'Popular Product'} data={products} showAddToCardBigBtn={true}/>

            <InteractiveHero
                hotspots={hotspotsData}
            />

            <ProductsSliderContainer title={'Recommended Product'} data={products} showAddToCardBigBtn={true}/>

            <CustomerReviews reviews={reviews}/>

            <BrandCarousel/>

            <MapLoader/>

            <Footer/>

            <MobileNav wishlistCount={wishlistCount} cartItemCount={cartCount}/>
        </div>
    );
}
