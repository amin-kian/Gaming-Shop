import Logo from "@/app/_components/header/Logo";
import Link from "next/link";
import {GoArrowUpRight} from "react-icons/go";
import React from "react";
import {getShopInfo} from "@/app/_lib/staticData";

export default function ShopInfo({socialIcons}) {
    const shopInfo = getShopInfo();
    return (
        <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Logo/>
            <p>Address: {shopInfo.address}</p>
            <p>Email: {shopInfo.email}</p>
            <p>Phone: {shopInfo.phone}</p>
            <Link href="#" className="underline font-semibold flex items-center gap-2 hover:text-purple-600">
                Get direction
                <GoArrowUpRight/>
            </Link>
            <div className="flex gap-3 mt-4">
                {socialIcons.map((social) => (
                    <Link key={social.name} href={social.href} aria-label={social.name}
                          className="border border-gray-600 rounded-full p-2 hover:bg-white hover:text-black transition-colors">
                        {social.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}