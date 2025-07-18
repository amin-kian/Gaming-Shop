// app/layout.js

import {Poppins} from 'next/font/google';
import "./globals.css";
import ResponsiveHeader from "@/app/_components/ResponsiveHeader";


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
    return (
        <html lang="en">
        <body className={poppins.className}>
        <ResponsiveHeader/>
        <main className='lg:pt-[215px]'>
            {children}
        </main>
        </body>
        </html>
    );
}