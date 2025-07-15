import React from "react";

export default function Button({children}) {
    return (
        <button
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-sm text-sm font-medium
            active:bg-white active:text-black transform transition duration-300">
            {children}
        </button>
    )
}