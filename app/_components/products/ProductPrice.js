export default function ProductPrice({price, originalPrice}) {
    return (
        <div className="flex items-center justify-center gap-2 mt-2">
            {originalPrice && (
                <p className="text-sm text-center text-black line-through">
                    ${originalPrice.toFixed(2)}
                </p>
            )}
            <p className={`text-m text-center ${originalPrice ? "text-red-600" : "text-black"}`}>${price.toFixed(2)}</p>
        </div>
    )
}