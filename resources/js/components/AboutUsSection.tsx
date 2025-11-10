import React from 'react';

const AboutUsSection: React.FC = () => {
    return (
        <section id="tentang-kami" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left: Image */}
                    <div className="relative h-96 overflow-hidden rounded-lg shadow-lg lg:h-full">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                            alt="Tentang STN"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <p className="mb-2 text-lg font-semibold text-emerald-600">
                            Tentang Kami
                        </p>
                        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                            STN: Solusi Lingkungan Terdepan
                        </h2>
                        <p className="mb-4 text-lg text-gray-600">
                            Dengan lebih dari 20 tahun pengalaman, STN telah
                            menjadi pemimpin industri dalam pengolahan limbah
                            berbahaya dan teknologi incinerator berkualitas
                            tinggi. Kami berkomitmen untuk memberikan solusi
                            inovatif yang ramah lingkungan dan berkelanjutan.
                        </p>
                        <p className="mb-8 text-lg text-gray-600">
                            Tim ahli kami yang berdedikasi telah membantu
                            ratusan klien dari berbagai industri mencapai
                            standar lingkungan internasional sambil meningkatkan
                            efisiensi operasional mereka.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#produk"
                                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
                            >
                                Lihat Produk Kami
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

export default AboutUsSection;
