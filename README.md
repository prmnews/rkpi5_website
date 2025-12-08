# RKPi5 Marketing Website

A waitlist-focused marketing site for RKPi5 — a Raspberry Pi 5-based captive WiFi portal preloaded with 26GB+ of Rapture Kit biblical content.

**Live Site:** [Coming Soon]  
**Status:** Waitlist open, pre-built units not yet available

## CRITICAL ASSUMPTIONS:

This marketing website uses the BMAD Method for AI-coding specs, structure, and epic/story/task documentation.

However, we abandoned making the RKPi5 commercial through a store. Therefore, you will discover artifacts discussing Cleark and Stripe integration along with supporting tables in Convex. 

For now, IGNORE those. The RKPi5 is a marketing, user-facing website that supports the RKPi5 product.

---

## What This Is

This is a **marketing and waitlist website** for the RKPi5 product. It is **not** an e-commerce store.

The site allows visitors to:
- Learn about RKPi5 features and use cases
- View DIY build configurations and estimated costs
- Join the waitlist for pre-built units
- Access support documentation
- Contact the team

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Database | Convex |
| Email | Resend |
| Styling | Tailwind CSS |
| Deployment | Vercel |

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, features, testimonials, CTA |
| Product | `/product` | Features, specs, content library |
| Pricing | `/pricing` | DIY build configurations & estimates |
| Support | `/support/*` | MDX documentation (FAQs, setup guides) |
| Use Cases | `/use-cases` | Pre/post-Rapture scenarios |
| About | `/about` | Mission, founder, contact info |
| Contact | `/contact` | Contact form |
| Waitlist | `/waitlist` | Waitlist signup |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

---

## Features

- **Waitlist System** — Convex-backed signup with Resend email confirmation
- **Contact Form** — Persisted to Convex with admin notification
- **Support Docs** — MDX-based documentation with sidebar navigation
- **Feature-Flagged CTAs** — Waitlist buttons can be hidden via `NEXT_PUBLIC_SHOW_WAITLIST=false`

---

## Development

### Prerequisites

- Node.js 20+
- pnpm
- Convex account
- Resend API key

### Quick Start

```bash
# Install dependencies
pnpm install

# Start Next.js dev server
pnpm dev

# In a separate terminal, start Convex
npx convex dev
```

### Environment Variables

Create `.env.local`:

```bash
# Convex
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Resend
RESEND_API_KEY=re_...

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SHOW_WAITLIST=true
```

---

## Deployment

Deployed to **Vercel**. Push to `main` triggers preview deployments. Tagged releases (`v*.*.*`) deploy to production.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (public)/          # Public pages (product, pricing, support, etc.)
│   ├── page.tsx           # Homepage
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── homepage/          # Hero, Features, Testimonials, CTA
│   ├── layout/            # Header, Footer, Mobile Menu
│   ├── docs/              # Support documentation components
│   ├── pricing/           # Pricing cards, FAQs
│   └── forms/             # Contact form
├── lib/                   # Utilities and constants
└── providers/             # Convex provider

content/
└── support/               # MDX support documentation

convex/
├── schema.ts              # Database schema (waitlist, contacts)
├── waitlist.ts            # Waitlist mutations
├── contacts.ts            # Contact form mutations
└── emails.ts              # Resend email actions
```

---

## Documentation

- [`docs/product-brief.md`](./docs/product-brief.md) — Product positioning, pricing tiers, target market
- [`REFACTOR-COMPLETE.md`](./REFACTOR-COMPLETE.md) — E-commerce removal details
- [`EMAIL-INTEGRATION-COMPLETE.md`](./EMAIL-INTEGRATION-COMPLETE.md) — Resend email setup

---

## What This Is NOT

This site does **not** include:
- User authentication or accounts
- Shopping cart or checkout
- Payment processing
- User/admin dashboards

The RKPi5 is currently a **DIY product** with free build scripts. Pre-built units will be available in the future via the waitlist.

---

**Creator:** Scott E. Townsend  
**Product:** RKPi5 + Rapture Kit Content Platform

