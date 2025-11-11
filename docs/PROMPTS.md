# RKPi5 Marketing Website - AI Agent Prompts

**Purpose:** Use these prompts with an AI coding agent to build the marketing website  
**Product:** RKPi5 + Rapture Kit Content Platform  
**Framework:** Next.js 14 + TypeScript + Tailwind + Shadcn/ui + Convex  
**Auth:** Clerk (handles Stripe integration)  
**Testing:** Playwright for UI and workflow patterns  
**Deployment:** Replit  
**Design:** Linear.app-inspired (clean, contemporary, fast)

**CRITICAL:** Do not start development until beta program complete (see README.md Phase 0)

---

## 🚀 Prompt 1: Project Initialization

```
Create a new Next.js 14 marketing website for RKPi5 (Offline Training Portal product).

REQUIREMENTS:
- Next.js 14 with App Router
- TypeScript (strict mode)
- Tailwind CSS
- Shadcn/ui components
- Convex for backend (realtime database)
- Clerk for authentication
- Stripe for payments
- Deploy on Replit

DESIGN INSPIRATION:
- Clean, contemporary UI like Linear.app (https://linear.app)
- Generous whitespace
- Subtle gradients
- Fast animations (150-200ms)
- Card-based layouts

PROJECT STRUCTURE:
/app
  /(marketing)
    /page.tsx           # Homepage
    /product/page.tsx   # Product page
    /pricing/page.tsx   # Pricing page
    /docs/page.tsx      # Documentation
    /use-cases/page.tsx # Use cases
    /about/page.tsx     # About
    /blog/page.tsx      # Blog
  /(auth)
    /dashboard/page.tsx # User dashboard
    /checkout/page.tsx  # Stripe checkout
  /admin/page.tsx       # Admin dashboard

/components
  /layout              # Header, Footer, Navigation
  /marketing           # Hero, Features, Pricing cards
  /interactive         # Forms, search
  /ui                  # Shadcn components

INITIAL SETUP:
1. Initialize Next.js with TypeScript
2. Configure Tailwind CSS
3. Install and configure Shadcn/ui
4. Set up Convex
5. Configure Clerk
6. Create basic layout (Header + Footer)
7. Create homepage with hero section

DESIGN SYSTEM:
- Primary color: #0ea5e9 (sky blue)
- Font: Inter
- Max width: 1280px
- Spacing: 16px, 24px, 32px, 48px, 64px, 96px
- Border radius: 8px, 12px, 16px
- Shadows: subtle (0 20px 40px rgba(0,0,0,0.1))

Start with project initialization and basic homepage. I'll provide content and features in follow-up prompts.
```

---

## 🎨 Prompt 2: Homepage Hero Section

```
Create a Linear.app-inspired hero section for the RKPi5 homepage.

PRODUCT INFO:
- Name: RKPi5 + Rapture Kit Content Platform
- Tagline: "Biblical Resources When Networks Fail"
- Value Prop: Offline WiFi portal preloaded with 26GB+ Rapture Kit content
- Key Benefit: No internet required. Static payload never expires. 6-hour battery runtime.
- Price: $99-499 (4 tiers: Hobbyist FREE, Bare Bones, Solo, Field)

HERO SECTION REQUIREMENTS:

1. HEADLINE (large, bold):
   "Biblical Resources When Networks Fail"

2. SUBHEADLINE (medium, gray):
   "26GB+ Rapture Kit content delivered via offline WiFi portal. Reach loved ones before the Rapture. Equip saints after. Setup in less than 5 minutes."

3. KEY STATS (3 metrics in a row):
   - "26GB+" - Rapture Kit content (130+ hours audio, 39+ hours video, Bibles, survival guides)
   - "15 users" - Concurrent capacity
   - "6 hours" - Battery runtime (TSA carry-on approved)

4. CTA BUTTONS (2 buttons):
   - Primary: "Join Beta Waitlist" (opens modal with beta signup form)
   - Secondary: "Learn More" (scrolls to features)

5. HERO IMAGE/VIDEO:
   - Show Raspberry Pi 5 with WiFi signal visualization
   - Or: Animated diagram of students connecting
   - Placeholder: Gradient background with floating elements

DESIGN SPECS:
- Background: Subtle gradient (blue to purple, very soft)
- Text: Dark (#111827) on light background
- Buttons: Primary (blue gradient), Secondary (outline)
- Spacing: 96px top/bottom padding
- Animation: Fade in on load, float effect on hero image

TECHNICAL:
- Use Framer Motion for animations
- Responsive (mobile-first)
- Waitlist modal uses Shadcn Dialog + Form
- Form submits to Convex waitlist table

Implement this hero section with all animations and the waitlist form functionality.
```

---

## 📊 Prompt 3: Features Section

