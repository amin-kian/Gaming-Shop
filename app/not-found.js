import Link from 'next/link';
import {GoHome} from "react-icons/go";

export default function NotFound() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-[calc(100vh-215px)] bg-white text-black text-center px-4">
            <div className="max-w-lg w-full">
                <h1
                    className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 animate-pulse-slow"
                >
                    404
                </h1>

                <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Sorry, we couldn&#39;t find the page you&#39;re looking for. It might have been moved, deleted, or
                    maybe you
                    just mistyped the URL.
                </p>

                <div className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <span
                            className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                           <GoHome/> Go Back Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}