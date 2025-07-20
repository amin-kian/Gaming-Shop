'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Review from "@/app/_components/testimonials/Review";
import {useRef} from "react";
import SliderButtons from "@/app/_components/testimonials/SliderButtons";

export default function Slider({reviews}) {
    const bgImgSrc = '/img/testimonialsBg.png'
    const swiperRef = useRef(null);

    return (
        <div
            className="w-full relative mx-auto rounded-xl px-3 py-8 md:p-10 lg:p-18 z-10 bg-cover bg-center bg-no-repeat"
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
                        <Review review={review}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderButtons swiperRef={swiperRef}/>
        </div>
    )
}