```
Create a features section for the RKPi5 homepage showcasing 4 key benefits.

FEATURES TO HIGHLIGHT:

1. 26GB+ RAPTURE KIT CONTENT
   Icon: Book with cross
   Headline: "Complete Biblical Resource Library"
   Description: "130+ hours of sermons from trusted pastors (Andy Woods, Tom Hughes, Brandon Holthaus), 39+ hours video teachings, multiple Bible translations, survival guides, evangelism tools."

2. NO INTERNET REQUIRED
   Icon: Cloud with X (offline)
   Headline: "Static Payload - Never Expires"
   Description: "Complete offline operation. No updates required. Content is stable and steady from day 1. Works in underground settings, remote areas, or 'on the run' scenarios."

3. BATTERY POWERED & SOLAR
   Icon: Battery with sun
   Headline: "6-Hour Runtime + Solar Charging"
   Description: "25,000 mAh battery (TSA carry-on approved). Field Kit includes fold-up solar panel for off-grid recharging. Operates without AC power."

4. INSTANT SETUP
   Icon: Lightning bolt
   Headline: "5-Minute Setup"
   Description: "Insert microSD, attach power, captive portal auto-configures. No IT expertise required. Works like hotel WiFi - auto-popup on iOS, Android, Windows, macOS."

DESIGN SPECS:
- 4-column grid (responsive: 1 col mobile, 2 col tablet, 4 col desktop)
- Card style: White background, subtle border, hover lift effect
- Icon: 48x48px, primary color
- Headline: 20px, bold
- Description: 16px, gray
- Spacing: 24px padding, 32px gap between cards
- Animation: Stagger fade-in on scroll

Use Lucide React icons. Implement with Framer Motion scroll animations.
```

---

## 💰 Prompt 4: Pricing Page

```
Create a pricing page for RKPi5 + Rapture Kit with 4 tiers inspired by Linear's pricing design.

PRICING TIERS:

TIER 1: HOBBYIST (FREE - DIY)
- Downloadable installation scripts + documentation
- Self-guided 45-minute setup process
- Complete Rapture Kit content library (26GB+, already free)
- Create your own golden master
- Requirement: Existing Raspberry Pi 5 (8GB+ RAM)
- Restrictions: Personal use only - resale prohibited
- Target: Technical users comfortable with Pi configuration

TIER 2: BARE BONES - $99
- 2x 128GB microSD cards (SanDisk Extreme, pre-configured)
- Primary + backup card with complete Rapture Kit content
- Use with existing Pi5 with minimum 8GB RAM
- Insert microSD, attach power, boots in < 5 minutes
- Quick start guide (PDF)
- Email support
- Target: Existing Pi5 owners wanting turnkey content

TIER 3: SOLO STARTER KIT - $299 (MOST POPULAR)
- 1x Raspberry Pi 5 (8GB) with Pi OS Trixie pre-installed
- 2x 128GB microSD cards (pre-configured with Rapture Kit)
- 25,000 mAh battery pack (6-hour runtime, TSA approved)
- Protective carry case
- WiFi captive portal (auto-configured)
- Quick start guide
- Email support
- Target: Individual believers, watchmen, home study groups

TIER 4: FIELD KIT - $499
- 1x Raspberry Pi 5 (8GB) with Pi OS Trixie pre-installed
- 2x 128GB microSD cards (pre-configured)
- Integrated case with 5" touchscreen display + speakers
- 25,000 mAh battery pack (6-hour runtime)
- SOKIOVOLA 50W fold-up solar panel
- Protective carry case
- WiFi captive portal (auto-configured)
- Quick start guide + video tutorial
- Priority email support
- Self-contained unit for "on the run" scenarios
- Target: Mission-minded believers, field deployment, tribulation preparedness

FUTURE PHASE (Not shown on pricing page initially):
- Church Package: Starting at $1,000 (custom content integration)
- Enterprise Package: Custom Quote (RFP required, multi-location)

DESIGN SPECS:
- 3-column layout (stack on mobile)
- Cards: White background, border, shadow
- Popular badge on Professional tier
- Feature list with checkmarks
- CTA button at bottom of each card
- Hover effect: Lift + stronger shadow
- Comparison table below cards showing all features

FEATURES COMPARISON:
Include comparison matrix with:
- Hardware specs
- Storage capacity
- Support level
- Setup assistance
- Custom branding
- Volume discounts
- SLA guarantees

CTA BUTTONS:
- Hobbyist: "Download Scripts" (links to GitHub or download page)
- Bare Bones: "Join Waitlist" (opens modal, pre-select tier)
- Solo: "Join Waitlist" (opens modal, pre-select tier) - Add "MOST POPULAR" badge
- Field: "Join Waitlist" (opens modal, pre-select tier)

NOTE: Church/Enterprise packages not shown initially - defer to post-public launch

Implement with Shadcn Card, Button, Badge components. Add smooth hover animations.
```

