import Button from "@/app/_components/header/Button";
import {FaSearch} from "react-icons/fa";
import {MdOutlineShoppingBag} from "react-icons/md";

export default function Buttons({cartItemCount}) {
    return (
        <div className='w-full flex items-center justify-end gap-2'>
            <Button>
                <FaSearch size='22'/>
            </Button>
            <Button>
                <div className='relative'>
                    <MdOutlineShoppingBag size='30'/>
                    <span
                        className="absolute -top-1.5   -right-1.5    bg-purple-500 text-white text-xs font-bold rounded-full h-4 w-4 p-2.5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                </div>
            </Button>
        </div>
    )
}