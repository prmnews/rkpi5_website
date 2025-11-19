# RKPi5 Marketing Website - Architecture Document

**Project:** RKPi5 Marketing Website  
**Date:** November 11, 2025  
**Architect:** Winston (BMAD Architecture Agent)  
**Project Owner:** Scott E. Townsend

---

## Executive Summary

This architecture defines a modern, full-spectrum marketing website built with Next.js 14, Convex backend, Clerk authentication with integrated billing, and deployed to Vercel. The system supports waitlist-gated early adopter onboarding, e-commerce checkout for 4 product SKUs, and a comprehensive support wiki. The architecture is designed to support multi-agent UI prototyping workflows while maintaining consistency across implementations.

---

## Project Initialization

**First Implementation Story:** Initialize Next.js project using official starter

```bash
npx create-next-app@latest rkpi5-marketing \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --eslint
```

**What this provides:**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS pre-configured
- ESLint for code quality
- `src/` directory structure
- Path aliases (`@/components`, `@/lib`, etc.)

---

## Decision Summary

| Category | Decision | Version | Affects Epics | Rationale | Provided By |
|----------|----------|---------|---------------|-----------|-------------|
| **Framework** | Next.js | 14.x (App Router) | All | Modern React framework, SSR/SSG, excellent DX | Starter |
| **Language** | TypeScript | 5.x | All | Type safety, better DX, scales well | Starter |
| **Styling** | Tailwind CSS | 3.4.x | All UI | Utility-first, rapid development, consistent design | Starter |
| **UI Components** | Shadcn/ui | latest | All UI | High-quality, customizable, accessible components | Manual Install |
| **Database** | Convex | 1.8+ | Backend, Data | Real-time, TypeScript-native, serverless | Manual Install |
| **Authentication** | Clerk | 5.x+ | Auth, User Mgmt | Auth + Billing integrated, modern UX | Manual Install |
| **Payments** | Stripe (via Clerk) | latest | E-commerce | Industry standard, integrated with Clerk Billing | Clerk Integration |
| **Email** | Resend | latest | Notifications | Modern API, good deliverability, developer-friendly | Manual Install |
| **Deployment** | Vercel | latest | Infrastructure | Next.js-optimized hosting with tagged releases | Platform |
| **Form Library** | React Hook Form | 7.49+ | All Forms | Performant, great DX, Zod integration | Manual Install |
| **Validation** | Zod | 3.22+ | All Forms, API | TypeScript-first schema validation | Manual Install |
| **Animations** | Framer Motion | 10.18+ | UI Polish | Smooth animations, spring physics, declarative | Manual Install |
| **Icons** | Lucide React | 0.300+ | All UI | Clean, consistent, tree-shakeable icon library | Manual Install |
| **File Storage** | Public folder | - | Static Assets | Simple, appropriate for v1 volume, no external deps | Built-in |
| **API Pattern** | Convex Mutations/Queries | - | All Data | Type-safe, real-time, auto-generated client | Convex |
| **Error Handling** | Toast + Console logging | - | All Features | User-friendly feedback, simple dev logging | Decision |
| **MDX Support** | @next/mdx | latest | Support Wiki | MDX content for documentation pages | Manual Install |

---

## Project Structure