---

## 📚 Prompt 5: Support Wiki & FAQ System

```
Create a Support Wiki for RKPi5 with sidebar navigation, FAQ section, and MDX support.

CRITICAL: Content will be populated AFTER beta program based on real user feedback.
Build the structure now, populate with placeholder content.

SUPPORT WIKI STRUCTURE:

Getting Started/
  - Hobbyist DIY Setup (45-minute process)
  - Solo Starter Kit Setup (5-minute quick start)
  - Field Kit Setup (5-minute quick start with solar panel)

Troubleshooting/
  - [To be populated from beta testing]
  - [Common issues discovered during beta]
  - [Real user questions from 1:1 sessions]

FAQ/
  - Product Questions (What is Rapture Kit? Who created this? etc.)
  - Technical Questions (Battery life? Solar panel specs? etc.)
  - Purchasing Questions (Shipping? Returns? Warranty?)
  - Content Questions (How to add custom content? Updates? etc.)

Video Tutorials/
  - [Product demos filmed during beta]
  - [Setup walkthroughs from beta onboarding sessions]
  - [Troubleshooting guides based on beta feedback]

Advanced/
  - Golden Master Duplication
  - Custom Content Integration (Church/Enterprise)
  - Battery Optimization Tips

FEATURES REQUIRED:

1. SIDEBAR NAVIGATION
   - Collapsible sections
   - Active page indicator
   - Smooth scroll to sections

2. CONTENT AREA
   - MDX rendering (markdown with React components)
   - Syntax highlighting for code blocks
   - Copy button on code blocks
   - Responsive images
   - Table of contents (right sidebar on desktop)

3. SEARCH
   - Command palette (Cmd+K)
   - Search all documentation
   - Keyboard navigation
   - Highlight matches

4. NAVIGATION
   - Breadcrumbs at top
   - Previous/Next links at bottom
   - "Was this helpful?" feedback buttons

FAQ SECTION:
- Accordion-style collapsible questions
- Categories: Product, Technical, Purchasing, Content
- Search functionality to filter FAQs
- "Was this helpful?" feedback buttons
- Link to contact form if answer not found

TECHNICAL:
- Use next-mdx-remote or contentlayer for MDX
- Use rehype-pretty-code for syntax highlighting
- Use Fuse.js for client-side search
- Store content in /content/support/ directory
- Use Playwright for E2E testing of search and navigation

DESIGN:
- Sidebar: 280px wide, sticky
- Content: Max 65ch width for readability
- FAQ: Shadcn Accordion component
- Code blocks: Dark theme with copy button
- Links: Blue with underline on hover
- Video embeds: YouTube/Vimeo responsive player

NO CHATBOTS. NO SUPPORT AGENTS. Static content only.

Implement the support wiki with sidebar navigation, FAQ accordion, MDX rendering, and search functionality.
```

---

## 🎯 Prompt 6: Waitlist System (Convex + Clerk)

```
Implement a complete waitlist system using Convex for storage and Clerk for optional authentication.

CONVEX SCHEMA:

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
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
    .index("by_created", ["createdAt"])
});
```

FEATURES:

1. WAITLIST FORM COMPONENT
   - Email input (required, validated)
   - Name input (optional)
   - Company input (optional)
   - Use case dropdown (optional): Corporate, Military, NGO, Education, Other
   - Tier selection (optional): Starter, Professional, Enterprise
   - Submit button with loading state
   - Success toast notification
   - Error handling

2. CONVEX MUTATIONS
   - addToWaitlist(email, name?, company?, useCase?, tier?, source?)
   - Validate email format
   - Check for duplicates
   - Return success/error

3. CONVEX QUERIES
   - getWaitlistCount() - For displaying "Join 247 others" message
   - getWaitlistEntries() - For admin dashboard

4. EMAIL CONFIRMATION (Optional)
   - Send confirmation email via Resend or SendGrid
   - "Thanks for joining! We'll notify you when RKPi5 launches"

USAGE:
- Homepage hero: Simple email-only form
- Pricing page: Full form with tier pre-selected
- Product page: Full form with use case dropdown

Implement the complete waitlist system with Convex backend, form validation, and success notifications.
```

---

## 💳 Prompt 7: Clerk + Stripe Monetization Integration

```
Implement Clerk Monetization (Stripe integration) for RKPi5 product purchases.

CRITICAL: Use Clerk's built-in Stripe integration. Do NOT interact with Stripe directly.
Reference: https://clerk.com/docs/monetization/overview

PRODUCTS:

1. Hobbyist (FREE) - No payment, just download link
2. Bare Bones - $99 (one-time payment)
3. Solo Starter Kit - $299 (one-time payment)
4. Field Kit - $499 (one-time payment)

CHECKOUT FLOW (via Clerk Monetization):

