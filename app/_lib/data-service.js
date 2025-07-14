import {faker} from "@faker-js/faker";

faker.seed(123);

export function getCategories(count) {
    const menuItems = Array.from({length: count}, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        image: faker.image.urlLoremFlickr({
            category: "abstract",
            width: 720,
            height: 720,
        }),
    }));

    return menuItems;
}


export function getProducts(count) {
    return Array.from({length: count}, (_, i) => {
        const price = faker.commerce.price({min: 50, max: 300});
        const hasDiscount = faker.datatype.boolean();
        const originalPrice = hasDiscount ? (parseFloat(price) * faker.number.float({
            min: 1.1,
            max: 1.5
        })).toFixed(2) : null;
        const discount = hasDiscount ? `-${Math.round(((originalPrice - price) / originalPrice) * 100)}%` : null;

        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            image: `https://picsum.photos/720/720?random=${i}`,
            imageHover: `https://picsum.photos/720/720?random=${i + count}`,
            price: parseFloat(price),
            originalPrice: originalPrice ? parseFloat(originalPrice) : null,
            discount: discount,
            colors: Array.from({length: faker.number.int({min: 1, max: 3})}, () => faker.color.rgb()),
            href: `/products/${faker.helpers.slugify(faker.commerce.productName()).toLowerCase()}`,
            description: faker.lorem.sentence({min: 10, max: 15}),
        };
    });
}
