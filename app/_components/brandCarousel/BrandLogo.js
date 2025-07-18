import Image from "next/image";

export default function BrandLogo({brand}) {
    return (
        <div className="">
            <div className="flex items-center h-20 md:h-25 lg:h-30 p-4 justify-center border border-gray-200">
                <div className="relative w-full h-full">
                    <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}