1. User clicks "Join Waitlist" on pricing card
2. Waitlist signup → Email notification
3. When ready to purchase (post-beta):
   a. User clicks "Buy Now" in waitlist email or on site
   b. Clerk authentication check:
      - If not signed in → Redirect to Clerk sign-in
      - If signed in → Proceed to Clerk Checkout
   c. Clerk Checkout (handles Stripe under the hood):
      - Product: Based on selected tier
      - Customer info: From Clerk user
      - Success URL: /dashboard?success=true
      - Cancel URL: /pricing?canceled=true
   d. Clerk handles payment processing
   e. After payment:
      - Clerk webhook → Create order in Convex
      - Send confirmation email via Resend
      - Redirect to dashboard with success message

CONVEX SCHEMA:

```typescript
orders: defineTable({
  userId: v.string(), // Clerk user ID
  email: v.string(),
  tier: v.string(), // bare_bones, solo, field
  quantity: v.number(),
  amount: v.number(), // in cents (9900, 29900, 49900)
  clerkCheckoutId: v.string(),
  status: v.string(), // pending, paid, fulfilled, shipped
  createdAt: v.number(),
  paidAt: v.optional(v.number()),
  shippingAddress: v.optional(v.object({
    name: v.string(),
    address1: v.string(),
    address2: v.optional(v.string()),
    city: v.string(),
    state: v.string(),
    zip: v.string(),
    country: v.string()
  }))
}).index("by_user", ["userId"])
  .index("by_status", ["status"]);
```

CLERK WEBHOOK (NOT Stripe directly):

```typescript
// app/api/webhooks/clerk/route.ts
// Handle Clerk monetization events:
// - checkout.completed
// - Create order in Convex
// - Send confirmation email via Resend
```

DASHBOARD:

```typescript
// app/(auth)/dashboard/page.tsx
// Show user's orders
// Download links for golden master images
// Order status tracking
```

TECHNICAL:
- Use Clerk Monetization SDK (built-in Stripe integration)
- Do NOT install stripe package directly
- Verify Clerk webhook signature (not Stripe)
- Handle idempotency via Convex transaction IDs
- Use Playwright to test checkout flow end-to-end

TESTING:
- Playwright test: Complete purchase flow from pricing page to dashboard
- Test scenarios: Bare Bones, Solo, Field purchases
- Test error cases: Payment failure, canceled checkout
- Test webhook processing and order creation

Implement complete Clerk Monetization checkout flow with authentication and Convex order storage.
```

---

## 📱 Prompt 8: Responsive Design & Mobile Optimization

```
Optimize the RKPi5 marketing website for mobile devices with responsive design.

REQUIREMENTS:

1. MOBILE NAVIGATION
   - Hamburger menu (mobile only)
   - Slide-in drawer with smooth animation
   - Close on route change
   - Backdrop blur effect

2. RESPONSIVE BREAKPOINTS
   - Mobile: <640px (1 column layouts)
   - Tablet: 640-1024px (2 column layouts)
   - Desktop: >1024px (3-4 column layouts)

3. TOUCH OPTIMIZATION
   - Larger tap targets (min 44x44px)
   - Swipe gestures for image carousels
   - Pull-to-refresh (where applicable)
   - No hover-dependent interactions

4. PERFORMANCE
   - Lazy load images below fold
   - Optimize images (WebP format, responsive sizes)
   - Minimize JavaScript bundle
   - Prefetch critical routes

5. MOBILE-SPECIFIC FEATURES
   - Sticky CTA button at bottom (mobile only)
   - Collapsible sections in docs
   - Simplified forms (fewer fields)
   - Click-to-call for phone numbers

TESTING WITH PLAYWRIGHT:
- Playwright test: Mobile navigation (hamburger menu, drawer open/close)
- Playwright test: Touch interactions (tap targets, swipe gestures)
- Playwright test: Form submissions on mobile
- Cross-browser: Chromium, Firefox, WebKit (Safari)
- Device emulation: iPhone 14, Pixel 7, iPad Pro
- Lighthouse mobile score >90

Implement responsive design with mobile-first approach and touch optimization. Use Playwright for comprehensive UI testing.
```

---

## 🔍 Prompt 9: SEO & Performance Optimization

```
Optimize RKPi5 marketing website for SEO and performance.

SEO REQUIREMENTS:

1. META TAGS (per page)
   - Title (unique, <60 chars)
   - Description (unique, <160 chars)
   - Keywords
   - Open Graph tags (og:title, og:description, og:image)
   - Twitter Card tags

2. STRUCTURED DATA (JSON-LD)
   - Organization schema
   - Product schema (for pricing page)
   - Article schema (for blog posts)
   - BreadcrumbList schema

3. SITEMAP
   - Generate sitemap.xml
   - Include all public pages
   - Update frequency
   - Priority values

