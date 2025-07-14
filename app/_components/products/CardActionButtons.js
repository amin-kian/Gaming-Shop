function ActionButton({children, label}) {
    return (
        <button className="relative group/action">
            <div
                className="flex items-center justify-center bg-white text-black
                   shadow-lg shadow-black/15
                   transition-all duration-800
                   hover:bg-gray-800 hover:-translate-y-1 hover:text-white ho hover:scale-110 p-3"
            >
                {children}
            </div>
            <div
                className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/action:opacity-100 transition-opacity pointer-events-none">
                {label}
            </div>
        </button>
    );
}

export default function CardActionButtons({showAddToCardBigBtn}) {
    return (
        <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-4
                    flex justify-center items-center gap-2
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500 z-20">
            {!showAddToCardBigBtn &&
                <div className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                     style={{transitionDelay: '100ms'}}>
                    <ActionButton label="Add to Cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                        </svg>
                    </ActionButton>
                </div>}

            <div
                className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                style={{transitionDelay: '200ms'}}>
                <ActionButton label="Add to Wishlist">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                </ActionButton>
            </div>

            <div
                className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                style={{transitionDelay: '300ms'}}>
                <ActionButton label="Compare">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"/>
                    </svg>
                </ActionButton>
            </div>

            <div
                className="transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                style={{transitionDelay: '400ms'}}>
                <ActionButton label="Quick View">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                </ActionButton>
            </div>
        </div>
    );
}