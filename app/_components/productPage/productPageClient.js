'use client';

import {useState} from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductDetails from './ProductDetails';
import ProductsSliderContainer from "@/app/_components/products/ProductsSliderContainer";
import AdditionalInfo from "@/app/_components/productPage/AdditionalInfo";
import {useRecentlyViewed} from '@/app/_hooks/useRecentlyViewed';

export default function ProductPageClient({product, relatedProducts}) {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const recentlyViewedProducts = useRecentlyViewed(product);

    return (
        <div className='w-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-16 lg:gap-16 mb-10">
                <ProductImageGallery images={product.images} productName={product.name}/>
                <ProductDetails
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}/>
            </div>
            <div className='px-4 md:px-16'>
                <AdditionalInfo colors={product.colors}/>
            </div>
            <ProductsSliderContainer data={relatedProducts} title={'People Also Bought'}/>

            {recentlyViewedProducts.length > 0 && (
                <ProductsSliderContainer data={recentlyViewedProducts} title={'Recently Viewed'}/>
            )}
        </div>
    );
}