4. ROBOTS.TXT
   - Allow all pages except /admin
   - Sitemap location

PERFORMANCE REQUIREMENTS:

1. IMAGE OPTIMIZATION
   - Use Next.js Image component
   - WebP format with fallbacks
   - Responsive sizes
   - Lazy loading

2. CODE SPLITTING
   - Dynamic imports for heavy components
   - Route-based splitting (automatic in Next.js)
   - Lazy load below-fold content

3. CACHING
   - Static pages: ISR with 1 hour revalidation
   - API routes: Cache headers
   - CDN caching (Replit handles this)

4. FONTS
   - Use next/font for Inter
   - Preload critical fonts
   - Font display: swap

LIGHTHOUSE TARGETS:
- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >95

Implement comprehensive SEO optimization and performance improvements to achieve Lighthouse scores >90 across all metrics.
```

---

## 📊 Prompt 10: Admin Dashboard

```
Create an admin dashboard for managing RKPi5 waitlist and orders.

ADMIN FEATURES:

1. WAITLIST MANAGEMENT
   - Table view with columns: Email, Name, Company, Use Case, Tier, Date, Status
   - Filters: By status, by tier, by date range
   - Search: By email or company
   - Actions: Mark as contacted, mark as converted, add notes, delete
   - Export: Download as CSV
   - Stats: Total signups, conversion rate, signups per day chart

2. CONTACT FORM SUBMISSIONS
   - Table view: Name, Email, Type, Message, Date, Status
   - Filters: By type (demo, support, sales), by status
   - Actions: Mark as responded, assign to team member, close
   - Quick reply: Template responses

3. ORDER MANAGEMENT
   - Table view: Order ID, Customer, Tier, Amount, Status, Date
   - Filters: By status, by tier, by date
   - Actions: Mark as fulfilled, mark as shipped, add tracking
   - Stats: Revenue, orders per day, average order value

4. ANALYTICS
   - Signups per day (line chart)
   - Conversion funnel (waitlist → demo → purchase)
   - Traffic sources (homepage, product, pricing, blog)
   - Popular use cases (pie chart)

TECHNICAL:

- Protected route: Require Clerk auth with role="admin"
- Use Convex queries with pagination
- Use Shadcn Table, Select, DatePicker components
- Use Recharts for analytics charts
- Real-time updates (Convex subscriptions)

DESIGN:
- Sidebar navigation (Waitlist, Contacts, Orders, Analytics)
- Table with hover states
- Action buttons (icon buttons)
- Stats cards at top
- Charts below stats

Implement complete admin dashboard with all management features and analytics.
```

---

## 🎬 Prompt 11: Demo Video & Product Showcase

```
Create a product showcase section with demo video and key differentiators.

DEMO VIDEO SECTION:

1. VIDEO PLAYER
   - Embed YouTube or Vimeo video
   - Thumbnail with play button overlay
   - Modal player (opens in dialog)
   - Video: 2-3 minute product demo showing:
     * USB drive preparation
     * Installation execution
     * Captive portal popup on phone
     * Video playback without disconnection

2. PRODUCT DIFFERENTIATORS (3 columns)

   COLUMN 1: VS COMMERCIAL ROUTERS
   - Price: $150 vs $500+
   - Setup: 60 sec vs 2-4 hours
   - Expertise: None vs IT required
   - Winner: RKPi5

   COLUMN 2: VS DIY SOLUTIONS
   - Stability: Zero dropouts vs Frequent drops
   - Captive Portal: Auto-popup vs Manual navigation
   - Support: Documented vs Community forums
   - Winner: RKPi5

   COLUMN 3: UNIQUE INNOVATION
   - Rate-limited probe handling
   - Hotel-grade experience
   - Cross-platform compatibility
   - Offline operation

3. TECHNICAL SPECS (Expandable accordion)
   - Hardware: Raspberry Pi 5, 4-8GB RAM
   - Network: WiFi 802.11ac, 15 concurrent users
   - Software: nginx, NetworkManager, custom scripts
   - Capacity: 32GB content, 4GB RAM cache
   - Performance: <2s video start, <500ms seeking

DESIGN:
- Video: 16:9 aspect ratio, max 800px wide
- Columns: Equal width, card style
- Accordion: Shadcn Accordion component
- Icons: Lucide React
- Animation: Fade in on scroll

Implement product showcase with video player and differentiator columns.
```

---

## 📧 Prompt 12: Email Notifications (Convex + Resend)

```
Implement email notifications for waitlist signups and contact form submissions.

SETUP:

1. Install Resend:
   npm install resend

2. Configure Convex HTTP action:
   - Create sendEmail HTTP action
   - Call Resend API
   - Handle errors

EMAILS TO SEND:

1. WAITLIST CONFIRMATION
   To: User who signed up
   Subject: "Welcome to the RKPi5 Waitlist!"
   Content:
   - Thank you message
   - What to expect (launch timeline)
   - Link to documentation
   - Unsubscribe link

