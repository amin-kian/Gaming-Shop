export default function HeaderSearchBar() {
    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search product"
                className="w-130 h-14 rounded-full bg-white pl-5 pr-14 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />

            <button
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-11 w-22 bg-black rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </button>
        </div>
    );
}
