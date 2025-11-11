# RKPi5 Marketing Website - Structure & Specifications

**Product:** RKPi5 + Rapture Kit Content Platform  
**Framework:** Next.js 14 + TypeScript  
**Styling:** Tailwind CSS + Shadcn/ui  
**Backend:** Convex (realtime database)  
**Auth:** Clerk  
**Payments:** Stripe  
**Deployment:** Replit  
**Design Inspiration:** Linear.app (clean, contemporary, fast)

**Launch Strategy:**  
- **Phase 0:** Beta Program (3 testers, < 2 weeks from approval)
- **Phase 1:** Beta Website (minimal, support beta only)
- **Phase 2:** Public Website (full marketing site with beta-derived content)

---

## Site Structure

### Phase 1: Beta Website (Minimal - 4 Pages)

**Priority:** Support beta program, collect learnings

1. **Homepage** (`/`) - Beta focus
   - Hero: "Biblical Resources When Networks Fail"
   - Beta program announcement
   - Product overview (brief)
   - CTA: Beta Signup Form (manual processing)

2. **Product Overview** (`/product`) - Basic
   - What is RKPi5 + Rapture Kit?
   - Key features (4 cards)
   - Technical specs (Pi5, 26GB content, 6-hour battery)
   - CTA: Beta Signup

3. **Support Wiki** (`/support`) - Shell structure
   - Getting Started (placeholder)
   - Troubleshooting (populate during beta)
   - FAQs (populate during beta)
   - **Purpose:** Learn what questions users actually ask

4. **About** (`/about`) - Simple
   - Mission: Offline biblical resources for preparedness
   - Scott's story (Rapture Kit founder)
   - Contact information

### Phase 2: Public Website (Full - 10 Pages)

**Priority:** Convert waitlist, showcase beta learnings

1. **Homepage** (`/`)
   - Hero section with value proposition
   - Product demo video (from beta)
   - Key features (4 cards with real usage examples)
   - Beta testimonials (3 testers)
   - Pricing preview (3 tiers: DIY, Solo, Field)
   - CTA: Join Waitlist

2. **Product** (`/product`)
   - Detailed feature breakdown
   - Technical specifications (Pi5, Rapture Kit content library)
   - Real usage scenarios (from beta testing)
   - Product demo videos (filmed during beta)
   - Comparison table (RKPi5 vs USB drive vs DIY solutions)
   - CTA: Join Waitlist

3. **Pricing** (`/pricing`)
   - 4 tiers visible:
     - **Hobbyist (FREE - DIY)** - For existing Pi5 owners
     - **Bare Bones ($99)** - 2x microSD cards only
     - **Solo Starter Kit ($299)** - Complete turnkey system
     - **Field Kit ($499)** - Self-contained with touchscreen & solar
   - Church/Enterprise noted as "Custom Quote - Future Phase"
   - Feature comparison matrix
   - FAQ section (from beta learnings)
   - CTA: Join Waitlist

4. **Support Wiki** (`/support`)
   - **Getting Started** (written from beta onboarding experience)
   - **Setup Guides** (DIY, Solo, Field - step-by-step with photos)
   - **Troubleshooting** (actual issues encountered by beta testers)
   - **FAQs** (real questions from beta 1:1 sessions)
   - **Video Tutorials** (recorded during beta)
   - Search functionality
   - **Content Source:** 100% derived from beta program learnings

5. **Use Cases** (`/use-cases`)
   - **Home Study Groups** (Pre-Rapture educational use)
   - **Family Preparedness** (Legacy evangelism for loved ones)
   - **Underground Churches** (Post-Rapture security scenarios)
   - **Mission Fields** (Remote, offline discipleship)
   - **Real Examples:** Beta tester stories (with permission)
   - Case study format (problem → solution → results)

6. **About** (`/about`)
   - Mission: Biblical resources when networks fail
   - Scott's story (Rapture Kit founder, ItIsAllAboutWatching.com)
   - Technology innovation (Pi5 + 26GB Rapture Kit content)
   - Influencer partnerships (Prophecy Watchers, Lamb & Lion Ministry)
   - Contact information

