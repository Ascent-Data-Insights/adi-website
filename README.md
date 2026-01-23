# Ascent Data Insights Website

A modern, professional website for Ascent Data Insights built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Catalyst UI components
- **Fonts**: Kodchasan (headings), Manrope (body text)
- **Deployment**: Vercel (or similar)

## Brand Colors

- Primary: `#03344E` (Deep Blue)
- Secondary: `#4785BF` (Sky Blue)
- Accent: `#FB8500` (Orange)

## Current Status

### ✅ Completed

- [x] Project setup with Next.js, TypeScript, and Tailwind
- [x] Brand colors and fonts configured
- [x] Homepage with all sections:
  - Hero with animated gradient background (swappable animations)
  - Three service pillars
  - Why Work With Us section
  - Testimonials
  - Case studies preview
  - About us brief
  - Contact CTA
- [x] Navigation header with mobile menu
- [x] Footer with links
- [x] Logo integration

### 🚧 To Do

- [ ] Service detail pages:
  - `/services/data-modernization`
  - `/services/ai-strategy`
  - `/services/innovation-engineering`
- [ ] About page (`/about`)
- [ ] Contact page with:
  - Side-by-side layout
  - Calendly embed
  - Contact form (name, email, message)
- [ ] Case study detail pages
- [ ] Replace placeholder images with real photos
- [ ] Fill in testimonial names and details
- [ ] Add team photos and full names

## Hero Animation

The hero section currently uses an animated gradient. To swap animations:

1. Open `app/components/Hero.tsx`
2. Comment out the current animation import/usage
3. Uncomment the alternative (e.g., `FloatingParticles`)

Available animations:
- `AnimatedGradient` - Smooth gradient animation (current)
- `FloatingParticles` - Particle network animation

## Project Structure

```
app/
├── components/
│   ├── hero-animations/
│   │   ├── AnimatedGradient.tsx
│   │   └── FloatingParticles.tsx
│   ├── Hero.tsx
│   ├── ThreePillars.tsx
│   ├── WhyWorkWithUs.tsx
│   ├── Testimonials.tsx
│   ├── CaseStudies.tsx
│   ├── AboutBrief.tsx
│   ├── ContactCTA.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── globals.css
├── layout.tsx
└── page.tsx
components/          # Catalyst UI components
public/
└── logo.png
```

## Next Steps

1. Test the site thoroughly
2. Build out remaining pages (services, about, contact)
3. Add real content and images
4. Deploy to Vercel or similar platform
