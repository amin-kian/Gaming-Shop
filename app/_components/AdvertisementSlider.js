'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 20 22" fill="none">
            <path
                d="M19.6528 10.3641C17.4705 10.3569 15.1796 9.91078 13.4555 8.48806C12.0063 7.29202 11.1454 5.59441 10.7282 3.78587C10.4678 2.65734 10.3738 1.50229 10.381 0.347239C10.381 0.106101 10.1881 0 10 0C9.81191 0 9.619 0.106101 9.619 0.347239C9.62865 2.31734 9.35134 4.35496 8.4326 6.12491C7.55727 7.81046 6.11526 9.08609 4.32843 9.73475C3.05281 10.1977 1.69761 10.3617 0.347239 10.3665C0.106101 10.3665 0 10.5619 0 10.7499C0 10.938 0.106101 11.1333 0.347239 11.1333C2.52954 11.1406 4.82035 11.5867 6.54449 13.0094C7.99373 14.2054 8.85459 15.9031 9.27176 17.7116C9.53219 18.8401 9.62382 19.9952 9.619 21.1502C9.619 21.3914 9.81191 21.4975 10 21.4975C10.1881 21.4975 10.381 21.3914 10.381 21.1502C10.3714 19.1801 10.6487 17.1425 11.5674 15.3726C12.4427 13.687 13.8847 12.4114 15.6716 11.7627C16.9472 11.2997 18.3024 11.1358 19.6528 11.1309C19.8939 11.1309 20 10.9356 20 10.7475C20 10.5594 19.8939 10.3641 19.6528 10.3641ZM13.019 12.4331C11.4492 13.6942 10.4919 15.5462 10.0386 17.4825C10.0241 17.5404 10.0145 17.6007 10 17.6585C9.79503 16.7278 9.48637 15.8235 9.04268 14.9771C8.08295 13.1444 6.49144 11.7892 4.5551 11.0779C4.18857 10.9428 3.81239 10.8343 3.4314 10.7451C4.71184 10.4389 5.92718 9.90596 6.97854 9.06197C8.54835 7.80082 9.50567 5.94888 9.95901 4.01254C9.97348 3.95467 9.98312 3.89438 9.99759 3.83651C10.2026 4.7673 10.5112 5.67157 10.9549 6.51796C11.9146 8.35061 13.5061 9.70581 15.4425 10.4172C15.809 10.5522 16.1852 10.6607 16.5662 10.7499C15.2857 11.0586 14.0704 11.5891 13.019 12.4331Z"
                fill="white"></path>
        </svg>
    )
}

export default function AdvertisementSlider() {
    const adContent = [
        "Free express shipping worldwide",
        "Free express shipping worldwide",
        "Free express shipping worldwide",
        "Free express shipping worldwide",
    ];

    const AdItem = ({text}) => (
        <div className='flex items-center justify-center gap-4 font-bold text-2xl'>
            <Icon/>
            <span>{text}</span>
        </div>
    );

    return (
        <div className="bg-purple-500 py-7 text-white">
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
                    <SwiperSlide key={`first-${i}`} className="!w-auto px-4">
                        <AdItem text={text}/>
                    </SwiperSlide>
                ))}
                {adContent.map((text, i) => (
                    <SwiperSlide key={`second-${i}`} className="!w-auto px-4">
                        <AdItem text={text}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}