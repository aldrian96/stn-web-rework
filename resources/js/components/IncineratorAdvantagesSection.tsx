import { Droplet, Flame, Gauge, Leaf } from 'lucide-react';
import React from 'react';

const IncineratorAdvantagesSection: React.FC = () => {
    const advantages = [
        {
            icon: Flame,
            title: 'Pembakaran Sempurna',
            description:
                'Teknologi Double Chamber memastikan pembakaran limbah hingga 99.9% tanpa residu.',
        },
        {
            icon: Leaf,
            title: 'Ramah Lingkungan',
            description:
                'Emisi rendah sesuai standar EPA dan Eropa, dengan sistem scrubber terintegrasi.',
        },
        {
            icon: Droplet,
            title: 'Hemat Air & Energi',
            description:
                'Sistem sirkulasi air tertutup menghemat hingga 80% konsumsi air dan energi.',
        },
        {
            icon: Gauge,
            title: 'Kontrol Presisi',
            description:
                'Monitor real-time dengan sistem SCADA untuk optimasi operasional 24/7.',
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Keunggulan Mesin Incinerator Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Teknologi terdepan untuk hasil maksimal dengan biaya
                        operasional minimal
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {advantages.map((adv, idx) => {
                        const Icon = adv.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 transition hover:shadow-lg"
                            >
                                <div className="mb-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">
                                    {adv.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {adv.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Features Table */}
                <div className="mt-16">
                    <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
                        Spesifikasi Teknis
                    </h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-lg bg-gray-50 p-8">
                            <h4 className="mb-4 text-lg font-bold text-emerald-700">
                                Kapasitas & Performa
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex justify-between">
                                    <span>Kapasitas Limbah:</span>
                                    <span className="font-semibold">
                                        100-500 kg/jam
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Suhu Pembakaran:</span>
                                    <span className="font-semibold">
                                        800-1100°C
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Efisiensi:</span>
                                    <span className="font-semibold">
                                        95-99.9%
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Konsumsi Gas:</span>
                                    <span className="font-semibold">
                                        50-100 m³/jam
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-8">
                            <h4 className="mb-4 text-lg font-bold text-emerald-700">
                                Kepatuhan & Sertifikasi
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    <span>Sertifikat ISO 9001:2015</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    <span>Standar EPA (USA)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    <span>Standar Eropa (2000/76/EC)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-emerald-600">✓</span>
                                    <span>Peraturan Menteri Indonesia</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IncineratorAdvantagesSection;
