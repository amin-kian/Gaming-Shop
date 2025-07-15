'use client';

import {useEffect, useState} from 'react';
import Header from "@/app/_components/header/Header";
import HeaderMobile from "@/app/_components/headerMobile/HeaderMobile";

export default function ResponsiveHeader() {
    const cartItemCount = 0
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const breakpoint = 1024;

    if (width === undefined) {
        return null;
    }

    return (
        <>
            {width >= breakpoint ? <Header cartItemCount={cartItemCount}/> :
                <HeaderMobile cartItemCount={cartItemCount}/>}
        </>
    );
}