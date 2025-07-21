'use client';

import {useRef, useState} from 'react';
import Image from 'next/image';

export default function ProductImageGallery({images, productName}) {
    const [activeImage, setActiveImage] = useState(images[0]);

    // State for the magnifier effect
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [lensPosition, setLensPosition] = useState({x: 0, y: 0});

    const imageContainerRef = useRef(null);
    const lensSize = 150;

    const handleMouseMove = (e) => {
        const img = imageContainerRef.current;
        if (!img) return;

        const {left, top, width, height} = img.getBoundingClientRect();
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;

        setLensPosition({
            x: Math.max(0, Math.min(x - lensSize / 2, width - lensSize)),
            y: Math.max(0, Math.min(y - lensSize / 2, height - lensSize)),
        });

        setCursorPosition({x: (x / width) * 100, y: (y / height) * 100});
    };

    return (
        <div className='w-full flex flex-col lg:flex-row gap-4 h-auto md:h-150'>
            {/* Thumbnails Section */}
            <div className="w-full flex flex-row lg:flex-col gap-3 lg:gap-5 order-2 lg:order-1">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => setActiveImage(image)}
                        className={`relative aspect-square w-full rounded-md overflow-hidden transition-all
                                    ${activeImage.id === image.id ? 'ring-2 ring-purple-500 ring-offset-2' : 'hover:opacity-80'}`}
                    >
                        <Image
                            src={image.src}
                            alt={`Thumbnail of ${productName}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 20vw, 10vw"
                            priority={index === 0}
                        />
                    </button>
                ))}
            </div>

            {/* Main Image & Magnifier Container */}
            <div className="relative w-full md:w-5/6 aspect-square order-1 lg:order-2">
                <div
                    ref={imageContainerRef}
                    className="relative w-full h-full lg:h-6/7 bg-gray-100 rounded-lg overflow-hidden"
                    onMouseEnter={() => setShowMagnifier(true)}
                    onMouseLeave={() => setShowMagnifier(false)}
                    onMouseMove={handleMouseMove}
                >
                    <Image
                        key={activeImage.id}
                        src={activeImage.src}
                        alt={productName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 50vw"
                        priority
                    />

                    {/* The Lens */}
                    {showMagnifier && (
                        <div
                            className="absolute bg-black/20 border-2 border-white pointer-events-none"
                            style={{
                                width: `${lensSize}px`,
                                height: `${lensSize}px`,
                                top: `${lensPosition.y}px`,
                                left: `${lensPosition.x}px`,
                                display: window.innerWidth < 768 ? 'none' : 'block'
                            }}
                        />
                    )}
                </div>

                {/* The Magnified View */}
                {showMagnifier && (
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            height: '70%',
                            width: '100%',
                            top: '5%',
                            right: '-125%',
                            backgroundColor: 'white',
                            backgroundImage: `url(${activeImage.src})`,
                            backgroundPosition: `${cursorPosition.x}% ${cursorPosition.y}%`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '250% 250%',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            zIndex: 10,
                            display: window.innerWidth < 768 ? 'none' : 'block'
                        }}
                    />
                )}
            </div>
        </div>
    );
}