import Logo from "@/app/_components/header/Logo";
import SearchBar from "@/app/_components/header/SearchBar";
import Buttons from "@/app/_components/header/Buttons";
import Nav from "@/app/_components/header/Nav";
import HeaderCategoryMenu from "@/app/_components/header/CategoryMenu";
import SupportInfo from "@/app/_components/header/SupportInfo";

export default function Header({cartItemCount}) {
    return (
        <header
            className='w-full h-[215px] bg-[#23252d] text-white'
        >
            {/* top part of header */}
            <div className="px-16 grid items-center grid-cols-3 py-8">
                <div className="justify-self-start">
                    <Logo/>
                </div>
                <div className="w-full justify-self-center">
                    <SearchBar/>
                </div>
                <div className="justify-self-end">
                    <Buttons cartItemCount={cartItemCount}/>
                </div>
            </div>

            <div className="h-px w-full bg-white"></div>

            {/* bottom part of header */}
            <div className="py-5 px-16 flex justify-between items-center">
                <div className="flex justify-between items-center gap-8">
                    <HeaderCategoryMenu/>
                    <Nav/>
                </div>
                <div>
                    <SupportInfo/>
                </div>
            </div>
        </header>
    );
}