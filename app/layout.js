// app/layout.js

import {Poppins} from 'next/font/google';
import "./globals.css";
import ResponsiveHeader from "@/app/_components/ResponsiveHeader";
import Footer from "@/app/_components/footer/Footer";
import MobileNav from "@/app/_components/mobileBottomNav/MobileNav";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    display: 'swap',
});


export const metadata = {
    title: {
        template: '%s | Ecomus',
        default: 'Ecomus',
    },

    description: 'The best products you can find online.',
};

export default function RootLayout({children}) {
    const wishlistCount = 0;
    const cartCount = 0;

    return (
        <html lang="en">
        <body className={poppins.className}>

        <ResponsiveHeader cartItemCount={cartCount}/>

        <main className='pt-22 lg:pt-[215px]'>
            {children}
        </main>

        <Footer/>

        <MobileNav wishlistCount={wishlistCount} cartItemCount={cartCount}/>

        </body>
        </html>
    );
}