import {FaFacebookF, FaInstagram, FaPinterestP, FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {LuBox} from "react-icons/lu";
import {MdOutlinePayment} from "react-icons/md";
import {BsArrow90DegLeft} from "react-icons/bs";
import {TfiHeadphoneAlt} from "react-icons/tfi";

export function getCategories() {
    return [
        {id: 1, name: "Controllers", image: `https://picsum.photos/720/720?random=1`},
        {id: 2, name: "Keyboards", image: `https://picsum.photos/720/720?random=2`},
        {id: 3, name: "Mice", image: `https://picsum.photos/720/720?random=3`},
        {id: 4, name: "Headsets", image: `https://picsum.photos/720/720?random=4`},
        {id: 5, name: "Flight simulators", image: `https://picsum.photos/720/720?random=5`},
        {id: 6, name: "Race simulators", image: `https://picsum.photos/720/720?random=6`},
        {id: 7, name: "Monitor", image: `https://picsum.photos/720/720?random=7`}
    ];
}

export function getNavItems() {
    return [
        {
            title: 'Home',
            subLinks: [
                {title: 'Home Fashion 01', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 02', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},
                {title: 'Home Fashion 03', src: '/img/header-mega-menu.jpg'},

            ]
        },
        {title: 'Shop', children: []},
        {title: 'Products', children: []},
        {title: 'Pages', children: []},
        {title: 'Blog', children: []},
    ];
}

export function getBrands() {
    return [
        {id: 1, name: 'SSENSE', logo: '/img/brand.avif'},
        {id: 2, name: 'Burberry', logo: '/img/brand.avif'},
        {id: 3, name: 'Nike', logo: '/img/brand.avif'},
        {id: 4, name: 'ASOS', logo: '/img/brand.avif'},
        {id: 5, name: 'Pull&Bear', logo: '/img/brand.avif'},
        {id: 6, name: 'Gildan', logo: '/img/brand.avif'},
    ];
}

export function getSaleEndDate() {
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 10);
    // Return the actual Date object
    return saleEndDate;
}

export function getHelpLinks() {
    return [
        {name: 'Privacy Policy', href: '#'},
        {name: 'Returns + Exchanges', href: '#'},
        {name: 'Shipping', href: '#'},
        {name: 'Terms & Conditions', href: '#'},
        {name: "FAQ's", href: '#'},
        {name: 'Compare', href: '#'},
        {name: 'My Wishlist', href: '#'},
    ];
}

export function getAboutLinks() {
    return [
        {name: 'Our Story', href: '#'},
        {name: 'Visit Our Store', href: '#'},
        {name: 'Contact Us', href: '#'},
        {name: 'About Us', href: '#'},
        {name: 'Account', href: '#'},
    ];
}

export function getSocialIcons() {
    return [
        {icon: <FaFacebookF/>, href: '#', name: 'Facebook'},
        {icon: <FaXTwitter/>, href: '#', name: 'X'},
        {icon: <FaInstagram/>, href: '#', name: 'Instagram'},
        {icon: <FaTiktok/>, href: '#', name: 'TikTok'},
        {icon: <FaPinterestP/>, href: '#', name: 'Pinterest'},
    ];
}

export function getPaymentIcons() {
    return [
        {id: 1, src: '/img/visa.png', alt: 'Visa'},
        {id: 2, src: '/img/visa.png', alt: 'Visa'},
        {id: 3, src: '/img/visa.png', alt: 'Visa'},
        {id: 4, src: '/img/visa.png', alt: 'Visa'},
        {id: 5, src: '/img/visa.png', alt: 'Visa'},
    ];
}

export function getShopInfo() {
    return {
        name: 'ecomus',
        address: '1234 Fashion Street, Suite 567, New York, NY',
        email: "info@fashionshop.com",
        phone: "(212)555-1234",
        position: [35.7219, 51.3347],
    }
}

export function getInteractiveHeroBg() {
    return {
        src: "/img/heroInteractiveBg.webp"
    }
}

export function getStoreFeatures() {
    return [
        {
            id: 1,
            title: 'Free Shipping',
            description: 'You will love at great low prices',
            icon: (<LuBox/>),
        },
        {
            id: 2,
            title: 'Flexible Payment',
            description: 'Pay with Multiple Credit Cards',
            icon: (<MdOutlinePayment/>),
        },
        {
            id: 3,
            title: '14 Day Returns',
            description: 'Within 30 days for an exchange',
            icon: (<BsArrow90DegLeft/>),
        },
        {
            id: 4,
            title: 'Premium Support',
            description: 'Outstanding premium support',
            icon: (<TfiHeadphoneAlt/>),
        },
    ];
}