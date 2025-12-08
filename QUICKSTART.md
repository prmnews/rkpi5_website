# RKPi5 Marketing Website - Quick Start

---

## Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- Convex account ([dashboard.convex.dev](https://dashboard.convex.dev))
- Resend API key ([resend.com](https://resend.com))

---

## Setup

### 1. Clone & Install

```bash
cd /Users/set/Repo/rkpi5_marketing
pnpm install
```

### 2. Configure Environment

Create `.env.local` in the project root:

```bash
# Convex (get from dashboard.convex.dev)
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Resend (get from resend.com)
RESEND_API_KEY=re_...

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SHOW_WAITLIST=true
```

### 3. Start Development

Open **two terminals:**

**Terminal 1 — Next.js:**
```bash
pnpm dev
```

**Terminal 2 — Convex:**
```bash
npx convex dev
```

### 4. Open in Browser

- **Website:** http://localhost:3000
- **Convex Dashboard:** https://dashboard.convex.dev

---

## Project Structure

```
src/
├── app/                  # Next.js pages
│   ├── (public)/        # Public routes
│   └── page.tsx         # Homepage
├── components/          # React components
├── lib/                 # Utilities
└── providers/           # Convex provider

content/
└── support/             # MDX documentation

convex/
├── schema.ts            # Database schema
├── waitlist.ts          # Waitlist mutations
├── contacts.ts          # Contact mutations
└── emails.ts            # Email actions
```

---

## Common Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm lint         # Run ESLint
npx convex dev    # Start Convex backend
```

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `CONVEX_DEPLOYMENT` | Yes | Convex deployment name |
| `NEXT_PUBLIC_CONVEX_URL` | Yes | Convex project URL |
| `RESEND_API_KEY` | Yes | Resend API key for emails |
| `NEXT_PUBLIC_SITE_URL` | Yes | Site URL (localhost for dev) |
| `NEXT_PUBLIC_SHOW_WAITLIST` | No | Show waitlist CTAs (default: true) |

---

## Deployment

Deployed to **Vercel**. 

- Push to `main` → Preview deployment
- Tagged release (`v*.*.*`) → Production deployment

---

## Testing Email

```bash
# Test Resend connection
pnpm test:email
```

---

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Convex not connecting
```bash
rm -rf .convex
npx convex dev
```

### Email not sending
- Verify `RESEND_API_KEY` is set in `.env.local`
- Check Resend dashboard for delivery status

---

## Documentation

- [`docs/product-brief.md`](./docs/product-brief.md) — Product details
- [`REFACTOR-COMPLETE.md`](./REFACTOR-COMPLETE.md) — E-commerce removal
- [`EMAIL-INTEGRATION-COMPLETE.md`](./EMAIL-INTEGRATION-COMPLETE.md) — Email setup

---

## What This Site Does

- ✅ Product marketing pages
- ✅ DIY build configurations (pricing)
- ✅ Waitlist signup with email confirmation
- ✅ Contact form
- ✅ Support documentation (MDX)

## What This Site Does NOT Do

- ❌ User authentication
- ❌ Shopping cart / checkout
- ❌ Payment processing
- ❌ User accounts

---

**Last Updated:** December 2025
