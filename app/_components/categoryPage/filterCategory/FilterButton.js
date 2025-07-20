import {RiFilter3Line} from "react-icons/ri";
import React from "react";

export default function FilterButton({setIsFilterSidebarOpen}) {
    return (
        <button
            onClick={() => setIsFilterSidebarOpen(true)} // Open sidebar on click
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 hover:border-black rounded-md bg-white text-gray-800">
            <RiFilter3Line/>
            Filter
        </button>
    )
}