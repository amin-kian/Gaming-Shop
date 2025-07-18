import {GoArrowUpRight} from "react-icons/go";
import Link from "next/link";
import {getShopInfo} from "@/app/_lib/staticData";

export default function InfoBox() {
    const shopInfo = getShopInfo();
    return (
        <div
            className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:right-10 z-[1000] lg:w-100 md:w-80 bg-white p-8 md:rounded-4xl shadow-3xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{shopInfo.name} Store</h3>
            <p className="text-gray-600"></p>
            <Link href='#' className="text-gray-600 hover:underline">{shopInfo.email}</Link>
            <Link href='#' className="block text-gray-600 hover:underline mb-6">{shopInfo.phone}</Link>
            <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="text-gray-800">Mon - Fri, 8:30am - 10:30pm</p>
                <p className="text-gray-800">Saturday, 8:30am - 10:30pm</p>
                <p className="text-gray-800">Sunday Closed</p>
            </div>
            <Link href="#"
                  className="flex items-center justify-start mt-4 text-purple-600 font-semibold hover:underline">
                Get Directions
                <GoArrowUpRight/>
            </Link>
        </div>
    );
}