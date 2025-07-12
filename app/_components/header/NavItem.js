'use client'

import {useEffect, useRef, useState} from "react";
import MegaMenu from "@/app/_components/header/MegaMenu";

export default function NavItem({children, hasArrow = false, hasMegaMenu = false}) {
    const [isHovered, setIsHovered] = useState(false);
    const [menuTopPosition, setMenuTopPosition] = useState(0);
    const navItemRef = useRef(null);

    // This effect now correctly finds the entire header and recalculates on resize
    useEffect(() => {
        const calculatePosition = () => {
            if (hasMegaMenu && navItemRef.current) {
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
    }, [hasMegaMenu]); // The dependency array is correct

    return (
        <li
            ref={navItemRef}
            className="group relative flex cursor-pointer items-center gap-2 font-medium text-white/90 transition-colors hover:text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Always render the menu, but pass `isHovered` to control its visibility */}
            {hasMegaMenu && <MegaMenu top={menuTopPosition} isOpen={isHovered}/>}

            <span>{children}</span>
            {hasArrow && (
                <svg
                    className="transition-transform group-hover:translate-y-px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                >
                    <path
                        d="M10 1.24243L5 6.24243L-2.18557e-07 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                        fill="currentColor"
                    ></path>
                </svg>
            )}
            <div
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"/>
        </li>
    );
};