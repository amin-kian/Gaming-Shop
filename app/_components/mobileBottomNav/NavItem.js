import Link from "next/link";

export default function NavItem({href, Icon, label, count}) {
    return (
        <Link href={href}
              className="flex flex-col items-center justify-center flex-grow text-gray-800 font-bold hover:text-purple-600 transition-colors">
            <div className="relative">
                <Icon size={24}/>
                {typeof count === 'number' && (
                    <span
                        className="absolute -top-1 -right-2.5 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-purple-600 rounded-full">
            {count}
          </span>
                )}
            </div>
            <span className="text-xs mt-1">{label}</span>
        </Link>
    );
};