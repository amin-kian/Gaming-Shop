export default function sortProducts(productsToSort, sortOption) {
    let sorted = [...productsToSort];
    switch (sortOption) {
        case 'Best selling':
            return sorted.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
        case 'Alphabetically, A-Z':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'Alphabetically, Z-A':
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'Price, low to high':
            return sorted.sort((a, b) => a.price - b.price);
        case 'Price, high to low':
            return sorted.sort((a, b) => b.price - a.price);
        case 'Date, old to new':
            return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        case 'Date, new to old':
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case 'Featured':
        default:
            return sorted;
    }
};
