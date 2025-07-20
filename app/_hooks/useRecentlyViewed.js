// app/_hooks/useRecentlyViewed.js

'use client';

import {useEffect, useState} from 'react';

const MAX_VIEWED_PRODUCTS = 10;

export function useRecentlyViewed(product) {
    const [viewedProducts, setViewedProducts] = useState([]);

    useEffect(() => {
        // localStorage is not available on the server, so we run this effect on the client.
        if (product && product.id) {
            // 1. Get existing items from localStorage
            const storedProductsRaw = localStorage.getItem('recentlyViewed');
            const storedProducts = storedProductsRaw ? JSON.parse(storedProductsRaw) : [];

            // 2. We set the state with the list of products *before* adding the current one.
            // This ensures the current product doesn't appear in its own "Recently Viewed" slider.
            setViewedProducts(storedProducts.filter(p => p.id !== product.id));

            // 3. Add the current product to the list for future page views.
            // We filter it out first to prevent duplicates and move it to the front.
            const otherProducts = storedProducts.filter(p => p.id !== product.id);
            const newList = [product, ...otherProducts].slice(0, MAX_VIEWED_PRODUCTS);

            // 4. Save the updated list back to localStorage.
            localStorage.setItem('recentlyViewed', JSON.stringify(newList));
        }
    }, [product]); // Rerun this logic every time the user navigates to a new product page

    return viewedProducts;
}