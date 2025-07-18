import {FaChevronUp} from "react-icons/fa";

export default function BacktoTopButton() {
    return (
        <a href="#"
           className="hidden md:block fixed z-1000000 border-1 border-black bottom-20 right-10 bg-white text-black rounded-1 p-3 shadow-lg hover:bg-gray-200 transition-all">
            <FaChevronUp size={20}/>
        </a>
    )
}