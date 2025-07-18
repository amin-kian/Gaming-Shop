'use client'

import {useEffect, useRef, useState} from "react";
import MegaMenu from "@/app/_components/header/MegaMenu";
import {IoIosArrowDown} from "react-icons/io";

export default function NavItem({children, itemSubLinks, hasArrow = false}) {
    const [isHovered, setIsHovered] = useState(false);
    const [menuTopPosition, setMenuTopPosition] = useState(0);
    const navItemRef = useRef(null);

    // This effect handles positioning the menu
    useEffect(() => {
        const calculatePosition = () => {
            if (navItemRef.current) {
                const headerElement = navItemRef.current.closest('header');
                if (headerElement) {
                    setMenuTopPosition(headerElement.getBoundingClientRect().bottom);
                }
            }
        };
        calculatePosition();
        window.addEventListener('resize', calculatePosition);
        return () => window.removeEventListener('resize', calculatePosition);
    }, []);

    // This effect handles locking and unlocking the body scroll
    useEffect(() => {
        if (isHovered) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to ensure scroll is unlocked if the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isHovered]);

    return (
        <li
            ref={navItemRef}
            className="group relative flex cursor-pointer items-center gap-2 font-medium text-white/90 transition-colors hover:text-white"
            // Use event handlers to update state and control body scroll
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {itemSubLinks?.length > 0 &&
                <MegaMenu items={itemSubLinks} top={menuTopPosition} isOpen={isHovered}/>}

            <span>{children}</span>
            {hasArrow && (
                <IoIosArrowDown/>
            )}
            <div
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
        </li>
    );
};