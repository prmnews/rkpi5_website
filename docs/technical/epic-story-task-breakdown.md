# RKPi5 Marketing Website - Epic/Story/Task Breakdown

**Project:** RKPi5 Marketing Website  
**Date:** November 11, 2025  
**Created By:** Winston (BMAD Architecture Agent)  
**For:** Scott E. Townsend

---

## Overview

This document provides a comprehensive breakdown of all EPICs, Stories, and Tasks for the RKPi5 marketing website. The structure is designed to support:

1. **Agile Development:** Clear epic → story → task hierarchy
2. **Git Branching:** Each EPIC maps to an `epic/[name]` branch
3. **Multi-Agent Prototyping:** UI stories marked for parallel agent development
4. **Scrum Management:** Developer agents can focus on specific epics

---

## Legend

**Story Types:**
- 🎨 **UI Prototype Candidate** - Eligible for multi-agent parallel development
- 🔧 **Standard Implementation** - Single-agent or manual development
- ⚙️ **Backend/Integration** - Requires careful consistency, single-agent only

**Story Status:**
- 📝 **Not Started**
- 🏗️ **In Progress**
- ✅ **Complete**

**Task Estimation:**
- **S** (Small): 1-2 hours
- **M** (Medium): 3-5 hours
- **L** (Large): 6-8 hours
- **XL** (Extra Large): 8+ hours

---

## EPIC Summary

| Epic # | Epic Name | Stories | Est. Time | Git Branch | Priority |
|--------|-----------|---------|-----------|------------|----------|
| **1** | Foundation & Project Init | 3 | 6-8 hours | `epic/foundation` | **P0** |
| **2** | Design System | 2 | 4-6 hours | `epic/design-system` | **P0** |
| **3** | Layout & Navigation | 4 | 8-10 hours | `epic/layout` | **P0** |
| **4** | Homepage | 6 | 12-16 hours | `epic/homepage` | **P1** |
| **5** | Product Pages | 5 | 10-14 hours | `epic/product` | **P1** |
| **6** | Pricing System | 4 | 8-12 hours | `epic/pricing` | **P1** |
| **7** | Support Wiki | 3 | 6-8 hours | `epic/support` | **P2** |
| **8** | Use Cases | 2 | 4-6 hours | `epic/use-cases` | **P2** |
| **9** | About & Contact | 3 | 6-8 hours | `epic/about` | **P2** |
| **10** | Authentication | 4 | 8-12 hours | `epic/auth` | **P1** |
| **11** | E-commerce | 5 | 12-16 hours | `epic/ecommerce` | **P1** |
| **12** | User Dashboard | 4 | 8-10 hours | `epic/dashboard` | **P2** |
| **13** | Admin Dashboard | 5 | 10-14 hours | `epic/admin` | **P2** |
| **14** | Convex Backend | 6 | 12-16 hours | `epic/backend` | **P0** |

**Total Estimated Time:** 116-162 hours

---

# EPIC 1: Foundation & Project Init

**Branch:** `epic/foundation`  
**Priority:** P0 (Must be completed first)  
**Dependencies:** None  
**Estimated Time:** 6-8 hours

## Overview
Initialize Next.js project, configure core tooling, and set up development environment.

---

## Story 1.1: Initialize Next.js Project with TypeScript & Tailwind 🔧

**Description:** Bootstrap the Next.js application using the official starter template  
**Acceptance Criteria:**
- Next.js 14 installed with App Router
- TypeScript configured
- Tailwind CSS integrated
- ESLint set up
- Project runs `npm run dev` successfully

### Tasks
- [x] **Task 1.1.1:** Run create-next-app CLI command **(S)** 
  ```bash
  npx create-next-app@latest rkpi5-marketing \
    --typescript \
    --tailwind \
    --app \
    --src-dir \
    --import-alias "@/*" \
    --eslint
  ```
- [x] **Task 1.1.2:** Verify project structure matches architecture spec **(S)**
- [x] **Task 1.1.3:** Test development server boots successfully **(S)**

---

## Story 1.2: Install and Configure Shadcn/ui 🔧

**Description:** Set up Shadcn/ui component library with custom theme  
**Acceptance Criteria:**
- Shadcn/ui initialized with Linear-inspired theme
- Core components installed (button, card, input, form, toast, dialog, etc.)
- `components.json` configured correctly
- Test component renders successfully

### Tasks
- [ ] **Task 1.2.1:** Initialize Shadcn/ui with `npx shadcn-ui@latest init` **(S)**
- [ ] **Task 1.2.2:** Configure `components.json` with Linear-inspired colors **(M)**
  - Primary: `#0ea5e9` (sky blue)
  - Gray scale from architecture doc
- [ ] **Task 1.2.3:** Install core UI components **(M)**
  ```bash
  npx shadcn-ui@latest add button card input form toast dialog dropdown-menu tabs accordion badge
  ```
- [ ] **Task 1.2.4:** Create test page to verify components render **(S)**

---

## Story 1.3: Configure Convex, Clerk, and Resend ⚙️

**Description:** Set up backend services and authentication  
**Acceptance Criteria:**
- Convex initialized and connected
- Clerk authentication configured
- Resend API key configured (provided by Scott)
- Environment variables documented in `.env.local.example`

### Tasks
- [ ] **Task 1.3.1:** Initialize Convex with `npx convex dev` **(S)**
- [ ] **Task 1.3.2:** Install and configure Clerk SDK **(M)**
  - Install `@clerk/nextjs`
  - Set up middleware for route protection
  - Configure public/protected routes
- [ ] **Task 1.3.3:** Install Resend SDK and configure **(S)**
  - Install `resend`
  - Add API key to env vars (Scott to provide)
- [ ] **Task 1.3.4:** Create `.env.local.example` with all required keys **(S)**
- [ ] **Task 1.3.5:** Document setup process in README **(M)**

---

# EPIC 2: Design System

**Branch:** `epic/design-system`  
**Priority:** P0 (Foundational)  
**Dependencies:** EPIC 1  
**Estimated Time:** 4-6 hours

## Overview
Establish design system components, typography, colors, and spacing based on Linear.app inspiration.

