'use client';

import {useEffect, useState} from 'react';
import {CiClock1} from "react-icons/ci";

export default function CountdownTimer({targetDate}) {

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            // Handle the case where the timer has expired.
            timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // The effect now correctly depends on `targetDate`.
    // If this prop changes, the timer will automatically restart.
    useEffect(() => {
        // Set up the interval timer.
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up the interval when the component unmounts or the prop changes.
        return () => clearInterval(timer);
    }, [targetDate]);

    // Helper function to ensure time values are always two digits (e.g., 09, 15).
    const formatTime = (value) => value.toString().padStart(2, '0');

    return (
        <div
            className="flex items-center gap-2 md:text-xl font-semibold bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 md:px-6 md:py-3">
            <CiClock1/>
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