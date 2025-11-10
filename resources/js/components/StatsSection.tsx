import React from 'react';

const StatsSection: React.FC = () => {
    const stats = [
        {
            number: '500+',
            label: 'Proyek Selesai',
        },
        {
            number: '50+',
            label: 'Klien Puas',
        },
        {
            number: '20+',
            label: 'Tahun Pengalaman',
        },
        {
            number: '95%',
            label: 'Efisiensi Limbah',
        },
    ];

    const benefits = [
        {
            title: 'Teknologi Terdepan',
            description:
                'Menggunakan teknologi incinerator terbaru dengan emisi rendah dan efisiensi maksimal.',
        },
        {
            title: 'Ramah Lingkungan',
            description:
                'Komitmen penuh terhadap keberlanjutan lingkungan dan regulasi lingkungan internasional.',
        },
        {
            title: 'Tim Profesional',
            description:
                'Tim teknis bersertifikat internasional siap memberikan solusi terbaik untuk Anda.',
        },
        {
            title: 'Layanan Purna Jual',
            description:
                'Dukungan teknis lengkap dan pemeliharaan rutin untuk hasil optimal jangka panjang.',
        },
    ];

    return (
        <>
            {/* Stats Section */}
            <section className="bg-emerald-600 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center text-white">
                                <div className="mb-2 text-4xl font-bold lg:text-5xl">
                                    {stat.number}
                                </div>
                                <p className="text-emerald-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Mengapa Memilih STN?
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            Kami menyediakan solusi terbaik dengan standar
                            kualitas internasional
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg"
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600">
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatsSection;
