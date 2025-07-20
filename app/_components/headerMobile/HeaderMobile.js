import MenuButton from "@/app/_components/headerMobile/MenuButton";
import Logo from "@/app/_components/header/Logo";
import Buttons from "@/app/_components/headerMobile/Buttons";

export default function HeaderMobile({cartItemCount}) {
    return (
        <header
            className="w-full h-22 items-center justify-between px-4 py-4 grid grid-cols-3 bg-[#23252d] text-white">
            <MenuButton/>
            <Logo/>
            <Buttons cartItemCount={cartItemCount}/>
        </header>
    );
}
