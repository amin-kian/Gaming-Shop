import Link from 'next/link';
import {getShopInfo} from "@/app/_lib/staticData";

export default function Logo() {
    return (
        <Link href="/" className="flex items-start justify-start">
            <svg
                width="180"
                height="60"
                viewBox="0 0 140 40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="0"
                    y="30"
                    fontFamily="Poppins, sans-serif"
                    fontSize="32"
                    fontWeight="700"
                    fill="white"
                >
                    {getShopInfo().name}
                </text>
            </svg>
        </Link>
    );
}