export default function Button({children, onClick}) {
    return (<button
        onClick={onClick}
        className="transition-colors duration-300 text-2xl md:text-5xl hover:text-red-800"
    >
        {children}
    </button>)
}