7. **Blog** (`/blog`) _(Deferred until post-public launch)_
   - Beta learnings and insights
   - Product updates
   - Customer stories
   - Prophecy and preparedness topics

### Auth-Protected Pages (3)

8. **Dashboard** (`/dashboard`)
   - User profile
   - Order history
   - Download links (Hobbyist DIY scripts for FREE tier)
   - Support tickets

9. **Checkout** (`/checkout`)
   - Stripe payment integration
   - SKU selection (Bare Bones, Solo, Field)
   - Shipping information
   - Order confirmation

10. **Admin** (`/admin`) _(Minimal for beta, expanded later)_
    - Beta signup list (manual processing)
    - Waitlist management (post-beta)
    - Order management (post-public launch)
    - Analytics dashboard (deferred)

---

## Component Architecture

### Layout Components

```
/components/layout/
├── Header.tsx           # Navigation, logo, CTA button
├── Footer.tsx           # Links, social, copyright
├── Navigation.tsx       # Desktop + mobile nav
├── MobileMenu.tsx       # Hamburger menu
└── Container.tsx        # Max-width wrapper
```

### Marketing Components

```
/components/marketing/
├── Hero.tsx             # Homepage hero section
├── FeatureCard.tsx      # Feature showcase cards
├── PricingCard.tsx      # Pricing tier cards
├── Testimonial.tsx      # Customer testimonials
├── ComparisonTable.tsx  # Feature comparison
├── CTASection.tsx       # Call-to-action sections
├── StatsBar.tsx         # Metrics/numbers showcase
└── VideoPlayer.tsx      # Demo video embed
```

### Interactive Components

```
/components/interactive/
├── WaitlistForm.tsx     # Email capture form
├── ContactForm.tsx      # Support/sales contact
├── SearchBar.tsx        # Documentation search
└── NewsletterSignup.tsx # Email subscription
```

### Shadcn/ui Components

```
/components/ui/
├── button.tsx           # Primary, secondary, ghost variants
├── card.tsx             # Content cards
├── input.tsx            # Form inputs
├── badge.tsx            # Status badges
├── dialog.tsx           # Modal dialogs
├── dropdown-menu.tsx    # Dropdown menus
├── tabs.tsx             # Tab navigation
├── accordion.tsx        # Collapsible content
└── toast.tsx            # Notifications
```

---

## Design System (Linear-inspired)

### Colors

```typescript
// Primary brand colors
primary: {
  50: '#f0f9ff',
  500: '#0ea5e9',  // Main brand blue
  600: '#0284c7',
  900: '#0c4a6e'
}

// Accent colors
accent: {
  purple: '#8b5cf6',
  green: '#10b981',
  orange: '#f59e0b'
}

// Neutrals
gray: {
  50: '#f9fafb',
  100: '#f3f4f6',
  500: '#6b7280',
  900: '#111827'
}
```

### Typography

```typescript
// Font stack
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace']
}

// Sizes
text: {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '4xl': '2.25rem', // 36px
  '6xl': '3.75rem'  // 60px
}
```

### Spacing & Layout

```typescript
// Max widths
maxWidth: {
  'content': '65ch',      // Text content
  'container': '1280px',  // Page container
  'wide': '1536px'        // Wide sections
}

// Spacing scale (consistent with Linear)
spacing: {
  section: '6rem',   // Between major sections
  card: '1.5rem',    // Card padding
  gap: '1rem'        // Grid gaps
}
```

### Animation

```typescript
// Transitions (fast and smooth like Linear)
transition: {
  fast: '150ms ease',
  base: '200ms ease',
  slow: '300ms ease'
}

// Hover effects
hover: {
  lift: 'translateY(-2px)',
  shadow: '0 20px 40px rgba(0,0,0,0.1)'
}
```

---

## Page Specifications

### 1. Homepage (`/`)

