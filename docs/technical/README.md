# RKPi5 Marketing Website - Technical Documentation

**Project:** RKPi5 Marketing Website  
**Created:** November 11, 2025  
**Architect:** Winston (BMAD)  
**Owner:** Scott E. Townsend

---

## Quick Links

- **[Architecture Decisions](./architecture-decisions.md)** - Complete technical architecture
- **[Epic/Story/Task Breakdown](./epic-story-task-breakdown.md)** - Agile work breakdown
- **[Git Workflow & Branching Strategy](./git-workflow.md)** - Development workflow guide
- **[Quick Start Guide](../../QUICKSTART.md)** - Get started in 5 steps
- **[Product Brief](../product-brief.md)** - Product requirements and market positioning
- **[Website Structure](../website-structure.md)** - Original technical specifications

---

## Architecture Summary

### Tech Stack

**Frontend:**
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Shadcn/ui
- React Hook Form + Zod
- Framer Motion + Lucide React

**Backend:**
- Convex (database + serverless functions)
- Clerk (auth + billing)
- Stripe (via Clerk integration)
- Resend (email)

**Deployment:**
- Replit

---

## Project Structure

```
rkpi5-marketing/
├── src/
│   ├── app/              # Next.js pages (App Router)
│   ├── components/       # React components
│   ├── lib/              # Utilities and helpers
│   └── hooks/            # Custom React hooks
├── convex/               # Convex backend
├── content/              # MDX content (support wiki)
├── public/               # Static assets
└── docs/                 # Documentation
    └── technical/        # Architecture docs (you are here)
```

---

## Epic Overview

| # | Epic | Stories | Time | Priority | Branch |
|---|------|---------|------|----------|--------|
| 1 | Foundation & Project Init | 3 | 6-8h | P0 | `epic/foundation` |
| 2 | Design System | 2 | 4-6h | P0 | `epic/design-system` |
| 3 | Layout & Navigation | 4 | 8-10h | P0 | `epic/layout` |
| 4 | Homepage | 6 | 12-16h | P1 | `epic/homepage` |
| 5 | Product Pages | 5 | 10-14h | P1 | `epic/product` |
| 6 | Pricing System | 4 | 8-12h | P1 | `epic/pricing` |
| 7 | Support Wiki | 3 | 6-8h | P2 | `epic/support` |
| 8 | Use Cases | 2 | 4-6h | P2 | `epic/use-cases` |
| 9 | About & Contact | 3 | 6-8h | P2 | `epic/about` |
| 10 | Authentication | 4 | 8-12h | P1 | `epic/auth` |
| 11 | E-commerce | 5 | 12-16h | P1 | `epic/ecommerce` |
| 12 | User Dashboard | 4 | 8-10h | P2 | `epic/dashboard` |
| 13 | Admin Dashboard | 5 | 10-14h | P2 | `epic/admin` |
| 14 | Convex Backend | 6 | 12-16h | P0 | `epic/backend` |

**Total:** 14 EPICs, 56 Stories, **116-162 hours**

---

## Multi-Agent UI Prototyping

**Stories eligible for parallel agent development:**

1. **Hero Section** (EPIC 4) - 4 variants
2. **Feature Cards** (EPIC 4) - 3 variants
3. **Header Navigation** (EPIC 3) - 3 variants
4. **Mobile Menu** (EPIC 3) - 2 variants
5. **Pricing Cards** (EPIC 6) - 3 variants
6. **Testimonials** (EPIC 4) - 2 variants
7. **CTA Section** (EPIC 4) - 2 variants

**Total:** 8 stories, 19 prototype variants

**Process:**
1. Create `prototype/[component]-v[n]` branches from epic branch
2. Run parallel agents in Cursor 2.0
3. Review and select best variant
4. Merge winner to `final/[component]-selected`

---

## Development Workflow

### Git Branching Strategy

