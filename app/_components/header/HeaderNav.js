import NavItem from "@/app/_components/header/NavItem";

export default function HeaderNav() {
    return (
        <nav>
            <ul className="flex items-center gap-8">
                <NavItem hasArrow hasMegaMenu>Home</NavItem>
                <NavItem hasArrow>Shop</NavItem>
                <NavItem hasArrow>Products</NavItem>
                <NavItem hasArrow>Page</NavItem>
                <NavItem hasArrow>Blog</NavItem>
                <NavItem>Buy now</NavItem>
            </ul>
        </nav>
    );
}