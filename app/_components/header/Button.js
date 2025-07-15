export default function Button({children}) {
    return (
        <button className="group">
            <div
                className="flex justify-between items-center gap-1 transition-colors group-hover:text-purple-600 text-[1.1rem] font-normal">
                {children}
            </div>
        </button>
    );
}