# 🎯 STN Landing Page - Struktur & Alur

## 📄 Halaman Lengkap (Dari Atas ke Bawah)

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔺 NAVBAR (Sticky Top)                                          │
│ ├─ Logo: STN (emerald-700)                                      │
│ ├─ Navigation Links                                              │
│ │  ├─ Home                                                       │
│ │  ├─ Artikel                                                    │
│ │  ├─ Produk (Dropdown)                                         │
│ │  ├─ Sertifikat                                                │
│ │  ├─ Tentang Kami                                              │
│ │  └─ Hubungi Kami                                              │
│ └─ CTA Button: "Minta Brosur" → Opens Modal                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 🎬 HERO CAROUSEL (Full Screen)                                  │
│ ├─ Auto-scroll every 5 seconds                                  │
│ ├─ Background: Gradient overlay + image                         │
│ ├─ Title: "Solusi Lingkungan Terdepan"                          │
│ ├─ Subtitle: "Teknologi ramah lingkungan..."                    │
│ ├─ Buttons:                                                      │
│ │  ├─ "Minta Brosur" → Opens Modal                              │
│ │  └─ "Lihat Produk" → Scroll to #produk                        │
│ ├─ Navigation: ◄ slide indicators ►                             │
│ └─ Dots indicator at bottom (clickable)                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 📦 PRODUCT SECTION (id="produk")                                │
│ ├─ Title: "Produk & Layanan Kami"                               │
│ ├─ Grid: 3 Product Cards                                        │
│ │  ├─ Card 1: Incinerator ⚡                                    │
│ │  │  ├─ Icon + Description                                     │
│ │  │  ├─ Features list (5 items)                                │
│ │  │  └─ Hover effect                                           │
│ │  ├─ Card 2: Jasa 🏆                                          │
│ │  └─ Card 3: Kontraktor 🍃                                    │
│ └─ Responsive: 1 col (mobile) → 3 cols (desktop)               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 📊 STATS SECTION                                                │
│ ├─ Background: emerald-600                                      │
│ ├─ Stat Items (4 columns):                                      │
│ │  ├─ 500+ Proyek Selesai                                       │
│ │  ├─ 50+ Klien Puas                                            │
│ │  ├─ 20+ Tahun Pengalaman                                      │
│ │  └─ 95% Efisiensi Limbah                                      │
│ │                                                                │
│ ├─ Benefits Grid (2x2):                                         │
│ │  ├─ Teknologi Terdepan ✓                                      │
│ │  ├─ Ramah Lingkungan ✓                                        │
│ │  ├─ Tim Profesional ✓                                         │
│ │  └─ Layanan Purna Jual ✓                                      │
│ └─ Background: gray-50                                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ ℹ️ ABOUT SECTION (id="tentang")                                 │
│ ├─ Layout: 2 columns (image + content)                          │
│ ├─ Left: Company image                                          │
│ ├─ Right:                                                        │
│ │  ├─ Title: "Tentang STN"                                      │
│ │  ├─ Description (2 paragraphs)                                │
│ │  ├─ Highlights with CheckCircle icons (6 items)              │
│ │  └─ Buttons: "Pelajari Lebih Lanjut" | "Hubungi Kami"        │
│ └─ Responsive: Stacked on mobile                                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 🖼️ GALLERY SECTION (id="galeri")                                │
│ ├─ Title: "Galeri Proyek"                                       │
│ ├─ Grid: 3 gallery items visible at once                        │
│ ├─ Each item:                                                    │
│ │  ├─ Image with hover zoom effect                              │
│ │  ├─ Overlay: Category + Title on hover                        │
│ │  └─ Total: 6 items (carousel-like with buttons)               │
│ ├─ Navigation: ◄ Previous | Next ►                              │
│ └─ Dots indicator (clickable)                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ ⭐ TESTIMONIAL SECTION (id="testimoni")                          │
│ ├─ Title: "Testimoni Klien"                                     │
│ ├─ Grid: 3 testimonial cards                                    │
│ ├─ Each card:                                                    │
│ │  ├─ Rating: ★★★★★ (5 stars)                                  │
│ │  ├─ Quote text                                                │
│ │  ├─ Avatar image (DiceBear API)                               │
│ │  ├─ Name & Position                                           │
│ │  └─ Hover shadow effect                                       │
│ └─ Background: gray-50                                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 📬 CONTACT SECTION (id="hubungi")                               │
│ ├─ Layout: 3 columns (info + form)                              │
│ ├─ Left Column:                                                  │
│ │  ├─ Contact Info Box                                          │
│ │  │  ├─ Alamat                                                 │
│ │  │  ├─ Telepon (clickable)                                    │
│ │  │  ├─ Email (clickable)                                      │
│ │  │  └─ Jam Kerja                                              │
│ │  └─ Quick Links Box (emerald-600)                             │
│ ├─ Right Columns (2): Contact Form                              │
│ │  ├─ Name field                                                │
│ │  ├─ Email field                                               │
│ │  ├─ Phone field                                               │
│ │  ├─ Company field                                             │
│ │  ├─ Subject dropdown                                          │
│ │  ├─ Message textarea                                          │
│ │  └─ Submit button with Send icon                              │
│ └─ Background: gray-50                                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 🎯 CTA SECTION                                                  │
│ ├─ Background: emerald-600                                      │
│ ├─ Title: "Siap Mengoptimalkan Pengelolaan Limbah Anda?"        │
│ ├─ Subtitle: Call-to-action text                                │
│ ├─ Main Buttons:                                                │
│ │  ├─ "Minta Brosur" (white) → Opens Modal                      │
│ │  └─ "Hubungi Sekarang" (emerald-700) → Tel link               │
│ ├─ Info Cards (2):                                              │
│ │  ├─ Telepon card with icon + link                             │
│ │  └─ Email card with icon + link                               │
│ └─ Text: white                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ 🔻 FOOTER                                                       │
│ ├─ Background: slate-900                                        │
│ ├─ Grid: 4 columns                                              │
│ │  ├─ Column 1: Company Info                                    │
│ │  │  ├─ Company name & description                             │
│ │  │  └─ Social icons (Facebook, Twitter, LinkedIn)             │
│ │  ├─ Column 2: Produk                                          │
│ │  │  ├─ Incinerator                                            │
│ │  │  ├─ Jasa                                                   │
│ │  │  └─ Kontraktor                                             │
│ │  ├─ Column 3: Tautan Cepat                                    │
│ │  │  ├─ Home                                                   │
│ │  │  ├─ About                                                  │
│ │  │  ├─ Kontakt                                                │
│ │  │  └─ Blog                                                   │
│ │  └─ Column 4: Kontak                                          │
│ │     ├─ Email (with icon)                                      │
│ │     ├─ Telepon (with icon)                                    │
│ │     └─ Alamat (with icon)                                     │
│ └─ Bottom: Copyright + Policy links                             │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Modal Flow

