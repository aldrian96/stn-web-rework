import { CheckCircle } from 'lucide-react';
import React from 'react';

const AboutSection: React.FC = () => {
    const highlights = [
        'Teknologi Incinerator terdepan dengan emisi rendah',
        'Sertifikasi internasional dan compliance lingkungan',
        'Tim teknis profesional berpengalaman lebih dari 20 tahun',
        'Dukungan purna jual dan pemeliharaan berkala',
        'Solusi customized sesuai kebutuhan industri Anda',
        'ROI optimal dan efisiensi energi maksimal',
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left: Image */}
                    <div className="relative h-96 overflow-hidden rounded-lg shadow-xl lg:h-full">
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40709080a987?w=600&q=80"
                            alt="About STN"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Tentang STN
                        </h2>
                        <p className="mb-6 text-lg text-gray-600">
                            STN (Solusi Teknologi Lingkungan) adalah perusahaan
                            terkemuka dalam industri pengelolaan limbah
                            berbahaya dengan fokus pada teknologi incinerator
                            berkualitas tinggi. Kami berkomitmen untuk
                            memberikan solusi inovatif yang ramah lingkungan dan
                            berkelanjutan.
                        </p>
                        <p className="mb-8 text-lg text-gray-600">
                            Dengan pengalaman lebih dari 20 tahun, kami telah
                            melayani ratusan klien dari berbagai industri dan
                            membantu mereka mencapai standar lingkungan
                            internasional.
                        </p>

                        <div className="space-y-4">
                            {highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle
                                        size={24}
                                        className="mt-0.5 flex-shrink-0 text-emerald-600"
                                    />
                                    <span className="text-gray-700">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#minta-brosur"
                                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
                            >
                                Pelajari Lebih Lanjut
                            </a>
                            <a
                                href="#hubungi"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-600 px-6 py-3 font-bold text-emerald-600 transition hover:bg-emerald-50"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
