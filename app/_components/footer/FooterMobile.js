import AccordionSection from "@/app/_components/footer/AccordionSection";
import React from "react";
import ShopInfo from "@/app/_components/footer/ShopInfo";
import EmailInput from "@/app/_components/footer/EmailInput";
import MenuItem from "@/app/_components/footer/MenuItem";
import {getAboutLinks, getHelpLinks, getSocialIcons} from "@/app/_lib/staticData";

export default function FooterMobile() {
    const helpLinks = getHelpLinks();
    const aboutLinks = getAboutLinks()
    const socialIcons = getSocialIcons()

    return (
        <div className="md:hidden h-full">
            {/* Info Section (always visible) */}
            <ShopInfo socialIcons={socialIcons}/>

            {/* Collapsible Sections */}
            <AccordionSection title="Help" className="pl-6">
                <MenuItem items={helpLinks}/>
            </AccordionSection>
            <AccordionSection title="About us" className='pl-6'>
                <MenuItem items={aboutLinks}/>
            </AccordionSection>
            <AccordionSection title="Sign Up for Email">
                <EmailInput/>
            </AccordionSection>
        </div>

    )
}