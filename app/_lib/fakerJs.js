'use server'

import axios from 'axios';
import {faker} from "@faker-js/faker";
import {getCategories} from "@/app/_lib/staticData"; // Still used for some minor data generation


faker.seed(123);

const FAKER_API_BASE_URL = 'https://fakerapi.it/api/v2';


async function fetchData(endpoint, params = {}) {
    try {
        const response = await axios.get(`${FAKER_API_BASE_URL}/${endpoint}`, {params});
        return response.data.data; // The API nests the data array in a 'data' key
    } catch (error) {
        console.error(`Failed to fetch from ${endpoint}:`, error.message);
        // Return an empty array to prevent the page from crashing
        return [];
    }
}

export async function getProducts(count) {
    const products = await fetchData('products', {
        _quantity: count,
        _price_min: 50,
        _price_max: 300,
    });

    const categories = getCategories();

    return products.map((product, i) => {
        const hasDiscount = faker.datatype.boolean();
        const originalPrice = hasDiscount
            ? (product.price * faker.number.float({min: 1.1, max: 1.5})).toFixed(2)
            : null;
        const discount = hasDiscount
            ? `-${Math.round(((originalPrice - product.price) / originalPrice) * 100)}%`
            : null;

        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        return {
            id: product.id,
            name: product.name,
            image: `https://picsum.photos/720/720?random=${i}`,
            imageHover: `https://picsum.photos/720/720?random=${i + count}`,
            price: product.price,
            originalPrice: originalPrice ? parseFloat(originalPrice) : null,
            discount: discount,
            colors: Array.from(
                {length: faker.number.int({min: 1, max: 3})},
                () => faker.color.rgb()
            ),
            href: `/products/${faker.helpers.slugify(product.name).toLowerCase()}`,
            description: product.description,
            category: randomCategory.name,
            categoryId: randomCategory.id,
            categoryImage: randomCategory.image,
            createdAt: faker.date.past(),
            soldCount: faker.number.int({min: 10, max: 1000}),
        };
    });
}

export async function getHotspotsData() {
    const products = await getProducts(2);
    if (products.length < 2) {
        console.error("Could not fetch enough products for hotspots.");
        return [];
    }

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
}

export async function getCustomerReviews(count) {
    const persons = await fetchData('persons', {
        _quantity: count,
    });

    return persons.map(person => ({
        id: person.uuid,
        customerName: `${person.firstname} ${person.lastname}`,
        purchasedItem: `A Great Gaming Product`,
        reviewText: "This product exceeded all my expectations. The quality is amazing and it works perfectly. Highly recommended!",
        rating: 5,
        customerImage: `https://i.pravatar.cc/1000?u=${person.id}`,
    }));
}

