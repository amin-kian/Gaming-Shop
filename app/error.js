// app/error.js
'use client';

import Link from 'next/link';
import {useEffect} from 'react';
import {RiErrorWarningLine} from 'react-icons/ri';
import {GoHome} from "react-icons/go";

export default function Error({error, reset}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-[calc(100vh-215px)] bg-gray-50 text-center px-4">
            <div className="max-w-md w-full">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full">
                    <RiErrorWarningLine className="w-12 h-12 text-red-500"/>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Oops! Something went wrong.
                </h1>

                <p className="text-gray-600 mb-2">
                    We&#39;ve encountered an unexpected issue. Please try again, or return to the homepage if the
                    problem
                    persists.
                </p>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        className="px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        onClick={() => reset()}
                    >
                        Try Again
                    </button>
                    <Link href="/">
                        <span
                            className="flex items-center gap-2 px-6 py-3 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300">
                           <GoHome/> Go Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}