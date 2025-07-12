import {Poppins} from 'next/font/google';
import "./globals.css";
import Header from "@/app/_components/header/Header";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export const metadata = {
    title: 'Ecomus - Your Online Store',
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