import { Send } from 'lucide-react';
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In real implementation, send data to backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: '',
        });
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="hubungi" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Hubungi Kami
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Kirimkan pesan Anda kepada kami dan tim kami akan
                        merespons dalam waktu 24 jam
                    </p>
                    <div className="mx-auto mt-4 h-1 w-16 bg-emerald-600" />
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Contact Info */}
                    <div>
                        <div className="mb-6 rounded-lg bg-white p-8 shadow-md">
                            <h3 className="mb-4 text-xl font-bold text-gray-900">
                                Informasi Kontak
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold text-gray-700">
                                        Alamat
                                    </p>
                                    <p className="text-gray-600">
                                        Jl. Industri No. 123, Jakarta 12345,
                                        Indonesia
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">
                                        Telepon
                                    </p>
                                    <a
                                        href="tel:+6211234567890"
                                        className="text-emerald-600 hover:text-emerald-700"
                                    >
                                        +62 (11) 1234-567890
                                    </a>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:info@stn.com"
                                        className="text-emerald-600 hover:text-emerald-700"
                                    >
                                        info@stn.com
                                    </a>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">
                                        Jam Kerja
                                    </p>
                                    <p className="text-gray-600">
                                        Senin - Jumat: 08:00 - 17:00
                                    </p>
                                    <p className="text-gray-600">
                                        Sabtu: 08:00 - 12:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="rounded-lg bg-emerald-600 p-8 text-white">
                            <h3 className="mb-4 font-bold">Akses Cepat</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#produk"
                                        className="transition hover:text-emerald-200"
                                    >
                                        → Lihat Produk
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#galeri"
                                        className="transition hover:text-emerald-200"
                                    >
                                        → Galeri Proyek
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#tentang"
                                        className="transition hover:text-emerald-200"
                                    >
                                        → Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#minta-brosur"
                                        className="transition hover:text-emerald-200"
                                    >
                                        → Minta Brosur
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-lg bg-white p-8 shadow-md">
                            {isSubmitted && (
                                <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                                    ✓ Terima kasih! Pesan Anda telah terkirim.
                                    Tim kami akan menghubungi Anda segera.
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Nama *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                                            placeholder="Nama Lengkap"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Company */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Telepon
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                                            placeholder="+62 (XX) XXXX-XXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Perusahaan
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                                            placeholder="Nama Perusahaan"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Subjek *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                                    >
                                        <option value="">
                                            -- Pilih Subjek --
                                        </option>
                                        <option value="Inquiry Produk">
                                            Inquiry Produk
                                        </option>
                                        <option value="Konsultasi">
                                            Konsultasi
                                        </option>
                                        <option value="Pemeliharaan">
                                            Pemeliharaan
                                        </option>
                                        <option value="Keluhan">Keluhan</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Pesan *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                                        placeholder="Tulis pesan Anda di sini..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-lg bg-emerald-600 py-3 font-bold text-white transition hover:bg-emerald-700"
                                >
                                    <Send size={20} className="mr-2" />
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
