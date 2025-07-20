import {MdOutlineShoppingBag} from "react-icons/md";
import {FaRegEye, FaRegHeart} from "react-icons/fa";
import {LuArrowUpDown} from "react-icons/lu";
import ActionButton from "@/app/_components/products/ActionButton";

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