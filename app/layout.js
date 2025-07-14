import {Poppins} from 'next/font/google';
import "./globals.css";
import Header from "@/app/_components/header/Header";

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
        {/* 3. کلاس فونت را به تگ body اضافه کنید */}
        <body className={poppins.className}>
        <Header/>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}