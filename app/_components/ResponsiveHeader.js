'use client'
import Header from "@/app/_components/header/Header";
import HeaderMobile from "@/app/_components/headerMobile/HeaderMobile";
import {useEffect, useState} from "react";

export default function ResponsiveHeader({cartItemCount}) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`w-full fixed z-2000000 top-0 left-0 ${
            isVisible ? "translate-y-0" : "-translate-y-full transition-transform duration-800"
        }`}>
            {/* Render desktop header and hide on mobile */}
            <div className="hidden lg:block">
                <Header cartItemCount={cartItemCount}/>
            </div>

            {/* Render mobile header and hide on desktop */}
            <div className="block lg:hidden">
                <HeaderMobile cartItemCount={cartItemCount}/>
            </div>
        </div>
    );
}