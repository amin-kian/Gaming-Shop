import Image from 'next/image';
import Hotspot from './Hotspot';

export default function InteractiveHero({backgroundImage, hotspots}) {
    return (
        <section className="relative w-full h-[700px] bg-black">
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