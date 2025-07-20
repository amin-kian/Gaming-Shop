// app/_components/category/FilterSidebar.js
'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IoClose} from 'react-icons/io5';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function FilterSidebar({isOpen, onClose, onApplyFilter, initialMinPrice, initialMaxPrice}) {
    const sidebarRef = useRef(null);

    const MIN_SLIDER_VALUE = 0;
    const MAX_SLIDER_VALUE = 1000;

    const [priceRange, setPriceRange] = useState([
        initialMinPrice !== '' ? initialMinPrice : MIN_SLIDER_VALUE,
        initialMaxPrice !== '' ? initialMaxPrice : MAX_SLIDER_VALUE
    ]);

    useEffect(() => {
        setPriceRange([
            initialMinPrice !== '' ? initialMinPrice : MIN_SLIDER_VALUE,
            initialMaxPrice !== '' ? initialMaxPrice : MAX_SLIDER_VALUE
        ]);
    }, [initialMinPrice, initialMaxPrice]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSliderChange = useCallback((value) => {
        setPriceRange(value);
    }, []);

    const handleAfterSliderChange = useCallback((value) => {
        onApplyFilter({
            minPrice: value[0],
            maxPrice: value[1],
        });
        // Removed onClose() call here
    }, [onApplyFilter]);

    const handleMinPriceInputChange = (e) => {
        const value = Number(e.target.value);
        const newMin = Math.max(MIN_SLIDER_VALUE, Math.min(value, priceRange[1]));
        setPriceRange([newMin, priceRange[1]]);
        onApplyFilter({
            minPrice: newMin,
            maxPrice: priceRange[1],
        });
        // Removed onClose() call here
    };

    const handleMaxPriceInputChange = (e) => {
        const value = Number(e.target.value);
        const newMax = Math.min(MAX_SLIDER_VALUE, Math.max(value, priceRange[0]));
        setPriceRange([priceRange[0], newMax]);
        onApplyFilter({
            minPrice: priceRange[0],
            maxPrice: newMax,
        });
        // Removed onClose() call here
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 z-300000000 flex justify-end" role="dialog" aria-modal="true">
            <div
                ref={sidebarRef}
                className={`relative w-80 bg-white shadow-xl h-full transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">Filter</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <IoClose size={24}/>
                    </button>
                </div>

                <div className="p-4">
                    {/* Price Filter Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Price</h3>
                        <div className="px-2">
                            <Slider
                                range
                                min={MIN_SLIDER_VALUE}
                                max={MAX_SLIDER_VALUE}
                                value={priceRange}
                                onChange={handleSliderChange}
                                onAfterChange={handleAfterSliderChange}
                                allowCross={false}
                                trackStyle={[{backgroundColor: '#8b5cf6'}]}
                                handleStyle={[{
                                    borderColor: '#8b5cf6',
                                    backgroundColor: '#fff',
                                    opacity: 1,
                                    boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)'
                                }, {
                                    borderColor: '#8b5cf6',
                                    backgroundColor: '#fff',
                                    opacity: 1,
                                    boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)'
                                }]}
                                railStyle={{backgroundColor: '#e0e0e0'}}
                            />
                        </div>

                        {/* Price Input Fields */}
                        <div className="flex items-center justify-between gap-3 text-gray-700 font-medium mt-6">
                            <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md">
                                <label htmlFor="min-price" className="sr-only">Min Price</label>
                                $<input
                                id="min-price"
                                type="number"
                                placeholder="Min"
                                value={priceRange[0]}
                                onChange={handleMinPriceInputChange}
                                className="w-full bg-transparent focus:outline-none text-right"
                                min={MIN_SLIDER_VALUE}
                                max={MAX_SLIDER_VALUE}
                            />
                            </div>
                            <span>-</span>
                            <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md">
                                <label htmlFor="max-price" className="sr-only">Max Price</label>
                                $<input
                                id="max-price"
                                type="number"
                                placeholder="Max"
                                value={priceRange[1]}
                                onChange={handleMaxPriceInputChange}
                                className="w-full bg-transparent focus:outline-none text-right"
                                min={MIN_SLIDER_VALUE}
                                max={MAX_SLIDER_VALUE}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}