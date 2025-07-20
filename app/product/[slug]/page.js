import React from 'react';
import Breadcrumb from "@/app/_components/productPage/Breadcrumb";
import ProductPageClient from "@/app/_components/productPage/productPageClient";
import {getProductById, getProducts} from "@/app/_lib/fakerJs";

export async function generateMetadata({params}) {
    const productName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: productName,
    };
}

export default async function ProductPage({params}) {

    const slugParts = params.slug.split('-');
    const productId = slugParts[slugParts.length - 1];
    // console.log(productId);
    const product = await getProductById(productId);

    //
    // const products = await getProducts(1);
    // const product = products[0];
    const relatedProducts = await getProducts(10);


    const breadcrumbItems = [
        {name: 'Home', href: '/'},
        {name: product.name, href: `/products/${params.slug}`}
    ];


    return (
        <div className="bg-white text-black">
            <div className="w-full mx-auto py-8">
                <Breadcrumb items={breadcrumbItems}/>
                <ProductPageClient product={product} relatedProducts={relatedProducts}/>
            </div>
        </div>
    );
}