import { Download, X } from 'lucide-react';
import React, { useState } from 'react';

interface BrosurModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BrosurModal: React.FC<BrosurModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In real implementation, send data to backend
        console.log('Brosur requested:', formData);
        setIsSubmitted(true);

        // Simulate download
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
            });
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">
                        Minta Brosur
                    </h2>
                    <p className="text-gray-600">
                        Isi form di bawah untuk menerima brosur kami via email
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="py-8 text-center">
                        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                            <Download className="text-emerald-600" size={32} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                            Terima Kasih!
                        </h3>
                        <p className="mb-4 text-gray-600">
                            Brosur sedang diunduh. Kami juga akan mengirimkan ke
                            email Anda.
                        </p>
                        <div className="inline-flex h-8 w-8 animate-spin items-center justify-center rounded-full border-4 border-emerald-600 border-t-transparent" />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
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

                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
                            >
                                <Download size={18} className="mr-2" />
                                Unduh
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default BrosurModal;