2. ADMIN NOTIFICATION (Waitlist)
   To: admin@rkpi5.com
   Subject: "New Waitlist Signup: {email}"
   Content:
   - User details (name, email, company, use case, tier)
   - Link to admin dashboard
   - Quick actions (mark as contacted)

3. DEMO REQUEST CONFIRMATION
   To: User who requested demo
   Subject: "Your RKPi5 Demo Request"
   Content:
   - Confirmation message
   - What happens next
   - Typical response time (24 hours)
   - Link to documentation while waiting

4. ADMIN NOTIFICATION (Demo)
   To: sales@rkpi5.com
   Subject: "New Demo Request: {name} from {company}"
   Content:
   - Contact details
   - Message content
   - Link to respond

CONVEX ACTIONS:

```typescript
// convex/emails.ts
import { httpAction } from "./_generated/server";
import { Resend } from "resend";

export const sendWaitlistConfirmation = httpAction(async (ctx, { email, name }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: "RKPi5 <hello@rkpi5.com>",
    to: email,
    subject: "Welcome to the RKPi5 Waitlist!",
    html: `<p>Hi ${name || 'there'},</p>...`
  });
});
```

Implement email notification system with Resend integration and Convex HTTP actions.
```

---

## 🎨 Prompt 13: Linear-Inspired UI Components

```
Create reusable UI components inspired by Linear.app's design system.

COMPONENTS TO CREATE:

