'use server'

import {cache} from 'react';
import axios from 'axios';
import {faker} from "@faker-js/faker";
import {getCategories} from "@/app/_lib/staticData";

const seed = 123456;

const FAKER_API_BASE_URL = 'https://fakerapi.it/api/v2';


async function fetchData(endpoint, params = {}) {
    try {
        const response = await axios.get(`${FAKER_API_BASE_URL}/${endpoint}`, {params});
        return response.data.data;
    } catch (error) {
        console.error(`Failed to fetch from ${endpoint}:`, error.message);
        return [];
    }
}

export const getProductById = cache(async (id) => {
    if (!id) return null;

    const products = await getProducts(20);

    return products.find(p => p.id === parseInt(id, 10));
});

export const getProducts = cache(async (count) => {
    const products = await fetchData('products', {
        _quantity: count,
        _price_min: 50,
        _price_max: 300,
        _seed: seed,
    });

    const categories = getCategories();

    return products.map((product) => {
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
            src: `https://picsum.photos/1000/1000?random=${product.id + j}`,
            alt: `Product image ${j + 1}`
        }));

        return {
            id: product.id,
            name: product.name,
            image: images[0].src,
            imageHover: images[1]?.src || images[0].src,
            images: images,
            price: product.price,
            originalPrice: originalPrice ? parseFloat(originalPrice) : null,
            discount: discount,
            colors: Array.from(
                {length: faker.number.int({min: 1, max: 3})},
                () => faker.color.rgb()
            ),
            href: `/product/${faker.helpers.slugify(product.name).toLowerCase()}-${product.id}`,
            description: product.description,
            category: randomCategory.name,
            categoryId: randomCategory.id,
            categoryImage: randomCategory.image,
            createdAt: faker.date.past(),
            soldCount: faker.number.int({min: 10, max: 1000}),
        };
    });
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
    const persons = await fetchData('persons', {_quantity: count});
    return persons.map(person => ({
        id: person.uuid,
        customerName: `${person.firstname} ${person.lastname}`,
        purchasedItem: `A Great Gaming Product`,
        reviewText: "This product exceeded all my expectations. The quality is amazing and it works perfectly. Highly recommended!",
        rating: 5,
        customerImage: `https://i.pravatar.cc/1000?u=${person.id}`,
    }));
});