**Sections:**
1. **Hero** - Headline, subheadline, CTA (Join Waitlist), hero image/video
2. **Problem Statement** - "Training videos that disconnect after 20 seconds"
3. **Solution** - "RKPi5 keeps students connected for 60+ minutes"
4. **Key Features** - 4 cards (Auto-popup, Offline, Stable, Fast setup)
5. **How It Works** - 3-step visual (Prepare → Install → Deploy)
6. **Social Proof** - Testimonials, logos, metrics
7. **Pricing Preview** - 3 tiers with "View Pricing" link
8. **Final CTA** - Join waitlist section

**Design Notes:**
- Gradient background (subtle, like Linear)
- Generous whitespace
- Large, clear typography
- Smooth scroll animations
- Sticky header

### 2. Product Page (`/product`)

**Sections:**
1. **Overview** - What is RKPi5?
2. **Technical Specs** - Pi 5, 15 users, 4GB cache, etc.
3. **Features Deep-Dive** - Expandable cards for each feature
4. **Use Cases** - 4-5 scenarios with icons
5. **Demo Video** - Installation and usage walkthrough
6. **Comparison Table** - vs commercial routers, vs DIY
7. **FAQ** - Technical questions
8. **CTA** - Request demo

### 3. Pricing Page (`/pricing`)

**Layout:**
```
┌─────────────┬─────────────┬─────────────┐
│   Starter   │ Professional│  Enterprise │
│    $199     │    $299     │   Custom    │
│             │  POPULAR    │             │
│  4GB RAM    │  8GB RAM    │  10+ units  │
│  64GB SD    │  128GB SD   │  Custom     │
│  Basic      │  Priority   │  Dedicated  │
│  Support    │  Support    │  Support    │
│             │             │             │
│ [Join List] │ [Join List] │ [Contact]   │
└─────────────┴─────────────┴─────────────┘
```

**Features:**
- Toggle: Monthly / One-time purchase
- Feature comparison matrix below cards
- FAQ section
- Money-back guarantee badge
- CTA: Join Waitlist (Starter/Pro), Contact Sales (Enterprise)

### 4. Documentation (`/docs`)

**Structure:**
```
Sidebar Navigation:
├── Getting Started
│   ├── Quick Start
│   ├── Requirements
│   └── Installation
├── Configuration
│   ├── USB Preparation
│   ├── Content Structure
│   └── Network Settings
├── Troubleshooting
│   ├── Installation Issues
│   ├── Network Issues
│   └── Media Playback
├── Advanced
│   ├── Golden Master
│   ├── Fleet Deployment
│   └── Performance Tuning
└── API Reference (future)
```

**Features:**
- Search bar (Algolia or simple client-side)
- Breadcrumbs
- Table of contents (right sidebar)
- Copy code button
- "Was this helpful?" feedback
- Next/Previous navigation

### 5. Use Cases (`/use-cases`)

**Real Use Cases (From Beta Testing):**

**Home Study Group Leader** _(Beta Tester 1)_
- **Profile:** Watchman hosting weekly prophecy study group
- **Challenge:** Sharing end-times teaching with family/friends; concerned about post-Rapture access
- **Solution:** Solo Starter Kit deployed in home
- **Results:** [To be populated from beta feedback]
- **Quote:** [Real testimonial from beta tester]

**Small Church Pastor** _(Beta Tester 2)_
- **Profile:** Rural church with limited internet connectivity
- **Challenge:** Need offline discipleship materials for congregation
- **Solution:** Field Kit with integrated display for church library
- **Results:** [To be populated from beta feedback]
- **Quote:** [Real testimonial from beta tester]

**Mission-Minded Individual** _(Beta Tester 3)_
- **Profile:** Believer preparing resources for tribulation scenarios
- **Challenge:** Portable, self-contained resource for "on the run" situations
- **Solution:** Field Kit with solar panel for complete off-grid operation
- **Results:** [To be populated from beta feedback]
- **Quote:** [Real testimonial from beta tester]

**Future Use Cases** _(Post-Public Launch)_
- International mission fields
- Church multi-location deployments
- Corporate training environments

