import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center">
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
                    ecomus
                </text>
            </svg>
        </Link>
    );
}