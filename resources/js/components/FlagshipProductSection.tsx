import React from 'react';

const FlagshipProductSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Produk Andalan Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Mesin Incinerator Type-X: Solusi Terpadu untuk
                        Pengolahan Limbah Industri
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Product Image */}
                    <div className="relative h-96 overflow-hidden rounded-lg shadow-xl lg:h-full">
                        <img
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
                            alt="Mesin Incinerator Type-X"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute top-4 right-4 rounded-full bg-emerald-600 px-4 py-2 font-bold text-white">
                            Best Seller
                        </div>
                    </div>

                    {/* Product Description */}
                    <div>
                        <h3 className="mb-4 text-3xl font-bold text-gray-900">
                            Mesin Incinerator Type-X
                        </h3>
                        <p className="mb-6 text-lg text-gray-600">
                            Mesin Incinerator Type-X adalah solusi terbaik kami
                            untuk pengolahan limbah berbahaya dengan teknologi
                            terdepan, efisiensi tinggi, dan emisi rendah yang
                            ramah lingkungan.
                        </p>

                        <div className="mb-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                                        <svg
                                            className="h-5 w-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">
                                        Efisiensi Pembakaran 95%
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Menghasilkan emisi minimal dengan hasil
                                        pembakaran optimal
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                                        <svg
                                            className="h-5 w-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">
                                        Teknologi Kontrol Otomatis
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Sistem kontrol suhu dan emisi yang
                                        presisi dan terintegrasi
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                                        <svg
                                            className="h-5 w-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">
                                        Desain Kompak & Modular
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Mudah dipasang dan diintegrasikan dengan
                                        sistem yang ada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                                        <svg
                                            className="h-5 w-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">
                                        Garansi 5 Tahun
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Proteksi lengkap dengan dukungan teknis
                                        sepanjang waktu
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full rounded-lg bg-emerald-600 py-3 font-bold text-white transition hover:bg-emerald-700">
                            Hubungi untuk Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlagshipProductSection;
