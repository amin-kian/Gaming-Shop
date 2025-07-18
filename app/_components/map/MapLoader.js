'use client';

import dynamic from 'next/dynamic';
import {useMemo} from 'react';

export default function MapLoader() {
    const StoreMap = useMemo(() => dynamic(
        () => import('@/app/_components/map/StoreMap'),
        {
            loading: () => <p className="text-center p-10">Loading map...</p>,
            ssr: false
        }
    ), []);

    return <StoreMap/>;
}