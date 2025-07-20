// app/_components/products/ProductGridDisplay.jsx

import ProductCard from "@/app/_components/products/ProductCard";

export default function ProductGridDisplay({displayedProducts, getGridClasses, columnCount}) {
    if (displayedProducts.length === 0) {
        return (
            <div className="text-center py-20 text-gray-600 text-lg">
                No products found matching your criteria.
            </div>
        );
    }

    return (
        <div className={`px-4 lg:px-16 grid gap-2 ${getGridClasses()}`}>
            {displayedProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    showAddToCardBigBtn={false}
                    columnCount={columnCount}
                />
            ))}
        </div>
    );
}