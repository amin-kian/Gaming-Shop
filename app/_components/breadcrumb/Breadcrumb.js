import Link from 'next/link';
import {IoIosArrowForward} from 'react-icons/io';

export default function Breadcrumb({items}) {
    return (
        <div className='px-4 md:px-16'>
            <nav className="flex mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    {items.map((item, index) => (
                        <li key={item.name} className="inline-flex items-center">
                            {index > 0 && (
                                <IoIosArrowForward className="w-4 h-4 mx-1"/>
                            )}
                            <Link href={item.href}>
                            <span
                                className={`hover:text-purple-600 ${index === items.length - 1 ? 'font-medium text-gray-800' : ''}`}>
                                {item.name}
                            </span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}