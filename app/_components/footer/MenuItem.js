import Link from "next/link";

export default function MenuItem({items}) {
    return (
        <ul className="space-y-3">
            {items.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-purple-600"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}