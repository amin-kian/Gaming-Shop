export default function ActionButton({children, label}) {
    return (
        <button className="relative group/action">
            <div
                className="flex items-center justify-center bg-white text-black
                   shadow-lg shadow-black/15
                   transition-all duration-800
                   hover:bg-gray-800 hover:-translate-y-1 hover:text-white ho hover:scale-110 p-2.5"
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