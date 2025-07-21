import React from 'react';
import {getProductsByCategory} from '@/app/_lib/fakerJs';
import {getCategories} from "@/app/_lib/staticData";
import CategoryPageClient from "@/app/_components/categoryPage/CategoryPageClient";

export async function generateMetadata({params}) {
    const categoryName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: categoryName,
    };
}

export default async function CategoryPage({params, searchParams}) {
    const {slug} = params;

    const initialSort = searchParams.sort || 'Featured';
    const initialView = parseInt(searchParams.view, 10) || 6;
    const initialMinPrice = searchParams.minPrice ? parseFloat(searchParams.minPrice) : '';
    const initialMaxPrice = searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : '';

    const categoryProducts = await getProductsByCategory(slug);

    const categories = getCategories();
    const currentCategory = categories.find(cat => cat.name.toLowerCase().replace(/\s+/g, '-') === slug);
    const currentCategoryName = currentCategory ? currentCategory.name : slug.replace(/-/g, ' ');


    return (
        <CategoryPageClient
            initialAllProducts={categoryProducts}
            initialSort={initialSort}
            initialView={initialView}
            initialMinPrice={initialMinPrice}
            initialMaxPrice={initialMaxPrice}
            categorySlug={slug}
            currentCategoryName={currentCategoryName}
        />
    );
}
