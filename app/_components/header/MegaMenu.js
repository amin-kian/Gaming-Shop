import Image from 'next/image';
import Link from 'next/link';

const pages = [
    // I've added more items to demonstrate scrolling
    {title: 'Home Fashion 01', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 02', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 04', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 05', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 06', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 07', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 08', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 09', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 10', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 11', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 12', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 13', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 14', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 15', src: '/img/header-mega-menu.jpg'},
    {title: 'Home Fashion 16', src: '/img/header-mega-menu.jpg'},
];

export default function MegaMenu({top, isOpen}) {
    // Don't render the menu until its position is calculated
    if (!top) return null;

    return (
        <div
            className={`
                fixed left-0 right-0 bottom-0 z-50 bg-white text-black shadow-lg
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
            `}
            style={{top: `${top}px`}}
        >
            {/* Inner container for padding and scrolling */}
            <div className="h-full overflow-y-auto p-8">
                {/* A responsive 6-column grid for the content */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                    {pages.map((item, index) => (
                        <Link
                            href="#"
                            key={index}
                            className="group block rounded-md p-2 transition hover:bg-gray-100"
                        >
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={220}
                                    height={170}
                                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-3 text-center text-sm font-medium text-gray-800">
                                {item.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
