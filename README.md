# Dabali Cafe - Restaurant Landing Page

A modern, premium restaurant landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Premium glassmorphism effects, smooth animations, and vibrant color palette
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Components**:
  - Sticky navigation with mobile menu
  - Hero section with animated stats
  - Image gallery with lightbox
  - Testimonials carousel
  - Booking form with date/time selection
  - Comprehensive footer

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Google Fonts (Playfair Display & Inter)
- **Icons**: SVG icons and emojis

## 📁 Project Structure

```
dabali-website/
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BookingSection.tsx
│   │   └── Footer.tsx
│   ├── lib/                 # Data and utilities
│   │   └── data.ts
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/
│   └── assets/              # Images and static files
└── package.json
```

## 🎨 Design System

The project includes a comprehensive design system with:

- **Color Palette**: Warm restaurant theme with gold, brown, and orange accents
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Custom keyframe animations for smooth transitions
- **Components**: Reusable glassmorphism cards, buttons, and utilities

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dabali-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Restaurant Information

Edit `app/lib/data.ts` to update:

- Restaurant name and contact details
- Menu items and categories
- Testimonials
- Gallery images

### Modify Design

Edit `app/globals.css` to customize:

- Color palette (CSS variables)
- Typography
- Animations
- Spacing and layout

### Add New Sections

Create new components in `app/components/` and import them in `app/page.tsx`

## 🎯 Future Enhancements

- [ ] Backend integration with Supabase for booking management
- [ ] Email notifications for reservations
- [ ] Admin dashboard for managing bookings
- [ ] Online ordering system
- [ ] Multi-language support
- [ ] Blog section for recipes and news

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any inquiries, please contact:

- Email: info@dabalicafe.com
- Phone: +977 1234567890

---

Built with ❤️ for Dabali Cafe
