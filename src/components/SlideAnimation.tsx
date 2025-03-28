"use client"
import React from "react";
import Image1 from '../../public/image1.jpg';
import Image2 from '../../public/image2.jpg';
import Image3 from '../../public/image3.jpg';
import Image4 from '../../public/image4.jpg';
import Image from "next/image";
interface SlideAnimationProps {
}

export default function SlideAnimation(props: SlideAnimationProps) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
        Image1,
        Image2,
        Image3,
        Image4
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-[40dvw] overflow-hidden relative h-[40svh] bg-gray-200 rounded-lg shadow-md group">
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((image, index) => (
                        <div
                            key={index}
                            className={`w-full h-[40svh] flex-shrink-0 relative rounded-lg flex items-center justify-center text-white text-4xl`}
                        >
                            <Image src={image} alt={""} />
                            <div className="absolute text-white font-bold top-3 right-3 text-sm">
                                {currentSlide + 1} / {slides.length}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-300 hover:bg-blue-300/50 text-white p-4 rounded-r-lg transition-all duration-300"
                >
                    ←
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-300 hover:bg-blue-300/50 text-white p-4 rounded-l-lg transition-all duration-300"
                >
                    →
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white/90' : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}