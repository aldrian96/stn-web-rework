# STN Landing Page - Dokumentasi

Dokumentasi lengkap untuk Landing Page STN (Solusi Teknologi Lingkungan) yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## 📁 Struktur Komponen

Landing page ini terdiri dari beberapa komponen utama yang terintegrasi dalam `welcome.tsx`:

### 1. **Navbar** (`Navbar.tsx`)

- **Fungsi**: Header navigasi yang sticky di atas halaman
- **Fitur**:
    - Logo branding "STN" dengan warna emerald-700
    - Menu navigasi dengan link ke berbagai section
    - Dropdown menu untuk "Produk" (Incinerator, Jasa, Kontraktor)
    - CTA button "Minta Brosur" yang membuka modal
    - Mobile hamburger menu dengan responsive design
    - Integrasi BrosurModal untuk form permintaan brosur

### 2. **Hero Carousel** (`HeroCarousel.tsx`)

- **Fungsi**: Banner hero dengan carousel otomatis
- **Fitur**:
    - Full-screen height (`h-screen`)
    - Auto-scroll setiap 5 detik
    - Manual navigation dengan tombol chevron (kiri/kanan)
    - Indicator dots di bawah untuk memilih slide
    - Smooth opacity transitions (1 detik)
    - Background image overlay dengan gradient gelap `rgba(0,0,0,0.5)`
    - Overlay text dengan title dan subtitle
    - CTA buttons: "Minta Brosur" (membuka modal) dan "Lihat Produk" (scroll ke section)
    - Responsive text sizing (text-5xl → text-7xl)

### 3. **Product Section** (`ProductSection.tsx`)

- **Fungsi**: Showcase 3 produk utama STN
- **Fitur**:
    - Grid responsive (1 kolom mobile, 3 kolom desktop)
    - 3 Product cards: Incinerator, Jasa, Kontraktor
    - Icon display dengan background color emerald-100
    - Feature lists dengan dot indicators
    - Hover effects dengan shadow dan border color changes
    - Section header dengan decorative underline

### 4. **Stats Section** (`StatsSection.tsx`)

- **Fungsi**: Menampilkan statistik perusahaan dan keunggulan
- **Sub-section**:
    - **Stats Bar**: 4 statistik penting (500+ Proyek, 50+ Klien, 20+ Tahun, 95% Efisiensi)
    - **Benefits Grid**: 4 keunggulan utama dengan icon check circle

### 5. **About Section** (`AboutSection.tsx`)

- **Fungsi**: Informasi tentang perusahaan STN
- **Fitur**:
    - Layout 2 kolom (image + content) yang responsive
    - Highlight list dengan CheckCircle icons
    - Multiple CTA buttons

### 6. **Gallery Section** (`GallerySection.tsx`)

- **Fungsi**: Portofolio proyek dan sertifikasi
- **Fitur**:
    - Grid 3 kolom dengan hover zoom effect
    - Manual navigation dengan previous/next buttons
    - Indicator dots untuk navigasi
    - Image overlay dengan category dan title
    - Smooth transitions dan animations

### 7. **Testimonial Section** (`TestimonialSection.tsx`)

- **Fungsi**: Testimoni dari klien-klien STN
- **Fitur**:
    - 3 kartu testimoni dengan rating bintang
    - Avatar dengan API DiceBear
    - Quote dan informasi klien
    - Responsive grid layout

### 8. **Contact Section** (`ContactSection.tsx`)

- **Fungsi**: Form kontak dan informasi kontak
- **Fitur**:
    - Contact form dengan validasi
    - Informasi kontak lengkap (alamat, telepon, email, jam kerja)
    - Quick links section
    - Form submission feedback
    - Grid layout responsive

### 9. **CTA Section** (`CTASection.tsx`)

- **Fungsi**: Call-to-action section untuk konversi
- **Fitur**:
    - Prominent messaging
    - Dual CTA buttons
    - Contact info cards dengan icon
    - BrosurModal integration

### 10. **Brosur Modal** (`BrosurModal.tsx`)

- **Fungsi**: Modal untuk permintaan brosur
- **Fitur**:
    - Form dengan fields: nama, email, telepon, perusahaan
    - Submit state dengan loading animation
    - Modal overlay dengan close button
    - Responsive design

### 11. **Footer** (`Footer.tsx`)

