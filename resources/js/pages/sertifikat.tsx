import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Award, CheckCircle, Zap } from 'lucide-react';
import React from 'react';

const Sertifikat: React.FC = () => {
    const certificates = [
        {
            id: 1,
            title: 'ISO 9001:2015',
            issuer: 'International Organization for Standardization',
            date: 'Berlaku hingga: 2026',
            image: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=200&q=80',
            description: 'Sertifikasi untuk Sistem Manajemen Mutu',
            icon: Award,
        },
        {
            id: 2,
            title: 'EPA Compliance',
            issuer: 'Environmental Protection Agency (USA)',
            date: 'Berlaku hingga: 2025',
            image: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=200&q=80',
            description: 'Memenuhi standar emisi EPA untuk incinerator',
            icon: Award,
        },
        {
            id: 3,
            title: 'Standar Eropa 2000/76/EC',
            issuer: 'Badan Standardisasi Eropa',
            date: 'Berlaku hingga: 2026',
            image: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=200&q=80',
            description: 'Kepatuhan terhadap regulasi pengolahan limbah Eropa',
            icon: Award,
        },
        {
            id: 4,
            title: 'Sertifikat Lingkungan',
            issuer: 'Kementerian Lingkungan Indonesia',
            date: 'Berlaku hingga: 2025',
            image: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=200&q=80',
            description: 'Sertifikat kelayakan limbah B3 dan pengolahan sampah',
            icon: Award,
        },
    ];

    const achievements = [
        {
            title: 'Penghargaan Inovasi Teknologi',
            year: '2023',
            description:
                'Penghargaan dari Asia Environmental Council untuk inovasi incinerator ramah lingkungan',
        },
        {
            title: 'Best Environmental Solutions Provider',
            year: '2022',
            description:
                'Diakui sebagai penyedia solusi lingkungan terbaik di Asia Tenggara',
        },
        {
            title: 'Green Business Award',
            year: '2021',
            description:
                'Penghargaan dari Asosiasi Lingkungan Indonesia untuk komitmen keberlanjutan',
        },
        {
            title: 'Excellence in Innovation',
            year: '2020',
            description:
                'Penghargaan untuk terobosan teknologi pengolahan limbah',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">
                        Sertifikasi & Penghargaan
                    </h1>
                    <p className="text-xl text-emerald-100">
                        Bukti komitmen kami terhadap kualitas, inovasi, dan
                        keberlanjutan lingkungan
                    </p>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Sertifikasi Internasional
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Kami memiliki sertifikasi dari lembaga internasional
                            terkemuka yang menjamin kualitas dan kepatuhan kami
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {certificates.map((cert) => {
                            const Icon = cert.icon;
                            return (
                                <div
                                    key={cert.id}
                                    className="flex gap-6 rounded-lg bg-gray-50 p-8 transition hover:shadow-lg"
                                >
                                    {/* Icon/Image */}
                                    <div className="flex-shrink-0">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-emerald-100">
                                            <Icon className="h-12 w-12 text-emerald-600" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                                            {cert.title}
                                        </h3>
                                        <p className="mb-2 text-sm font-semibold text-emerald-600">
                                            {cert.issuer}
                                        </p>
                                        <p className="mb-3 text-gray-600">
                                            {cert.description}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {cert.date}
                                        </p>
                                    </div>

                                    {/* Check Icon */}
                                    <div className="flex flex-shrink-0 items-start">
                                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Penghargaan & Prestasi
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Pengakuan dari industri atas dedikasi dan inovasi
                            kami
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((achievement, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col rounded-lg bg-white p-6 shadow-md transition hover:shadow-xl"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                    <Zap className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="mb-2 font-bold text-gray-900">
                                    {achievement.title}
                                </h3>
                                <p className="mb-3 text-sm font-semibold text-emerald-600">
                                    {achievement.year}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Perjalanan Sertifikasi Kami
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                year: '2020',
                                title: 'Sertifikasi ISO 9001 Pertama',
                                description:
                                    'Pencapaian awal dalam perjalanan menuju keunggulan manajemen kualitas',
                            },
                            {
                                year: '2021',
                                title: 'Perluasan ke Standar EPA',
                                description:
                                    'Ekspansi internasional dengan memenuhi standar EPA untuk pasar Amerika',
                            },
                            {
                                year: '2022',
                                title: 'Sertifikasi Standar Eropa',
                                description:
                                    'Pencapaian kepatuhan terhadap regulasi lingkungan Eropa yang ketat',
                            },
                            {
                                year: '2023',
                                title: 'Sertifikasi Lingkungan Indonesia',
                                description:
                                    'Pengesahan penuh dari Kementerian Lingkungan Indonesia untuk operasi domestik',
                            },
                            {
                                year: '2024',
                                title: 'Perbaruan Semua Sertifikasi',
                                description:
                                    'Pembaruan dan pendalaman semua sertifikasi dengan standar terbaru',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6">
                                {/* Timeline Marker */}
                                <div className="flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                                        {idx + 1}
                                    </div>
                                    {idx < 4 && (
                                        <div className="h-16 w-1 bg-emerald-200" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pb-6">
                                    <p className="mb-1 font-bold text-emerald-600">
                                        {item.year}
                                    </p>
                                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Sertifikat;