### 6. About Page (`/about`)

**Sections:**
1. **Mission** - "Make professional training accessible anywhere"
2. **Story** - How RKPi5 was created (the 20-second dropout problem)
3. **Technology** - The rate-limited probe innovation explained
4. **Team** (optional) - Founder/creator
5. **Contact** - Email, social links

### 7. Blog (`/blog`)

**Initial Posts:**
1. "Introducing RKPi5: Offline Training That Just Works"
2. "The 20-Second Dropout Problem (And How We Solved It)"
3. "Why Captive Portals Disconnect During Video Playback"
4. "Building a $150 Training Portal with Raspberry Pi 5"
5. "Case Study: Deploying 20 Units for Corporate Training"

---

## Convex Schema

### Waitlist Table

```typescript
// schema.ts
waitlist: defineTable({
  email: v.string(),
  name: v.optional(v.string()),
  company: v.optional(v.string()),
  useCase: v.optional(v.string()),
  tier: v.optional(v.string()), // starter, professional, enterprise
  source: v.optional(v.string()), // homepage, product, pricing
  createdAt: v.number(),
  status: v.string(), // pending, contacted, converted
  notes: v.optional(v.string())
}).index("by_email", ["email"])
  .index("by_status", ["status"])
  .index("by_created", ["createdAt"]);
```

### Contact Table

```typescript
contacts: defineTable({
  name: v.string(),
  email: v.string(),
  company: v.optional(v.string()),
  message: v.string(),
  type: v.string(), // demo, support, sales, general
  createdAt: v.number(),
  status: v.string(), // new, responded, closed
  assignedTo: v.optional(v.string())
}).index("by_status", ["status"])
  .index("by_type", ["type"]);
```

### Orders Table (Future)

```typescript
orders: defineTable({
  userId: v.string(), // Clerk user ID
  tier: v.string(), // starter, professional, enterprise
  quantity: v.number(),
  amount: v.number(),
  stripePaymentId: v.string(),
  status: v.string(), // pending, paid, shipped, delivered
  shippingAddress: v.object({...}),
  createdAt: v.number(),
  fulfilledAt: v.optional(v.number())
}).index("by_user", ["userId"])
  .index("by_status", ["status"]);
```

---

## Clerk + Stripe Integration

### Authentication Flow

```typescript
// Public routes (no auth required)
- / (homepage)
- /product
- /pricing
- /docs
- /use-cases
- /about
- /blog

// Protected routes (Clerk auth required)
- /dashboard
- /checkout
- /admin (role: admin)
```

### Stripe Products

```typescript
// Product IDs (create in Stripe dashboard)
products: {
  starter: {
    priceId: 'price_starter_onetime',
    amount: 19900, // $199.00
    name: 'RKPi5 Starter Kit'
  },
  professional: {
    priceId: 'price_professional_onetime',
    amount: 29900, // $299.00
    name: 'RKPi5 Professional Kit'
  },
  enterprise: {
    // Custom quote - no Stripe integration
    // Contact form → sales team
  }
}
```

---

## Replit Deployment Configuration

### Environment Variables

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Convex
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=https://...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Site
NEXT_PUBLIC_SITE_URL=https://rkpi5.replit.app
```

### Replit Configuration

```toml
# .replit
run = "npm run dev"
entrypoint = "package.json"

[env]
NODE_VERSION = "20"

[nix]
channel = "stable-23_11"

[deployment]
run = ["npm", "run", "build"]
deploymentTarget = "cloudrun"
```

---

## Tech Stack Details

### Core Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@clerk/nextjs": "^4.29.0",
    "convex": "^1.8.0",
    "@stripe/stripe-js": "^2.4.0",
    "stripe": "^14.10.0",
    "lucide-react": "^0.300.0",
    "framer-motion": "^10.18.0",
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0"
  }
}
```

