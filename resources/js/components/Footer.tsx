import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-emerald-400">
                            STN
                        </h2>
                        <p className="mb-4 text-gray-300">
                            Solusi teknologi lingkungan dan layanan profesional
                            untuk masa depan yang berkelanjutan.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-gray-400 transition hover:text-emerald-400"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 transition hover:text-emerald-400"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 transition hover:text-emerald-400"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Produk */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Produk
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#incenerator"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    Incenerator
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#jasa"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    Jasa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#kontraktor"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    Kontraktor
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Tautan Cepat */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Tautan Cepat
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#tentang"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#artikel"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    Artikel
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sertifikat"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    Sertifikat
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-2">
                                <MapPin
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-emerald-400"
                                />
                                <span className="text-gray-300">
                                    Jalan Contoh No.1, Kota, Negara
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <Mail
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-emerald-400"
                                />
                                <a
                                    href="mailto:info@example.com"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    info@example.com
                                </a>
                            </li>
                            <li className="flex gap-2">
                                <Phone
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-emerald-400"
                                />
                                <a
                                    href="tel:+1234567890"
                                    className="text-gray-300 transition hover:text-emerald-400"
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-700" />

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-gray-400">
                        © {currentYear} STN. Semua hak dilindungi.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-gray-400 transition hover:text-emerald-400"
                        >
                            Kebijakan Privasi
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 transition hover:text-emerald-400"
                        >
                            Syarat Layanan
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
