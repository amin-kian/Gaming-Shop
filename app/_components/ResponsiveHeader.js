import Header from "@/app/_components/header/Header";
import HeaderMobile from "@/app/_components/headerMobile/HeaderMobile";

export default function ResponsiveHeader({cartItemCount}) {
    return (
        <>
            {/* Render desktop header and hide on mobile */}
            <div className="hidden lg:block">
                <Header cartItemCount={cartItemCount}/>
            </div>

            {/* Render mobile header and hide on desktop */}
            <div className="block lg:hidden">
                <HeaderMobile cartItemCount={cartItemCount}/>
            </div>
        </>
    );
}