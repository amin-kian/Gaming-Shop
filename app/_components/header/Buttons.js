import Button from "@/app/_components/header/Button";
import {FaRegHeart, FaRegUser} from "react-icons/fa";
import {LuGitCompareArrows} from "react-icons/lu";
import {MdOutlineShoppingBag} from "react-icons/md";

export default function Buttons({cartItemCount}) {
    return (
        <div className='flex items-center gap-2.5'>
            <Button>
                <FaRegUser/>
                <span>Login</span>
            </Button>

            <Button>
                <LuGitCompareArrows/>
                <span>Compare</span>
            </Button>

            <Button>
                <FaRegHeart/>
                <span>Wishlist</span>
            </Button>

            <div className="h-9 w-px bg-white"></div>

            <Button>
                <div className='relative'>
                    <MdOutlineShoppingBag size='40'/>
                    <span
                        className="absolute -top-2 -right-2 bg-purple-500 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                </div>
            </Button>
        </div>
    )
}