# RKPi5 Marketing Website - Documentation

**Purpose:** Marketing website for RKPi5 + Rapture Kit Content Platform  
**Status:** Development complete, waitlist active  
**Product:** Raspberry Pi 5 captive WiFi portal with 26GB+ biblical content

---

## Current State

This is a **waitlist-only marketing site**. There is no e-commerce, checkout, or user authentication.

**Features:**
- Product information and feature showcase
- DIY build configurations with cost estimates
- Support documentation (MDX-based)
- Waitlist signup with email confirmation
- Contact form with admin notification

---

## Website Pages

| Page | Description |
|------|-------------|
| Homepage | Hero, features, testimonials, CTA |
| Product | Features, specs, content library details |
| Pricing | DIY build configurations & estimates (4 tiers) |
| Support | MDX documentation (FAQs, setup guides, troubleshooting) |
| Use Cases | Pre/post-Rapture scenarios |
| About | Mission, founder info |
| Contact | Contact form |
| Waitlist | Waitlist signup page |
| Privacy/Terms | Legal pages |

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Convex (waitlist + contacts) |
| Email | Resend |
| Deployment | Vercel |

---

## Build Configurations (Pricing Tiers)

The pricing page shows **DIY build configurations** with estimated hardware costs:

| Tier | Hardware Cost | Description |
|------|---------------|-------------|
| Hobbyist | FREE | Scripts only, requires existing Pi5 |
| Bare Bones | ~$80-120 | 2× microSD cards, use with your Pi5 |
| Solo | ~$280-320 | Complete kit with Pi5, battery, case |
| Field | ~$450-550 | Self-contained with display, speakers, solar |

**Note:** All software/scripts are FREE. Prices are estimated DIY component costs.

---

## Files in This Directory

### Planning Documents

1. **product-brief.md** — Product positioning, pricing strategy, target personas, marketing messages

2. **technical/** — Technical documentation
   - `architecture-decisions.md` — Original architecture planning
   - `epic-story-task-breakdown.md` — Development task breakdown
   - `git-workflow.md` — Branching strategy
   - `deployment-vercel.md` — Vercel deployment guide

### Status Documents (Root)

- `REFACTOR-COMPLETE.md` — Details of e-commerce removal
- `EMAIL-INTEGRATION-COMPLETE.md` — Resend email integration details
- `QUICKSTART.md` — Quick start guide for development

---

## Development

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# In separate terminal
npx convex dev
```

### Environment Variables

```bash
# Convex
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=...

# Resend
RESEND_API_KEY=re_...

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SHOW_WAITLIST=true
```

---

## Database Schema

**Tables (Convex):**

| Table | Purpose |
|-------|---------|
| `waitlist` | Waitlist signups (email, name, use case, tier) |
| `contacts` | Contact form submissions |

---

## Feature Flags

| Flag | Purpose |
|------|---------|
| `NEXT_PUBLIC_SHOW_WAITLIST` | Show/hide waitlist CTAs (set to `false` to expire waitlist) |

---

## What's NOT Included

This site intentionally excludes:
- User authentication (no Clerk)
- Payment processing (no Stripe)
- Shopping cart or checkout
- User accounts or dashboards
- Admin dashboard

The RKPi5 is currently a **DIY product** with free build scripts. Pre-built units will be available in the future.

---

**Product Creator:** Scott E. Townsend  
**Last Updated:** December 2025
