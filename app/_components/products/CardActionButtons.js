import {MdOutlineShoppingBag} from "react-icons/md";
import {FaRegEye, FaRegHeart} from "react-icons/fa";
import {LuArrowUpDown} from "react-icons/lu";

function ActionButton({children, label}) {
    return (
        <button className="relative group/action">
            <div
                className="flex items-center justify-center bg-white text-black
                   shadow-lg shadow-black/15
                   transition-all duration-800
                   hover:bg-gray-800 hover:-translate-y-1 hover:text-white ho hover:scale-110 p-3"
            >
                {children}
            </div>
            <div
                className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/action:opacity-100 transition-opacity pointer-events-none">
                {label}
            </div>
        </button>
    );
}

export default function CardActionButtons({showAddToCardBigBtn}) {
    return (
        <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-4
                    flex justify-center items-center gap-2
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500 z-20">
            {!showAddToCardBigBtn &&
                <div className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                     style={{transitionDelay: '100ms'}}>
                    <ActionButton label="Add to Cart">
                        <MdOutlineShoppingBag/>
                    </ActionButton>
                </div>}

            <div
                className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                style={{transitionDelay: '200ms'}}>
                <ActionButton label="Add to Wishlist">
                    <FaRegHeart/>
                </ActionButton>
            </div>

            <div
                className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                style={{transitionDelay: '300ms'}}>
                <ActionButton label="Compare">
                    <LuArrowUpDown/>
                </ActionButton>
            </div>

            <div
                className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                style={{transitionDelay: '400ms'}}>
                <ActionButton label="Quick View">
                    <FaRegEye/>
                </ActionButton>
            </div>
        </div>
    );
}