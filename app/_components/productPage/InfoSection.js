export default function InfoSection({icon, title}) {
    return (
        <div
            className="md:h-60 w-full flex flex-col justify-start items-center gap-4 border border-gray-200 p-4 md:p-10">
            <div className='text-black font-bold text-3xl'>
                {icon}
            </div>
            <div className=''>
                <h3 className="text-xs md:text-base text-center  text-gray-700 mb-4">{title}</h3>
            </div>
        </div>
    );
}