import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

const HubungiKami: React.FC = () => {
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

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Alamat',
            content: 'Jl. Industri No. 123, Jakarta 12345, Indonesia',
            link: '#',
        },
        {
            icon: Phone,
            title: 'Telepon',
            content: '+62 (11) 1234-567890',
            link: 'tel:+6211234567890',
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'info@stn.com',
            link: 'mailto:info@stn.com',
        },
        {
            icon: Clock,
            title: 'Jam Kerja',
            content: 'Senin - Jumat: 08:00 - 17:00\nSabtu: 08:00 - 12:00',
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-5xl font-bold">Hubungi Kami</h1>
                    <p className="text-xl text-emerald-100">
                        Tim kami siap membantu menjawab pertanyaan dan kebutuhan
                        Anda
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {contactInfo.map((info, idx) => {
                            const Icon = info.icon;
                            return (
                                <a
                                    key={idx}
                                    href={info.link}
                                    className="rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 transition hover:shadow-lg"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="mb-2 font-bold text-gray-900">
                                        {info.title}
                                    </h3>
                                    <p className="text-sm whitespace-pre-line text-gray-600">
                                        {info.content}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="rounded-lg bg-white p-8 shadow-md">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Kirim Pesan
                                </h2>

                                {isSubmitted && (
                                    <div className="mb-6 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                                        <CheckCircle size={24} />
                                        <div>
                                            <p className="font-semibold">
                                                Terima kasih!
                                            </p>
                                            <p className="text-sm">
                                                Pesan Anda telah terkirim. Tim
                                                kami akan menghubungi Anda
                                                segera.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
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
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
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
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
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
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
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
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
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
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
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
                                            <option value="Keluhan">
                                                Keluhan
                                            </option>
                                            <option value="Lainnya">
                                                Lainnya
                                            </option>
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
                                            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                                            placeholder="Tulis pesan Anda di sini..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-bold text-white transition hover:bg-emerald-700"
                                    >
                                        <Send size={20} />
                                        Kirim Pesan
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Side Info */}
                        <div>
                            {/* Quick Info Box */}
                            <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-4 font-bold text-gray-900">
                                    Respon Cepat
                                </h3>
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle
                                            size={20}
                                            className="mt-0.5 flex-shrink-0 text-emerald-600"
                                        />
                                        <span>Respons dalam 24 jam kerja</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle
                                            size={20}
                                            className="mt-0.5 flex-shrink-0 text-emerald-600"
                                        />
                                        <span>
                                            Tim profesional siap membantu
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle
                                            size={20}
                                            className="mt-0.5 flex-shrink-0 text-emerald-600"
                                        />
                                        <span>
                                            Konsultasi gratis dan tanpa biaya
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="rounded-lg bg-emerald-600 p-6 text-white">
                                <h3 className="mb-2 font-bold">
                                    Dapatkan Update Terbaru
                                </h3>
                                <p className="mb-4 text-sm text-emerald-100">
                                    Subscribe untuk mendapatkan informasi dan
                                    tips terbaru
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Email Anda"
                                        className="flex-1 rounded px-3 py-2 text-gray-900 focus:outline-none"
                                    />
                                    <button className="rounded bg-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-800">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 w-full bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322745!2d106.8128!3d-6.1753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34a9d%3A0x5540f0d4ec639ce0!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>

            <Footer />
        </div>
    );
};

export default HubungiKami;
