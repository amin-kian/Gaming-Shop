import React from 'react';
import {getMenuItems} from "@/app/_lib/data-service";
import Image from "next/image"; // Import the Next.js Image component

const GridIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
         strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
    </svg>
)

const menuItems = getMenuItems();


export default function CategoryMenu() {
    return (
        <div className="relative group">
            <button
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
                <GridIcon/>
                Browse All Categories
            </button>

            <div
                className="absolute top-full left-0 mt-2 w-72 p-4 bg-[#2D2D2D] text-white rounded-xl shadow-lg
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                   transform -translate-y-4 transition-all duration-300 ease-in-out"
            >
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href="#"
                                className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                            >
                                {/* Replace the placeholder div with the Image component */}
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                                />
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="border-t border-gray-600/70 mt-4 pt-3">
                    <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        View all collection
                        <ArrowRightIcon/>
                    </a>
                </div>
            </div>
        </div>
    );
};

