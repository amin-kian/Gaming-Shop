'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Navigation, Pagination} from 'swiper/modules';
import {useCallback, useRef, useState} from 'react'; // Import useCallback
import SliderNavButton from './SliderNavButton';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider({
                                   data,
                                   slidesPerView,
                                   renderItem,
                                   uniqueId,
                                   breakpoints,
                                   btnColor = 'black',
                               }) {
    // Keep the ref to hold the swiper instance
    const swiperRef = useRef(null);

    // State to manage button disabled status
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // ✅ Use useCallback to create a stable function
    // This function will only be created once and its reference will not change on re-renders.
    const onSwiper = useCallback((swiper) => {
        swiperRef.current = swiper;

        // Function to update the disabled states
        const updateNavState = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        // Update the state initially
        updateNavState();

        // Add listeners for slide changes and edge events
        swiper.on('slideChange', updateNavState);
        swiper.on('toEdge', updateNavState);
        swiper.on('fromEdge', updateNavState);
    }, []); // Empty dependency array ensures the function is created only once

    const prevButtonClass = `swiper-button-prev-${uniqueId} text-${btnColor} border-${btnColor}`;
    const nextButtonClass = `swiper-button-next-${uniqueId} text-${btnColor} border-${btnColor}`;

    return (
        <div className="relative w-full">
            {/* Navigation Buttons: Hidden on mobile, visible on tablet and up */}
            <div className="hidden md:block">
                <SliderNavButton
                    direction="left"
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                    customClassName={prevButtonClass}
                />
                <SliderNavButton
                    direction="right"
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                    customClassName={nextButtonClass}
                />
            </div>

            <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation={{
                    nextEl: `.${nextButtonClass}`,
                    prevEl: `.${prevButtonClass}`,
                }}
                pagination={{
                    clickable: true,
                    el: `.custom-pagination-${uniqueId}`,
                }}
                // ✅ Pass the stable useCallback function here
                onSwiper={onSwiper}
                slidesPerView={slidesPerView}
                breakpoints={breakpoints}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className={`custom-pagination custom-pagination-${uniqueId} mt-6 flex justify-center lg:hidden`}
            ></div>
        </div>
    );
}