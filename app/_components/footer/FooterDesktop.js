import React from "react";
import ShopInfo from "@/app/_components/footer/ShopInfo";
import EmailInput from "@/app/_components/footer/EmailInput";
import MenuItem from "@/app/_components/footer/MenuItem";
import {getAboutLinks, getHelpLinks, getSocialIcons} from "@/app/_lib/staticData";

export default function FooterDesktop() {
    const helpLinks = getHelpLinks();
    const aboutLinks = getAboutLinks()
    const socialIcons = getSocialIcons()

    return (
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Info & Social */}
            <ShopInfo socialIcons={socialIcons}/>


            {/* Column 2: Help Links */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
                <MenuItem items={helpLinks}/>
            </div>

            {/* Column 3: About Us Links */}
            <div>
                <h3 className="text-lg text-white font-semibold  mb-4">About us</h3>
                <MenuItem items={aboutLinks}/>
            </div>

            {/* Column 4: Newsletter */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-4">Sign Up for Email</h3>
                <EmailInput/>
                <div className="mt-10 flex gap-4 items-center">
                    <button className="flex items-center gap-2">
                        <span role="img" aria-label="USA flag">🇺🇸</span> USD
                    </button>
                    <button className="flex items-center gap-2">
                        English
                    </button>
                </div>
            </div>
        </div>
    )
}