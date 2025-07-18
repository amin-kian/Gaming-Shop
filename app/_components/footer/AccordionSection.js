import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

export default function AccordionSection({title, children, className}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-lg font-medium"
            >
                <span>{title}</span>
                {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? `max-h-screen pt-4 ${className}` : 'max-h-0'
                }`}
            >
                {children}
            </div>
        </div>
    );
};
