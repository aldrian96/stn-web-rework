import { Award, Leaf, Zap } from 'lucide-react';
import React from 'react';

const ProductSection: React.FC = () => {
    const products = [
        {
            id: 1,
            title: 'Incinerator',
            description:
                'Sistem pengolahan sampah termal yang canggih dengan teknologi terkini untuk mengurangi limbah hingga 95%.',
            icon: Zap,
            features: [
                'Efisiensi Tinggi',
                'Aman Lingkungan',
                'Teknologi Terbaru',
            ],
        },
        {
            id: 2,
            title: 'Jasa Profesional',
            description:
                'Layanan pemeliharaan, konsultasi, dan operasi pabrik yang professional dengan tim berpengalaman.',
            icon: Award,
            features: [
                'Tim Berpengalaman',
                'Konsultasi Gratis',
                '24/7 Support',
            ],
        },
        {
            id: 3,
            title: 'Kontraktor',
            description:
                'Layanan konstruksi dan instalasi industri dengan standar internasional dan tepat waktu.',
            icon: Leaf,
            features: [
                'Standar Internasional',
                'On-Time Delivery',
                'Kualitas Terjamin',
            ],
        },
    ];

    return (
        <section id="produk" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Produk & Layanan Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Solusi lengkap untuk kebutuhan pengolahan limbah dan
                        layanan industri Anda
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {products.map((product) => {
                        const Icon = product.icon;
                        return (
                            <div
                                key={product.id}
                                className="rounded-lg border border-gray-100 bg-white p-8 shadow-md transition hover:border-emerald-500 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-100">
                                    <Icon
                                        className="text-emerald-600"
                                        size={32}
                                    />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                    {product.title}
                                </h3>
                                <p className="mb-6 text-gray-600">
                                    {product.description}
                                </p>
                                <ul className="mb-6 space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-gray-700"
                                        >
                                            <span className="mr-3 h-2 w-2 rounded-full bg-emerald-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#"
                                    className="inline-block font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                                >
                                    Pelajari Lebih Lanjut →
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
