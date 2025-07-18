'use client';

import dynamic from 'next/dynamic';
import {useMemo} from 'react';

export default function TimerLoader({targetDate}) {
    const CountdownTimer = useMemo(() => dynamic(() => import('@/app/_components/products/CountdownTimer'), {
            ssr: false,
        
        }
    ), []);

    return <CountdownTimer targetDate={targetDate}/>;
}