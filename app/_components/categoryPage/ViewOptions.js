// app/_components/category/ViewOptions.js
import React from 'react';
import {PiDotBold} from "react-icons/pi";

export default function ViewOptions({selectedColumnCount, handleViewChange}) {
    const columnOptions = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex items-center gap-2">
            {columnOptions.map((numCols) => {
                const isCurrent = selectedColumnCount === numCols;
                return (
                    <button
                        key={numCols}
                        onClick={() => handleViewChange(numCols)}
                        className={`flex items-center justify-center p-3 rounded-md transition-colors
                            ${isCurrent ? 'bg-gray-200' : 'hover:bg-gray-100'}
                            ${
                            numCols <= 2 ? '' : // Always visible for 1, 2 columns
                                numCols <= 4 ? 'hidden sm:flex' : // For 3, 4 columns: hidden on xs, visible on sm, md, lg
                                    'hidden md:hidden lg:flex' // For 5, 6 columns: hidden on xs, sm, md, visible on lg
                        }
                        `}
                        title={`${numCols} Column View`}>
                        {Array.from({length: numCols}).map((_, i) => (
                            <PiDotBold key={i} size={50}
                                       className={`${isCurrent ? 'text-black' : 'text-gray-400'} -m-5`}/>
                        ))}
                    </button>
                );
            })}
        </div>
    );
}