### Shadcn/ui Components to Install

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add toast
```

---

## Design Specifications

### Linear-Inspired Design Elements

**1. Typography:**
- Clean, readable sans-serif (Inter font)
- Generous line-height (1.6 for body text)
- Clear hierarchy (large headings, smaller body)

**2. Color Palette:**
- Subtle gradients (not bold)
- Soft shadows (0 20px 40px rgba(0,0,0,0.1))
- High contrast text (#111827 on white)

**3. Layout:**
- Generous whitespace (80-120px between sections)
- Max-width containers (1280px)
- Grid-based layouts (12-column)

**4. Interactions:**
- Fast transitions (150-200ms)
- Subtle hover effects (lift + shadow)
- Smooth scroll
- Loading states

**5. Components:**
- Rounded corners (8-12px)
- Soft borders (1px solid #e5e7eb)
- Card-based layouts
- Consistent spacing (16px, 24px, 32px, 48px)

---

## Key Features to Implement

### 1. Beta Signup Form (Priority 1 - Beta Phase)

**Location:** Homepage hero  
**Fields:** Email (required), Name (required), Phone (optional), Use case (textarea)  
**Storage:** Convex beta_signups table  
**Processing:** Manual review by Scott  
**Confirmation:** Toast notification + email acknowledgment  
**Purpose:** Identify next cohort of beta testers beyond initial 3

### 1b. Waitlist Form (Priority 1 - Post-Beta)

**Location:** Homepage hero, pricing page  
**Fields:** Email (required), Name (optional), SKU interest (dropdown: Bare Bones, Solo, Field)  
**Storage:** Convex waitlist table  
**Confirmation:** Toast notification + email confirmation  
**Analytics:** Track source (homepage, pricing, etc.) and SKU preference

### 2. Support Wiki (Priority 1 - Populate During Beta)

**Structure:**
```
/support/
├── getting-started
│   ├── hobbyist-diy-setup.md
│   ├── solo-starter-kit-setup.md
│   └── field-kit-setup.md
├── troubleshooting
│   ├── [Issues discovered during beta]
│   └── [Real user questions]
├── faqs
│   └── [From beta 1:1 sessions]
└── video-tutorials
    ├── [Filmed during beta onboarding]
    └── [Product demos with real users]
```

**Content Source:** 100% derived from beta program
- Setup guides: Written from 60-min Zoom onboarding sessions
- Troubleshooting: Actual issues encountered by 3 beta testers
- FAQs: Real questions from "user experience tuning" discussions
- Videos: Filmed during beta testing

**Search (Priority 2 - Post-Beta):**
- Client-side search with Fuse.js
- Index all support wiki content
- Command palette (Cmd+K) + search bar

### 3. Demo Request Form (Priority 3)

**Location:** Product page, pricing page  
**Fields:** Name, Email, Company, Phone, Message  
**Storage:** Convex contacts table  
**Notification:** Email to sales team  
**Response:** Auto-reply with next steps

### 4. Stripe Checkout (Priority 4)

**Flow:**
1. User clicks "Buy Now" on pricing card
2. Clerk auth check (sign in if needed)
3. Redirect to Stripe Checkout
4. Success → Create order in Convex
5. Redirect to /dashboard with confirmation

### 5. Admin Dashboard (Priority 5)

**Features:**
- View waitlist (table with filters)
- Export waitlist to CSV
- View contact form submissions
- View orders
- Basic analytics (signups per day, conversion rate)

---

## Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | <1.5s | Lighthouse |
| Time to Interactive | <3s | Lighthouse |
| Lighthouse Score | >90 | Lighthouse |
| Bundle Size | <200KB (initial) | Next.js build |
| API Response Time | <200ms | Convex dashboard |

---

## SEO Configuration

### Meta Tags (Per Page)

```typescript
// Homepage
title: "RKPi5 - Offline Training Portal That Just Works"
description: "Professional WiFi captive portal for offline training. 60+ minute videos without disconnection. Setup in 60 seconds. $199."
keywords: "offline training, captive portal, WiFi training, Raspberry Pi"

// Product
title: "Product - RKPi5 Offline Training Portal"
description: "Technical specifications, features, and use cases for RKPi5. 15 concurrent users, auto-popup captive portal, cross-platform support."

