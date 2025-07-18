import 'swiper/css';
import 'swiper/css/navigation';
import Slider from "@/app/_components/testimonials/Slider";


export default function CustomerReviews({reviews}) {
    return (
        <section className="w-full relative bg-white px-4 py-6 md:px-16 md:pt-20 overflow-hidden">
            <Slider reviews={reviews}/>
        </section>
    );
}