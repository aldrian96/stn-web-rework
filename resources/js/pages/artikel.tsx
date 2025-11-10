import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, Calendar, Search, User } from 'lucide-react';
import React from 'react';

const Artikels: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('semua');

    const articles = [
        {
            id: 1,
            title: 'Inovasi Terbaru dalam Teknologi Incinerator 2024',
            excerpt:
                'Perkembangan teknologi incinerator terus berkembang dengan fokus pada efisiensi energi dan pengurangan emisi karbon. Temukan apa yang baru di industri ini.',
            author: 'Tim STN',
            date: '15 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
            category: 'Teknologi',
            content: 'Konten artikel lengkap...',
        },
        {
            id: 2,
            title: 'Standar Lingkungan Internasional untuk Pengolahan Limbah',
            excerpt:
                'Memahami persyaratan regulasi lingkungan global dan cara STN membantu industri mencapai kepatuhan penuh.',
            author: 'Ahli Lingkungan',
            date: '10 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092155561-40261fffe5e0?w=600&q=80',
            category: 'Regulasi',
            content: 'Konten artikel lengkap...',
        },
        {
            id: 3,
            title: 'Studi Kasus: Transformasi Limbah Industri di PT. Modern',
            excerpt:
                'Bagaimana solusi incinerator STN membantu mengurangi limbah dan meningkatkan efisiensi operasional hingga 60%.',
            author: 'Case Study',
            date: '05 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092150562-40becc0fa994?w=600&q=80',
            category: 'Studi Kasus',
            content: 'Konten artikel lengkap...',
        },
        {
            id: 4,
            title: 'Manfaat Ekonomis Penggunaan Incinerator Modern',
            excerpt:
                'Analisis mendalam tentang return on investment (ROI) dan penghematan biaya operasional jangka panjang.',
            author: 'Divisi Keuangan',
            date: '01 Desember 2024',
            image: 'https://images.unsplash.com/photo-1581092162562-40becc0fa994?w=600&q=80',
            category: 'Ekonomi',
            content: 'Konten artikel lengkap...',
        },
        {
            id: 5,
            title: 'Keberlanjutan Lingkungan: Komitmen STN untuk Masa Depan',
            excerpt:
                'Bagaimana kami berkontribusi pada pengurangan jejak karbon dan pelestarian lingkungan hidup.',
            author: 'Tim Keberlanjutan',
            date: '25 November 2024',
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
            category: 'Keberlanjutan',
            content: 'Konten artikel lengkap...',
        },
        {
            id: 6,
            title: 'Tips Pemeliharaan Mesin Incinerator untuk Performa Optimal',
            excerpt:
                'Panduan lengkap perawatan rutin yang dapat meningkatkan umur mesin dan efisiensi pembakaran.',
            author: 'Tim Teknis',
            date: '20 November 2024',
            image: 'https://images.unsplash.com/photo-1581092150562-40becc0fa994?w=600&q=80',
            category: 'Tips & Trik',
            content: 'Konten artikel lengkap...',
        },
    ];

    const categories = [
        { id: 'semua', name: 'Semua Artikel' },
        { id: 'teknologi', name: 'Teknologi' },
        { id: 'regulasi', name: 'Regulasi' },
        { id: 'studi-kasus', name: 'Studi Kasus' },
        { id: 'ekonomi', name: 'Ekonomi' },
        { id: 'keberlanjutan', name: 'Keberlanjutan' },
    ];

    const filteredArticles = articles.filter((article) => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === 'semua' ||
            article.category.toLowerCase().replace(/\s+/g, '-') ===
                selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">
                        Artikel & Berita
                    </h1>
                    <p className="text-xl text-emerald-100">
                        Informasi terbaru dan wawasan mendalam tentang teknologi
                        incinerator dan pengelolaan limbah
                    </p>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="bg-gray-50 py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative">
                            <Search
                                className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Cari artikel..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-12 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`rounded-full px-6 py-2 font-semibold transition ${
                                    selectedCategory === cat.id
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-emerald-50'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredArticles.map((article) => (
                                <article
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
                                        <div className="absolute top-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
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
                                        <div className="mb-4 space-y-2 border-t pt-4 text-xs text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <User size={14} />
                                                <span>{article.author}</span>
                                            </div>
                                        </div>

                                        {/* Read More */}
                                        <a
                                            href={`/artikel/${article.id}`}
                                            className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
                                        >
                                            Baca Selengkapnya
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <p className="text-xl text-gray-600">
                                Tidak ada artikel yang cocok dengan pencarian
                                Anda.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Artikels;
