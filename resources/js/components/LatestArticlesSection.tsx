import { ArrowRight, Calendar, User } from 'lucide-react';
import React from 'react';

const LatestArticlesSection: React.FC = () => {
    const articles = [
        {
            id: 1,
            title: 'Inovasi Terbaru dalam Teknologi Incinerator 2024',
            excerpt:
                'Perkembangan teknologi incinerator terus berkembang dengan fokus pada efisiensi energi dan pengurangan emisi karbon.',
            author: 'Tim STN',
            date: '15 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
            category: 'Teknologi',
        },
        {
            id: 2,
            title: 'Standar Lingkungan Internasional untuk Pengolahan Limbah',
            excerpt:
                'Memahami persyaratan regulasi lingkungan global dan cara STN membantu industri mencapai kepatuhan penuh.',
            author: 'Ahli Lingkungan',
            date: '10 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092155561-40261fffe5e0?w=400&q=80',
            category: 'Regulasi',
        },
        {
            id: 3,
            title: 'Studi Kasus: Transformasi Limbah Industri di PT. Modern',
            excerpt:
                'Bagaimana solusi incinerator STN membantu mengurangi limbah dan meningkatkan efisiensi operasional hingga 60%.',
            author: 'Case Study',
            date: '05 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092150562-40becc0fa994?w=400&q=80',
            category: 'Studi Kasus',
        },
    ];

    return (
        <section id="artikel" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Artikel Terbaru
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Informasi dan wawasan terbaru tentang teknologi
                        incinerator dan pengelolaan limbah
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-200">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="h-full w-full object-cover transition hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
                                    {article.title}
                                </h3>
                                <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                                    {article.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="mb-4 space-y-2 text-xs text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={14} />
                                        <span>{article.author}</span>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    Baca Selengkapnya
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Articles Button */}
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg bg-emerald-600 px-8 py-3 font-bold text-white transition hover:bg-emerald-700"
                    >
                        Lihat Semua Artikel
                        <ArrowRight size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LatestArticlesSection;
