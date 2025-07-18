import {FaStar} from "react-icons/fa";

export default function StarRating({rating}) {
    return (
        <div className="flex">
            {Array.from({length: 5}, (_, i) => (
                <FaStar
                    key={i}
                    className={`size-4 md:size-6 ${
                        i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                    }`}
                />
            ))}
        </div>
    );
};