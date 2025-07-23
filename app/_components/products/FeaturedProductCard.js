import Image from "next/image";
import Link from "next/link";

export default function FeaturedProductCards({
                                                 name,
                                                 description,
                                                 image,
                                                 href,
                                             }) {
    return (
        <div className="relative rounded-lg overflow-hidden group w-full h-[450px] md:h-[650px]">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm text-gray-300 uppercase tracking-wider">
                    {name}
                </p>
                <h2 className="text-4xl font-bold mt-2">Best Seller</h2>
                <p className="text-xs md:text-base text-gray-300 mt-2 line-clamp-2">{description}</p>
                <Link href={href}>
          <span
              className="inline-block mt-6 bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">
            Shop now
          </span>
                </Link>
            </div>
        </div>
    );
}