**Branch Hierarchy:**
- `main` - Production code
- `epic/{number}-{name}` - EPIC grouping branches (e.g., `epic/1-foundation`)
- `story/{epic}.{story}-{name}` - Story branches (e.g., `story/1.1-initialize-nextjs`)
- `prototype/{component}-v{n}` - Multi-agent UI prototypes

**Workflow:**
1. Create story branch from epic
2. Complete all tasks in story
3. Test thoroughly
4. Merge story to epic branch
5. When epic complete, merge to main

**See:** [Git Workflow Guide](./git-workflow.md) for detailed instructions

### Phase 1: Foundation (Week 1)
```bash
git checkout epic/1-foundation
# Create story branches: story/1.1-*, story/1.2-*, story/1.3-*
# Complete EPICs 1, 2, 14 (Stories 14.1-14.2), 3
```

### Phase 2: Core Pages (Week 2-3)
```bash
git checkout epic/4-homepage
# Create story branches: story/4.1-*, story/4.2-*, etc.
# Complete EPICs 4, 5, 6, 10 (Stories 10.1-10.3)
```

### Phase 3: Content & E-commerce (Week 3-4)
```bash
# Complete EPICs 7, 8, 9, 14 (Stories 14.3-14.6), 11
```

### Phase 4: Dashboards (Week 4-5)
```bash
# Complete EPICs 12, 13, 10 (Story 10.4)
```

---

## Getting Started

### Automated Setup (Recommended)

```bash
# Clone repository
git clone https://github.com/prmnews/rkpi5_website.git
cd rkpi5_website

# Run setup script
chmod +x setup-project.sh
./setup-project.sh

# Configure environment variables
cp .env.local.example .env.local
# Edit .env.local with your API keys

# Start development (2 terminals)
npm run dev          # Terminal 1
npx convex dev       # Terminal 2
```

**See:** [QUICKSTART.md](../../QUICKSTART.md) for detailed setup guide

### Manual Setup (Advanced)

If you prefer to set up manually:

```bash
# 1. Initialize Next.js
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --eslint

# 2. Install dependencies
npm install convex @clerk/nextjs resend react-hook-form zod @hookform/resolvers framer-motion lucide-react @next/mdx

# 3. Install Shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input form toast dialog dropdown-menu tabs accordion badge

# 4. Initialize Convex
npx convex dev

# 5. Configure environment
cp .env.local.example .env.local
```

---

## Key Decisions

### ADR-001: Convex for Backend
**Rationale:** TypeScript-native, real-time, serverless, excellent DX  
**Trade-off:** Vendor lock-in, but acceptable for v1

### ADR-002: Stripe via Clerk Billing
**Rationale:** Unified auth + payment, simpler integration  
**Trade-off:** Less Stripe control, but better UX

### ADR-003: Multi-Agent for UI Only
**Rationale:** Backend too complex for parallel prototyping  
**Trade-off:** Limits multi-agent scope, but reduces risk

### ADR-004: Public Folder for Assets (v1)
**Rationale:** Low volume, simple, no external deps  
**Trade-off:** Not scalable, but easy to migrate later

---

## Next Steps

1. ✅ **Architecture Complete** - You're reading it
2. ⏭️ **Story 1.1:** Initialize Next.js project
3. ⏭️ **Story 1.2:** Install Shadcn/ui
4. ⏭️ **Story 1.3:** Configure Convex, Clerk, Resend
5. ⏭️ **Epic 2:** Design System

**Estimated time to first deployment:** 4-5 weeks

---

## Support

**For architecture questions:** Reference [architecture-decisions.md](./architecture-decisions.md)  
**For story details:** Reference [epic-story-task-breakdown.md](./epic-story-task-breakdown.md)  
**For product context:** Reference [product-brief.md](../product-brief.md)

---

**Status:** ✅ Architecture Complete  
**Ready for Development:** ✅ Yes  
**Next Workflow:** Sprint Planning or Story Development

---

_Created by Winston (BMAD Architecture Agent)_  
_Date: November 11, 2025_

