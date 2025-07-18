import {GoArrowUpRight} from "react-icons/go";
import React from "react";

export default function EmailInput() {
    return (
        <>
            <p className='text-gray-400 text-sm'>Sign up to get first dibs on new arrivals, sales, exclusive
                content, events
                and more!</p>
            <form className="relative mt-6 flex text-sm">
                <input type="email" placeholder="Enter email address"
                       className="bg-zinc-800 border border-zinc-900 w-full p-5 rounded-md focus:outline-none"/>
                <button type="submit"
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 h-10 bg-black text-white font-semibold p-3 rounded-md flex items-center gap-2">
                    Subscribe
                    <GoArrowUpRight className='text-white'/>
                </button>
            </form>
        </>
    )
}