# Clinic Demo - MelonPixels Landing Page

A demo landing page for a Philippine dental clinic, built as a showcase piece for MelonPixels web services.

## Overview

This project demonstrates a high-converting, mobile-first landing page targeting medical/dental clinics in the Philippines. It was built using the MelonPixels launch-site-starter as a base.

## Fictional Business

**Smile Care Dental Clinic** - A Metro Manila dental practice looking to attract more patients through a professional online presence.

## Sections

1. **Hero** - Clinic-focused value proposition with CTA
2. **Problem** - Pain points for clinic owners (visibility, no-shows, outdated web presence)
3. **Solution** - How MelonPixels addresses these pain points
4. **Services** - Dental services offered (General, Cosmetic, Orthodontics)
5. **Pricing** - MelonPixels website packages (Launch, Growth, Authority)
6. **Testimonials** - Fictional clinic owner quotes
7. **FAQ** - Common questions about web services for clinics
8. **CTA** - Final conversion section with contact form

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Design Tokens**: MelonPixels brand colors (see `docs/melonpixels-design-direction-2026-03-29.md`)

## Design Tokens

The page uses the MelonPixels color palette:

- Primary: `--melon-800` (#126B58), `--melon-700` (#1A8C73)
- Background: `--melon-50` (#F0F9F7), `--melon-100` (#E6F4F1)
- Dark CTA: `--melon-900` (#0C4A3E)
- Neutrals: `--gray-900`, `--gray-600`, `--gray-400`

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Notes for Starter Kit Improvements

1. **Retainers Component**: The `Retainers` component from the original starter is not included in this demo. Consider adding it back for full feature parity.

2. **Lead Form**: Uses Tally.so embed (`https://tally.so/r/w95xj7`). Replace with actual clinic form or preferred lead capture solution.

3. **Analytics**: The components include gtag tracking stubs. Replace with actual Google Analytics or preferred analytics solution.

4. **Deployment**: This demo was built locally. For actual deployment, consider Vercel, Netlify, or Philippine-friendly hosting providers.

## Verification

- [x] Build succeeds: `npm run build`
- [x] TypeScript passes: `npx tsc --noEmit`
- [x] All 8 sections present
- [x] Design tokens applied from MelonPixels design direction

## Future Enhancements

- Add online booking integration (Calendly, Acuity, etc.)
- Add Google Business Profile optimization section
- Add patient testimonial video embeds
- Add clinic location map
- Add before/after gallery for cosmetic dentistry
