import React from 'react';

const OurProductsSection: React.FC = () => {
    const products = [
        {
            id: 1,
            name: 'Incinerator Type-X',
            category: 'Produk Unggulan',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
            price: 'Hubungi untuk Harga',
            features: [
                'Kapasitas 100-500 kg/jam',
                'Emisi rendah',
                'Kontrol otomatis',
                'Garansi 5 tahun',
            ],
        },
        {
            id: 2,
            name: 'Incinerator Type-Y',
            category: 'Paket Standar',
            image: 'https://images.unsplash.com/photo-1581092162062-40becc0fa994?w=400&q=80',
            price: 'Hubungi untuk Harga',
            features: [
                'Kapasitas 50-200 kg/jam',
                'Hemat biaya',
                'Mudah dipasang',
                'Garansi 3 tahun',
            ],
        },
        {
            id: 3,
            name: 'Incinerator Type-Z',
            category: 'Paket Enterprise',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
            price: 'Hubungi untuk Harga',
            features: [
                'Kapasitas 500-1000 kg/jam',
                'Multi-chamber',
                'IoT integration',
                'Garansi 7 tahun',
            ],
        },
    ];

    return (
        <section id="produk-kami" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Produk Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Tiga pilihan mesin incinerator untuk memenuhi kebutuhan
                        industri Anda
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-200">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                                    {product.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    {product.name}
                                </h3>
                                <p className="mb-4 font-semibold text-emerald-600">
                                    {product.price}
                                </p>

                                {/* Features */}
                                <div className="mb-6 space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-gray-600"
                                        >
                                            <span className="h-2 w-2 rounded-full bg-emerald-600" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <button className="w-full rounded-lg bg-emerald-600 py-2 font-bold text-white transition hover:bg-emerald-700">
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProductsSection;
