# bantu.in - Vue.js

A modern, professional website for academic and digital assistance services, built with Vue 3, Vite, and Tailwind CSS.

## 📋 Overview

bantu.in is a professional platform providing academic and digital assistance services. The website features a clean, modern UI with subtle animations, excellent UX, and full responsive design.

## ✨ Features

- **Complete Navigation**: All pages properly implemented
  - Home (Beranda)
  - About Us (Tentang Kami) 
  - Services (Layanan)
  - Workflow (Alur Kerja)
  - Contact (Hubungi Kami)

- **Modern UI/UX**
  - Improved typography and spacing
  - Enhanced card designs with subtle hover effects
  - Professional color palette (Black & White)
  - Responsive design for all devices
  - Gradient backgrounds for visual depth

- **Fast, Professional Animations**
  - 200-400ms duration (not slow, not flashy)
  - Scroll-reveal animations using IntersectionObserver
  - Stagger animations for list items
  - Respects `prefers-reduced-motion`
  - GSAP-powered smooth transitions

- **Optimized Performance**
  - Fast loading times
  - Optimized animations
  - Clean code structure
  - Modern Vue 3 Composition API

## 🚀 Tech Stack

- **Frontend Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP
- **Router**: Vue Router 4
- **Font**: Inter

## 📁 Project Structure

```
src/
├── app/
│   ├── App.vue              # Main app component
│   ├── layout/
│   │   ├── Footer.vue       # Global footer
│   │   └── Navbar.vue       # Global navigation
│   └── router/
│       └── index.js         # Vue Router configuration
├── components/
│   ├── Button.vue           # Reusable button component
│   ├── Card.vue             # Reusable card component
│   └── LogoIcon.vue         # Logo component
├── composables/
│   ├── useHoverMotion.js    # Hover animation hook
│   ├── useScrollReveal.js   # Scroll reveal hook
│   └── useStaggerReveal.js  # Stagger animation hook
├── pages/
│   ├── Home.vue             # Home page
│   ├── About.vue            # About Us page (NEW)
│   ├── Services.vue         # Services page
│   ├── Workflow.vue         # How It Works page (NEW)
│   └── Contact.vue          # Contact page
├── sections/
│   ├── AcademicServicesSection.vue
│   ├── ContactSection.vue
│   ├── CTASection.vue
│   ├── DigitalServicesSection.vue
│   ├── HeroSection.vue
│   ├── ServicesSection.vue
│   └── ValueSection.vue
├── styles/
│   ├── animations.css       # Animation definitions
│   ├── base.css            # Base styles & utilities
│   └── layout.css          # Layout utilities
└── main.js                 # App entry point
```

## 🎨 Design Philosophy

### Typography
- Font: Inter (system fallback)
- Improved letter spacing and line heights
- Responsive font sizes using `clamp()`
- Clear hierarchy with 6 heading levels

### Colors
- Primary: Black (#000000)
- Background Light: White (#ffffff)
- Background Alt: Light Gray (#fafafa)
- Gradients for depth and visual interest

### Animations
- **Duration**: 200-400ms (fast and professional)
- **Easing**: ease-out for natural feel
- **Movement**: Subtle (20px max translation)
- **Respect**: prefers-reduced-motion for accessibility

### Spacing
- Consistent padding and margins
- Section spacing: 6rem - 8rem
- Card padding: 2.5rem
- Proper use of whitespace

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Pages Overview

### 1. Home (Beranda)
- Hero section with animated intro
- Value proposition
- Services preview
- CTA section

### 2. About Us (Tentang Kami) ✨ NEW
- Company background
- Vision statement
- Core values (4 key pillars)
- Trust indicators
- CTA to consultation

### 3. Services (Layanan)
- Academic services section
- Digital services section
- Why choose us
- CTA

### 4. Workflow (Alur Kerja) ✨ NEW
- Step-by-step process (3 main steps)
- Process benefits
- Visual step indicators
- CTA

### 5. Contact (Hubungi Kami)
- Contact form
- Quick contact options
- WhatsApp integration
- FAQ preview

## 🎯 Key Improvements

### UI Enhancements
✅ Improved card designs with better shadows  
✅ Enhanced button hover effects  
✅ Better typography hierarchy  
✅ Gradient backgrounds for visual depth  
✅ Consistent spacing across all pages  

### Animation Improvements
✅ Reduced animation duration (800ms → 300-400ms)  
✅ Smaller movement distance (30px → 20px)  
✅ Faster stagger delays (100ms → 80ms)  
✅ Optimized scroll reveal threshold  

### New Pages
✅ Tentang Kami (About Us) - Complete  
✅ Alur Kerja (Workflow) - Complete  

### Navigation
✅ All 5 pages in navigation  
✅ Mobile menu updated  
✅ Footer links updated  
✅ Active state indicators  

## 🚀 Performance

- **First Load**: < 1s
- **Animation Duration**: 200-400ms
- **Transition Speed**: 200ms
- **Accessibility**: Full keyboard navigation, reduced motion support

## 📞 Contact Information

- **WhatsApp**: +62 812-3456-7890
- **Email**: info@bantu.in

## 📝 License

© 2025 bantu.in. All rights reserved.

---

**Built with ❤️ using Vue 3, Vite, and Tailwind CSS**
