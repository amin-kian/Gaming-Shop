import Logo from "@/app/_components/header/Logo";
import HeaderSearchBar from "@/app/_components/header/HeaderSearchBar";
import HeaderButtons from "@/app/_components/header/HeaderButtons";
import HeaderNav from "@/app/_components/header/HeaderNav";
import HeaderCategoryMenu from "@/app/_components/header/HeaderCategoryMenu";
import HeaderSupportInfo from "@/app/_components/header/HeaderSupportInfo";

export default function Header() {
    const cartItemCount = 0;

    return (
        <header className="bg-[#23252d] text-white">
            {/*top part of header*/}
            <div className='px-16 grid items-center grid-cols-3 py-8'>
                <div className="justify-self-start">
                    <Logo/>
                </div>

                <div className="justify-self-center">
                    <HeaderSearchBar/>
                </div>

                <div className="justify-self-end">
                    <HeaderButtons cartItemCount={cartItemCount}/>
                </div>
            </div>

            <div className="h-px w-full bg-white"></div>

            {/*bottom part of header*/}
            <div className="py-5 px-16 flex justify-between items-center ">
                <div className='flex justify-between items-center gap-8'>
                    <HeaderCategoryMenu/>
                    <HeaderNav/>
                </div>
                <div>
                    <HeaderSupportInfo/>
                </div>
            </div>
        </header>
    )
}