1. GRADIENT BUTTON
   - Primary: Blue gradient (linear-gradient(135deg, #0ea5e9, #0284c7))
   - Hover: Lift effect + stronger shadow
   - Loading state: Spinner
   - Disabled state: Opacity 50%

2. FEATURE CARD
   - Icon at top (48x48px circle with gradient background)
   - Headline (bold, 20px)
   - Description (gray, 16px)
   - Hover: Lift 2px + shadow
   - Animation: Fade in on scroll

3. STAT CARD
   - Large number (48px, bold)
   - Label below (14px, gray)
   - Icon (optional)
   - Subtle border
   - Background: White with slight gradient

4. TESTIMONIAL CARD
   - Quote text (italic, 18px)
   - Author name (bold, 16px)
   - Author title + company (gray, 14px)
   - Avatar image (48x48px circle)
   - 5-star rating
   - Hover: Subtle lift

5. COMPARISON TABLE
   - Sticky header row
   - Checkmark/X icons for features
   - Highlight column (Professional tier)
   - Responsive: Horizontal scroll on mobile

6. CTA SECTION
   - Gradient background
   - Large headline
   - Subheadline
   - Button(s)
   - Full-width section

DESIGN SYSTEM:

```typescript
// lib/design-system.ts
export const colors = {
  primary: {
    gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    solid: '#0ea5e9'
  },
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    tertiary: '#9ca3af'
  },
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6'
  }
};

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.07)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 40px rgba(0,0,0,0.1)'
};
```

Implement these reusable components with consistent styling and animations.
```

---

## 🚀 Complete Build Prompt (All-in-One)

```
Create a complete marketing website for RKPi5 (Offline Training Portal product) with Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui, Convex, Clerk, and Stripe.

PRODUCT OVERVIEW:
RKPi5 + Rapture Kit Content Platform is an offline WiFi portal preloaded with 26GB+ of biblical resources (130+ hours sermons, 39+ hours video, Bibles, survival guides). Captive portal auto-popup like hotel WiFi. 6-hour battery runtime, solar rechargeable. Target market: Watchmen, Evangelists, Churches, Tribulation Saints. Price: $99-499 (4 tiers).

TECH STACK:
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Shadcn/ui
- Convex (backend/database)
- Clerk (authentication)
- Stripe (payments)
- Framer Motion (animations)
- Lucide React (icons)
- Deploy on Replit

DESIGN INSPIRATION:
Linear.app - Clean, contemporary, generous whitespace, subtle gradients, fast animations, card-based layouts

PAGES TO CREATE (10 total):

PUBLIC:
1. Homepage (/) - Hero, features, how it works, pricing preview, waitlist CTA
2. Product (/product) - Features deep-dive, specs, demo video, comparison
3. Pricing (/pricing) - 3 tiers (Starter $199, Professional $299, Enterprise custom)
4. Documentation (/docs) - MDX-based docs with sidebar, search, TOC
5. Use Cases (/use-cases) - Corporate, Military, NGO, Education scenarios
6. About (/about) - Mission, story, technology, contact
7. FAQ (/faq) - Frequently Asked Questions (accordion-style)

AUTH-PROTECTED:
8. Dashboard (/dashboard) - User orders, downloads, profile
9. Checkout (/checkout) - Stripe payment flow
10. Admin (/admin) - Waitlist management, orders, analytics

KEY FEATURES:

1. WAITLIST SYSTEM
   - Email capture form (homepage, pricing)
   - Store in Convex waitlist table
   - Email confirmation via Resend
   - Admin dashboard to manage signups

2. STRIPE CHECKOUT
   - One-time payments ($199, $299)
   - Clerk auth required
   - Webhook handling
   - Order storage in Convex

3. DOCUMENTATION
   - MDX rendering
   - Sidebar navigation
   - Search (Cmd+K)
   - Code syntax highlighting
   - Copy code button

4. RESPONSIVE DESIGN
   - Mobile-first approach
   - Hamburger menu
   - Touch-optimized
   - Fast loading (<3s)

DESIGN SYSTEM:
- Primary color: #0ea5e9 (sky blue)
- Font: Inter
- Max width: 1280px
- Spacing scale: 16, 24, 32, 48, 64, 96px
- Border radius: 8, 12, 16px
- Shadows: Subtle (0 20px 40px rgba(0,0,0,0.1))
- Animations: 150-200ms ease transitions

CONTENT:
- Headline: "Biblical Resources When Networks Fail"
- Value prop: "26GB+ Rapture Kit content. No internet required. Static payload never expires."
- Key benefits: 130+ hours sermons, 6-hour battery, Solar rechargeable, 5-minute setup
- Social proof: [To be populated from beta testimonials]

CONVEX SCHEMA:
- beta_signups table (email, name, phone, useCase, createdAt, status)
- waitlist table (email, name, tier, source, createdAt, status)
- orders table (userId, tier, amount, clerkCheckoutId, status, shippingAddress)
- faq table (question, answer, category, order, helpful_count)

DEPLOYMENT:
- Configure for Replit
- Environment variables for Clerk, Convex, Stripe
- Build command: npm run build
- Start command: npm start

Build the complete marketing website with all pages, features, and integrations. Focus on clean, Linear-inspired design with fast performance and excellent mobile experience.
```

---

## 📋 Prompt Execution Order

### Phase 1: Foundation (Use Prompts 1-2)
1. **Prompt 1:** Project initialization
2. **Prompt 2:** Homepage hero section

**Deliverable:** Working homepage with hero and waitlist form

### Phase 2: Core Pages (Use Prompts 3-5)
3. **Prompt 3:** Features section
4. **Prompt 4:** Pricing page
5. **Prompt 5:** Documentation system

**Deliverable:** Homepage, pricing, and docs functional

### Phase 3: Backend (Use Prompts 6-7)
6. **Prompt 6:** Waitlist system (Convex)
7. **Prompt 7:** Stripe checkout

**Deliverable:** Full purchase flow working

### Phase 4: Polish (Use Prompts 8-10)
8. **Prompt 8:** Mobile optimization
9. **Prompt 9:** SEO optimization
10. **Prompt 10:** Admin dashboard

**Deliverable:** Production-ready website

### Alternative: All-in-One (Use Prompt 11)
11. **Prompt 11:** Complete build (everything at once)

**Deliverable:** Full website in one shot

---

## 🎯 Recommended Approach

### Option A: Iterative (Recommended)
**Use prompts 1-10 sequentially**
- More control over each feature
- Easier to review and adjust
- Better for learning the codebase
- Estimated time: 4-6 hours (with agent)

### Option B: All-in-One
**Use prompt 11 only**
- Fastest approach
- Less control over details
- May need refinement iterations
- Estimated time: 2-3 hours (with agent)

---

## 📝 Additional Context to Provide

When using these prompts, also provide:

**From RKPi5 Project:**
- `docs/marketing/product-brief.md` (this file)
- `docs/productBrief.md` (original product brief)
- `docs/prd.md` (for technical details)

**Design References:**
- Linear.app (https://linear.app) - Overall design inspiration
- Vercel.com - Clean, fast, developer-focused
- Stripe.com - Excellent pricing page design

**Content:**
- Copy from product-brief.md
- Technical specs from architecture.md
- Use cases from productBrief.md

---

## 🤖 Parallel & Multi-Agent Development Strategy

### Cursor 2.0 Composer Agents (Parallel Development)

**Opportunity:** Use Cursor's Composer with multiple agents working in parallel on independent features.

**Parallelizable Workstreams:**

**Agent 1: Frontend UI Components (3-4 hours)**
- Prompts 1-3: Project init, hero section, features
- Prompts 13: Linear-inspired components
- Output: Homepage, component library, design system

**Agent 2: Pricing & Checkout (2-3 hours)**  
- Prompt 4: Pricing page
- Prompt 7: Clerk Monetization integration
- Output: Pricing tiers, checkout flow, Convex order schema

**Agent 3: Support Wiki & FAQ (2-3 hours)**
- Prompt 5: Support wiki structure
- Create FAQ accordion system
- Output: MDX rendering, search, FAQ categories (populate post-beta)

**Agent 4: Auth & User Dashboard (2-3 hours)**
- Prompt 6: Waitlist system
- User dashboard with order history
- Download links for Hobbyist scripts
- Output: Clerk auth, dashboard, Convex queries

**Agent 5: Testing & Optimization (3-4 hours)**
- Prompt 8: Responsive design + Playwright tests
- Prompt 9: SEO optimization
- Output: Mobile optimization, E2E tests, Lighthouse >90

**Agent 6: Admin Dashboard (2-3 hours)**
- Prompt 10: Admin features
- Beta signup management
- Waitlist & order tables
- Output: Admin panel, analytics, CSV export

**Coordination Strategy:**
1. **Agent 1 runs first** - Establishes design system and component patterns
2. **Agents 2-4 run in parallel** - Independent features, shared design system
3. **Agent 5 runs after Agents 2-4** - Tests integration of all features
4. **Agent 6 runs last** - Depends on Convex schema from Agents 2-4

**Estimated Timeline:** 8-12 hours total (vs 24-30 hours sequential)

---

### Factory.ai Droids (Autonomous Multi-Agent)

**Opportunity:** Deploy autonomous droids for repetitive, well-defined tasks.

**Droid 1: Playwright Test Suite Builder**
- Task: Create comprehensive E2E test suite
- Tests: Homepage, pricing, waitlist signup, checkout flow, mobile responsive
- Playwright config, page objects, test utilities
- Run tests on CI/CD pipeline
- **Autonomy:** 90% - Clear acceptance criteria, deterministic outputs

**Droid 2: Convex Schema & Query Generator**
- Task: Generate Convex tables, mutations, queries for all features
- Schema: beta_signups, waitlist, orders, faq
- Mutations: addToWaitlist, createOrder, updateFAQ
- Queries: getWaitlistCount, getUserOrders, getPublicFAQs
- **Autonomy:** 85% - Structured schema, clear CRUD patterns

**Droid 3: SEO & Metadata Generator**
- Task: Generate meta tags, Open Graph images, structured data for all pages
- Pages: Homepage, product, pricing, support, use cases, about, FAQ
- JSON-LD schemas: Organization, Product, Article, BreadcrumbList
- Sitemap.xml and robots.txt generation
- **Autonomy:** 95% - Templated, content-driven

**Droid 4: FAQ Content Structurer**
- Task: Create FAQ structure with categories and placeholder questions
- Categories: Product, Technical, Purchasing, Content
- 20-30 placeholder questions per category
- "Was this helpful?" voting system integration
- **Autonomy:** 80% - Content structure clear, awaits beta content

**Droid 5: Accessibility (a11y) Auditor & Fixer**
- Task: Run WCAG 2.1 AA audit, fix issues automatically
- Focus management, ARIA labels, keyboard navigation
- Color contrast validation, alt text for images
- Form label associations, error message clarity
- **Autonomy:** 70% - Some edge cases require human review

**Droid 6: Performance Optimizer**
- Task: Optimize images, bundle size, lazy loading
- Convert images to WebP, generate responsive sizes
- Code splitting, dynamic imports for heavy components
- Font optimization, preload critical resources
- **Autonomy:** 85% - Measurable targets (Lighthouse >90)

**Deployment Strategy:**
1. **Droids 1-3 deploy immediately** - No dependencies, high autonomy
2. **Droid 4 deploys after support wiki structure** - Needs base structure
3. **Droids 5-6 deploy after Agents 1-4 complete** - Needs working site

**Estimated Value:** 12-16 hours of engineering work automated

---

### Hybrid Approach (Recommended)

**Phase 1: Beta Website (Week 1-2)**
- **Cursor Agents 1-4 in parallel** - Build core features fast
- **Factory Droid 1** - Generate Playwright tests as features complete
- **Manual:** Beta content population, Scott's review

**Phase 2: Public Website (Week 3-6, Post-Beta)**
- **Cursor Agents 5-6 in parallel** - Testing + Admin dashboard
- **Factory Droids 2-6** - Schema, SEO, FAQ, a11y, performance
- **Manual:** Beta testimonials, video editing, final content

**Total Engineering Time:**
- Traditional sequential: ~40 hours
- Cursor parallel: ~20 hours
- Cursor + Factory hybrid: ~12 hours active work + ~15 hours autonomous droid work

**Risk Mitigation:**
- Always review droid outputs before merge
- Use Playwright tests from Droid 1 to validate droid changes
- Manual QA on critical paths (checkout, waitlist signup)

---

**Prepared By:** Mary (Business Analyst)  
**Date:** November 11, 2025  
**Purpose:** AI agent prompts for marketing website development  
**Updated:** Added Clerk Monetization, Playwright testing, parallel development strategies

