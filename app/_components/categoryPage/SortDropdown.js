// app/_components/category/SortDropdown.js
import React from 'react';
import {IoIosArrowDown} from "react-icons/io";

export default function SortDropdown({
                                         sortOption,
                                         handleSortChange,
                                         isSortDropdownOpen,
                                         setIsSortDropdownOpen,
                                         sortDropdownRef
                                     }) {
    return (
        <div className="relative group" ref={sortDropdownRef}>
            <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-black rounded-md bg-white text-gray-800"
            >
                {sortOption} <IoIosArrowDown/>
            </button>
            <ul className={`absolute right-0 md:left-auto md:right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 z-10000
                        ${isSortDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {['Featured', 'Best selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low', 'Date, old to new', 'Date, new to old'].map((option) => (
                    <li key={option}>
                        <button
                            onClick={() => handleSortChange(option)}
                            className={`block w-full text-left px-4 py-2 ${sortOption === option ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}