```
rkpi5-marketing/
├── src/
│   ├── app/                           # Next.js App Router pages
│   │   ├── (public)/                  # Public routes group
│   │   │   ├── page.tsx               # Homepage (/)
│   │   │   ├── product/
│   │   │   │   └── page.tsx           # Product overview (/product)
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx           # Pricing page (/pricing)
│   │   │   ├── support/
│   │   │   │   ├── page.tsx           # Support wiki index
│   │   │   │   └── [...slug]/
│   │   │   │       └── page.tsx       # Dynamic support articles
│   │   │   ├── use-cases/
│   │   │   │   └── page.tsx           # Use cases (/use-cases)
│   │   │   └── about/
│   │   │       └── page.tsx           # About page (/about)
│   │   ├── (auth)/                    # Protected routes group
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx           # User dashboard
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx           # Stripe checkout flow
│   │   │   └── admin/
│   │   │       ├── page.tsx           # Admin dashboard
│   │   │       ├── waitlist/
│   │   │       ├── orders/
│   │   │       └── analytics/
│   │   ├── api/                       # API routes
│   │   │   ├── webhooks/
│   │   │   │   ├── clerk/
│   │   │   │   │   └── route.ts       # Clerk webhooks
│   │   │   │   └── stripe/
│   │   │   │       └── route.ts       # Stripe webhooks (via Clerk)
│   │   │   └── convex/
│   │   │       └── route.ts           # Convex webhook handler
│   │   ├── layout.tsx                 # Root layout
│   │   └── globals.css                # Global styles + Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Site header with nav
│   │   │   ├── Footer.tsx             # Site footer
│   │   │   ├── Navigation.tsx         # Desktop navigation
│   │   │   ├── MobileMenu.tsx         # Mobile hamburger menu
│   │   │   └── Container.tsx          # Max-width wrapper
│   │   ├── marketing/
│   │   │   ├── Hero.tsx               # Homepage hero section
│   │   │   ├── FeatureCard.tsx        # Feature showcase cards
│   │   │   ├── PricingCard.tsx        # Pricing tier cards
│   │   │   ├── Testimonial.tsx        # Customer testimonials
│   │   │   ├── ComparisonTable.tsx    # Feature comparison
│   │   │   ├── CTASection.tsx         # Call-to-action sections
│   │   │   ├── StatsBar.tsx           # Metrics/numbers showcase
│   │   │   └── VideoPlayer.tsx        # Demo video embed
│   │   ├── interactive/
│   │   │   ├── WaitlistForm.tsx       # Email capture form
│   │   │   ├── ContactForm.tsx        # Support/sales contact
│   │   │   └── SearchBar.tsx          # Documentation search
│   │   └── ui/                        # Shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── form.tsx
│   │       ├── toast.tsx
│   │       └── ... (other shadcn components)
│   ├── lib/
│   │   ├── utils.ts                   # Utility functions
│   │   ├── cn.ts                      # Class name helper (shadcn)
│   │   └── constants.ts               # App constants
│   └── hooks/
│       ├── useConvex.ts               # Convex data hooks
│       └── useToast.ts                # Toast notification hook
├── convex/
│   ├── schema.ts                      # Convex database schema
│   ├── waitlist.ts                    # Waitlist mutations/queries
│   ├── contacts.ts                    # Contact form handlers
│   ├── orders.ts                      # Order management
│   └── users.ts                       # User data sync
├── public/
│   ├── images/
│   │   ├── products/                  # Product photography (placeholders for v1)
│   │   └── og/                        # Open Graph images
│   ├── videos/                        # Local video assets (if any)
│   └── favicon.ico
├── content/
│   └── support/                       # MDX support wiki content
│       ├── getting-started/
│       ├── troubleshooting/
│       └── faqs/
├── .env.local                         # Environment variables
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind configuration
├── components.json                    # Shadcn/ui configuration
└── package.json
```

---

## Epic to Architecture Mapping

| Epic | Primary Modules/Directories | Database Tables | APIs/Routes |
|------|----------------------------|-----------------|-------------|
| **EPIC 1: Foundation & Project Init** | `/`, `tailwind.config.ts`, `components.json` | - | - |
| **EPIC 2: Design System** | `components/ui/*`, `lib/utils.ts` | - | - |
| **EPIC 3: Layout & Navigation** | `components/layout/*`, `app/layout.tsx` | - | - |
| **EPIC 4: Homepage** | `app/(public)/page.tsx`, `components/marketing/Hero.tsx` | `waitlist` | - |
| **EPIC 5: Product Pages** | `app/(public)/product/*`, `components/marketing/ComparisonTable.tsx` | `contacts` | - |
| **EPIC 6: Pricing System** | `app/(public)/pricing/*`, `components/marketing/PricingCard.tsx` | - | - |
| **EPIC 7: Support Wiki** | `app/(public)/support/*`, `content/support/*` | - | - |
| **EPIC 8: Use Cases** | `app/(public)/use-cases/*` | - | - |
| **EPIC 9: About & Contact** | `app/(public)/about/*`, `components/interactive/ContactForm.tsx` | `contacts` | - |
| **EPIC 10: Authentication** | `app/(auth)/*`, Clerk middleware | `users` (synced) | `/api/webhooks/clerk` |
| **EPIC 11: E-commerce** | `app/(auth)/checkout/*` | `orders` | `/api/webhooks/stripe` |
| **EPIC 12: User Dashboard** | `app/(auth)/dashboard/*` | `orders`, `users` | - |
| **EPIC 13: Admin Dashboard** | `app/(auth)/admin/*` | `waitlist`, `orders`, `contacts` | - |
| **EPIC 14: Convex Backend** | `convex/*` | All tables | Convex mutations/queries |

