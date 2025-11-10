import { Lightbulb, Target } from 'lucide-react';
import React from 'react';

const MissionSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Misi & Visi Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Komitmen kami untuk masa depan yang lebih berkelanjutan
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Vision */}
                    <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600">
                                    <Lightbulb className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <h3 className="ml-4 text-2xl font-bold text-gray-900">
                                Visi
                            </h3>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Menjadi pemimpin global dalam teknologi pengolahan
                            limbah yang ramah lingkungan dan berkelanjutan,
                            menciptakan dampak positif bagi generasi mendatang.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
                        <div className="mb-4 flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <h3 className="ml-4 text-2xl font-bold text-gray-900">
                                Misi
                            </h3>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Menyediakan solusi teknologi incinerator berkualitas
                            tinggi yang efisien, terjangkau, dan berkelanjutan
                            untuk membantu industri mengelola limbah dengan
                            bertanggung jawab.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-16">
                    <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
                        Nilai Inti Kami
                    </h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: 'Inovasi',
                                desc: 'Terus berinovasi untuk solusi terbaik',
                            },
                            {
                                title: 'Keberlanjutan',
                                desc: 'Komitmen penuh pada lingkungan',
                            },
                            {
                                title: 'Integritas',
                                desc: 'Jujur dan terpercaya dalam setiap langkah',
                            },
                            {
                                title: 'Keunggulan',
                                desc: 'Standar kualitas tertinggi',
                            },
                        ].map((value, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg bg-emerald-50 p-6 text-center transition hover:bg-emerald-100"
                            >
                                <h4 className="mb-2 text-lg font-bold text-emerald-700">
                                    {value.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
