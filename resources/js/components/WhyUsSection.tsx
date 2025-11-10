import { Award, CheckCircle, Users, Zap } from 'lucide-react';
import React from 'react';

const WhyUsSection: React.FC = () => {
    const reasons = [
        {
            icon: Award,
            title: 'Sertifikasi Internasional',
            description:
                'Teknologi kami telah tersertifikasi oleh standar lingkungan internasional terkemuka.',
        },
        {
            icon: Users,
            title: 'Tim Profesional Berpengalaman',
            description:
                'Lebih dari 20 tahun pengalaman dengan tim teknis bersertifikat internasional.',
        },
        {
            icon: Zap,
            title: 'Efisiensi Maksimal',
            description:
                'Teknologi terdepan menghasilkan efisiensi hingga 95% dalam pengolahan limbah.',
        },
        {
            icon: CheckCircle,
            title: 'Layanan Purna Jual Terbaik',
            description:
                'Dukungan teknis lengkap dan pemeliharaan berkala untuk hasil optimal.',
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Mengapa Memilih STN?
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Kami memberikan solusi terbaik dengan komitmen penuh
                        terhadap kualitas dan keberlanjutan
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-lg bg-gray-50 p-8 transition hover:shadow-lg"
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