---

## Technology Stack Details

### Core Stack

**Frontend:**
- Next.js 14.x (App Router, React Server Components)
- React 18.2+
- TypeScript 5.x

**Styling & UI:**
- Tailwind CSS 3.4.x
- Shadcn/ui (Radix UI primitives)
- Framer Motion 10.18+ (animations)
- Lucide React 0.300+ (icons)

**Backend & Data:**
- Convex 1.8+ (database, real-time, serverless functions)
- Clerk 5.x+ (authentication + billing)
- Stripe (via Clerk Billing integration)

**Forms & Validation:**
- React Hook Form 7.49+
- Zod 3.22+

**Email:**
- Resend (API key provided by Scott)

**Deployment:**
- Vercel (Next.js-optimized platform with tagged release deployments)

### Integration Points

**Clerk ↔ Convex:**
- User authentication state synced via Clerk webhooks
- User metadata stored in Convex `users` table
- Auth token passed to Convex client for RLS

**Clerk ↔ Stripe:**
- Stripe integrated via Clerk Billing feature
- Subscription management handled by Clerk
- Payment intents created through Clerk API
- Webhooks received at `/api/webhooks/clerk` (includes Stripe events)

**Next.js ↔ Convex:**
- Convex React hooks for data fetching
- Real-time subscriptions for live updates
- Mutations called from client components
- Server-side queries in RSC (when needed)

**Resend ↔ Convex:**
- Email triggered from Convex mutations
- Waitlist confirmation emails
- Order confirmation emails
- Contact form notifications

---

## Data Architecture

### Convex Schema

```typescript
// convex/schema.ts

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Waitlist signups
  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    phone: v.optional(v.string()),
    useCase: v.optional(v.string()),
    tier: v.optional(v.string()), // bare-bones, solo, field
    source: v.optional(v.string()), // homepage, pricing, product
    status: v.string(), // pending, contacted, converted
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  // Contact form submissions
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    type: v.string(), // demo, support, sales, general
    status: v.string(), // new, responded, closed
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_created", ["createdAt"]),

  // Orders (post-checkout)
  orders: defineTable({
    userId: v.string(), // Clerk user ID
    clerkOrderId: v.optional(v.string()), // Clerk billing order ID
    tier: v.string(), // bare-bones, solo, field
    quantity: v.number(),
    amount: v.number(), // in cents
    status: v.string(), // pending, paid, processing, shipped, delivered
    shippingAddress: v.object({
      name: v.string(),
      line1: v.string(),
      line2: v.optional(v.string()),
      city: v.string(),
      state: v.string(),
      postal_code: v.string(),
      country: v.string(),
    }),
    createdAt: v.number(),
    paidAt: v.optional(v.number()),
    shippedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_created", ["createdAt"]),

  // Users (synced from Clerk)
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    role: v.string(), // user, admin
    subscriptionStatus: v.optional(v.string()), // active, cancelled, past_due
    createdAt: v.number(),
    lastSeenAt: v.number(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"]),
});
```

---

## API Contracts

### Convex Mutations (Client → Server)

**Waitlist:**
```typescript
// Create waitlist entry
api.waitlist.create({
  email: string,
  name?: string,
  phone?: string,
  useCase?: string,
  tier?: "bare-bones" | "solo" | "field",
  source?: string
})
→ Returns: waitlistId (string)
```

