import {getNavItems} from "@/app/_lib/data-service";
import NavItem from "@/app/_components/header/NavItem";

export default function Nav() {
    const navItems = getNavItems()
    return (
        <nav>
            <ul className="flex items-center gap-4">
                {navItems.map((item) =>
                    <NavItem hasArrow key={item.title} itemSubLinks={item.subLinks}>{item.title}</NavItem>
                )}
                <NavItem itemSubLinks={[]}>Buy now</NavItem>
            </ul>
        </nav>
    );
}