// app/_components/header/CategoryMenu.js
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import {IoGridOutline} from "react-icons/io5";
import {MdArrowOutward} from "react-icons/md";
import {getCategories} from "@/app/_lib/staticData"; // Assuming getCategories is here


export default function CategoryMenu() {
    const menuItems = getCategories();
    return (
        <div className="relative group">
            <button
                className="flex items-center gap-1 py-2 px-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
                <IoGridOutline/>
                Browse All Categories
            </button>

            <div
                className="absolute top-full left-0 mt-2 w-72 p-4 bg-[#2D2D2D] text-white rounded-xl shadow-lg
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                   transform -translate-y-4 transition-all duration-300 ease-in-out
                   z-10">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                                />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="border-t border-gray-600/70 mt-4 pt-3">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        View all collection
                        <MdArrowOutward/>
                    </Link>
                </div>
            </div>
        </div>
    );
}