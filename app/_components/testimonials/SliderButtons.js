import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci";
import Button from "@/app/_components/testimonials/Button";

export default function SliderButtons({swiperRef}) {
    return (
        <div
            className="absolute md:bottom-1/20 left-[50px] md:left-[90px] lg:left-[120px] z-20 flex -translate-x-1/2 transform items-center gap-3 md:gap-4">
            <Button
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <CiCircleChevLeft/>
            </Button>
            <Button
                onClick={() => swiperRef.current?.slideNext()}
            >
                <CiCircleChevRight/>
            </Button>
        </div>
    )
}