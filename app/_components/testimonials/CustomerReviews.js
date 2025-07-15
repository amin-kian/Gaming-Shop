'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import Image from 'next/image';
import {useRef} from 'react'; // 1. Import useRef to hold the Swiper instance
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import {getCustomerReviews} from '@/app/_lib/data-service';

const StarRating = ({rating}) => {
    return (
        <div className="flex">
            {Array.from({length: 5}, (_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-5 ${i < rating ? 'text-white' : 'text-gray-600'}`}
                >
                    <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z"
                        clipRule="evenodd"
                    />
                </svg>
            ))}
        </div>
    );
};

export default function CustomerReviews() {
    const reviews = getCustomerReviews(5);
    const bgImgSrc = '/img/testimonialsBg.png'
    // 2. Create a ref to hold the Swiper instance
    const swiperRef = useRef(null);

    return (
        <section className="w-full relative bg-white px-16 py-20 overflow-hidden">
            {/* This container acts as the positioning context for our custom buttons */}
            <div className="w-full relative mx-auto rounded-xl p-20 z-10 bg-cover bg-center bg-no-repeat"
                 style={{backgroundImage: `url(${bgImgSrc})`}}>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    loop={true}
                    className="text-white"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="31" viewBox="0 0 46 31"
                                         fill="none">
                                        <path
                                            d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                                            stroke="#B5B5B5"></path>
                                    </svg>
                                    <div className="relative z-10 mt-3">
                                        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                                            OUR CUSTOMER&#39;S RAVE REVIEWS
                                        </p>
                                        <StarRating rating={review.rating}/>
                                        <blockquote className="mt-6 text-2xl leading-relaxed text-gray-200">
                                            {review.reviewText}
                                        </blockquote>
                                        <footer className="mt-8">
                                            <p className="font-semibold">{review.customerName}</p>
                                            <p className="text-sm text-gray-400">
                                                Purchase Item: {review.purchasedItem}
                                            </p>
                                        </footer>
                                    </div>
                                </div>
                                <div className="flex justify-center">
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
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    className="absolute bottom-1/20 left-1/10 z-20 flex -translate-x-1/2 transform items-center gap-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous review"
                        className="flex h-12 w-12 items-center justify-center rounded-full  border-white border-2 text-white transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next review"
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}