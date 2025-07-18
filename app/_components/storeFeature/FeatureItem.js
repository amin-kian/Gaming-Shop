export default function FeatureItem({icon, title, description}) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
                <div
                    className="flex items-center justify-center size-16 rounded-full border-2 border-gray-200 text-black text-2xl">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 text-center md:text-start mb-2">{title}</h3>
                <p className="text-sm text-gray-500 text-center md:text-start">{description}</p>
            </div>
        </div>
    );
}