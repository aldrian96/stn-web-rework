'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import BrosurModal from './BrosurModal';

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isBrosurModalOpen, setIsBrosurModalOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="/"
                            className="text-2xl font-bold text-emerald-700"
                        >
                            STN
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <a
                            href="/"
                            className="font-medium text-gray-700 transition hover:text-emerald-700"
                        >
                            Home
                        </a>
                        <a
                            href="/artikel"
                            className="font-medium text-gray-700 transition hover:text-emerald-700"
                        >
                            Artikel
                        </a>

                        {/* Dropdown Produk */}
                        <div className="group relative">
                            <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-emerald-700">
                                Produk
                                <ChevronDown
                                    size={16}
                                    className="transition group-hover:rotate-180"
                                />
                            </button>
                            <div className="invisible absolute left-0 mt-0 w-48 rounded-lg bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                <a
                                    href="#incenerator"
                                    className="block px-4 py-2 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                                >
                                    Incenerator
                                </a>
                                <a
                                    href="#jasa"
                                    className="block px-4 py-2 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                                >
                                    Jasa
                                </a>
                                <a
                                    href="#kontraktor"
                                    className="block px-4 py-2 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                                >
                                    Kontraktor
                                </a>
                            </div>
                        </div>

                        <a
                            href="/sertifikat"
                            className="font-medium text-gray-700 transition hover:text-emerald-700"
                        >
                            Sertifikat
                        </a>
                        <a
                            href="/tentang-kami"
                            className="font-medium text-gray-700 transition hover:text-emerald-700"
                        >
                            Tentang Kami
                        </a>
                        <a
                            href="/hubungi-kami"
                            className="font-medium text-gray-700 transition hover:text-emerald-700"
                        >
                            Hubungi Kami
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => setIsBrosurModalOpen(true)}
                            className="rounded-lg bg-emerald-600 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg"
                        >
                            Minta Brosur
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isDropdownOpen && (
                    <div className="mb-4 rounded-lg bg-gray-50 py-2 md:hidden">
                        <a
                            href="/"
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                            Home
                        </a>
                        <a
                            href="/artikel"
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                            Artikel
                        </a>
                        <div className="px-4 py-2">
                            <p className="mb-2 font-medium text-gray-700">
                                Produk
                            </p>
                            <div className="ml-4 space-y-1">
                                <a
                                    href="#incenerator"
                                    className="block py-1 text-gray-700 hover:text-emerald-700"
                                >
                                    Incenerator
                                </a>
                                <a
                                    href="#jasa"
                                    className="block py-1 text-gray-700 hover:text-emerald-700"
                                >
                                    Jasa
                                </a>
                                <a
                                    href="#kontraktor"
                                    className="block py-1 text-gray-700 hover:text-emerald-700"
                                >
                                    Kontraktor
                                </a>
                            </div>
                        </div>
                        <a
                            href="/sertifikat"
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                            Sertifikat
                        </a>
                        <a
                            href="/tentang-kami"
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                            Tentang Kami
                        </a>
                        <a
                            href="/hubungi-kami"
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                            Hubungi Kami
                        </a>
                        <div className="mt-2 border-t px-4 pt-2">
                            <button
                                onClick={() => setIsBrosurModalOpen(true)}
                                className="block w-full rounded-lg bg-emerald-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-emerald-700"
                            >
                                Minta Brosur
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Brosur Modal */}
            <BrosurModal
                isOpen={isBrosurModalOpen}
                onClose={() => setIsBrosurModalOpen(false)}
            />
        </header>
    );
};

export default Navbar;
