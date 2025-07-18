import {FaQuoteRight} from "react-icons/fa";
import StarRating from "@/app/_components/testimonials/StarRating";
import Image from "next/image";

export default function Review({review}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <FaQuoteRight className='md:text-2xl text-gray-400'/>
                <div className="relative z-10 mt-3">
                    <p className="text-[0.6rem] md:text-sm uppercase tracking-widest text-white mb-4">
                        OUR CUSTOMER&#39;S RAVE REVIEWS
                    </p>
                    <StarRating rating={review.rating}/>
                    <blockquote
                        className="mt-3 md:mt-6 md:text-xl leading-relaxed text-gray-200
                                             line-clamp-5 lg:line-clamp-7">
                        {review.reviewText}
                    </blockquote>

                    <div className='flex justify-start items-center gap-4 mt-4 mb-2 md:mt-8'>
                        <div
                            className="md:hidden relative w-30 h-20 rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
                            <Image
                                src={review.customerImage}
                                alt={`Customer ${review.customerName}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80vw, 40vw"
                            />
                        </div>
                        <div>
                            <p className="font-semibold">{review.customerName}</p>
                            <p className="text-sm text-gray-400">
                                Purchase Item: {review.purchasedItem}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:justify-end">
                <div
                    className="relative w-100 h-110 rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
                    <Image
                        src={review.customerImage}
                        alt={`Customer ${review.customerName}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 40vw"
                    />
                </div>
            </div>
        </div>

    )
}