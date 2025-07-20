// app/_components/category/CategoryControlsBar.js
import React from 'react';
import {RiFilter3Line} from "react-icons/ri";
import SortDropdown from "@/app/_components/categoryPage/SortDropdown";
import ViewOptions from "@/app/_components/categoryPage/ViewOptions";

export default function ControlsBar({
                                        selectedColumnCount,
                                        handleViewChange,
                                        sortOption,
                                        handleSortChange,
                                        isSortDropdownOpen,
                                        setIsSortDropdownOpen,
                                        sortDropdownRef,
                                        setIsFilterSidebarOpen
                                    }) {
    return (
        <div className="flex text-black justify-between items-center px-4 md:px-16 mb-8 gap-4">
            <button
                onClick={() => setIsFilterSidebarOpen(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 hover:border-black rounded-md bg-white text-gray-800">
                <RiFilter3Line/>
                Filter
            </button>

            {/* View Options Component */}
            <ViewOptions
                selectedColumnCount={selectedColumnCount}
                handleViewChange={handleViewChange}
            />

            {/* Sort Dropdown Component */}
            <SortDropdown
                sortOption={sortOption}
                handleSortChange={handleSortChange}
                isSortDropdownOpen={isSortDropdownOpen}
                setIsSortDropdownOpen={setIsSortDropdownOpen}
                sortDropdownRef={sortDropdownRef}
            />
        </div>
    );
}