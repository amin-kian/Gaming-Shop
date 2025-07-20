import Link from "next/link";
import Image from "next/image";
import ProductCardActionButtons from "@/app/_components/products/CardActionButtons";

export default function ProductCardImage({
                                             href,
                                             images,
                                             discount,
                                             className,
                                             showActionButton = false,
                                             showAddToCardBigBtn = false
                                         }) {

    return (
        <Link href={href}>
            <div
                className={`relative w-full overflow-hidden rounded-md mb-4 aspect-square group/image flex-shrink-0 ${className}`}>
                <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                />
                <Image
                    src={images[1].src}
                    alt={`${images[1].alt} (hover view)`}
                    fill
                    className="
                        object-cover
                         opacity-0
                         z-10
                         transition-all duration-800
                         group-hover/image:opacity-100
                         group-hover/image:scale-115"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />

                {showActionButton &&
                    <div
                        className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ProductCardActionButtons showAddToCardBigBtn={showAddToCardBigBtn}/>
                    </div>
                }

                {discount && (
                    <div
                        className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full z-20">
                        {discount}
                    </div>
                )}
            </div>
        </Link>

    )
}