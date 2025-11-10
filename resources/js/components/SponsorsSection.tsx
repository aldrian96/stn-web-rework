import React from 'react';

const SponsorsSection: React.FC = () => {
    const sponsors = [
        {
            id: 1,
            name: 'PT. Teknologi Indonesia',
            logo: 'https://via.placeholder.com/200x100?text=Sponsor+1',
        },
        {
            id: 2,
            name: 'Universitas Teknologi Limbah',
            logo: 'https://via.placeholder.com/200x100?text=Sponsor+2',
        },
        {
            id: 3,
            name: 'Asosiasi Lingkungan Indonesia',
            logo: 'https://via.placeholder.com/200x100?text=Sponsor+3',
        },
        {
            id: 4,
            name: 'Kementerian Lingkungan',
            logo: 'https://via.placeholder.com/200x100?text=Sponsor+4',
        },
        {
            id: 5,
            name: 'Global Green Initiative',
            logo: 'https://via.placeholder.com/200x100?text=Sponsor+5',
        },
        {
            id: 6,
            name: 'Asia Environmental Council',
            logo: 'https://via.placeholder.com/200x100?text=Sponsor+6',
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Mitra & Sponsor Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Kolaborasi dengan organisasi terkemuka untuk mendukung
                        visi keberlanjutan lingkungan
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className="flex items-center justify-center rounded-lg bg-gray-50 p-4 transition hover:bg-gray-100"
                        >
                            <div className="text-center">
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="mx-auto mb-3 h-16 w-auto opacity-70 transition hover:opacity-100"
                                />
                                <p className="text-xs font-medium text-gray-600">
                                    {sponsor.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Us Section */}
                <div className="mt-16 rounded-lg bg-emerald-600 p-8 text-center text-white">
                    <h3 className="mb-4 text-2xl font-bold">
                        Ingin Menjadi Mitra Kami?
                    </h3>
                    <p className="mb-6 text-emerald-100">
                        Bergabunglah dengan jaringan organisasi yang berkomitmen
                        pada keberlanjutan lingkungan
                    </p>
                    <button className="rounded-lg bg-white px-8 py-3 font-bold text-emerald-600 transition hover:bg-emerald-50">
                        Hubungi Kami untuk Bermitra
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
