// app/_lib/fakerJs.js
'use server'

import {cache} from 'react';
import axios from 'axios';
import {faker} from "@faker-js/faker";
import {getCategories} from "@/app/_lib/staticData";

faker.seed(123456);

const FAKER_API_BASE_URL = 'https://fakerapi.it/api/v2';

let allProductsCache = null;

const fetchAndCacheAllProducts = cache(async () => {
    if (allProductsCache) {
        return allProductsCache;
    }

    try {
        const response = await axios.get(`${FAKER_API_BASE_URL}/products`, {
            params: {
                _quantity: 100,
                _price_min: 50,
                _price_max: 300,
                _seed: 12345,
            }
        });

        const productsData = response.data.data;
        const categories = getCategories();

        const processedProducts = productsData.map((product) => {
            const hasDiscount = faker.datatype.boolean();
            const originalPrice = hasDiscount
                ? (product.price * faker.number.float({min: 1.1, max: 1.5})).toFixed(2)
                : null;
            const discount = hasDiscount
                ? `-${Math.round(((originalPrice - product.price) / originalPrice) * 100)}%`
                : null;
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];

            const images = Array.from({length: 4}, (_, j) => ({
                id: j,
                src: `https://picsum.photos/seed/${product.id * 10 + j}/1000/1000`,
                alt: `Product image ${j + 1}`
            }));

            return {
                ...product,
                originalPrice: originalPrice ? parseFloat(originalPrice) : null,
                discount: discount,
                colors: Array.from(
                    {length: faker.number.int({min: 1, max: 3})},
                    () => faker.color.rgb()
                ),
                href: `/product/${faker.helpers.slugify(product.name).toLowerCase()}-${product.id}`,
                images: images,
                image: images[0].src,
                imageHover: images[1]?.src || images[0].src,
                category: randomCategory.name,
                categoryId: randomCategory.id,
                categoryImage: randomCategory.image,
                createdAt: faker.date.past(),
                soldCount: faker.number.int({min: 10, max: 1000}),
            };
        });

        allProductsCache = processedProducts;
        return allProductsCache;

    } catch (error) {
        console.error(`Failed to fetch from products API:`, error.message);
        return [];
    }
});

export const getProducts = cache(async (count) => {
    const allProducts = await fetchAndCacheAllProducts();
    return allProducts.slice(0, count);
});

export const getProductById = cache(async (id) => {
    if (!id) return null;
    const allProducts = await fetchAndCacheAllProducts();
    const product = allProducts.find(p => p.id === parseInt(id, 10));
    return product || null;
});


export const getProductsByCategory = cache(async (categorySlug) => {
    if (!categorySlug) return [];

    const allProducts = await fetchAndCacheAllProducts();

    const categories = getCategories();
    const currentCategory = categories.find(cat => cat.name.toLowerCase().replace(/\s+/g, '-') === categorySlug);

    if (!currentCategory) {
        return [];
    }

    return allProducts.filter(product => product.categoryId === currentCategory.id);
});


export const getHotspotsData = cache(async () => {
    const products = await getProducts(2);
    if (products.length < 2) return [];
    return [
        {
            id: 1,
            position: {top: 75, left: 45},
            product: {name: products[0].name, price: products[0].price, image: products[0].image}
        },
        {
            id: 2,
            position: {top: 30, left: 72},
            product: {name: products[1].name, price: products[1].price, image: products[1].image}
        },
    ];
});

export const getCustomerReviews = cache(async (count) => {
    try {
        const response = await axios.get(`${FAKER_API_BASE_URL}/persons`, {params: {_quantity: count}});
        const persons = response.data.data;
        return persons.map(person => ({
            id: person.uuid,
            customerName: `${person.firstname} ${person.lastname}`,
            purchasedItem: `A Great Gaming Product`,
            reviewText: "This product exceeded all my expectations. The quality is amazing and it works perfectly. Highly recommended!",
            rating: 5,
            customerImage: `https://i.pravatar.cc/1000?u=${person.id}`,
        }));
    } catch (error) {
        console.error(`Failed to fetch from persons API:`, error.message);
        return [];
    }
});