---

## Story 2.1: Configure Tailwind Theme & Design Tokens 🔧

**Description:** Extend Tailwind config with custom design tokens  
**Acceptance Criteria:**
- Custom colors defined in `tailwind.config.ts`
- Typography scale configured
- Spacing and layout tokens added
- Font families loaded (Inter + JetBrains Mono)

### Tasks
- [ ] **Task 2.1.1:** Add custom color palette to Tailwind config **(M)**
  - Primary blues (#0ea5e9, #0284c7, #0c4a6e)
  - Accent colors (purple, green, orange)
  - Gray scale
- [ ] **Task 2.1.2:** Configure typography scale **(S)**
  - Font sizes (xs to 6xl)
  - Line heights
  - Font weights
- [ ] **Task 2.1.3:** Load Inter and JetBrains Mono fonts **(M)**
  - Use Next.js font optimization
  - Configure font family in Tailwind
- [ ] **Task 2.1.4:** Add custom spacing/layout tokens **(S)**
  - Max widths (content, container, wide)
  - Section spacing

---

## Story 2.2: Create Utility Components & Helpers 🔧

**Description:** Build foundational utility components used throughout app  
**Acceptance Criteria:**
- `Container` component with responsive max-width
- `cn()` utility for className merging (from Shadcn)
- Loading spinner component
- Error boundary component

### Tasks
- [ ] **Task 2.2.1:** Create `Container` component **(S)**
  - Responsive max-width (1280px)
  - Horizontal padding
  - Center alignment
- [ ] **Task 2.2.2:** Create `LoadingSpinner` component **(S)**
  - Animated spinner (Lucide icon or CSS)
  - Size variants (sm, md, lg)
- [ ] **Task 2.2.3:** Create `ErrorBoundary` component **(M)**
  - Catch React errors
  - Display friendly error message
  - Log to console
- [ ] **Task 2.2.4:** Set up `lib/utils.ts` with helper functions **(S)**
  - `cn()` for className merging
  - `formatDate()`, `formatCurrency()` helpers

---

# EPIC 3: Layout & Navigation

**Branch:** `epic/layout`  
**Priority:** P0 (Required for all pages)  
**Dependencies:** EPIC 2  
**Estimated Time:** 8-10 hours

## Overview
Build site-wide layout components including header, footer, and navigation systems.

---

## Story 3.1: Create Header with Desktop Navigation 🎨

**Description:** Design and implement site header with logo and desktop nav  
**Acceptance Criteria:**
- Sticky header with transparent-to-solid on scroll
- Logo placeholder (no logo yet)
- Desktop navigation links (Homepage, Product, Pricing, Support, About)
- CTA button (Join Waitlist)
- Responsive breakpoint at 1024px

**UI Prototype Candidate:** ✅ Yes (3 variants)

### Tasks
- [ ] **Task 3.1.1:** Create `Header.tsx` component skeleton **(S)**
- [ ] **Task 3.1.2:** Implement sticky header with scroll behavior **(M)**
  - Use Framer Motion for smooth transitions
  - Transparent → solid background on scroll
- [ ] **Task 3.1.3:** Add logo placeholder and navigation links **(M)**
- [ ] **Task 3.1.4:** Add CTA button with hover effects **(S)**
- [ ] **Task 3.1.5:** Style with Tailwind (desktop view) **(M)**

**Multi-Agent Prototype Branches:**
- `prototype/header-v1` - Centered logo, side nav
- `prototype/header-v2` - Left logo, right nav
- `prototype/header-v3` - Minimal header, emphasized CTA

---

## Story 3.2: Create Mobile Navigation Menu 🎨

**Description:** Build hamburger menu for mobile devices  
**Acceptance Criteria:**
- Hamburger icon triggers slide-out menu
- Full-height overlay with navigation links
- Smooth open/close animations
- Accessible (keyboard navigation, ARIA labels)

**UI Prototype Candidate:** ✅ Yes (2 variants)

### Tasks
- [ ] **Task 3.2.1:** Create `MobileMenu.tsx` component **(M)**
- [ ] **Task 3.2.2:** Implement hamburger icon animation **(S)**
- [ ] **Task 3.2.3:** Build slide-out menu with Framer Motion **(M)**
- [ ] **Task 3.2.4:** Add accessibility features (focus trap, ARIA) **(M)**
- [ ] **Task 3.2.5:** Test on mobile devices **(S)**

**Multi-Agent Prototype Branches:**
- `prototype/mobile-nav-v1` - Slide from right
- `prototype/mobile-nav-v2` - Slide from left with overlay

---

## Story 3.3: Create Footer Component 🔧

**Description:** Build site footer with links and copyright  
**Acceptance Criteria:**
- Footer sections: Product, Support, Company
- Social links (placeholder icons)
- Copyright notice
- Responsive layout (stacked on mobile)

### Tasks
- [ ] **Task 3.3.1:** Create `Footer.tsx` component **(M)**
- [ ] **Task 3.3.2:** Add footer link sections **(S)**
  - Product: Pricing, Use Cases
  - Support: Docs, FAQs, Contact
  - Company: About, Blog (future)
- [ ] **Task 3.3.3:** Add social icon placeholders **(S)**
- [ ] **Task 3.3.4:** Style with responsive layout **(M)**

---

## Story 3.4: Integrate Layout into Root Layout 🔧

**Description:** Wire Header and Footer into `app/layout.tsx`  
**Acceptance Criteria:**
- Header appears on all pages
- Footer appears on all pages
- Main content area properly spaced
- Layout persists across route changes

### Tasks
- [ ] **Task 3.4.1:** Update `app/layout.tsx` with Header/Footer **(S)**
- [ ] **Task 3.4.2:** Add proper spacing for main content **(S)**
- [ ] **Task 3.4.3:** Test layout on multiple pages **(S)**

---

# EPIC 4: Homepage

**Branch:** `epic/homepage`  
**Priority:** P1 (Core page)  
**Dependencies:** EPIC 3  
**Estimated Time:** 12-16 hours

## Overview
Build comprehensive homepage with hero, features, testimonials, pricing preview, and CTAs.

---

## Story 4.1: Create Hero Section with Waitlist Form 🎨

**Description:** Design and implement above-the-fold hero with value prop and signup  
**Acceptance Criteria:**
- Headline: "Biblical Resources When Networks Fail"
- Subheadline with key benefits
- Waitlist signup form (email, name, phone optional, use case textarea)
- Product image placeholder
- Smooth gradient background

**UI Prototype Candidate:** ✅ Yes (4 variants)

### Tasks
- [ ] **Task 4.1.1:** Create `Hero.tsx` component **(M)**
- [ ] **Task 4.1.2:** Implement headline and subheadline with typography **(S)**
- [ ] **Task 4.1.3:** Build waitlist form with React Hook Form + Zod **(L)**
- [ ] **Task 4.1.4:** Add gradient background with Tailwind **(S)**
- [ ] **Task 4.1.5:** Style for responsiveness **(M)**

**Multi-Agent Prototype Branches:**
- `prototype/hero-v1` - Centered content with form below
- `prototype/hero-v2` - Two-column: content left, form right
- `prototype/hero-v3` - Large background image with overlay
- `prototype/hero-v4` - Video background with minimal text

---

## Story 4.2: Build Feature Cards Section 🎨

**Description:** Showcase 4 key features with icons and descriptions  
**Acceptance Criteria:**
- 4 feature cards in responsive grid
- Icons (Lucide React)
- Hover animations (lift + shadow)
- Features:
  1. 26GB+ Biblical Resources
  2. No Internet Required
  3. 6-Hour Battery Runtime
  4. 5-Minute Setup

**UI Prototype Candidate:** ✅ Yes (3 variants)

### Tasks
- [ ] **Task 4.2.1:** Create `FeatureCard.tsx` component **(M)**
- [ ] **Task 4.2.2:** Add Framer Motion hover animations **(M)**
- [ ] **Task 4.2.3:** Build grid layout with responsive breakpoints **(S)**
- [ ] **Task 4.2.4:** Add feature content and icons **(M)**

**Multi-Agent Prototype Branches:**
- `prototype/features-v1` - Card-based with borders
- `prototype/features-v2` - Borderless with backgrounds
- `prototype/features-v3` - Icon-focused minimal design

---

## Story 4.3: Create Testimonials Section 🎨

**Description:** Display beta tester testimonials (placeholder content for v1)  
**Acceptance Criteria:**
- 3 testimonial cards
- User avatar (placeholder)
- Quote text
- User name and role
- Carousel or grid layout

**UI Prototype Candidate:** ✅ Yes (2 variants)

### Tasks
- [ ] **Task 4.3.1:** Create `Testimonial.tsx` component **(M)**
- [ ] **Task 4.3.2:** Build testimonials section layout **(M)**
- [ ] **Task 4.3.3:** Add placeholder content **(S)**
- [ ] **Task 4.3.4:** Add subtle animations **(S)**

**Multi-Agent Prototype Branches:**
- `prototype/testimonials-v1` - Grid layout (3 columns)
- `prototype/testimonials-v2` - Carousel with navigation

---

## Story 4.4: Build Pricing Preview Section 🔧

**Description:** Show 3 pricing tiers with "View Full Pricing" link  
**Acceptance Criteria:**
- 3 pricing cards: Bare Bones ($99), Solo ($299), Field ($499)
- Key features listed per tier
- CTA buttons ("Join Waitlist")
- Link to full pricing page

### Tasks
- [ ] **Task 4.4.1:** Create simplified `PricingCard.tsx` for preview **(M)**
- [ ] **Task 4.4.2:** Build pricing preview section layout **(M)**
- [ ] **Task 4.4.3:** Add pricing content and CTAs **(M)**

---

## Story 4.5: Create CTA Section 🎨

**Description:** Final call-to-action section before footer  
**Acceptance Criteria:**
- Bold headline
- Supporting text
- Primary CTA button (Join Waitlist)
- Gradient or image background

**UI Prototype Candidate:** ✅ Yes (2 variants)

### Tasks
- [ ] **Task 4.5.1:** Create `CTASection.tsx` component **(S)**
- [ ] **Task 4.5.2:** Add headline and supporting text **(S)**
- [ ] **Task 4.5.3:** Style with background gradient **(S)**

**Multi-Agent Prototype Branches:**
- `prototype/cta-v1` - Centered, minimal
- `prototype/cta-v2` - Full-width, bold background

---

## Story 4.6: Integrate Homepage Sections 🔧

**Description:** Compose all sections into `app/page.tsx`  
**Acceptance Criteria:**
- All sections render in correct order
- Smooth scroll between sections
- Proper spacing and layout
- Mobile responsive

### Tasks
- [ ] **Task 4.6.1:** Import and arrange all homepage sections **(S)**
- [ ] **Task 4.6.2:** Add section spacing and dividers **(S)**
- [ ] **Task 4.6.3:** Test full page on desktop and mobile **(M)**

---

# EPIC 5: Product Pages

**Branch:** `epic/product`  
**Priority:** P1  
**Dependencies:** EPIC 3  
**Estimated Time:** 10-14 hours

## Overview
Build product overview page with features, specs, comparison table, and demo video embed.

---

## Story 5.1: Create Product Overview Hero 🔧

**Description:** Product page hero with headline and intro  
**Acceptance Criteria:**
- Headline: "RKPi5 + Rapture Kit Content Platform"
- Product description paragraph
- Key stats bar (26GB content, 15 users, 6-hour battery, <5 min setup)

### Tasks
- [ ] **Task 5.1.1:** Create product page layout at `app/(public)/product/page.tsx` **(S)**
- [ ] **Task 5.1.2:** Build hero section with headline and description **(M)**
- [ ] **Task 5.1.3:** Add `StatsBar` component with key metrics **(M)**

---

## Story 5.2: Build Technical Specifications Section 🔧

**Description:** Detailed tech specs in expandable format  
**Acceptance Criteria:**
- Hardware specs (Pi5, RAM, storage, battery)
- Content specs (130+ hrs audio, 39+ hrs video)
- Network specs (15 concurrent users, WiFi range)
- Expandable/collapsible sections (Shadcn Accordion)

### Tasks
- [ ] **Task 5.2.1:** Design tech specs layout **(M)**
- [ ] **Task 5.2.2:** Use Shadcn Accordion for expandable sections **(M)**
- [ ] **Task 5.2.3:** Add all spec content from product brief **(M)**

---

## Story 5.3: Create Feature Deep-Dive Section 🔧

**Description:** Expanded feature cards with more detail  
**Acceptance Criteria:**
- 6 feature cards (reuse `FeatureCard` from homepage)
- Expanded descriptions
- Icons and imagery
- Responsive grid

### Tasks
- [ ] **Task 5.3.1:** Reuse `FeatureCard` component **(S)**
- [ ] **Task 5.3.2:** Create feature deep-dive section **(M)**
- [ ] **Task 5.3.3:** Add detailed feature content **(M)**

---

## Story 5.4: Build Comparison Table 🔧

**Description:** Feature comparison: RKPi5 vs USB Drive vs DIY Pi  
**Acceptance Criteria:**
- 3 columns (RKPi5, USB Drive, DIY Pi)
- Feature rows from product brief
- Visual indicators (✅ ❌ ⚠️)
- Responsive (stacks on mobile)

### Tasks
- [ ] **Task 5.4.1:** Create `ComparisonTable.tsx` component **(M)**
- [ ] **Task 5.4.2:** Add comparison data from product brief **(M)**
- [ ] **Task 5.4.3:** Style table with responsive behavior **(M)**

---

## Story 5.5: Add Video Player for Demo 🔧

**Description:** Embed YouTube video (placeholder for v1)  
**Acceptance Criteria:**
- Responsive YouTube embed
- Fallback image if video not available
- Play button overlay

### Tasks
- [ ] **Task 5.5.1:** Create `VideoPlayer.tsx` component **(M)**
- [ ] **Task 5.5.2:** Implement YouTube embed with responsive aspect ratio **(S)**
- [ ] **Task 5.5.3:** Add placeholder state **(S)**

---

# EPIC 6: Pricing System

**Branch:** `epic/pricing`  
**Priority:** P1  
**Dependencies:** EPIC 3  
**Estimated Time:** 8-12 hours

## Overview
Build comprehensive pricing page with 4 tiers, feature comparison matrix, and FAQs.

---

## Story 6.1: Create Pricing Cards 🎨

**Description:** Design 4 pricing tier cards  
**Acceptance Criteria:**
- 4 tiers: Hobbyist (FREE), Bare Bones ($99), Solo ($299), Field ($499)
- Highlighted tier (Solo - most popular)
- Feature lists per tier
- CTA buttons (Join Waitlist or Download for FREE tier)

**UI Prototype Candidate:** ✅ Yes (3 variants)

### Tasks
- [ ] **Task 6.1.1:** Create `PricingCard.tsx` component **(M)**
- [ ] **Task 6.1.2:** Build pricing page layout **(M)**
- [ ] **Task 6.1.3:** Add all pricing content from product brief **(M)**
- [ ] **Task 6.1.4:** Add "Popular" badge to Solo tier **(S)**

**Multi-Agent Prototype Branches:**
- `prototype/pricing-cards-v1` - Traditional card layout
- `prototype/pricing-cards-v2` - Table-style layout
- `prototype/pricing-cards-v3` - Minimal, List-based

---

## Story 6.2: Build Feature Comparison Matrix 🔧

**Description:** Detailed feature comparison below pricing cards  
**Acceptance Criteria:**
- Table format with all tiers as columns
- Feature categories (Hardware, Content, Support, etc.)
- Checkmarks and X marks for features
- Responsive (horizontal scroll on mobile)

### Tasks
- [ ] **Task 6.2.1:** Design feature matrix layout **(M)**
- [ ] **Task 6.2.2:** Build table with responsive behavior **(M)**
- [ ] **Task 6.2.3:** Add all features from product brief **(M)**

---

## Story 6.3: Add Pricing FAQs 🔧

**Description:** FAQ section for common pricing questions  
**Acceptance Criteria:**
- 6-8 common questions
- Expandable accordion (Shadcn)
- Questions like: "Can I upgrade later?", "What's included in Hobbyist tier?", etc.

### Tasks
- [ ] **Task 6.3.1:** Use Shadcn Accordion for FAQs **(S)**
- [ ] **Task 6.3.2:** Write FAQ content **(M)**
- [ ] **Task 6.3.3:** Style FAQ section **(S)**

---

## Story 6.4: Add Church/Enterprise Contact Section 🔧

**Description:** Section explaining custom quote process  
**Acceptance Criteria:**
- Headline: "Church & Enterprise Solutions"
- Description of custom offerings
- Contact form or "Request Quote" button
- Note: "Available post-public launch"

### Tasks
- [ ] **Task 6.4.1:** Create custom quote section **(M)**
- [ ] **Task 6.4.2:** Add "Request Quote" CTA **(S)**
- [ ] **Task 6.4.3:** Style section to stand out **(S)**

---

# EPIC 7: Support Wiki

**Branch:** `epic/support`  
**Priority:** P2  
**Dependencies:** EPIC 3  
**Estimated Time:** 6-8 hours

## Overview
Build MDX-based support wiki with navigation and placeholder content (to be populated during beta).

---

## Story 7.1: Set Up MDX for Documentation 🔧

**Description:** Configure Next.js to render MDX content  
**Acceptance Criteria:**
- @next/mdx installed and configured
- MDX files render at `/support/[slug]`
- Syntax highlighting for code blocks
- Custom MDX components (callouts, code blocks)

### Tasks
- [ ] **Task 7.1.1:** Install and configure @next/mdx **(M)**
- [ ] **Task 7.1.2:** Set up dynamic route for MDX pages **(M)**
- [ ] **Task 7.1.3:** Create custom MDX components **(M)**
- [ ] **Task 7.1.4:** Add syntax highlighting (highlight.js or Prism) **(M)**

---

## Story 7.2: Build Support Wiki Navigation 🔧

**Description:** Sidebar navigation for documentation  
**Acceptance Criteria:**
- Collapsible sidebar with sections
- Active link highlighting
- Mobile: Drawer-style sidebar
- Sections: Getting Started, Troubleshooting, FAQs

### Tasks
- [ ] **Task 7.2.1:** Create `SupportSidebar.tsx` component **(M)**
- [ ] **Task 7.2.2:** Implement collapsible sections **(M)**
- [ ] **Task 7.2.3:** Add active link styling **(S)**
- [ ] **Task 7.2.4:** Make responsive (drawer on mobile) **(M)**

---

## Story 7.3: Create Placeholder Documentation Pages 🔧

**Description:** Create shell MDX pages to be populated during beta  
**Acceptance Criteria:**
- Getting Started pages (placeholders)
- Troubleshooting pages (placeholders)
- FAQ pages (placeholders)
- "Coming Soon" message with note about beta program

### Tasks
- [ ] **Task 7.3.1:** Create MDX file structure in `content/support/` **(S)**
- [ ] **Task 7.3.2:** Write placeholder content for each section **(M)**
- [ ] **Task 7.3.3:** Add "Coming Soon" notices **(S)**

---

# EPIC 8: Use Cases

**Branch:** `epic/use-cases`  
**Priority:** P2  
**Dependencies:** EPIC 3  
**Estimated Time:** 4-6 hours

## Overview
Build use cases page with real-world scenarios (to be populated with beta tester stories).

---

## Story 8.1: Create Use Case Layout 🔧

**Description:** Page layout for use cases with placeholder content  
**Acceptance Criteria:**
- 4 use case sections (Home Study, Family Prep, Underground Churches, Mission Fields)
- Case study format: Problem → Solution → Results
- Placeholder content with note about beta program

### Tasks
- [ ] **Task 8.1.1:** Create use cases page at `app/(public)/use-cases/page.tsx` **(S)**
- [ ] **Task 8.1.2:** Build case study card component **(M)**
- [ ] **Task 8.1.3:** Add placeholder content for 4 use cases **(M)**

---

## Story 8.2: Add Beta Tester Placeholder Sections 🔧

**Description:** Sections reserved for beta tester testimonials  
**Acceptance Criteria:**
- 3 beta tester placeholders
- Avatar placeholder
- Quote placeholder
- Results placeholder
- Note: "Stories from our beta program coming soon"

### Tasks
- [ ] **Task 8.2.1:** Create beta tester card component **(M)**
- [ ] **Task 8.2.2:** Add 3 placeholder sections **(S)**
- [ ] **Task 8.2.3:** Style with "Coming Soon" messaging **(S)**

---

# EPIC 9: About & Contact

**Branch:** `epic/about`  
**Priority:** P2  
**Dependencies:** EPIC 3  
**Estimated Time:** 6-8 hours

## Overview
Build About page and Contact form.

---

## Story 9.1: Create About Page 🔧

**Description:** About page with mission, Scott's story, and contact info  
**Acceptance Criteria:**
- Mission statement
- Scott's bio (Rapture Kit founder)
- Technology section (Pi5 + 26GB content innovation)
- Contact information

### Tasks
- [ ] **Task 9.1.1:** Create about page at `app/(public)/about/page.tsx` **(S)**
- [ ] **Task 9.1.2:** Write mission and bio content **(M)**
- [ ] **Task 9.1.3:** Add technology overview section **(M)**
- [ ] **Task 9.1.4:** Style page layout **(M)**

---

## Story 9.2: Build Contact Form 🔧

**Description:** Contact form with Convex backend  
**Acceptance Criteria:**
- Form fields: Name, Email, Company (optional), Phone (optional), Message, Type (dropdown)
- React Hook Form + Zod validation
- Convex mutation for submission
- Toast confirmation on success

### Tasks
- [ ] **Task 9.2.1:** Create `ContactForm.tsx` component **(M)**
- [ ] **Task 9.2.2:** Set up form validation with Zod **(M)**
- [ ] **Task 9.2.3:** Connect to Convex mutation **(M)**
- [ ] **Task 9.2.4:** Add success/error toast notifications **(S)**

---

## Story 9.3: Add Contact Info & Social Links 🔧

**Description:** Contact information and social media links  
**Acceptance Criteria:**
- Email address
- Social links (placeholders)
- Office hours / response time expectations

### Tasks
- [ ] **Task 9.3.1:** Create contact info section **(S)**
- [ ] **Task 9.3.2:** Add social icon links (placeholders) **(S)**
- [ ] **Task 9.3.3:** Style section **(S)**

---

# EPIC 10: Authentication

**Branch:** `epic/auth`  
**Priority:** P1  
**Dependencies:** EPIC 1  
**Estimated Time:** 8-12 hours

## Overview
Implement Clerk authentication with protected routes and user management.

---

## Story 10.1: Configure Clerk Middleware ⚙️

**Description:** Set up Clerk authentication middleware  
**Acceptance Criteria:**
- Clerk middleware protects `/dashboard`, `/checkout`, `/admin/*` routes
- Public routes accessible without auth
- Webhook routes excluded from auth
- Sign-in/sign-up pages configured

### Tasks
- [ ] **Task 10.1.1:** Install `@clerk/nextjs` **(S)**
- [ ] **Task 10.1.2:** Create `middleware.ts` with route protection **(M)**
- [ ] **Task 10.1.3:** Configure Clerk env variables **(S)**
- [ ] **Task 10.1.4:** Test auth flow **(M)**

---

## Story 10.2: Sync Clerk Users to Convex ⚙️

**Description:** Webhook to sync Clerk users to Convex database  
**Acceptance Criteria:**
- Clerk webhook endpoint at `/api/webhooks/clerk`
- User creation synced to Convex `users` table
- User updates synced
- User deletion handled

### Tasks
- [ ] **Task 10.2.1:** Create webhook route at `app/api/webhooks/clerk/route.ts` **(M)**
- [ ] **Task 10.2.2:** Create Convex mutation for user sync **(M)**
- [ ] **Task 10.2.3:** Verify webhook signature **(M)**
- [ ] **Task 10.2.4:** Test webhook with Clerk dashboard **(M)**

---

## Story 10.3: Create Sign-In/Sign-Up Pages 🔧

**Description:** Custom sign-in and sign-up pages  
**Acceptance Criteria:**
- Sign-in page at `/sign-in`
- Sign-up page at `/sign-up`
- Clerk components styled to match site design
- Social login options (Google, GitHub)

### Tasks
- [ ] **Task 10.3.1:** Create sign-in page **(M)**
- [ ] **Task 10.3.2:** Create sign-up page **(M)**
- [ ] **Task 10.3.3:** Style Clerk components with custom CSS **(M)**
- [ ] **Task 10.3.4:** Test authentication flow **(M)**

---

## Story 10.4: Implement Role-Based Access Control ⚙️

**Description:** Admin role check for admin routes  
**Acceptance Criteria:**
- Admin role stored in Clerk user metadata
- Middleware checks role for `/admin/*` routes
- Non-admin users redirected to dashboard

### Tasks
- [ ] **Task 10.4.1:** Add role field to Clerk user metadata **(S)**
- [ ] **Task 10.4.2:** Update middleware to check admin role **(M)**
- [ ] **Task 10.4.3:** Create admin guard component **(M)**
- [ ] **Task 10.4.4:** Test admin access control **(M)**

---

# EPIC 11: E-commerce

**Branch:** `epic/ecommerce`  
**Priority:** P1  
**Dependencies:** EPIC 10  
**Estimated Time:** 12-16 hours

## Overview
Implement checkout flow using Clerk Billing (Stripe integration).

---

## Story 11.1: Configure Clerk Billing with Stripe ⚙️

**Description:** Set up Clerk Billing integration  
**Acceptance Criteria:**
- Clerk Billing enabled in dashboard
- Stripe account connected via Clerk
- 4 product SKUs created in Clerk (Hobbyist-FREE, Bare Bones, Solo, Field)
- Webhook for payment events configured

### Tasks
- [ ] **Task 11.1.1:** Enable Clerk Billing in dashboard **(S)**
- [ ] **Task 11.1.2:** Connect Stripe account (Scott to provide) **(S)**
- [ ] **Task 11.1.3:** Create 4 products in Clerk Billing **(M)**
  - Hobbyist: $0 (download links only)
  - Bare Bones: $99
  - Solo: $299
  - Field: $499
- [ ] **Task 11.1.4:** Configure webhook endpoint **(M)**

---

## Story 11.2: Build Checkout Page ⚙️

**Description:** Checkout page with SKU selection and Clerk Billing integration  
**Acceptance Criteria:**
- SKU selector (dropdown or cards)
- Shipping address form
- Clerk Billing payment component
- Order summary

### Tasks
- [ ] **Task 11.2.1:** Create checkout page at `app/(auth)/checkout/page.tsx` **(M)**
- [ ] **Task 11.2.2:** Build SKU selection UI **(M)**
- [ ] **Task 11.2.3:** Create shipping address form **(M)**
- [ ] **Task 11.2.4:** Integrate Clerk Billing payment component **(L)**
- [ ] **Task 11.2.5:** Build order summary sidebar **(M)**

---

## Story 11.3: Handle Payment Success/Failure ⚙️

**Description:** Post-payment flows and order creation  
**Acceptance Criteria:**
- Success page at `/checkout/success`
- Failure page at `/checkout/failed`
- Order created in Convex on success
- Confirmation email sent via Resend

### Tasks
- [ ] **Task 11.3.1:** Create success page **(M)**
- [ ] **Task 11.3.2:** Create failure page **(M)**
- [ ] **Task 11.3.3:** Convex mutation to create order **(M)**
- [ ] **Task 11.3.4:** Send confirmation email via Resend **(M)**
- [ ] **Task 11.3.5:** Redirect user to dashboard **(S)**

---

## Story 11.4: Create Order Confirmation Email Template ⚙️

**Description:** HTML email template for order confirmation  
**Acceptance Criteria:**
- Professional HTML email
- Order details (SKU, amount, shipping address)
- Order number and tracking info (placeholder)
- Support contact information

### Tasks
- [ ] **Task 11.4.1:** Create email template with React Email **(M)**
- [ ] **Task 11.4.2:** Integrate template with Resend **(M)**
- [ ] **Task 11.4.3:** Test email delivery **(S)**

---

## Story 11.5: Handle Webhook Events ⚙️

**Description:** Process Clerk Billing webhooks for order updates  
**Acceptance Criteria:**
- Extend existing webhook at `/api/webhooks/clerk` with billing event handlers
- Handle payment success event (billing.payment.succeeded)
- Update order status in Convex
- Handle payment failure events
- Uses existing CLERK_WEBHOOK_SECRET

### Tasks
- [ ] **Task 11.5.1:** Extend existing Clerk webhook with billing event handlers **(M)**
- [ ] **Task 11.5.2:** Handle billing.payment.succeeded event **(M)**
- [ ] **Task 11.5.3:** Create order in Convex on payment success **(M)**
- [ ] **Task 11.5.4:** Handle billing.payment.failed event **(M)**
- [ ] **Task 11.5.5:** Test billing webhook events from Clerk dashboard **(M)**

---

# EPIC 12: User Dashboard

**Branch:** `epic/dashboard`  
**Priority:** P2  
**Dependencies:** EPIC 10, EPIC 11  
**Estimated Time:** 8-10 hours

## Overview
Build user dashboard for order history and DIY downloads.

---

## Story 12.1: Create Dashboard Layout 🔧

**Description:** Dashboard page with sidebar navigation  
**Acceptance Criteria:**
- Sidebar with sections: Overview, Orders, Downloads, Profile
- Mobile: Collapsible sidebar
- Active link highlighting

### Tasks
- [ ] **Task 12.1.1:** Create dashboard layout at `app/(auth)/dashboard/layout.tsx` **(M)**
- [ ] **Task 12.1.2:** Build sidebar navigation **(M)**
- [ ] **Task 12.1.3:** Make responsive **(M)**

---

## Story 12.2: Build Orders History Page 🔧

**Description:** Display user's past orders  
**Acceptance Criteria:**
- Table of orders (date, SKU, amount, status)
- Order detail modal
- Empty state if no orders

### Tasks
- [ ] **Task 12.2.1:** Create orders page at `app/(auth)/dashboard/orders/page.tsx` **(M)**
- [ ] **Task 12.2.2:** Fetch orders from Convex **(M)**
- [ ] **Task 12.2.3:** Build order table component **(M)**
- [ ] **Task 12.2.4:** Add order detail modal **(M)**

---

## Story 12.3: Build Downloads Page (Hobbyist Tier) 🔧

**Description:** Download links for Hobbyist (FREE) tier users  
**Acceptance Criteria:**
- Download buttons for DIY scripts and documentation
- Installation instructions
- Only visible to Hobbyist tier users

### Tasks
- [ ] **Task 12.3.1:** Create downloads page **(M)**
- [ ] **Task 12.3.2:** Add download buttons **(S)**
- [ ] **Task 12.3.3:** Check user tier from Clerk metadata **(M)**
- [ ] **Task 12.3.4:** Add installation instructions **(M)**

---

## Story 12.4: Build Profile Page 🔧

**Description:** User profile with Clerk user button  
**Acceptance Criteria:**
- Clerk UserButton component
- Display user info (email, name)
- Subscription status (if applicable)

### Tasks
- [ ] **Task 12.4.1:** Create profile page **(S)**
- [ ] **Task 12.4.2:** Integrate Clerk UserButton **(S)**
- [ ] **Task 12.4.3:** Display user info **(M)**

---

# EPIC 13: Admin Dashboard

**Branch:** `epic/admin`  
**Priority:** P2  
**Dependencies:** EPIC 10, EPIC 14  
**Estimated Time:** 10-14 hours

## Overview
Build admin dashboard for managing waitlist, orders, and analytics.

---

## Story 13.1: Create Admin Layout with Navigation 🔧

**Description:** Admin-only layout with sidebar  
**Acceptance Criteria:**
- Admin role check (redirect if not admin)
- Sidebar with sections: Overview, Waitlist, Orders, Analytics
- Header with logout

### Tasks
- [ ] **Task 13.1.1:** Create admin layout at `app/(auth)/admin/layout.tsx` **(M)**
- [ ] **Task 13.1.2:** Add admin role guard **(M)**
- [ ] **Task 13.1.3:** Build sidebar navigation **(M)**

---

## Story 13.2: Build Waitlist Management Page 🔧

**Description:** View and manage waitlist entries  
**Acceptance Criteria:**
- Table of waitlist entries
- Filters (status, tier, date)
- Export to CSV
- Status update (pending → contacted → converted)

### Tasks
- [ ] **Task 13.2.1:** Create waitlist page at `app/(auth)/admin/waitlist/page.tsx` **(M)**
- [ ] **Task 13.2.2:** Build data table with sorting/filtering **(L)**
- [ ] **Task 13.2.3:** Add status update functionality **(M)**
- [ ] **Task 13.2.4:** Add CSV export button **(M)**

---

## Story 13.3: Build Orders Management Page 🔧

**Description:** View and manage all orders  
**Acceptance Criteria:**
- Table of all orders
- Filters (status, tier, date)
- Order status update (paid → processing → shipped → delivered)
- Order detail modal

### Tasks
- [ ] **Task 13.3.1:** Create orders page at `app/(auth)/admin/orders/page.tsx` **(M)**
- [ ] **Task 13.3.2:** Build orders table **(L)**
- [ ] **Task 13.3.3:** Add status update dropdown **(M)**
- [ ] **Task 13.3.4:** Add order detail modal **(M)**

---

## Story 13.4: Build Analytics Dashboard 🔧

**Description:** Basic analytics overview  
**Acceptance Criteria:**
- KPI cards (waitlist count, orders count, revenue)
- Charts (signups over time, orders by SKU)
- Date range filter

### Tasks
- [ ] **Task 13.4.1:** Create analytics page at `app/(auth)/admin/analytics/page.tsx` **(M)**
- [ ] **Task 13.4.2:** Create KPI card components **(M)**
- [ ] **Task 13.4.3:** Add charts (Chart.js or Recharts) **(L)**
- [ ] **Task 13.4.4:** Add date range picker **(M)**

---

## Story 13.5: Build Contacts Management Page 🔧

**Description:** View contact form submissions  
**Acceptance Criteria:**
- Table of contact submissions
- Filters (type, status, date)
- Status update (new → responded → closed)
- Contact detail modal

### Tasks
- [ ] **Task 13.5.1:** Create contacts page **(M)**
- [ ] **Task 13.5.2:** Build contacts table **(M)**
- [ ] **Task 13.5.3:** Add status update **(M)**
- [ ] **Task 13.5.4:** Add contact detail modal **(M)**

---

# EPIC 14: Convex Backend

**Branch:** `epic/backend`  
**Priority:** P0 (Foundational)  
**Dependencies:** EPIC 1  
**Estimated Time:** 12-16 hours

## Overview
Define Convex schema and implement mutations/queries for all data operations.

---

## Story 14.1: Define Convex Schema ⚙️

**Description:** Create complete database schema  
**Acceptance Criteria:**
- Schema defined in `convex/schema.ts`
- Tables: waitlist, contacts, orders, users
- Indexes defined for common queries
- Types exported for TypeScript

### Tasks
- [ ] **Task 14.1.1:** Create `convex/schema.ts` **(M)**
- [ ] **Task 14.1.2:** Define `waitlist` table with indexes **(M)**
- [ ] **Task 14.1.3:** Define `contacts` table with indexes **(M)**
- [ ] **Task 14.1.4:** Define `orders` table with indexes **(M)**
- [ ] **Task 14.1.5:** Define `users` table with indexes **(M)**

---

## Story 14.2: Implement Waitlist Mutations/Queries ⚙️

**Description:** CRUD operations for waitlist  
**Acceptance Criteria:**
- `waitlist.create` mutation
- `waitlist.list` query (admin only)
- `waitlist.count` query
- `waitlist.updateStatus` mutation (admin only)

### Tasks
- [ ] **Task 14.2.1:** Create `convex/waitlist.ts` **(M)**
- [ ] **Task 14.2.2:** Implement `create` mutation with validation **(M)**
- [ ] **Task 14.2.3:** Implement `list` query with filters **(M)**
- [ ] **Task 14.2.4:** Implement `count` query **(S)**
- [ ] **Task 14.2.5:** Implement `updateStatus` mutation **(M)**
- [ ] **Task 14.2.6:** Send confirmation email on create **(M)**

---

## Story 14.3: Implement Contacts Mutations/Queries ⚙️

**Description:** CRUD operations for contact forms  
**Acceptance Criteria:**
- `contacts.create` mutation
- `contacts.list` query (admin only)
- `contacts.updateStatus` mutation (admin only)
- Email notification on submission

### Tasks
- [ ] **Task 14.3.1:** Create `convex/contacts.ts` **(M)**
- [ ] **Task 14.3.2:** Implement `create` mutation **(M)**
- [ ] **Task 14.3.3:** Implement `list` query with filters **(M)**
- [ ] **Task 14.3.4:** Implement `updateStatus` mutation **(M)**
- [ ] **Task 14.3.5:** Send email notification on create **(M)**

---

## Story 14.4: Implement Orders Mutations/Queries ⚙️

**Description:** Order management operations  
**Acceptance Criteria:**
- `orders.create` mutation
- `orders.getUserOrders` query
- `orders.list` query (admin only)
- `orders.updateStatus` mutation (admin only)

### Tasks
- [ ] **Task 14.4.1:** Create `convex/orders.ts` **(M)**
- [ ] **Task 14.4.2:** Implement `create` mutation **(M)**
- [ ] **Task 14.4.3:** Implement `getUserOrders` query with RLS **(M)**
- [ ] **Task 14.4.4:** Implement `list` query (admin) **(M)**
- [ ] **Task 14.4.5:** Implement `updateStatus` mutation **(M)**

---

## Story 14.5: Implement Users Mutations/Queries ⚙️

**Description:** User sync and management  
**Acceptance Criteria:**
- `users.syncFromClerk` mutation (webhook)
- `users.get` query
- `users.updateRole` mutation (admin only)

### Tasks
- [ ] **Task 14.5.1:** Create `convex/users.ts` **(M)**
- [ ] **Task 14.5.2:** Implement `syncFromClerk` mutation **(M)**
- [ ] **Task 14.5.3:** Implement `get` query **(S)**
- [ ] **Task 14.5.4:** Implement `updateRole` mutation **(M)**

---

## Story 14.6: Implement Email Helpers ⚙️

**Description:** Resend email sending utilities  
**Acceptance Criteria:**
- `sendWaitlistConfirmation` function
- `sendContactNotification` function
- `sendOrderConfirmation` function
- Error handling and logging

### Tasks
- [ ] **Task 14.6.1:** Create `convex/emails.ts` helper file **(M)**
- [ ] **Task 14.6.2:** Implement `sendWaitlistConfirmation` **(M)**
- [ ] **Task 14.6.3:** Implement `sendContactNotification` **(M)**
- [ ] **Task 14.6.4:** Implement `sendOrderConfirmation` **(M)**
- [ ] **Task 14.6.5:** Add error handling and logging **(M)**

---

## Epic Dependencies Graph

```
EPIC 1 (Foundation) ───────┬────────────────────────┐
                           │                        │
                           ↓                        ↓
EPIC 2 (Design System)     EPIC 14 (Convex Backend) EPIC 10 (Authentication)
                           │                        │
                           ↓                        ↓
EPIC 3 (Layout)            │                   EPIC 11 (E-commerce)
                           │                        │
        ┌──────────────────┴────────┐              │
        ↓                           ↓              ↓
EPIC 4 (Homepage)           EPIC 5 (Product)  EPIC 12 (Dashboard)
EPIC 6 (Pricing)            EPIC 7 (Support)       │
EPIC 8 (Use Cases)          EPIC 9 (About)         ↓
                                              EPIC 13 (Admin)
```

---

## Recommended Development Sequence

### Phase 1: Foundation (Week 1)
1. EPIC 1: Foundation & Project Init
2. EPIC 2: Design System
3. EPIC 14: Convex Backend (Stories 14.1-14.2)
4. EPIC 3: Layout & Navigation

### Phase 2: Core Pages (Week 2-3)
5. EPIC 4: Homepage
6. EPIC 5: Product Pages
7. EPIC 6: Pricing System
8. EPIC 10: Authentication (Stories 10.1-10.3)

### Phase 3: Content & E-commerce (Week 3-4)
9. EPIC 7: Support Wiki
10. EPIC 8: Use Cases
11. EPIC 9: About & Contact
12. EPIC 14: Convex Backend (Stories 14.3-14.6)
13. EPIC 11: E-commerce

### Phase 4: Dashboards (Week 4-5)
14. EPIC 12: User Dashboard
15. EPIC 13: Admin Dashboard
16. EPIC 10: Authentication (Story 10.4 - RBAC)

---

## Multi-Agent Prototyping Schedule

**When to use multi-agent prototyping:**

**Week 2:**
- Hero section (EPIC 4, Story 4.1) - 4 variants
- Feature cards (EPIC 4, Story 4.2) - 3 variants

**Week 3:**
- Header navigation (EPIC 3, Story 3.1) - 3 variants
- Mobile menu (EPIC 3, Story 3.2) - 2 variants
- Pricing cards (EPIC 6, Story 6.1) - 3 variants

**Week 4:**
- Testimonials (EPIC 4, Story 4.3) - 2 variants
- CTA section (EPIC 4, Story 4.5) - 2 variants

**Total Multi-Agent Stories:** 8 stories, 19 variants

---

## Next Steps

1. **Create Epic Branches:** Set up git branches for each epic
2. **Prioritize Stories:** Confirm P0/P1/P2 priorities with Scott
3. **Assign Resources:** Determine if any stories need external help
4. **Begin EPIC 1:** Start with project initialization

---

_Epic/Story/Task breakdown aligned with architecture document_  
_Created by: Winston (BMAD Architecture Agent)_  
_Date: November 11, 2025_  
_For: Scott E. Townsend_