**Contacts:**
```typescript
// Create contact submission
api.contacts.create({
  name: string,
  email: string,
  company?: string,
  phone?: string,
  message: string,
  type: "demo" | "support" | "sales" | "general"
})
→ Returns: contactId (string)
```

**Orders:**
```typescript
// Create order after successful payment
api.orders.create({
  userId: string,
  clerkOrderId?: string,
  tier: "bare-bones" | "solo" | "field",
  quantity: number,
  amount: number,
  shippingAddress: ShippingAddress
})
→ Returns: orderId (string)
```

### Convex Queries (Client ← Server)

**Waitlist:**
```typescript
// Get all waitlist entries (admin only)
api.waitlist.list({ status?: string, limit?: number })
→ Returns: WaitlistEntry[]

// Get waitlist count
api.waitlist.count()
→ Returns: number
```

**Orders:**
```typescript
// Get user's orders
api.orders.getUserOrders({ userId: string })
→ Returns: Order[]

// Get all orders (admin only)
api.orders.list({ status?: string, limit?: number })
→ Returns: Order[]
```

---

## Security Architecture

### Authentication Flow

1. **Public Routes:** No authentication required
   - `/`, `/product`, `/pricing`, `/support`, `/use-cases`, `/about`

2. **Protected Routes:** Clerk authentication required
   - `/dashboard`, `/checkout`, `/admin/*`

3. **Admin Routes:** Role-based access control
   - `/admin/*` requires `role: "admin"` in Clerk metadata

### Clerk Configuration

```typescript
// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/product", "/pricing", "/support(.*)", "/use-cases", "/about", "/api/webhooks(.*)"],
  ignoredRoutes: ["/api/webhooks/clerk", "/api/webhooks/stripe"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### Convex Row-Level Security

```typescript
// convex/orders.ts
export const getUserOrders = query({
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthenticated");
    
    // Users can only see their own orders
    return await ctx.db
      .query("orders")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject))
      .collect();
  },
});
```

### Data Protection

- **Environment Variables:** Stored securely in Vercel environment variables (separate for production/preview)
- **API Keys:** Never exposed to client (server-side only)
- **User Data:** Encrypted at rest (Convex default)
- **HTTPS:** All traffic encrypted in transit
- **CORS:** Restricted to app domain only

---

## Implementation Patterns

### Frontend Patterns

**1. Form Submission Pattern:**
```typescript
// All forms follow this pattern
const onSubmit = async (data: FormData) => {
  try {
    const result = await convex.mutation(api.namespace.create, data);
    toast({ title: "Success!", description: "Action completed successfully" });
    return result;
  } catch (error) {
    console.error("[ComponentName]", error);
    toast({ 
      title: "Error", 
      description: error.message || "Something went wrong",
      variant: "destructive" 
    });
  }
};
```

**2. Data Fetching Pattern:**
```typescript
// Use Convex React hooks
const data = useQuery(api.namespace.list, { filter: "value" });

if (data === undefined) return <LoadingSpinner />;
if (data === null) return <ErrorState />;

return <DataDisplay data={data} />;
```

**3. Component Organization:**
- **Server Components (RSC):** Layout, static pages, SEO-heavy pages
- **Client Components:** Interactive forms, real-time data, animations
- **Shared Components:** UI primitives in `components/ui/*`

### Backend Patterns (Convex)

**1. Mutation Pattern:**
```typescript
export const create = mutation({
  args: { /* Zod-style validation */ },
  handler: async (ctx, args) => {
    // 1. Validate input
    if (!args.email) throw new Error("Email is required");
    
    // 2. Check auth if needed
    const identity = await ctx.auth.getUserIdentity();
    
    // 3. Perform operation
    const id = await ctx.db.insert("tableName", {
      ...args,
      createdAt: Date.now(),
    });
    
    // 4. Return result
    return id;
  },
});
```

**2. Query Pattern:**
```typescript
export const list = query({
  args: { /* optional filters */ },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tableName")
      .withIndex("by_created", (q) => q.eq("status", args.status))
      .order("desc")
      .take(args.limit || 50);
  },
});
```

---

## Consistency Rules

### Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `WaitlistForm.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `PascalCase.types.ts` (e.g., `Waitlist.types.ts`)

