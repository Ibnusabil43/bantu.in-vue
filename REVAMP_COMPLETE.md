# TOTAL PRODUCT REVAMP - bantu.in

## Overview
This is a COMPLETE RE-ARCHITECTURE of the bantu.in website. Not a redesign, not a refactor - a total reset from the ground up.

## Core Philosophy

### Content Architecture
Every page has ONE singular purpose with ZERO content overlap:

1. **HOME** → Entry hub only
   - Brief 1-sentence introduction
   - 3 navigation cards to key pages
   - Single CTA to contact
   - NO service details, NO values explanation, NO workflow steps

2. **TENTANG KAMI** → Identity & values ONLY
   - Who we are (positioning)
   - 4 core values: Profesionalisme, Etika Akademik, Kerahasiaan, Kualitas
   - Commitment statement
   - NO services, NO workflow, NO contact info

3. **LAYANAN** → Service catalog ONLY
   - Academic services (Skripsi/Tesis, Makalah, Tugas Besar, Literature Review)
   - Digital services (Website, Sistem, Aplikasi Mobile)
   - Simple CTA
   - NO company story, NO values, NO process explanation

4. **ALUR KERJA** → Process timeline ONLY
   - 5 numbered steps: Konsultasi → Perencanaan → Pengerjaan → Review → Penyerahan
   - Each step with sub-tasks
   - Timeline visualization
   - NO service details, NO company values

5. **HUBUNGI KAMI** → Contact action ONLY
   - Contact form (Name, Email, Phone, Service, Message)
   - Contact info (Email, WhatsApp, Operating Hours)
   - NO explanations, NO marketing copy

### Design System

#### Color Palette (White Base Only)
```css
--color-background: #ffffff        /* Primary background */
--color-surface: #fafafa          /* Section backgrounds */
--color-surface-alt: #f5f5f5      /* Alternate surfaces */
--color-border: #e5e5e5           /* Default borders */
--color-border-strong: #d4d4d4    /* Emphasized borders */

--color-text-primary: #171717     /* Headings, primary text */
--color-text-secondary: #525252   /* Body text */
--color-text-tertiary: #737373    /* Muted text */

--color-accent: #000000           /* CTAs, primary actions */
--color-accent-hover: #262626     /* Hover states */
```

**Dark mode tokens exist but are NOT implemented** - prepared for future activation.

#### Typography Scale (Drastically Reduced)
```css
H1: 1.875rem - 2.5rem (30px - 40px)    /* Was 2.75rem - 4.5rem */
H2: 1.5rem - 1.875rem (24px - 30px)    /* Was 2rem - 3rem */
H3: 1.25rem - 1.5rem (20px - 24px)     /* Was 1.5rem - 2rem */
Body: 1rem (16px)                      /* Same */
Small: 0.875rem (14px)                 /* Same */
```

**Rationale**: Oversized typography removed. Professional, editorial sizing only.

#### Spacing System
```css
--space-section: 6rem - 8rem      /* Section vertical spacing */
--space-container: 1.5rem         /* Container padding */
--space-element: 1rem - 1.5rem    /* Element spacing */
```

#### Animation Philosophy
- **Fade-in only** - no scale, no pulse, no hero theatrics
- **Duration: 150-200ms** - instant, not showy
- **Easing: ease** - natural, not bouncy

## Technical Foundation

### Framework Stack
- **Vue.js** 3.5.24 - Composition API with `<script setup>`
- **Vue Router** 4.5.0 - Page navigation
- **Tailwind CSS** 4.1.18 - Utility-first styling
- **GSAP** 3.14.2 - Minimal fade animations only
- **Vite** (rolldown-vite) 7.2.5 - Build tool

### File Structure After Revamp
```
src/
├── pages/
│   ├── Home.vue          ✅ REBUILT - Entry hub only
│   ├── About.vue         ✅ REBUILT - Identity/values only
│   ├── Services.vue      ✅ REBUILT - Service catalog only
│   ├── Workflow.vue      ✅ REBUILT - Process timeline only
│   └── Contact.vue       ✅ REBUILT - Contact form/info only
├── styles/
│   ├── base.css          ✅ UPDATED - Design tokens, white base
│   ├── animations.css    ✅ SIMPLIFIED - Fade only
│   └── layout.css        (Existing)
```

