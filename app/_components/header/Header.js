'use client';

import {useEffect, useState} from "react";
import Logo from "@/app/_components/header/Logo";
import SearchBar from "@/app/_components/header/SearchBar";
import Buttons from "@/app/_components/header/Buttons";
import Nav from "@/app/_components/header/Nav";
import HeaderCategoryMenu from "@/app/_components/header/CategoryMenu";
import SupportInfo from "@/app/_components/header/SupportInfo";

export default function Header({cartItemCount}) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                // scrolling down & passed 80px → hide
                setIsVisible(false);
            } else {
                // scrolling up → show
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed z-2000000 top-0 left-0 w-full h-[215px] bg-[#23252d] text-white transition-transform duration-800 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            {/* top part of header */}
            <div className="px-16 grid items-center grid-cols-3 py-8">
                <div className="justify-self-start">
                    <Logo/>
                </div>
                <div className="w-full justify-self-center">
                    <SearchBar/>
                </div>
                <div className="justify-self-end">
                    <Buttons cartItemCount={cartItemCount}/>
                </div>
            </div>

            <div className="h-px w-full bg-white"></div>

            {/* bottom part of header */}
            <div className="py-5 px-16 flex justify-between items-center">
                <div className="flex justify-between items-center gap-8">
                    <HeaderCategoryMenu/>
                    <Nav/>
                </div>
                <div>
                    <SupportInfo/>
                </div>
            </div>
        </header>
    );
}