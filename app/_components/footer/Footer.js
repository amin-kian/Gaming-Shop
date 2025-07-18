'use client';

import Image from 'next/image'; // Import the Next.js Image component
import FooterMobile from "@/app/_components/footer/FooterMobile";
import FooterDesktop from "@/app/_components/footer/FooterDesktop";
import BacktoTopButton from "@/app/_components/footer/BacktoTopButton";
import {getPaymentIcons} from "@/app/_lib/staticData";


export default function Footer() {
    const paymentIcons = getPaymentIcons()

    return (
        <footer className="pb-16 w-full md:pb-0 bg-black text-gray-300 font-sans">
            <div className="w-full mx-auto px-6 lg:px-16 pt-12 pb-5 lg:pt-20">
                {/* Desktop and Tablet View: Grid Layout */}
                <FooterDesktop/>

                {/* Mobile View: Accordion Layout */}
                <FooterMobile/>

                {/* Bottom Bar */}
                <div
                    className="md:border-t md:border-gray-700 mt-8 text-gray-600 lg:mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <p className="order-last md:order-first">© {new Date().getFullYear()} Ecomus. All rights
                        reserved.</p>

                    <div className="flex items-center gap-2">
                        {paymentIcons.map((icon) => (
                            <Image key={icon.id} src={icon.src} alt={icon.alt} width={38} height={24}/>
                        ))}
                    </div>
                </div>
            </div>

            <BacktoTopButton/>
        </footer>
    );
}