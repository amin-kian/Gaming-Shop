import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({image, name}) {
    return (
        <Link href="#" className="group block flex flex-col items-center justify-center">
            <div
                className="flex h-[130px] w-4/5 flex-col items-center justify-center rounded-xl bg-[#2C2F35] p-4">
                <div className="relative h-25 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-1500 group-hover:scale-130"
                    />
                </div>
            </div>
            <p className="mt-5 text-xl font-medium text-gray-300 text-center transition-colors duration-300 group-hover:text-purple-600">
                {name}
            </p>
        </Link>)
}