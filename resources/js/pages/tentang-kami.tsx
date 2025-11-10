import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
    CheckCircle,
    Globe,
    Lightbulb,
    Target,
    TrendingUp,
} from 'lucide-react';
import React from 'react';

const TentangKami: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-5xl font-bold">Tentang STN</h1>
                    <p className="max-w-2xl text-xl text-emerald-100">
                        Solusi Teknologi Lingkungan terdepan dalam pengolahan
                        limbah berbahaya dan pelestarian lingkungan hidup
                    </p>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Image */}
                        <div className="h-96 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                                alt="STN Company"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">
                                Perjalanan Kami
                            </h2>
                            <p className="mb-4 text-lg text-gray-600">
                                STN (Solusi Teknologi Lingkungan) didirikan pada
                                tahun 2004 dengan visi menjadi pemimpin industri
                                dalam pengolahan limbah berbahaya dan teknologi
                                incinerator. Kami memulai dari garasi kecil
                                dengan tim 3 orang dan passion yang besar untuk
                                melindungi lingkungan.
                            </p>
                            <p className="mb-6 text-lg text-gray-600">
                                Dua dekade kemudian, kami telah berkembang
                                menjadi perusahaan yang melayani lebih dari 500
                                klien di berbagai industri dengan tim
                                profesional yang terdiri dari 150+ karyawan
                                terlatih.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            20+ Tahun Pengalaman
                                        </p>
                                        <p className="text-gray-600">
                                            Melayani industri dengan dedikasi
                                            penuh
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            500+ Klien Puas
                                        </p>
                                        <p className="text-gray-600">
                                            Tersebar di berbagai industri
                                            strategis
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600" />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Teknologi Terdepan
                                        </p>
                                        <p className="text-gray-600">
                                            Inovasi berkelanjutan untuk solusi
                                            terbaik
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Misi & Visi
                        </h2>
                        <div className="mx-auto h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {/* Vision */}
                        <div className="rounded-lg bg-white p-8 shadow-md">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-100">
                                <Lightbulb className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Visi
                            </h3>
                            <p className="text-gray-600">
                                Menjadi pemimpin global dalam teknologi
                                pengolahan limbah yang ramah lingkungan,
                                menciptakan dampak positif bagi generasi
                                mendatang melalui inovasi berkelanjutan dan
                                tanggung jawab sosial lingkungan.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="rounded-lg bg-white p-8 shadow-md">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-100">
                                <Target className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Misi
                            </h3>
                            <p className="text-gray-600">
                                Menyediakan solusi teknologi incinerator
                                berkualitas tinggi yang efisien, terjangkau, dan
                                berkelanjutan untuk membantu industri mengelola
                                limbah dengan bertanggung jawab dan memenuhi
                                standar lingkungan internasional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Nilai Inti Kami
                        </h2>
                        <div className="mx-auto h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Lightbulb,
                                title: 'Inovasi',
                                description:
                                    'Terus berinovasi untuk menghadirkan solusi terdepan dalam industri',
                            },
                            {
                                icon: Globe,
                                title: 'Keberlanjutan',
                                description:
                                    'Komitmen penuh pada pelestarian lingkungan untuk masa depan',
                            },
                            {
                                icon: CheckCircle,
                                title: 'Integritas',
                                description:
                                    'Jujur, transparan, dan terpercaya dalam setiap tindakan',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Keunggulan',
                                description:
                                    'Standar kualitas tertinggi dalam produk dan layanan',
                            },
                        ].map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-lg bg-emerald-50 p-6 text-center"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-emerald-700">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">
                            Tim Kami
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Tim profesional berdedikasi dengan keahlian di
                            berbagai bidang
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: 'Budi Santoso',
                                position: 'Chief Executive Officer',
                                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
                                bio: 'Pendiri dan CEO dengan 25 tahun pengalaman dalam industri energi terbarukan',
                            },
                            {
                                name: 'Siti Nurhaliza',
                                position: 'Chief Technology Officer',
                                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
                                bio: 'Expert dalam teknologi incinerator dengan 18 tahun pengalaman R&D',
                            },
                            {
                                name: 'Ahmad Wijaya',
                                position: 'Chief Operating Officer',
                                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
                                bio: 'Ahli operasional dengan track record mengelola 150+ karyawan',
                            },
                        ].map((member, idx) => (
                            <div
                                key={idx}
                                className="overflow-hidden rounded-lg bg-white shadow-md"
                            >
                                <div className="h-48 bg-gradient-to-r from-emerald-600 to-emerald-700" />
                                <div className="-mt-20 px-6 pb-6 text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white"
                                    />
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="mb-3 text-sm font-semibold text-emerald-600">
                                        {member.position}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="bg-emerald-600 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
                            { number: '20+', label: 'Tahun Pengalaman' },
                            { number: '500+', label: 'Klien Puas' },
                            { number: '150+', label: 'Karyawan' },
                            { number: '95%', label: 'Kepuasan Klien' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-4xl font-bold">
                                    {stat.number}
                                </p>
                                <p className="mt-2 text-emerald-100">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TentangKami;
