'use client'

import {useEffect, useRef, useState} from "react";
import MegaMenu from "@/app/_components/header/MegaMenu";
import {IoIosArrowDown} from "react-icons/io";

export default function NavItem({children, itemSubLinks, hasArrow = false,}) {
    const [isHovered, setIsHovered] = useState(false);
    const [menuTopPosition, setMenuTopPosition] = useState(0);
    const navItemRef = useRef(null);

    // This effect now correctly finds the entire header and recalculates on resize
    useEffect(() => {
        const calculatePosition = () => {
            if (itemSubLinks && itemSubLinks.length > 0 && navItemRef.current) {
                // Find the closest parent <header> element
                const headerElement = navItemRef.current.closest('header');
                if (headerElement) {
                    // Get its bottom edge's position
                    const rect = headerElement.getBoundingClientRect();
                    setMenuTopPosition(rect.bottom);
                }
            }
        };

        // Calculate on initial mount
        calculatePosition();

        // Add event listener to recalculate on window resize for responsiveness
        window.addEventListener('resize', calculatePosition);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', calculatePosition);
        };
    }, [itemSubLinks]); // The dependency array is correct

    return (
        <li
            ref={navItemRef}
            className="group relative flex cursor-pointer items-center gap-2 font-medium text-white/90 transition-colors hover:text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Always render the menu, but pass `isHovered` to control its visibility */}
            {itemSubLinks && itemSubLinks.length > 0 &&
                <MegaMenu items={itemSubLinks} top={menuTopPosition} isOpen={isHovered}/>}

            <span>{children}</span>
            {hasArrow && (
                <IoIosArrowDown/>
            )}
            <div
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"/>
        </li>
    );
};