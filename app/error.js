// app/error.js
'use client'; // کامپوننت‌های خطا باید کلاینت کامپوننت باشند

import {useEffect} from 'react';

export default function Error({error, reset}) {
    useEffect(() => {
        // می‌توانید خطا را به یک سرویس لاگ‌گیری بفرستید
        console.error(error);
    }, [error]);

    return (
        <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
            <p className="text-gray-700 mt-2">
                {error.message || "Failed to load data. Please try again later."}
            </p>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={
                    // تلاش برای رندر مجدد کامپوننت
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}