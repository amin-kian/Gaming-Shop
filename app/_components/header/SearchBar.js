import {FaSearch} from "react-icons/fa";

export default function SearchBar() {
    return (
        <form className="relative w-[85%]">
            <input
                type="text"
                placeholder="Search product"
                className="w-full h-14 rounded-full bg-white pl-5 pr-14 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />

            <button
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-11 w-22 bg-black rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                <FaSearch/>
            </button>
        </form>
    );
}
