import ProductCardListView from "@/app/_components/products/ProductCardListView";
import ProductCardGridView from "@/app/_components/products/ProductCardGridView";

export default function ProductCard({product, showAddToCardBigBtn, columnCount = 0}) {
    const {name, image, imageHover, price, originalPrice, discount, colors, description} = product;
    
    // Determine if it's a list view based on columnCount
    const isListView = columnCount === 1;

    if (isListView) {
        return <ProductCardListView {...product}/>
    }

    // GRID VIEW LAYOUT (Your existing layout)
    else {
        return <ProductCardGridView {...product} showAddToCardBigBtn={showAddToCardBigBtn} columnCount={columnCount}/>
    }
}