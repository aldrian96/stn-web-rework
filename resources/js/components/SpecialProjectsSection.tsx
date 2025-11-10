import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const SpecialProjectsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Proyek Incinerator PT. Industri Sejahtera',
            location: 'Jawa Timur',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
            description:
                'Instalasi 3 unit Incinerator Type-X untuk pengolahan limbah industri manufaktur',
            year: '2023',
            capacity: '800 kg/jam',
        },
        {
            id: 2,
            title: 'Proyek Limbah Medis RSU Modern',
            location: 'Jakarta',
            image: 'https://images.unsplash.com/photo-1581092915571-ce0e50914e6f?w=600&q=80',
            description:
                'Sistem incinerator khusus untuk limbah medis berbahaya dengan standar rumah sakit',
            year: '2023',
            capacity: '200 kg/jam',
        },
        {
            id: 3,
            title: 'Proyek Pengolahan Limbah Pabrik Tekstil',
            location: 'Bandung',
            image: 'https://images.unsplash.com/photo-1581092155561-40261fffe5e0?w=600&q=80',
            description:
                'Instalasi lengkap dengan sistem kontrol otomatis dan monitoring real-time',
            year: '2022',
            capacity: '600 kg/jam',
        },
        {
            id: 4,
            title: 'Proyek Fasilitas Limbah B3 PT. Kimia Indonesia',
            location: 'Surabaya',
            image: 'https://images.unsplash.com/photo-1581092150562-40becc0fa994?w=600&q=80',
            description:
                'Sistem incinerator multi-chamber untuk limbah bahan kimia kompleks',
            year: '2022',
            capacity: '1000 kg/jam',
        },
    ];

    const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, projects.length - 3) : prev - 1,
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= projects.length - 2 ? 0 : prev + 1,
        );
    };

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Proyek Spesial Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Portofolio proyek sukses dari berbagai industri di
                        seluruh Indonesia
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {visibleProjects.map((project) => (
                            <div
                                key={project.id}
                                className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-gray-200">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-2 flex items-start justify-between">
                                        <h3 className="flex-1 text-lg font-bold text-gray-900">
                                            {project.title}
                                        </h3>
                                        <span className="ml-2 rounded bg-emerald-100 px-2 py-1 text-sm text-emerald-700">
                                            {project.year}
                                        </span>
                                    </div>
                                    <p className="mb-3 text-sm font-semibold text-emerald-600">
                                        {project.location}
                                    </p>
                                    <p className="mb-4 text-sm text-gray-600">
                                        {project.description}
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">
                                                Kapasitas:
                                            </span>{' '}
                                            {project.capacity}
                                        </p>
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

                {/* Pagination Dots */}
                <div className="mt-12 flex justify-center gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() =>
                                setCurrentIndex(
                                    Math.min(idx, projects.length - 3),
                                )
                            }
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

export default SpecialProjectsSection;
