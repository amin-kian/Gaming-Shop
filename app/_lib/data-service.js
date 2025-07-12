import {faker} from '@faker-js/faker';

export const getMenuItems = () => {
    const menuItems = Array.from({length: 5}, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        icon: faker.image.urlLoremFlickr({category: 'abstract', width: 64, height: 64}),
    }));

    return menuItems;
};