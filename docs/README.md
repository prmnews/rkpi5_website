# RKPi5 Marketing Website - Documentation

**Purpose:** Marketing website for RKPi5 + Rapture Kit Content Platform  
**Status:** Planning complete, awaiting approval before development  
**Launch Strategy:** Beta program (3 testers) → Learn → Public launch  
**Target Beta:** < 2 weeks from approval  
**Target Public Launch:** Q1 2026 (post-beta validation)

---

## Quick Start

### Phase 0: Beta Program (DO NOT SKIP)

**Before any website development:**
1. **Build beta units** (DIY, Solo, Field kits)
2. **Ship to 3 beta testers**
3. **Conduct 60-min Zoom onboarding** per tester
4. **Collect 2-4 weeks of real usage feedback**
5. **Create marketing materials** from beta learnings:
   - Product demos (real footage)
   - Tutorial videos
   - Troubleshooting guides
   - Testimonials
6. **Build support wiki** based on actual user questions

**Why Beta First?**
- Authentic marketing content from real users
- Identify pain points before public launch
- Validate SKU positioning (DIY vs Solo vs Field)
- Create genuine testimonials and use cases

### Phase 1: Review Documentation (After Beta Complete)

Read these files in order:
1. **product-brief.md** - Product positioning, target market, pricing, beta strategy
2. **website-structure.md** - Technical specs, page structure, design system
3. **PROMPTS.md** - AI agent prompts for building the website

### Phase 2: Choose Your Approach

**Option A: Iterative Build (Recommended)**
- Use Prompts 1-10 sequentially
- More control, easier to review
- Estimated time: 4-6 hours

**Option B: All-in-One Build**
- Use Prompt 11 only
- Fastest approach
- Estimated time: 2-3 hours

### Phase 3: Provide Context

When using prompts, also provide:
- `docs/product-brief.md` (updated with beta learnings)
- Beta testimonials and use cases
- Product demo videos (from beta)
- Design reference: https://linear.app

### Phase 4: Deploy

- Platform: Replit
- Framework: Next.js 14
- Configure environment variables (Clerk, Convex, Stripe)

---

## Files in This Directory

### Planning Documents

1. **product-brief.md**
   - Value proposition
   - Target personas
   - Competitive positioning
   - Pricing tiers
   - Marketing messages
   - SEO keywords

2. **website-structure.md**
   - Site structure (10 pages)
   - Component architecture
   - Design system (Linear-inspired)
   - Tech stack details
   - Convex schema
   - Performance targets

3. **PROMPTS.md**
   - 11 AI agent prompts
   - Prompt execution order
   - Recommended approach
   - Additional context needed

4. **README.md** (this file)
   - Quick start guide
   - File overview
   - Next steps

---

## Website Overview

### Pages (10 Total)

**Public (7):**
- Homepage - Hero, features, CTA
- Product - Features, specs, demo
- Pricing - 3 tiers, comparison
- Documentation - MDX docs with search
- Use Cases - Customer stories
- About - Mission, team, contact
- Blog - Updates, insights

**Protected (3):**
- Dashboard - Orders, downloads
- Checkout - Stripe payment
- Admin - Waitlist, orders, analytics

### Key Features

1. **Beta Signup Form** - Priority access for beta cohort
2. **Support Wiki** - Troubleshooting guides from beta learnings
3. **Waitlist System** - Convex storage, email confirmation (post-beta)
4. **Product Demos** - Real footage from beta testers
5. **Stripe Checkout** - One-time payments ($99, $299, $499)
6. **Responsive Design** - Mobile-first, touch-optimized

**Deferred Until Post-Beta:**
- Admin dashboard (not needed for beta cohort of 3)
- Advanced documentation search
- Blog system

---

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- Framer Motion (animations)
- Lucide React (icons)

**Backend:**
- Convex (database, realtime)
- Clerk (authentication)
- Stripe (payments)
- Resend (email notifications)

**Deployment:**
- Replit (hosting)
- Vercel Analytics (metrics)

---

## Design Inspiration

**Primary:** Linear.app
- Clean, contemporary aesthetic
- Generous whitespace
- Subtle gradients
- Fast animations (150-200ms)
- Card-based layouts
- Excellent typography

**Secondary:**
- Vercel.com (developer focus)
- Stripe.com (pricing page)
- Tailwind UI (component patterns)

---

## Development Timeline

### Phase 0: Beta Program (< 2 weeks)
- [ ] Build 3 beta units (DIY, Solo, Field)
- [ ] Ship to beta testers
- [ ] 60-min Zoom onboarding per tester
- [ ] 2-4 weeks hands-on testing
- [ ] Collect feedback via 1:1 discussions
- [ ] Film product demos, tutorials
- [ ] Create troubleshooting guides

### Phase 1: Beta Website (Week 1-2)
**Minimal launch to support beta program only:**
- [ ] Project setup (Next.js, Tailwind, Shadcn)
- [ ] Basic homepage (hero + beta signup)
- [ ] Product overview page
- [ ] Beta signup form (email → manual followup)
- [ ] Support wiki (empty shell, populate during beta)

### Phase 2: Public Website (Week 3-6, Post-Beta)
**Full marketing site with beta-derived content:**
- [ ] Update homepage with beta testimonials
- [ ] Product demos (real footage from beta)
- [ ] Full pricing page (3 tiers)
- [ ] Support wiki (populated with beta FAQs)
- [ ] Convex + Clerk + Stripe configuration
- [ ] Waitlist system
- [ ] Checkout flow

### Phase 3: Polish & Deploy (Week 7-8)
- [ ] Mobile optimization
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Replit deployment
- [ ] Influencer demo program (Prophecy Watchers, Lamb & Lion)

**Total:** 2 weeks beta website + 6 weeks full website = 8 weeks to public launch-ready

---

## Success Metrics

### Launch Goals (Month 1)

| Metric | Target |
|--------|--------|
| Unique visitors | 1,000 |
| Waitlist signups | 100 |
| Demo requests | 20 |
| Conversion rate | 10% (waitlist → customer) |
| Page load time | <3s |
| Lighthouse score | >90 |

### Revenue Goals (Quarter 1)

| Metric | Target |
|--------|--------|
| Units sold | 50 |
| Revenue | $12,500 |
| Average order value | $250 |
| Customer acquisition cost | <$50 |

---

## Next Steps

### CRITICAL: DO NOT START WEBSITE DEVELOPMENT UNTIL BETA COMPLETE

**Current Phase: Planning → Beta Prep**

1. **✅ Review all documentation** in this folder
2. **Scott's approval gate** - Comprehensive review of all 3 docs
3. **Build beta units** (3 units: DIY, Solo, Field)
4. **Execute beta program** (2-4 weeks)
5. **Create marketing materials** from beta learnings
6. **THEN start website development** with authentic content

**Beta Deliverables Required Before Website Dev:**
- Product demo videos (real usage footage)
- Tutorial videos (setup, troubleshooting)
- User testimonials (from 3 beta testers)
- FAQs and troubleshooting guides (from actual user questions)
- Use case validation (which SKUs resonate? What messaging works?)

---

## Support

**For questions about:**
- Product positioning → See `product-brief.md`
- Technical specs → See `website-structure.md`
- AI prompts → See `PROMPTS.md`
- RKPi5 product → See `../productBrief.md`, `../prd.md`

---

**Prepared By:** Sarah (Product Owner)  
**Date:** November 11, 2025  
**Status:** Ready for development

