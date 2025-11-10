import { Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';
import BrosurModal from './BrosurModal';

const CTASection: React.FC = () => {
    const [isBrosurModalOpen, setIsBrosurModalOpen] = useState(false);
    return (
        <section className="bg-emerald-600 py-20">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                    Siap Mengoptimalkan Pengelolaan Limbah Anda?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-emerald-100">
                    Hubungi tim kami hari ini dan dapatkan konsultasi gratis
                    tentang solusi incinerator terbaik untuk bisnis Anda.
                </p>

                <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                        onClick={() => setIsBrosurModalOpen(true)}
                        className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-emerald-600 transition hover:bg-emerald-50"
                    >
                        Minta Brosur
                    </button>
                    <a
                        href="tel:+6211234567890"
                        className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-8 py-4 font-bold text-white transition hover:bg-emerald-800"
                    >
                        <Phone size={20} className="mr-2" />
                        Hubungi Sekarang
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-lg bg-emerald-700 p-6">
                        <Phone size={24} className="mx-auto mb-3 text-white" />
                        <p className="mb-2 text-emerald-100">Telepon</p>
                        <a
                            href="tel:+6211234567890"
                            className="text-lg font-bold text-white transition hover:text-emerald-200"
                        >
                            +62 (11) 1234-567890
                        </a>
                    </div>
                    <div className="rounded-lg bg-emerald-700 p-6">
                        <Mail size={24} className="mx-auto mb-3 text-white" />
                        <p className="mb-2 text-emerald-100">Email</p>
                        <a
                            href="mailto:info@stn.com"
                            className="text-lg font-bold text-white transition hover:text-emerald-200"
                        >
                            info@stn.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Brosur Modal */}
            <BrosurModal
                isOpen={isBrosurModalOpen}
                onClose={() => setIsBrosurModalOpen(false)}
            />
        </section>
    );
};

export default CTASection;
