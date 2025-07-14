// /app/_components/interactiveHero/Hotspot.js

'use client';

import Image from 'next/image';
import ProductPrice from "@/app/_components/products/ProductPrice";

export default function Hotspot({position, product}) {
    return (
        <div
            className="absolute"
            style={{top: `${position.top}%`, left: `${position.left}%`}}
        >
            <div className="relative group flex items-center justify-center">

                <div className="absolute size-8 bg-white rounded-full hotspot-ping-animation"></div>

                <div className="absolute size-6 rounded-full border-15 border-white"></div>

                <div className="relative size-3 bg-black rounded-full cursor-pointer"></div>


                <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80
                     bg-white rounded-lg shadow-xl py-5 px-4
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-300"
                >
                    <div className="flex items-center justify-center gap-6">
                        <div className="relative flex-shrink-0 w-24 h-24 ">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2">
                                {product.name}
                            </h4>
                            <ProductPrice price={product.price} originalPrice={product.originalPrice}/>
                        </div>
                        <div className="relative group/action flex-shrink-0">
                            <button
                                className="flex items-center justify-center size-12 rounded-full bg-gray-100 hover:bg-black hover:text-white text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </button>
                            <div
                                className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/action:opacity-100 transition-opacity pointer-events-none">
                                Quick View
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}