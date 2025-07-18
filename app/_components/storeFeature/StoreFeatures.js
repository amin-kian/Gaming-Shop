'use client'

import Slider from "@/app/_components/slider/Slider";
import {getStoreFeatures} from "@/app/_lib/staticData";
import FeatureItem from "@/app/_components/storeFeature/FeatureItem";


export default function StoreFeatures() {
    const storeFeatures = getStoreFeatures();

    const sliderBreakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
    };

    const renderFeatureItem = (feature) => (
        <FeatureItem
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
        />
    )

    return (
        <section className="w-full border-y border-gray-200 bg-white">
            <div className="w-full px-4 py-12 md:px-18">
                <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {storeFeatures.map((feature) =>
                        <FeatureItem
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    )}
                </div>

                <div className='w-full md:hidden'>
                    <Slider data={storeFeatures}
                            breakpoints={sliderBreakpoints}
                            renderItem={renderFeatureItem}
                            btnColor="white"
                            uniqueId="store-features"
                    />
                </div>
            </div>
        </section>
    );
}