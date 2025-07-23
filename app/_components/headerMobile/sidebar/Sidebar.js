import React, {useEffect, useRef} from 'react';
import {FaRegHeart, FaRegUser, FaSearch} from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import Nav from "@/app/_components/headerMobile/sidebar/Nav";
import Button from "@/app/_components/headerMobile/sidebar/Button";
import ShopInfo from "@/app/_components/headerMobile/sidebar/ShopInfo";


const MobileSidebar = ({isOpen, setIsOpen}) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 z-5000000000 lg:hidden" role="dialog">
            <div
                ref={sidebarRef}
                className={`absolute top-0 left-0 h-screen w-[70%] pb-20 max-w-sm bg-white shadow-xl transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex-grow overflow-y-auto p-4">
                        <div className="mb-3">
                            <button onClick={() => setIsOpen(false)}
                                    className='text-black p-2 ring-2 ring-blue-400'>
                                <IoClose/>
                            </button>
                        </div>

                        <Nav/>

                        <div className="mt-2 flex justify-center items-center space-x-4">
                            <Button>
                                <FaRegHeart/>
                                Wishlist
                            </Button>
                            <Button>
                                <FaSearch/>
                                Search
                            </Button>
                        </div>

                        <ShopInfo/>

                        <div className='pb-4 border-b border-gray-300'>
                            <Button>
                                <FaRegUser/>
                                Login
                            </Button>
                        </div>

                        <div className="flex justify-around items-center text-sm text-gray-600 pt-4">
                            <button className="flex items-center gap-2">
                                <span role="img" aria-label="USA flag">🇺🇸</span> USD
                            </button>
                            <button className="flex items-center gap-2">
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute top-0 right-0 h-screen w-[30%] z-80000000 bg-gray-500/5"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
            ></div>
        </div>
    );
};

export default MobileSidebar;