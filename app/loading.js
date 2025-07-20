// app/loading.js

export default function Loading() {
    return (
        <div className="fixed inset-0 z-4000000000 flex flex-col items-center justify-center bg-[#23252d] text-white">
            <div className="text-center">
                {/* Loading Text */}
                <p className="mt-4 text-lg text-gray-300 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}