'use client';

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import ProductPrice from "@/app/_components/products/ProductPrice";
import {FaRegEye} from "react-icons/fa";

export default function Hotspot({position, product}) {
    const [isOpen, setIsOpen] = useState(false);
    const hotspotRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (hotspotRef.current && !hotspotRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="absolute"
            style={{top: `${position.top}%`, left: `${position.left}%`}}
            ref={hotspotRef}
        >
            <div className="relative flex items-center justify-center">

                {/* Trigger */}
                <div
                    className="relative z-10 cursor-pointer"
                    onClick={handleToggle}
                >
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 md:size-8 bg-white/50 rounded-full hotspot-ping-animation"></div>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 md:size-6 rounded-full border-5 md:border-8 border-white"></div>
                    <div className="relative size-1 md:size-3 bg-black rounded-full"></div>
                </div>

                {/* Product Preview Card */}
                <div
                    className={`
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-3 md:w-80
                        bg-white rounded-lg shadow-5xl p-1.5 md:py-5 md:px-4
                        transition-all duration-300 z-50
                        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}
                >
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                        <div className="relative flex-shrink-0 w-15 h-15 md:w-24 md:h-24">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h4 className="text-xs md:text-sm font-semibold text-gray-800 md:mb-3 line-clamp-2">
                                {product.name}
                            </h4>
                            <ProductPrice price={product.price} originalPrice={product.originalPrice}/>
                        </div>
                        <div className="hidden md:block relative group/action flex-shrink-0">
                            <button
                                className="flex items-center justify-center md:size-12 rounded-full bg-gray-100 hover:bg-black hover:text-white text-black transition-colors">
                                <FaRegEye/>
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