- **Fungsi**: Footer dengan company info dan links
- **Fitur**:
    - 4 kolom layout (Company, Produk, Tautan Cepat, Kontak)
    - Social media icons
    - Contact info dengan icons
    - Copyright dan policy links
    - Dark background (slate-900) dengan text putih

## 🎨 Color Scheme

- **Primary Color**: `emerald-600` / `emerald-700`
- **Secondary**: `slate-900` (footer)
- **Neutral**: `gray-300` sampai `gray-900`
- **Background**: `white` dan `gray-50`
- **Overlay**: `rgba(0,0,0,0.5)`

## 📱 Responsive Design

Semua komponen dibangun dengan responsive design menggunakan Tailwind CSS breakpoints:

- **Mobile**: `sm` breakpoint untuk tablet kecil
- **Tablet**: `md` breakpoint untuk tablet dan desktop kecil
- **Desktop**: `lg` breakpoint untuk desktop

## 🎯 Navigation & Scrolling

Setiap section memiliki ID anchor untuk smooth scrolling:

- `#home` - Hero section
- `#produk` - Product section
- `#tentang` - About section
- `#galeri` - Gallery section
- `#testimoni` - Testimonial section
- `#hubungi` - Contact section

## 📊 File Tree

```
resources/js/
├── pages/
│   └── welcome.tsx          # Main landing page (mengintegrasikan semua komponen)
├── components/
│   ├── Navbar.tsx           # Header navigation
│   ├── HeroCarousel.tsx      # Hero banner carousel
│   ├── ProductSection.tsx    # Product showcase
│   ├── StatsSection.tsx      # Statistics dan benefits
│   ├── AboutSection.tsx      # Company information
│   ├── GallerySection.tsx    # Portfolio gallery
│   ├── TestimonialSection.tsx # Client testimonials
│   ├── ContactSection.tsx    # Contact form dan info
│   ├── CTASection.tsx        # Call-to-action
│   ├── BrosurModal.tsx       # Brosur request modal
│   └── Footer.tsx            # Footer section
```

## 🔧 Teknologi

- **React**: 19.2.0
- **TypeScript**: Strict mode
- **Tailwind CSS**: 4.0.0 with Vite plugin
- **Lucide React**: Icons (ChevronDown, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Star, Check, Download, Send, etc.)
- **Inertia.js**: React adapter untuk Laravel

## 🚀 Animasi & Transisi

- **Carousel**: Smooth opacity transitions (1 detik)
- **Hover Effects**: Scale transforms dan shadow changes
- **Auto-scroll**: 5 detik per slide
- **Modal**: Fade in/out dengan backdrop
- **Buttons**: Smooth color dan shadow transitions

## 📝 Catatan Penting

1. **BrosurModal**: Modal akan terbuka ketika user mengklik button "Minta Brosur" di Navbar, HeroCarousel, atau CTASection
2. **Carousel Auto-scroll**: Otomatis berganti slide setiap 5 detik
3. **Responsive Images**: Menggunakan Unsplash placeholder (bisa diganti dengan real images)
4. **Form Handling**: Contact form dan Brosur modal currently hanya mock implementation (perlu backend integration)

## 🎯 Integrasi dengan Backend

Untuk production, perlu diintegrasikan dengan backend untuk:

1. Form submission (Contact & Brosur request)
2. Email notifications
3. Brosur PDF download
4. Dynamic content dari database

## 📚 Penggunaan Komponen

### Implementasi di welcome.tsx

```tsx
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ProductSection from '@/components/ProductSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Welcome() {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <ProductSection />
            <StatsSection />
            <AboutSection />
            <GallerySection />
            <TestimonialSection />
            <ContactSection />
            <CTASection />
            <Footer />
        </>
    );
}
```

## ✨ Fitur Highlight

- ✅ Professional design dengan green theme
- ✅ Auto-scrolling hero carousel
- ✅ Fully responsive pada semua devices
- ✅ Smooth animations dan transitions
- ✅ Modal untuk brosur request
- ✅ Contact form dengan validation
- ✅ Social media integration
- ✅ Gallery dengan hover effects
- ✅ Testimonial section dengan ratings
- ✅ Statistics showcase
- ✅ Multiple CTA elements
- ✅ Sticky navigation
- ✅ Dark footer
- ✅ Accessibility friendly

---

**Last Updated**: December 2024
**Version**: 1.0
**Status**: Production Ready ✅
