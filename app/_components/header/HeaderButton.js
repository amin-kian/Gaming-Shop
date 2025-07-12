export default function HeaderButton({children}) {
    return (
        <button className="group">
            <div
                className="flex justify-between items-center gap-2 transition-colors group-hover:text-purple-600 text-[1.1rem] font-normal">
                {children}
            </div>
        </button>
    );
}