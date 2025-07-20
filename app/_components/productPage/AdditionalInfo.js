export default function AdditionalInfo({colors}) {
    return (
        <div className="w-full border border-gray-200 px-5 py-5 md:py-10">
            <div className="border-b border-gray-200">
                <h3 className="text-xs md:text-base font-semibold pb-3 border-b-2 border-black inline-block">
                    Additional Information
                </h3>
            </div>

            <div className="border border-gray-200 mt-4 rounded-lg">
                <div className="grid grid-cols-3 text-xs md:text-sm">
                    <p className="text-gray-600 p-3">Color</p>
                    <div className="col-span-2 flex p-3 border-l border-gray-200 items-center gap-1 md:gap-5">
                        {colors.map((color) => (
                            <span className="font-medium text-black capitalize"
                                  key={color}>{color}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}