'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import AdItem from "@/app/_components/advertisementSlider/adItem";


export default function AdvertisementSlider() {
    const adContent = [
        "Free express shipping worldwide",
        "Free express shipping worldwide",
        "Free express shipping worldwide",
        "Free express shipping worldwide",
    ];

    return (
        <div className="bg-purple-500 py-3 md:py-7 text-white">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={80}
                slidesPerView="auto"
                loop={true}
                speed={8000}
                allowTouchMove={false}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {adContent.map((text, i) => (
                    <SwiperSlide key={`first-${i}`} className="!w-auto px-0 md:px-4">
                        <AdItem text={text}/>
                    </SwiperSlide>
                ))}
                {adContent.map((text, i) => (
                    <SwiperSlide key={`second-${i}`} className="!w-auto px-0 md:px-4">
                        <AdItem text={text}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}