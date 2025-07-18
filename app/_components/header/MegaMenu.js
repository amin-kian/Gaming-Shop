import Image from 'next/image';
import Link from 'next/link';

export default function MegaMenu({items, top, isOpen}) {
    if (!top) return null;

    const menuMaxHeight = `calc(100vh - ${top}px)`;

    return (
        <div
            className={`
                fixed left-0 right-0 z-50 bg-white text-black shadow-lg
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
            `}
            style={{
                top: `${top}px`,
                // Apply the calculated max-height and make it scrollable
                maxHeight: menuMaxHeight,
                overflowY: 'auto',
            }}
        >
            {/* The inner content is what will scroll */}
            <div className="p-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                    {items.map((item, index) => (
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