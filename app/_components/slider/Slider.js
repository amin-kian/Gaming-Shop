'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Navigation} from 'swiper/modules';
import {useRef, useState} from 'react';
import SliderNavButton from './SliderNavButton';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Slider({data, slidesPerView, renderItem, btnColor, uniqueId}) {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);

        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        });
    };

    const prevButtonClass = `swiper-button-prev-${uniqueId}`;
    const nextButtonClass = `swiper-button-next-${uniqueId}`;

    return (
        <div className="relative">
            <SliderNavButton
                direction="left"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                color={btnColor}
                customClassName={prevButtonClass}

            />
            <SliderNavButton
                direction="right"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                color={btnColor}
                customClassName={nextButtonClass}
            />

            <Swiper
                modules={[Navigation, A11y]}
                navigation={{
                    nextEl: prevButtonClass,
                    prevEl: nextButtonClass,
                }}
                onSwiper={handleSwiper}
                spaceBetween={16}
                slidesPerView={slidesPerView}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}