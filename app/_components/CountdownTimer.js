'use client';

import {useEffect, useState} from 'react';

// ✅ کامپوننت حالا یک prop به نام targetDate دریافت می‌کند
export default function CountdownTimer({targetDate}) {
    // ✅ تاریخ هدف را از prop گرفته و فقط یک بار در state ذخیره می‌کنیم
    const [target] = useState(new Date(targetDate));

    const calculateTimeLeft = () => {
        const difference = +target - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [target]); // این effect فقط به تاریخ هدف وابسته است

    const formatTime = (value) => value.toString().padStart(2, '0');

    return (
        <div
            className="flex items-center gap-2 text-xl font-semibold bg-purple-100 text-purple-700 rounded-full px-6 py-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
            <span>{formatTime(timeLeft.days || 0)}D</span>
            <span>:</span>
            <span>{formatTime(timeLeft.hours || 0)}H</span>
            <span>:</span>
            <span>{formatTime(timeLeft.minutes || 0)}M</span>
            <span>:</span>
            <span>{formatTime(timeLeft.seconds || 0)}S</span>
        </div>
    );
}