import Link from "next/link";
import React from "react";
import {getNavItems} from "@/app/_lib/staticData";
import AccordionItem from "@/app/_components/headerMobile/sidebar/AccordionItem";


export default function Nav() {
    const navItems = getNavItems();
    return (
        <nav className="flex flex-col">
            {navItems.map((item) => (
                <AccordionItem key={item.title} title={item.title} subLinks={item.subLinks}/>
            ))}
            <Link href="#" className="py-4  px-2 font-medium text-gray-800 block text-xs">
                Buy now
            </Link>
        </nav>
    )
}