// Pricing
title: "Pricing - RKPi5 Offline Training Portal"
description: "RKPi5 pricing: Starter Kit $199, Professional Kit $299, Enterprise custom. Compare features and choose your plan."
```

### Open Graph Images

```
/public/og/
├── homepage.png     # 1200x630 - Hero image
├── product.png      # 1200x630 - Product showcase
├── pricing.png      # 1200x630 - Pricing tiers
└── default.png      # 1200x630 - Generic fallback
```

---

## Analytics & Tracking

### Events to Track

```typescript
// Conversion events
- waitlist_signup
- demo_request
- pricing_view
- checkout_started
- purchase_completed

// Engagement events
- video_played (demo video)
- docs_searched
- feature_clicked
- comparison_viewed

// Navigation events
- page_view
- cta_clicked
- external_link_clicked
```

### Analytics Tools

- **Vercel Analytics** (built-in with Replit deployment)
- **Convex Analytics** (custom dashboard)
- **Stripe Dashboard** (payment analytics)

---

## Content Strategy

### Homepage Copy

**Hero Headline:** "Biblical Resources When Networks Fail"

**Hero Subheadline:** "26GB+ Rapture Kit content delivered via offline WiFi portal. Reach loved ones before the Rapture. Equip saints after. Setup in less than 5 minutes."

**Feature Headlines:**
1. "26GB+ Biblical Resources" - 130+ hours sermons, 39+ hours video, multiple Bible translations, survival guides
2. "No Internet Required" - Complete offline operation. Static payload never expires. No updates needed.
3. "6-Hour Battery Runtime" - TSA carry-on approved. Field Kit includes solar panel for off-grid recharging.
4. "5-Minute Setup" - Insert microSD, attach power, captive portal auto-configures

**Social Proof (Post-Beta):**
- "[Beta tester quote about real usage]"
- "[Beta tester quote about ease of setup]"
- "[Beta tester quote about content quality]"
- "Rapture Kit content trusted by [X] believers worldwide"

---

## Development Phases

### Phase 0: Beta Program (< 2 weeks from approval)
- [ ] Build 3 beta units (Hobbyist DIY, Solo, Field)
- [ ] Ship to beta testers
- [ ] 60-min Zoom onboarding per tester
- [ ] 2-4 weeks hands-on testing
- [ ] Film product demos, tutorials
- [ ] Collect troubleshooting issues
- [ ] 1:1 "user experience tuning" discussions

### Phase 1: Beta Website (Week 1-2) - MINIMAL
**Purpose:** Support beta program only, no public marketing yet

- [ ] Next.js + TypeScript setup
- [ ] Tailwind + Shadcn/ui configuration
- [ ] Layout components (Header, Footer)
- [ ] Homepage (hero + beta signup form)
- [ ] Product overview page (basic)
- [ ] Support wiki (shell structure, populate during beta)
- [ ] About page (simple)
- [ ] Convex setup + beta_signups table

### Phase 2: Public Website (Week 3-6) - FULL
**Purpose:** Convert waitlist with authentic beta-derived content

- [ ] Update homepage with beta testimonials
- [ ] Product demo videos (from beta)
- [ ] Full pricing page (4 tiers)
- [ ] Support wiki (populated with beta FAQs)
- [ ] Use cases page (beta tester stories)
- [ ] Clerk authentication
- [ ] Stripe integration
- [ ] Checkout flow
- [ ] Waitlist system
- [ ] Dashboard (user)

### Phase 3: Polish & Deploy (Week 7-8)
- [ ] Support wiki search functionality
- [ ] SEO optimization (keywords from product-brief)
- [ ] Performance optimization
- [ ] Mobile optimization
- [ ] Replit deployment
- [ ] Influencer demo program (Prophecy Watchers, Lamb & Lion)

---

**Prepared By:** Sarah (Product Owner)  
**Date:** November 11, 2025  
**Purpose:** Marketing website technical specifications