**Code:**
- React components: `PascalCase`
- Functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Types/Interfaces: `PascalCase`
- Convex tables: `camelCase` (e.g., `waitlist`, `orders`)

**Routes:**
- All lowercase with hyphens: `/use-cases`, `/support/getting-started`

### Code Organization

**Component Structure:**
```typescript
// 1. Imports (external first, internal second)
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
export function MyComponent({ title }: Props) {
  // 3a. Hooks
  const [state, setState] = useState();
  
  // 3b. Functions
  const handleClick = () => {};
  
  // 3c. Render
  return <div>{title}</div>;
}
```

### Error Handling

**User-Facing Errors:**
- Always use Shadcn toast for feedback
- Provide actionable error messages
- Never expose technical details to users

**Developer Errors:**
- Log to console with component context: `console.error("[ComponentName]", error)`
- Future: Add Sentry integration for production error tracking

### Styling

**Tailwind Conventions:**
- Use `cn()` utility for conditional classes
- Extract repeated patterns to components
- Follow mobile-first approach
- Use Tailwind config for custom colors/spacing

---

## Performance Considerations

### Optimization Strategies

**1. Image Optimization:**
- Use Next.js `<Image>` component for all images
- Serve images from `/public/images/`
- Generate responsive sizes automatically
- Lazy load below-the-fold images

**2. Code Splitting:**
- Automatic route-based splitting (Next.js)
- Dynamic imports for heavy components
- Lazy load Framer Motion animations

**3. Caching:**
- Static pages cached at CDN edge (Vercel Global CDN)
- Convex queries cached on client
- React Server Components reduce client JS

**4. Bundle Size:**
- Tree-shake Lucide icons (import individually)
- Use Tailwind JIT mode
- Minimize client-side JavaScript

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | <1.5s | Lighthouse |
| Time to Interactive | <3s | Lighthouse |
| Lighthouse Score | >90 | Lighthouse |
| Bundle Size (initial) | <200KB | Next.js build |
| API Response Time | <200ms | Convex dashboard |

---

## Deployment Architecture

### Vercel Configuration

```json
// vercel.json
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

### Environment Variables

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Convex
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=https://...

# Resend
RESEND_API_KEY=re_...

# Site
NEXT_PUBLIC_SITE_URL=https://rkpi5-marketing.vercel.app
```

### Deployment Flow

1. **Development:** `pnpm dev` locally
2. **Build:** `pnpm build` (tested in CI/CD)
3. **Deploy:** Vercel automatic deployment on tagged release
4. **Monitoring:** Convex dashboard + Vercel Analytics + GitHub Actions logs

---

## Development Environment

### Prerequisites

- Node.js 20.x
- npm or pnpm
- Clerk account with billing enabled
- Convex account (free tier sufficient for v1)
- Resend account (API key from Scott)
- Vercel account

### Setup Commands

```bash
# 1. Initialize project
npx create-next-app@latest rkpi5-marketing \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --eslint

cd rkpi5-marketing

# 2. Install Shadcn/ui
npx shadcn-ui@latest init

# 3. Install dependencies
npm install convex @clerk/nextjs resend react-hook-form zod @hookform/resolvers framer-motion lucide-react

# 4. Install Shadcn components
npx shadcn-ui@latest add button card input form toast dialog dropdown-menu tabs accordion badge

# 5. Initialize Convex
npx convex dev

# 6. Set up environment variables
# Create .env.local with keys above

# 7. Run development server
npm run dev
```

---

## Multi-Agent UI Prototyping Strategy

### Scope

Multi-agent parallel development is **ONLY** for UI component prototyping:

**Eligible for Multi-Agent:**
- Hero section variations
- Pricing card layouts
- Feature card designs
- Testimonial component styles
- Navigation/mobile menu UX variations
- Call-to-action section layouts

**NOT Eligible (Single-Agent or Manual):**
- Convex schema & mutations
- Clerk integration logic
- Form validation logic
- API route handlers
- Admin dashboard functionality
- Payment flows

### Git Branching Strategy for Multi-Agent Prototypes

