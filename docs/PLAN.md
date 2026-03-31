# PLAN.md — clinic-demo Landing Page

## Objective

Build a mobile-first landing page for a Philippine dental clinic (clinic-demo) to demonstrate MelonPixels' ability to create high-converting client delivery prototypes.

## Scope Boundaries

**In Scope:**
- Next.js 16 + Tailwind CSS v4 + TypeScript stack
- 8 landing page sections: Hero, Problem, Solution, Services, Pricing, Proof, FAQ, CTA
- Contact form with Tally iframe embed
- GitHub Pages deployment
- Responsive/mobile-first design

**Out of Scope:**
- Backend/API integration (contact form uses Tally embed)
- CMS or content management
- SEO optimization beyond basic meta tags
- Analytics integration
- Multi-language support

## Acceptance Criteria

### Given a user visits the clinic-demo landing page, When the page loads, Then:

1. All 8 sections render correctly without layout shifts
2. Navigation between sections is smooth (anchor links)
3. Contact form is visible and functional via Tally embed
4. Page is fully responsive on mobile (375px+), tablet (768px+), and desktop (1024px+)

### Given a user views the page on a mobile device, When they scroll, Then:
1. Hamburger menu works (if implemented)
2. All content is readable without horizontal scrolling
3. Touch targets are appropriately sized (44px minimum)

### Given Lighthouse audit, Then:
1. Performance score >= 85
2. Accessibility score >= 85
3. Best Practices score >= 85
4. SEO score >= 85

## Verification Approach

1. Manual visual inspection across Chrome DevTools device emulations
2. Lighthouse audit via CLI: `npm run build && npx lighthouse http://localhost:3000 --output=json`
3. Test contact form submission (without actually submitting - verify Tally embed loads)
4. Verify GitHub Pages deployment succeeds

## Task List

- [x] Initialize Next.js project with TypeScript
- [x] Configure Tailwind CSS v4
- [x] Build Hero section
- [x] Build Problem section
- [x] Build Solution section
- [x] Build Services section
- [x] Build Packages/Pricing section
- [x] Build Proof/Testimonials section
- [x] Build FAQ section
- [x] Build Contact Form with Tally embed
- [x] Build Footer CTA section
- [x] Configure GitHub Pages deployment
- [x] Run Lighthouse audit
- [ ] **Create PAUL handoff artifacts (THIS TASK)**
