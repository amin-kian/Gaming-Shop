import {FiHeart, FiSearch, FiUser} from 'react-icons/fi';
import {BsCart3, BsGrid} from 'react-icons/bs';
import NavItem from "@/app/_components/mobileBottomNav/NavItem";

export default function MobileNav({wishlistCount = 0, cartItemCount = 0}) {
    const navItems = [
        {href: '/shop', Icon: BsGrid, label: 'Shop'},
        {href: '/wishlist', Icon: FiHeart, label: 'Wishlist', count: wishlistCount},
        {href: '/cart', Icon: BsCart3, label: 'Cart', count: cartItemCount},
        {href: '/account', Icon: FiUser, label: 'Account'},
        {href: '/search', Icon: FiSearch, label: 'Search'},
    ];

    return (
        <nav
            className="fixed shadow-2xl z-200000000 bottom-0 left-0 right-0  flex h-16 bg-white border-t border-gray-200 lg:hidden">
            {navItems.map((item) => (
                <NavItem
                    key={item.label}
                    href={item.href}
                    Icon={item.Icon}
                    label={item.label}
                    count={item.count}
                />
            ))}
        </nav>
    );
};

