import Image from 'next/image';
import Hotspot from './Hotspot';
import {getInteractiveHeroBg} from "@/app/_lib/staticData";

export default function InteractiveHero({hotspots}) {
    const backgroundImage = getInteractiveHeroBg().src
    return (
        <section className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] bg-black">
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt="Interactive background"
                fill
                className="object-fill opacity-80"
            />

            {/* Hotspots Container */}
            <div className="absolute inset-0">
                {hotspots.map((hotspot) => (
                    <Hotspot
                        key={hotspot.id}
                        position={hotspot.position}
                        product={hotspot.product}
                    />
                ))}
            </div>
        </section>
    );
}