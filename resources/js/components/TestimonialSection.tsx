import { Star } from 'lucide-react';
import React from 'react';

const TestimonialSection: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Budi Santoso',
            position: 'Direktur PT. Industri Sejahtera',
            content:
                'Layanan STN sangat profesional dan hasil incinerator mereka sangat efisien. Limbah kami berkurang hingga 95% dan emisi terkontrol dengan baik.',
            rating: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
        },
        {
            id: 2,
            name: 'Siti Nurhaliza',
            position: 'Manager Operasional PT. Green Industries',
            content:
                'Tim STN sangat responsif terhadap kebutuhan kami. Mereka memberikan solusi yang tepat dan perawatan berkala yang sangat memuaskan.',
            rating: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
        },
        {
            id: 3,
            name: 'Ahmad Wijaya',
            position: 'General Manager PT. Lingkungan Lestari',
            content:
                'Investasi pada incinerator STN adalah keputusan terbaik kami. ROI tercapai lebih cepat dari estimasi dan compliance lingkungan terjamin.',
            rating: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Testimoni Klien
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Kepuasan klien adalah prioritas utama kami
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg"
                        >
                            {/* Rating */}
                            <div className="mb-4 flex gap-1">
                                {Array.from({ length: testimonial.rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ),
                                )}
                            </div>

                            {/* Testimonial Content */}
                            <p className="mb-6 line-clamp-3 text-gray-600">
                                {testimonial.content}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-12 w-12 rounded-full"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