### Brosur Modal (BrosurModal.tsx)

```
User clicks "Minta Brosur" button
         ↓
Modal opens with overlay
         ↓
Form displays:
├─ Nama (required)
├─ Email (required)
├─ Telepon (optional)
└─ Perusahaan (optional)
         ↓
User submits form
         ↓
Loading state with spinner
         ↓
Success message
         ↓
Modal closes (auto after 2s)
```

## 🎨 Color Palette

| Color      | Usage                   | Tailwind Class               |
| ---------- | ----------------------- | ---------------------------- |
| Emerald    | Primary/Buttons/Accents | `emerald-600`, `emerald-700` |
| Slate      | Footer background       | `slate-900`                  |
| Gray       | Text/Borders/Neutral    | `gray-300` to `gray-900`     |
| White      | Background/Text         | `white`                      |
| Light Gray | Alt background          | `gray-50`                    |

## 📱 Responsive Breakpoints

| Device        | Breakpoint | Styles Applied             |
| ------------- | ---------- | -------------------------- |
| Mobile        | Default    | Full width, stacked layout |
| Tablet        | `sm`       | 640px+                     |
| Desktop       | `md`       | 768px+ (most components)   |
| Large Desktop | `lg`       | 1024px+ (text sizing)      |

## ✨ Interactive Elements

| Element                | Trigger     | Action                        |
| ---------------------- | ----------- | ----------------------------- |
| Navbar links           | Click       | Smooth scroll to section      |
| "Minta Brosur" buttons | Click       | Open BrosurModal              |
| Product cards          | Hover       | Shadow increase, border color |
| Gallery images         | Hover       | Zoom + overlay text           |
| Carousel slides        | Auto/Manual | Fade transitions (1s)         |
| Indicator dots         | Click       | Jump to specific slide        |
| Form fields            | Input       | Validation + focus ring       |
| Submit buttons         | Click       | Form submission + feedback    |

## 🔗 Navigation Anchors

```
#home      → Hero carousel
#produk    → Product section
#tentang   → About section
#galeri    → Gallery section
#testimoni → Testimonial section
#hubungi   → Contact section
```

## 📊 Component Dependencies

```
welcome.tsx (main page)
├── Navbar
│   └── BrosurModal
├── HeroCarousel
│   └── BrosurModal
├── ProductSection
├── StatsSection
├── AboutSection
├── GallerySection
├── TestimonialSection
├── ContactSection
├── CTASection
│   └── BrosurModal
└── Footer
```

## 🎬 Animation Timings

- **Carousel fade**: 1000ms ease-in-out
- **Auto-scroll interval**: 5000ms (5 seconds)
- **Hover transitions**: 200-300ms
- **Modal fade-in**: Default (fast)
- **Image zoom (hover)**: 300ms

## 📝 Content Customization Points

Replace these with real content:

1. **Hero Carousel**: Update images and text in slides array
2. **Products**: Modify product data and icons
3. **Gallery**: Update gallery images (currently using Unsplash placeholders)
4. **Testimonials**: Add real client testimonials and avatars
5. **Contact Info**: Update phone, email, address
6. **About Section**: Update company description
7. **Stats**: Customize numbers for your company

---

**This documentation is live and reflects the current landing page structure.**
