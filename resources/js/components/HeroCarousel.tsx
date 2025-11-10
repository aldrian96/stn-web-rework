'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import BrosurModal from './BrosurModal';

interface HeroSlide {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isBrosurModalOpen, setIsBrosurModalOpen] = useState(false);

    const slides: HeroSlide[] = [
        {
            id: 1,
            title: 'Solusi Lingkungan Terdepan',
            subtitle: 'Teknologi ramah lingkungan untuk industri modern',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
        },
        {
            id: 2,
            title: 'Incinerator Berkualitas Tinggi',
            subtitle: 'Sistem pengolahan sampah paling efisien dan aman',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
        },
        {
            id: 3,
            title: 'Layanan Profesional Terpercaya',
            subtitle: 'Tim ahli siap membantu solusi limbah industri Anda',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
        },
    ];

    // Auto-scroll carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Carousel Container */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
                            }}
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
                                <h1 className="mb-4 text-5xl leading-tight font-bold drop-shadow-lg sm:text-6xl lg:text-7xl">
                                    {slide.title}
                                </h1>
                                <p className="mb-8 text-xl text-gray-200 drop-shadow-md sm:text-2xl lg:text-3xl">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <button
                                        onClick={() =>
                                            setIsBrosurModalOpen(true)
                                        }
                                        className="inline-block transform rounded-lg bg-emerald-600 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
                                    >
                                        Minta Brosur
                                    </button>
                                    <a
                                        href="#produk"
                                        className="inline-block transform rounded-lg bg-white px-8 py-3 font-bold text-emerald-700 shadow-lg transition hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
                                    >
                                        Lihat Produk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white transition hover:bg-white/50 sm:left-8"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white transition hover:bg-white/50 sm:right-8"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition ${
                            index === currentSlide
                                ? 'w-8 bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>

            {/* Brosur Modal */}
            <BrosurModal
                isOpen={isBrosurModalOpen}
                onClose={() => setIsBrosurModalOpen(false)}
            />
        </section>
    );
};

export default HeroCarousel;
