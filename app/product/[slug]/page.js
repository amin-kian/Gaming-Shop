import React from 'react';
import {notFound} from 'next/navigation';
import Breadcrumb from "@/app/_components/breadcrumb/Breadcrumb";
import ProductPageClient from "@/app/_components/productPage/productPageClient";
import {getProductById, getProductsByCategory} from "@/app/_lib/fakerJs";

export async function generateMetadata({params}) {
    const productName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: productName,
    };
}

export default async function ProductPage({params}) {
    const slugParts = params.slug.split('-');
    const productId = slugParts[slugParts.length - 1];
    const product = await getProductById(productId);

    if (!product) {
        notFound();
    }

    const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');

    const allProductsInCategory = await getProductsByCategory(categorySlug);

    const relatedProducts = allProductsInCategory
        .filter(p => p.id !== product.id)
        .slice(0, 10);

    const breadcrumbItems = [
        {name: 'Home', href: '/'},
        {name: 'Products', href: '/'},
        {name: product.name, href: `/product/${params.slug}`}
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
