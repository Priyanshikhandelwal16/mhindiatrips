# MHIndiaTrips - Premium Website Redesign & Food Integration

## Task List

### Phase 1: Data Expansion
- [x] 1. Expand fallback `states.json` with 25+ states, each with famous local food
- [x] 2. Expand fallback `foods.json` with 10+ famous Indian dishes
- [x] 3. Clean up `mockData.ts` (fixed syntax error, set as seed defaults)

### Phase 2: Design System & Reusable Components
- [x] 4. Enhance `src/app/globals.css` with luxury utilities (Ken Burns, marquee, glass, reveals)
- [x] 5. Create `src/components/home/HeroSlider.tsx` (auto-playing cinematic slider)
- [x] 6. Create `src/components/home/Reveal.tsx` (scroll-reveal wrapper)

### Phase 3: Homepage
- [x] 7. Rewrite `src/app/[locale]/page.tsx` with 15+ premium sections including Taste of India Food section

### Phase 4: Navigation
- [x] 8. Redesign `src/components/navigation/Header.tsx` with mega-menu
- [x] 9. Enhance `src/components/navigation/Footer.tsx`

### Phase 5: Food & Destination Pages
- [x] 10. Redesign `src/app/[locale]/food/page.tsx` with cuisine categories
- [x] 11. Enhance `src/app/[locale]/food/[slug]/page.tsx` with related destinations
- [x] 12. Redesign `src/app/[locale]/destinations/page.tsx` with food links
- [x] 13. Enhance `src/app/[locale]/destinations/[stateSlug]/page.tsx` with Signature Food section

### Phase 6: Performance & Testing
- [x] 14. Add lazy loading, responsive classes, animations across all pages
- [x] 15. Run build (successful) and dev server (running)
- [x] 16. Fix root redirect `/` -> `/en` (created src/app/page.tsx + layout.tsx)