```
main
├── epic/homepage
│   ├── prototype/hero-v1 (Agent 1)
│   ├── prototype/hero-v2 (Agent 2)
│   ├── prototype/hero-v3 (Agent 3)
│   └── final/hero-selected (Merged winner)
├── epic/pricing
│   ├── prototype/pricing-cards-v1
│   ├── prototype/pricing-cards-v2
│   └── final/pricing-cards-selected
```

**Workflow:**
1. Create epic branch: `git checkout -b epic/homepage`
2. Create prototype branches from epic: `git checkout -b prototype/hero-v1`
3. Run parallel agents in Cursor 2.0 (each in separate branch)
4. Review outputs, pick best
5. Merge winner to `final/` branch
6. Merge `final/` to epic branch
7. Epic branch merges to main when complete

### Component Isolation for Prototypes

**Prototype components must be self-contained:**
```typescript
// ✅ Good: Self-contained, no external dependencies
export function HeroPrototype() {
  return (
    <section className="...">
      {/* All markup inline */}
    </section>
  );
}

// ❌ Bad: Depends on external state/context
export function HeroPrototype() {
  const user = useUser(); // External dependency
  const data = useQuery(...); // External dependency
}
```

---

## Architecture Decision Records (ADRs)

### ADR-001: Use Convex for Backend

**Context:** Need real-time database with TypeScript-first API  
**Decision:** Use Convex instead of traditional REST API + database  
**Rationale:**
- TypeScript-native (auto-generated types)
- Real-time subscriptions built-in
- Serverless (no infrastructure management)
- Excellent DX for React integration

**Consequences:**
- ✅ Faster development
- ✅ Type-safe data layer
- ❌ Vendor lock-in to Convex
- ❌ Limited to Convex query capabilities

---

### ADR-002: Integrate Stripe via Clerk Billing

**Context:** Need payment processing for e-commerce SKUs  
**Decision:** Use Clerk Billing instead of standalone Stripe integration  
**Rationale:**
- Unified auth + payment experience
- Clerk handles webhook complexity
- User entitlements managed automatically
- Subscription billing built-in

**Consequences:**
- ✅ Simpler integration
- ✅ Better UX (single sign-on + payment)
- ❌ Less control over Stripe features
- ❌ Dependent on Clerk's Stripe integration

---

### ADR-003: Multi-Agent Prototyping Limited to UI Only

**Context:** Want to leverage Cursor 2.0 multi-agent for rapid iteration  
**Decision:** Restrict multi-agent to UI component prototyping only  
**Rationale:**
- Backend logic too complex for parallel prototyping
- Integration code requires consistency
- UI variants can be safely compared side-by-side
- Reduces risk of conflicting implementations

**Consequences:**
- ✅ Safe exploration of UI variations
- ✅ Clear boundaries for agent scope
- ❌ Backend still requires traditional development

---

### ADR-004: Store Static Assets in Public Folder (v1)

**Context:** Need storage for product images, OG images, etc.  
**Decision:** Use Next.js public folder instead of external CDN  
**Rationale:**
- V1 has low volume (4 SKUs, limited images)
- Simplifies deployment (no external dependencies)
- Easy to migrate to CDN later if needed
- Product photos will be placeholders initially

**Consequences:**
- ✅ Simple setup
- ✅ No external service needed
- ❌ Not scalable for high-volume media
- ❌ No image transformation (resize, optimize)

---

## Next Steps

1. **Initialize Project:** Run project initialization commands
2. **Set Up Integrations:** Configure Clerk, Convex, Resend
3. **Build Foundation:** EPIC 1 (Design System + Layout)
4. **Develop Pages:** EPICs 4-9 (Public pages)
5. **Implement Auth:** EPIC 10 (Clerk integration)
6. **Build E-commerce:** EPIC 11 (Checkout flow)
7. **Admin Tools:** EPIC 13 (Admin dashboard)

---

**Architecture Status:** ✅ Complete  
**Ready for Epic/Story Breakdown:** ✅ Yes  
**Next Workflow:** Sprint Planning or Story Development

---

_Generated by BMAD Decision Architecture Workflow v1.3.2_  
_Architect: Winston_  
_Date: November 11, 2025_  
_For: Scott E. Townsend_

