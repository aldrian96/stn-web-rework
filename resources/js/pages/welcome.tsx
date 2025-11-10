import AboutUsSection from '@/components/AboutUsSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import FlagshipProductSection from '@/components/FlagshipProductSection';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import IncineratorAdvantagesSection from '@/components/IncineratorAdvantagesSection';
import LatestArticlesSection from '@/components/LatestArticlesSection';
import MissionSection from '@/components/MissionSection';
import Navbar from '@/components/Navbar';
import OurProductsSection from '@/components/OurProductsSection';
import SpecialProjectsSection from '@/components/SpecialProjectsSection';
import SponsorsSection from '@/components/SponsorsSection';
import WhyUsSection from '@/components/WhyUsSection';
import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar - Sticky at top */}
            <Navbar />

            {/* Hero Section - Full screen carousel */}
            <HeroCarousel />

            {/* About Us Section */}
            <section id="tentang-kami">
                <AboutUsSection />
            </section>

            {/* Mission Section */}
            <MissionSection />

            {/* Why Us Section */}
            <WhyUsSection />

            {/* Flagship Product Section */}
            <section id="produk-andalan">
                <FlagshipProductSection />
            </section>

            {/* Incinerator Advantages Section */}
            <IncineratorAdvantagesSection />

            {/* Our Products Section */}
            <OurProductsSection />

            {/* Special Projects Section */}
            <SpecialProjectsSection />

            {/* Latest Articles Section */}
            <LatestArticlesSection />

            {/* Sponsors Section */}
            <SponsorsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Welcome;
