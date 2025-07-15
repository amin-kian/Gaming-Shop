'use client'
import {useState} from "react";
import {RiMenu2Line} from "react-icons/ri";
import HeaderMobileSidebar from "@/app/_components/headerMobile/sidebar/Sidebar";

export default function MenuButton() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className='w-full'>
            <button className='p-1' onClick={() => setIsSidebarOpen(true)}>
                <RiMenu2Line size='25'/>
            </button>
            <HeaderMobileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
        </div>
    )
}