import React, {useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";

export default function AccordionItem({title, subLinks}) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-3 px-2 text-left text-black"
            >
                <span className="font-medium text-xs text-gray-800">{title}</span>
                {!isOpen ? <FaPlus size='10'/> : <FaMinus size='10'/>}
            </button>
            {isOpen && subLinks && subLinks.length > 0
                && (
                    <div className="pl-5 pb-4">
                        <ul className="space-y-3">
                            {subLinks.map((subLink, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-600 hover:text-black text-xs">
                                        {subLink.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    );
};
