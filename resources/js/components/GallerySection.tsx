import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const GallerySection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleries = [
        {
            id: 1,
            title: 'Incinerator Unit Type-A',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
            category: 'Produk',
        },
        {
            id: 2,
            title: 'Incinerator Unit Type-B',
            image: 'https://images.unsplash.com/photo-1581092271640-5d65e11d51e5?w=800&q=80',
            category: 'Produk',
        },
        {
            id: 3,
            title: 'Instalasi Proyek',
            image: 'https://images.unsplash.com/photo-1581092335397-112352a355c2?w=800&q=80',
            category: 'Jasa',
        },
        {
            id: 4,
            title: 'Pemeliharaan Rutin',
            image: 'https://images.unsplash.com/photo-1581092162062-40becc0fa994?w=800&q=80',
            category: 'Jasa',
        },
        {
            id: 5,
            title: 'Sertifikasi Lingkungan',
            image: 'https://images.unsplash.com/photo-1581092878215-f6215d3c5ef5?w=800&q=80',
            category: 'Sertifikat',
        },
        {
            id: 6,
            title: 'Penghargaan Industri',
            image: 'https://images.unsplash.com/photo-1581092921162-e55150ad9200?w=800&q=80',
            category: 'Sertifikat',
        },
    ];

    const visibleGalleries = galleries.slice(currentIndex, currentIndex + 3);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? galleries.length - 3 : prev - 1,
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % (galleries.length - 2));
    };

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Galeri Proyek
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Lihat portofolio proyek dan sertifikasi kami
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {visibleGalleries.map((gallery) => (
                            <div
                                key={gallery.id}
                                className="group overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl"
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-200">
                                    <img
                                        src={gallery.image}
                                        alt={gallery.title}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                    />
                                    <div className="bg-opacity-0 group-hover:bg-opacity-40 absolute inset-0 flex items-end bg-black transition duration-300">
                                        <div className="w-full bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 transition group-hover:opacity-100">
                                            <p className="text-xs font-semibold text-emerald-400">
                                                {gallery.category}
                                            </p>
                                            <p className="text-lg font-bold">
                                                {gallery.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 rounded-full bg-emerald-600 p-2 text-white transition hover:bg-emerald-700 md:-translate-x-16"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 translate-x-12 -translate-y-1/2 rounded-full bg-emerald-600 p-2 text-white transition hover:bg-emerald-700 md:translate-x-16"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="mt-12 flex justify-center gap-2">
                    {galleries.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-3 rounded-full transition ${
                                idx >= currentIndex && idx < currentIndex + 3
                                    ? 'w-8 bg-emerald-600'
                                    : 'w-3 bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