### Removed Files/Sections
❌ `HeroSection.vue` - Eliminated hero pattern
❌ `TrustSection.vue` - Content moved to About page
❌ `ServicesSection.vue` - Content moved to Services page
❌ `WorkflowSection.vue` - Content moved to Workflow page
❌ `ValueSection.vue` - Content moved to About page
❌ `CTASection.vue` - Simplified inline CTAs only
❌ `ContactSection.vue` - Content moved inline to Contact page
❌ `AcademicServicesSection.vue` - Content moved inline to Services page
❌ `DigitalServicesSection.vue` - Content moved inline to Services page

All shared sections eliminated to prevent content duplication.

## Design Decisions

### Why White Base Only?
- Professional consultancy aesthetic, not startup SaaS
- Editorial feel: calm, structured, readable
- Institutional trust vs. trendy tech
- Dark mode prepared (tokens exist) but NOT activated

### Why Remove All Shared Sections?
Original problem: Every page repeated the same explanations
- Home showed services → Services page showed services (duplicate)
- Home showed values → About page showed values (duplicate)
- Multiple pages showed workflow steps (duplicate)

Solution: Complete separation of concerns
- Each page owns ONE type of content
- NO shared section components
- Content cannot repeat if pages don't import same sections

### Why Drastically Reduce Typography?
Original sizing was 40% too large (H1: 72px max)
- Felt like marketing landing page
- Not professional for academic/consultancy services
- New scale: H1 max 40px - readable, not showy

### Why Simplify Animations?
Original: Scale, pulse, hero effects, 300-600ms durations
New: Fade-in only, 150-200ms
- Professional sites don't have bouncy animations
- Institutional feel requires restraint
- Users don't come for theatrics, they come for services

## Content Deduplication Verification

### HOME (Entry Hub)
✅ NO service descriptions
✅ NO values explanation
✅ NO workflow steps
✅ NO contact form
Contains ONLY: 1 intro sentence, 3 navigation cards, 1 CTA

### TENTANG KAMI (Identity)
✅ NO service catalog
✅ NO workflow explanation
✅ NO contact details
Contains ONLY: Who we are, 4 values, commitment statement

### LAYANAN (Services)
✅ NO company values
✅ NO workflow steps
✅ NO contact form
Contains ONLY: 7 service cards (4 academic, 3 digital), simple CTA

### ALUR KERJA (Workflow)
✅ NO service details
✅ NO company values
✅ NO contact info
Contains ONLY: 5-step process timeline with sub-tasks

### HUBUNGI KAMI (Contact)
✅ NO service descriptions
✅ NO company story
✅ NO workflow explanation
Contains ONLY: Contact form, contact info, operating hours

**ZERO content overlap confirmed** ✅

## Migration Notes

### Before (Problems)
- 6 sections imported per page (HeroSection, TrustSection, ServicesSection, etc.)
- Same explanations repeated across 4+ pages
- Oversized typography (H1: 72px)
- Complex animations (scale, pulse, stagger)
- Dark hero sections everywhere
- Felt like "startup SaaS template"

### After (Solutions)
- Each page is self-contained, no shared section imports
- Singular purpose per page, zero duplication
- Professional typography (H1: 40px max)
- Minimal animations (fade-in only, 150ms)
- White base throughout
- Feels like "professional consultancy platform"

## Build & Run

```bash
npm install
npm run dev
```

Navigate to:
- `/` - Home (entry hub)
- `/tentang-kami` - About (identity/values)
- `/services` - Services (catalog)
- `/alur-kerja` - Workflow (process)
- `/contact` - Contact (form/info)

---

**Status**: COMPLETE REVAMP ✅  
**Phase**: Total content re-architecture finished  
**Result**: Zero content overlap, white-base design, professional editorial feel  
**Dark Mode**: Tokens ready, NOT implemented  
**Last Updated**: 2024 (Final restructure)
