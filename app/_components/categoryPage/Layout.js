import React from 'react';

export default function Layout({children, currentCategoryName}) {
    return (
        <div className="w-full mx-auto bg-white pb-20">
            <h1 className="w-full text-4xl text-black text-center mb-8 capitalize bg-gradient-to-r from-pink-150 via-pink-50 to-gray-50 py-10 shadow-sm">
                {currentCategoryName}
            </h1>
            <div className="hidden lg:grid-cols-5"></div>
            <div className="hidden md:grid-cols-3"></div>
            {children}
        </div>
    );
}